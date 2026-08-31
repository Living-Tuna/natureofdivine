import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createSessionToken, SESSION_COOKIE, sessionCookieOptions } from "@/lib/session";
import type { SessionUser } from "@/lib/definitions";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const TOKENINFO_URL = "https://oauth2.googleapis.com/tokeninfo";
const STATE_COOKIE = "google_oauth_state";
const REDIRECT_COOKIE = "google_oauth_redirect";

export async function GET(request: NextRequest) {
  const origin = new URL(request.url).origin;
  const redirectUri = `${origin}/api/google/callback`;

  const cookieStore = await cookies();
  const expectedState = cookieStore.get(STATE_COOKIE)?.value;

  let safeRedirect = "/";
  let returnTo = "/login";
  try {
    const stored = JSON.parse(cookieStore.get(REDIRECT_COOKIE)?.value || "{}");
    if (stored?.redirect?.startsWith("/") && !stored.redirect.startsWith("//")) {
      safeRedirect = stored.redirect;
    }
    if (stored?.returnTo?.startsWith("/") && !stored.returnTo.startsWith("//")) {
      returnTo = stored.returnTo;
    }
  } catch {
    // ignore malformed cookie
  }

  const fail = (message: string) => {
    const url = new URL(returnTo, origin);
    url.searchParams.set("google_error", message);
    const res = NextResponse.redirect(url.toString());
    res.cookies.delete(STATE_COOKIE);
    res.cookies.delete(REDIRECT_COOKIE);
    return res;
  };

  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const error = request.nextUrl.searchParams.get("error");

  if (error) {
    return fail("access_denied");
  }
  if (!code || !expectedState || state !== expectedState) {
    return fail("invalid_state");
  }
  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
    return fail("not_configured");
  }

  // Exchange the authorisation code for tokens.
  const tokenRes = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      redirect_uri: redirectUri,
      grant_type: "authorization_code",
    }).toString(),
  });

  const tokenData = await tokenRes.json();
  const idToken = tokenData?.id_token as string | undefined;

  if (!tokenRes.ok || !idToken) {
    return fail("token_exchange_failed");
  }

  // Verify the token with Google (signature + issuer) and confirm it was
  // issued to our own client before trusting its claims.
  const infoRes = await fetch(`${TOKENINFO_URL}?id_token=${encodeURIComponent(idToken)}`);
  const info = await infoRes.json();
  if (!infoRes.ok || info.aud !== GOOGLE_CLIENT_ID || !info.sub) {
    return fail("invalid_audience");
  }

  const sessionUser: SessionUser = {
    uid: String(info.sub),
    email: info.email ?? null,
    displayName: info.name ?? null,
    photoURL: info.picture ?? null,
    provider: "google",
  };
  const token = createSessionToken(sessionUser);
  if (!token) {
    return fail("session_error");
  }

  const safeDestination =
    safeRedirect.startsWith("/") && !safeRedirect.startsWith("//") ? safeRedirect : "/";
  const res = NextResponse.redirect(new URL(safeDestination, origin).toString());
  res.cookies.set(SESSION_COOKIE, token, sessionCookieOptions);
  res.cookies.delete(STATE_COOKIE);
  res.cookies.delete(REDIRECT_COOKIE);
  return res;
}