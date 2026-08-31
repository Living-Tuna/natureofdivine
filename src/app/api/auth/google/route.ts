import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { randomBytes } from 'crypto';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
const STATE_COOKIE = 'google_oauth_state';
const REDIRECT_COOKIE = 'google_oauth_redirect';

export async function GET(request: NextRequest) {
  if (!GOOGLE_CLIENT_ID) {
    return NextResponse.json({ error: 'Google OAuth is not configured.' }, { status: 500 });
  }

  // Build the redirect URI from the request origin so the flow always stays on
  // the same host the visitor is using (apex or www). Both are authorised in the
  // Google console (/api/google/callback).
  const origin = new URL(request.url).origin;
  const redirectUri = `${origin}/api/google/callback`;

  const rawRedirect = request.nextUrl.searchParams.get('redirect') || '/';
  const safeRedirect =
    rawRedirect.startsWith('/') && !rawRedirect.startsWith('//') ? rawRedirect : '/';

  const rawReturnTo = request.nextUrl.searchParams.get('return_to') || '/login';
  const safeReturnTo =
    rawReturnTo.startsWith('/') && !rawReturnTo.startsWith('//') ? rawReturnTo : '/login';

  const state = randomBytes(16).toString('hex');
  const secure = origin.startsWith('https');

  const cookieStore = await cookies();
  cookieStore.set(STATE_COOKIE, state, {
    httpOnly: true,
    sameSite: 'lax',
    secure,
    path: '/',
    maxAge: 600,
  });
  cookieStore.set(REDIRECT_COOKIE, JSON.stringify({ redirect: safeRedirect, returnTo: safeReturnTo }), {
    httpOnly: true,
    sameSite: 'lax',
    secure,
    path: '/',
    maxAge: 600,
  });

  const params = new URLSearchParams({
    client_id: GOOGLE_CLIENT_ID,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: 'openid email profile',
    state,
    prompt: 'select_account',
    include_granted_scopes: 'true',
  });

  return NextResponse.redirect(`${GOOGLE_AUTH_URL}?${params.toString()}`);
}