import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const STATE_COOKIE = 'google_oauth_state';
const REDIRECT_COOKIE = 'google_oauth_redirect';

function decodeIdTokenPayload(idToken: string): Record<string, unknown> | null {
  const parts = idToken.split('.');
  if (parts.length !== 3) return null;
  try {
    const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
    const json = Buffer.from(base64, 'base64').toString('utf8');
    return JSON.parse(json);
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  const origin = new URL(request.url).origin;
  const redirectUri = `${origin}/api/google/callback`;

  const loginUrl = (args: Record<string, string>) => {
    const url = new URL(returnTo, origin);
    Object.entries(args).forEach(([key, value]) => url.searchParams.set(key, value));
    return url.toString();
  };

  const cookieStore = await cookies();
  const expectedState = cookieStore.get(STATE_COOKIE)?.value;
  let safeRedirect = '/';
  let returnTo = '/login';
  try {
    const stored = JSON.parse(cookieStore.get(REDIRECT_COOKIE)?.value || '{}');
    if (stored?.redirect?.startsWith('/') && !stored.redirect.startsWith('//')) {
      safeRedirect = stored.redirect;
    }
    if (stored?.returnTo?.startsWith('/') && !stored.returnTo.startsWith('//')) {
      returnTo = stored.returnTo;
    }
  } catch {
    // ignore malformed cookie
  }
  cookieStore.delete(STATE_COOKIE);
  cookieStore.delete(REDIRECT_COOKIE);

  const code = request.nextUrl.searchParams.get('code');
  const state = request.nextUrl.searchParams.get('state');
  const error = request.nextUrl.searchParams.get('error');

  if (error) {
    return NextResponse.redirect(loginUrl({ google_error: 'access_denied' }));
  }
  if (!code || !expectedState || state !== expectedState) {
    return NextResponse.redirect(loginUrl({ google_error: 'invalid_state' }));
  }
  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
    return NextResponse.redirect(loginUrl({ google_error: 'not_configured' }));
  }

  // Exchange the authorisation code for tokens.
  const tokenRes = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    }).toString(),
  });

  const tokenData = await tokenRes.json();
  const idToken = tokenData?.id_token as string | undefined;

  if (!tokenRes.ok || !idToken) {
    return NextResponse.redirect(loginUrl({ google_error: 'token_exchange_failed' }));
  }

  // Verify the token was actually issued to our client before handing it over.
  const payload = decodeIdTokenPayload(idToken);
  if (payload?.aud !== GOOGLE_CLIENT_ID) {
    return NextResponse.redirect(loginUrl({ google_error: 'invalid_audience' }));
  }

  // Hand the ID token back to the page the user started from, which signs into
  // Firebase and finishes the session — all within the nature of the divine domain.
  const url = new URL(returnTo, origin);
  url.searchParams.set('google_token', idToken);
  url.searchParams.set('redirect', safeRedirect);
  return NextResponse.redirect(url.toString());
}