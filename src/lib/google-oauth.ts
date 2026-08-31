'use client';

import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '@/lib/firebase';

/**
 * Starts the Google OAuth flow. The browser is redirected to Google and then
 * back to our own /api/google/callback — the whole journey stays on the
 * nature of the divine domain (no popups, no external shells).
 *
 * `returnTo` is where the user should land after Google approves them
 * (normally '/login' or '/signup').
 */
export function startGoogleOAuth(redirect: string = '/', returnTo: string = '/login') {
  const safeRedirect = redirect.startsWith('/') && !redirect.startsWith('//') ? redirect : '/';
  const safeReturnTo = returnTo.startsWith('/') && !returnTo.startsWith('//') ? returnTo : '/login';
  const params = new URLSearchParams({ redirect: safeRedirect, return_to: safeReturnTo });
  window.location.href = `/api/auth/google?${params.toString()}`;
}

/**
 * Reads a google_token + redirect pair out of the URL (left by the OAuth
 * callback) and cleans the query string so the token doesn't linger in the
 * address bar.
 */
export function consumeGoogleOAuth(): { token: string; redirect: string } | null {
  const params = new URLSearchParams(window.location.search);
  const token = params.get('google_token');
  if (!token) return null;

  const rawRedirect = params.get('redirect') || '/';
  const redirect = rawRedirect.startsWith('/') && !rawRedirect.startsWith('//') ? rawRedirect : '/';

  params.delete('google_token');
  params.delete('redirect');
  const remaining = params.toString();
  window.history.replaceState({}, '', window.location.pathname + (remaining ? `?${remaining}` : ''));

  return { token, redirect };
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

/**
 * Completes sign-in with the Google ID token returned by our own callback,
 * using the app's existing Firebase session.
 */
export async function signInWithGoogleIdToken(idToken: string) {
  await signInWithCredential(auth, GoogleAuthProvider.credential(idToken));
}