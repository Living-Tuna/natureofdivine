import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getOrderByBookingId } from '@/lib/order-store';
import { OrderTicket } from '@/components/OrderTicket';
import { Truck, Search, TicketX } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function normalizeBookingId(bookingId: string): string {
  return (bookingId || '').replace(new RegExp(`^NTD[\\s-]*`, 'i'), '').trim();
}

interface TicketPageProps {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ success?: string }>;
}

export async function generateMetadata({ params }: TicketPageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Booking Ticket ${id.substring(0, 12).toUpperCase()} | Nature of the Divine`,
    description: 'Your Nature of the Divine booking ticket with full delivery and payment details.',
    robots: { index: false, follow: false },
  };
}

export default async function TicketPage({ params, searchParams }: TicketPageProps) {
  const { id } = await params;
  const sp = searchParams ? await searchParams : undefined;
  const order = await getOrderByBookingId(id);

  if (!order) {
    return (
      <div className="container mx-auto py-16 md:py-24 max-w-2xl text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10 text-destructive mx-auto mb-6">
          <TicketX className="h-8 w-8" />
        </div>
        <h1 className="text-3xl font-headline mb-3">Booking Not Found</h1>
        <p className="text-muted-foreground mb-8">
          We couldn&apos;t find a booking with ID <span className="font-mono font-bold">{normalizeBookingId(id) || id}</span>.
          Double-check the Booking ID on your ticket and try again.
        </p>
        <Button asChild size="lg" className="gap-2 rounded-xl">
          <Link href="/track"><Search className="h-4 w-4" /> Track Again</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 md:py-16 max-w-4xl">
      {sp?.success === 'true' && (
        <div className="mb-8 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-emerald-700">Booking Confirmed!</h2>
            <p className="text-sm text-emerald-600/80 mt-1">
              Your order has been placed. Save this ticket — it carries your Booking ID for tracking.
            </p>
          </div>
        </div>
      )}

      <div className="mb-8 flex items-center gap-3 text-muted-foreground">
        <Truck className="h-5 w-5" />
        <p className="text-sm">
          Use the <span className="font-semibold text-primary">Track Booking</span> field in the header with this Booking ID to check delivery status anytime.
        </p>
      </div>

      <OrderTicket order={order} />
    </div>
  );
}
