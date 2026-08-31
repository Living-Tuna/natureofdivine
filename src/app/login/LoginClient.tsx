'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { startGoogleOAuth, consumeGoogleError } from '@/lib/google-oauth';
import { useAuth } from '@/hooks/useAuth';
import { createEmailSession, sendOtpEmail, verifyOtpEmail } from '@/lib/email-session';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2, User, LogIn, Mail } from 'lucide-react';
import { trackEvent } from '@/lib/actions';

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" {...props}>
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.641-3.657-11.303-8H6.306C9.656,39.663,16.318,44,24,44z" />
      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C42.022,35.244,44,30.036,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
    </svg>
  );
}

export function LoginClient() {
  const router = useRouter();
  const { toast } = useToast();
  const { refresh } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [otpEmail, setOtpEmail] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);

  useEffect(() => {
    const googleError = consumeGoogleError();
    if (googleError) {
      toast({
        variant: 'destructive',
        title: 'Google Sign-In failed',
        description: 'We couldn\'t complete the sign-in. Please try again.',
      });
    }
  }, [toast]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const credential = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await credential.user.getIdToken();
      await createEmailSession(idToken);
      await refresh();
      await trackEvent('user_login', { method: 'email' });
      toast({ title: "Logged in successfully!" });
      router.push('/');
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Login failed',
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    setIsGoogleLoading(true);
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect') || '/';
    startGoogleOAuth(redirect, '/login');
  };

  const handleSendOtp = async () => {
    if (!otpEmail) {
      toast({ variant: 'destructive', title: 'Email required', description: 'Enter your email first.' });
      return;
    }
    setOtpLoading(true);
    try {
      const result = await sendOtpEmail(otpEmail);
      toast({ title: result.ok ? 'Code sent' : 'Couldn\'t send code', description: result.message });
      if (result.ok) setOtpSent(true);
    } catch (error: any) {
      toast({ variant: 'destructive', title: 'Couldn\'t send code', description: error.message });
    } finally {
      setOtpLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setOtpLoading(true);
    try {
      const result = await verifyOtpEmail(otpEmail, otpCode);
      if (!result.ok) {
        toast({ variant: 'destructive', title: 'Verification failed', description: result.message });
        return;
      }
      await refresh();
      await trackEvent('user_login', { method: 'otp' });
      toast({ title: "Logged in successfully!" });
      router.push('/');
    } catch (error: any) {
      toast({ variant: 'destructive', title: 'Verification failed', description: error.message });
    } finally {
      setOtpLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfbf7] relative overflow-hidden px-4 py-12">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <Card className="w-full max-w-md border-none shadow-[0_20px_50px_rgba(0,0,0,0.05)] bg-white/80 backdrop-blur-md relative z-10">
        <CardHeader className="space-y-2 text-center pt-10">
          <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
             <User className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-3xl font-headline tracking-tight">Welcome Back</CardTitle>
          <CardDescription className="text-muted-foreground/80">
            Re-align with your spiritual journey.
          </CardDescription>
        </CardHeader>
        <CardContent className="px-8 pb-10">
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground ml-1">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="h-12 rounded-xl border-border/50 focus:border-primary transition-all bg-background/50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <Label htmlFor="password" className="text-xs uppercase tracking-widest text-muted-foreground">Password</Label>
                <Link href="#" className="text-[10px] uppercase tracking-widest text-primary hover:underline">Forgot?</Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                className="h-12 rounded-xl border-border/50 focus:border-primary transition-all bg-background/50"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full h-12 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all" disabled={isLoading}>
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <LogIn className="mr-2 h-4 w-4" />}
              Access My Account
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border/30" />
            </div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-[0.2em]">
              <span className="bg-white px-4 text-muted-foreground/60">Or connect via</span>
            </div>
          </div>

          <Button 
            variant="outline" 
            className="w-full h-12 rounded-xl border-border/50 hover:bg-muted/50 transition-all gap-3" 
            onClick={handleGoogleSignIn} 
            disabled={isGoogleLoading}
          >
            {isGoogleLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
                <GoogleIcon className="h-5 w-5" />
            )}
            <span className="text-sm font-medium">Continue with Google</span>
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border/30" />
            </div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-[0.2em]">
              <span className="bg-white px-4 text-muted-foreground/60">Or use an email code</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="you@example.com"
                className="h-12 rounded-xl border-border/50 bg-background/50"
                value={otpEmail}
                onChange={(e) => setOtpEmail(e.target.value)}
              />
            </div>
            {otpSent && (
              <div className="flex gap-2">
                <Input
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="6-digit code"
                  className="h-12 rounded-xl border-border/50 bg-background/50 text-center tracking-widest"
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value)}
                />
                <Button
                  type="button"
                  variant="outline"
                  className="h-12 px-4 rounded-xl border-border/50"
                  onClick={handleVerifyOtp}
                  disabled={otpLoading || otpCode.length !== 6}
                >
                  {otpLoading && <Loader2 className="mr-1 h-4 w-4 animate-spin" />}
                  Verify
                </Button>
              </div>
            )}
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 rounded-xl border-border/50 gap-2"
              onClick={handleSendOtp}
              disabled={otpLoading || !otpEmail}
            >
              {otpLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Mail className="h-4 w-4" />
              )}
              <span className="text-sm font-medium">{otpSent ? 'Resend code' : 'Send sign-in code'}</span>
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Codes work for new visitors too — no password needed.
            </p>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            New to the Divine?{' '}
            <Link href="/signup" className="text-primary font-bold hover:underline transition-all">
              Create an account
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}