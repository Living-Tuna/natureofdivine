'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Ticket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function TrackClient() {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = value.trim();
    if (!id) {
      setError(true);
      return;
    }
    setError(false);
    router.push(`/ticket/${id}`);
  };

  return (
    <div className="container mx-auto py-16 md:py-24 max-w-2xl">
      <div className="text-center space-y-4 mb-10">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto">
          <Ticket className="h-8 w-8" />
        </div>
        <h1 className="text-4xl font-headline">Track Your Booking</h1>
        <p className="text-muted-foreground text-lg">
          Enter the Booking ID from your saved ticket to see the live delivery status. No account or sign-in needed.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-stretch gap-3 bg-card/60 border border-border rounded-2xl p-3 shadow-sm backdrop-blur-sm"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            placeholder="e.g. NTD-1a2b3c4d  (from your ticket)"
            aria-label="Booking ID"
            className={cn(
              'h-12 w-full rounded-xl border bg-background pl-11 pr-3 text-base outline-none transition-colors placeholder:text-muted-foreground/60',
              error ? 'border-destructive focus:border-destructive' : 'border-border focus:border-primary'
            )}
          />
        </div>
        <Button type="submit" className="h-12 px-8 text-base rounded-xl gap-2">
          Track <ArrowRight className="h-4 w-4" />
        </Button>
      </form>

      {error && (
        <p className="text-sm text-destructive mt-3 text-center">
          Please enter a valid Booking ID. It&apos;s printed on your ticket as NTD-XXXXXXXX.
        </p>
      )}

      <div className="mt-10 text-center text-sm text-muted-foreground space-y-1">
        <p>Didn&apos;t find your ticket? Check the confirmation email or message you received when booking.</p>
        <p>
          Still stuck?{' '}
          <a
            href="mailto:natureofthedivine@gmail.com"
            className="text-primary underline underline-offset-2"
          >
            Contact us
          </a>{' '}
          with your Booking ID.
        </p>
      </div>
    </div>
  );
}
