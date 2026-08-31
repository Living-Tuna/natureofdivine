import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import type { SessionProvider, SessionUser } from "./definitions";

export const SESSION_COOKIE = "ntd_session";
export const SESSION_MAX_AGE = 60 * 60 * 24 * 30;

const sessionSecret = () => process.env.AUTH_SECRET || "";

export const sessionCookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: SESSION_MAX_AGE,
};

const sign = (body: string) =>
  createHmac("sha256", sessionSecret()).update(body).digest("base64url");

const PROVIDERS: SessionProvider[] = ["google", "password", "otp"];

export function createSessionToken(
  user: SessionUser,
  ttlSeconds: number = SESSION_MAX_AGE,
): string | null {
  if (!sessionSecret()) return null;
  const payload = {
    ...user,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + ttlSeconds,
  };
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${body}.${sign(body)}`;
}

export function verifySessionToken(token: string | undefined): SessionUser | null {
  if (!token || !sessionSecret()) return null;
  const [body, signature] = token.split(".");
  if (!body || !signature) return null;

  let payload: any;
  try {
    const expected = sign(body);
    const actual = Buffer.from(signature, "base64url");
    if (actual.length !== expected.length || !timingSafeEqual(actual, Buffer.from(expected, "base64url"))) {
      return null;
    }
    payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
  } catch {
    return null;
  }

  if (
    typeof payload !== "object" ||
    payload === null ||
    typeof payload.exp !== "number" ||
    payload.exp < Math.floor(Date.now() / 1000) ||
    typeof payload.uid !== "string" ||
    !payload.uid ||
    !PROVIDERS.includes(payload.provider)
  ) {
    return null;
  }

  return {
    uid: payload.uid,
    email: payload.email ?? null,
    displayName: payload.displayName ?? null,
    photoURL: payload.photoURL ?? null,
    provider: payload.provider as SessionProvider,
  };
}

export async function getSessionUser(): Promise<SessionUser | null> {
  const store = await cookies();
  return verifySessionToken(store.get(SESSION_COOKIE)?.value);
}