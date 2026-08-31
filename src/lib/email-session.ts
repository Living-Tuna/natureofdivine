'use server';

import { cookies } from "next/headers";
import { randomInt, createHash, timingSafeEqual } from "node:crypto";
import { collection, doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { sendEmail } from "@/lib/mail";
import {
  SESSION_COOKIE,
  sessionCookieOptions,
  createSessionToken,
  getSessionUser,
} from "@/lib/session";
import type { SessionUser } from "./definitions";

const FIREBASE_API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

function otpRef(email: string) {
  const key = createHash("sha256").update(email).digest("hex");
  return doc(collection(db, "otp"), key);
}

function codeHash(code: string) {
  return createHash("sha256")
    .update(`${process.env.AUTH_SECRET || ""}:${code}`)
    .digest("hex");
}

export async function createEmailSession(idToken: string): Promise<SessionUser> {
  if (!FIREBASE_API_KEY) {
    throw new Error("Firebase is not configured.");
  }
  const res = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${FIREBASE_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
    },
  );
  const data = await res.json();
  const account = data?.users?.[0] as any;
  if (!res.ok || !account) {
    throw new Error(data?.error?.message || "Could not verify your session.");
  }
  const user: SessionUser = {
    uid: String(account.localId),
    email: account.email ?? null,
    displayName: account.displayName ?? null,
    photoURL: account.photoUrl ?? null,
    provider: "password",
  };
  (await cookies()).set(SESSION_COOKIE, createSessionToken(user)!, sessionCookieOptions);
  return user;
}

export async function sendOtpEmail(
  email: string,
): Promise<{ ok: boolean; message: string }> {
  const clean = String(email || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean)) {
    return { ok: false, message: "Enter a valid email address." };
  }
  const ref = otpRef(clean);
  const existing = await getDoc(ref);
  const lastSent = Number(existing.data()?.lastSentAt || 0);
  if (Date.now() - lastSent < 60000) {
    return { ok: false, message: "Please wait a moment before requesting another code." };
  }
  const code = randomInt(100000, 1000000).toString();
  const now = Date.now();
  await setDoc(ref, {
    codeHash: codeHash(code),
    expiresAt: now + 10 * 60 * 1000,
    lastSentAt: now,
  });
  const result = await sendEmail({
    to: clean,
    subject: "Your sign-in code — Nature of the Divine",
    text: `Your sign-in code is ${code}.\nIt expires in 10 minutes. If you didn't request this, ignore this email.`,
  });
  if (!result.ok) {
    await deleteDoc(ref).catch(() => undefined);
    return result;
  }
  return { ok: true, message: "Code sent. Check your inbox." };
}

export async function verifyOtpEmail(
  email: string,
  code: string,
): Promise<{ ok: boolean; message?: string; user?: SessionUser }> {
  const clean = String(email || "").trim().toLowerCase();
  const value = String(code || "").trim();
  if (!clean || !/^\d{6}$/.test(value)) {
    return { ok: false, message: "Enter the 6-digit code." };
  }
  const ref = otpRef(clean);
  const record = (await getDoc(ref)).data();
  if (!record) {
    return { ok: false, message: "Code not found. Request a new one." };
  }
  if (Number(record.expiresAt) < Date.now()) {
    await deleteDoc(ref).catch(() => undefined);
    return { ok: false, message: "Code expired. Request a new one." };
  }
  let valid = false;
  try {
    const expected = Buffer.from(String(record.codeHash), "hex");
    const actual = Buffer.from(codeHash(value), "hex");
    valid = expected.length === actual.length && timingSafeEqual(expected, actual);
  } catch {
    valid = false;
  }
  if (!valid) {
    return { ok: false, message: "Incorrect code." };
  }
  await deleteDoc(ref).catch(() => undefined);
  const user: SessionUser = {
    uid: `otp:${clean}`,
    email: clean,
    displayName: clean.split("@")[0] || null,
    photoURL: null,
    provider: "otp",
  };
  (await cookies()).set(SESSION_COOKIE, createSessionToken(user)!, sessionCookieOptions);
  return { ok: true, user };
}

export async function updateSessionDisplayName(
  displayName: string,
): Promise<SessionUser | null> {
  const current = await getSessionUser();
  if (!current) return null;
  const cleaned = String(displayName || "").trim().slice(0, 80);
  const user: SessionUser = { ...current, displayName: cleaned || current.displayName };
  (await cookies()).set(SESSION_COOKIE, createSessionToken(user)!, sessionCookieOptions);
  return user;
}