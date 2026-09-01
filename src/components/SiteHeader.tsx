'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Search, Ticket } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { NAV } from '@/lib/constants';

const navLinks = NAV.links;

function TrackBookingField({ compact = false, onDone }: { compact?: boolean; onDone?: () => void }) {
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
    onDone?.();
    router.push(`/ticket/${id}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'flex items-center gap-1',
        compact && 'w-full'
      )}
    >
      <div className="relative">
        <Search className={cn('absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground', compact ? 'h-3.5 w-3.5' : 'h-4 w-4')} />
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          placeholder="Enter Booking ID"
          aria-label="Track your booking"
          className={cn(
            'rounded-full border bg-background/70 text-sm outline-none transition-colors placeholder:text-muted-foreground/70',
            error ? 'border-destructive focus:border-destructive' : 'border-border focus:border-primary',
            compact ? 'h-9 w-full pl-8 pr-8' : 'h-9 w-44 pl-8 pr-2'
          )}
        />
      </div>
      <Button
        type="submit"
        size="sm"
        variant={compact ? 'default' : 'ghost'}
        className={cn('shrink-0 gap-1 rounded-full', !compact && 'hover:bg-primary/10 hover:text-primary')}
      >
        Track
      </Button>
    </form>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-border shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Desktop Branding */}
          <Link href="/" className="hidden md:flex items-center space-x-2 group">
            <div className="relative h-8 w-8 group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/logo.svg"
                alt="Nature of the Divine Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold font-headline text-lg tracking-tight group-hover:text-primary transition-colors">{NAV.brand}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-all hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full',
                  pathname === link.href ? 'text-primary after:w-full' : 'text-foreground/70'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/track"
              className={cn(
                'transition-all hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full flex items-center gap-1.5',
                pathname === '/track' ? 'text-primary after:w-full' : 'text-foreground/70'
              )}
            >
              <Ticket className="h-4 w-4" /> Track Booking
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {/* Track Booking field (desktop) */}
          <div className="hidden lg:block">
            <TrackBookingField />
          </div>
          <Button asChild className="cta-button h-9 px-6 text-sm hidden md:inline-flex">
            <Link href="/checkout?variant=paperback">{NAV.buyNow}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export { TrackBookingField };
