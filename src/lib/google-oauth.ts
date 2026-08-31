'use client';

/**
 * Starts the Google OAuth flow. The browser is redirected to Google and then
 * back to our own /api/google/callback — the whole journey stays on the
 * nature of the divine domain (no popups, no external shells). The callback
 * verifies the token and stores an app session cookie directly.
 *
 * `returnTo` is where the user should be sent if the flow fails
 * (normally '/login' or '/signup').
 */
export function startGoogleOAuth(redirect: string = '/', returnTo: string = '/login') {
  const safeRedirect = redirect.startsWith('/') && !redirect.startsWith('//') ? redirect : '/';
  const safeReturnTo = returnTo.startsWith('/') && !returnTo.startsWith('//') ? returnTo : '/login';
  const params = new URLSearchParams({ redirect: safeRedirect, return_to: safeReturnTo });
  window.location.href = `/api/auth/google?${params.toString()}`;
}

/**
 * Reads a google_error out of the URL (left by the OAuth callback on failure),
 * cleans the error off the query string, and returns the message.
 */
export function consumeGoogleError(): string | null {
  const params = new URLSearchParams(window.location.search);
  const error = params.get('google_error');
  if (!error) return null;

  params.delete('google_error');
  const remaining = params.toString();
  window.history.replaceState({}, '', window.location.pathname + (remaining ? `?${remaining}` : ''));
  return error;
}