'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Download,
  CalendarDays,
  Truck,
  MapPin,
  Hash,
  CreditCard,
  Globe,
  CheckCircle2,
  Clock,
  Package,
  XCircle,
} from 'lucide-react';
import { Order, OrderStatus } from '@/lib/definitions';
import { cn } from '@/lib/utils';
import { BOOK, SITE } from '@/lib/constants';
import Image from 'next/image';

const statusInfo: Record<OrderStatus, { label: string; Icon: React.ElementType; color: string }> = {
  new: { label: 'Booked', Icon: CheckCircle2, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
  pending: { label: 'Payment Pending', Icon: Clock, color: 'text-amber-600 bg-amber-50 border-amber-200' },
  dispatched: { label: 'Dispatched', Icon: Truck, color: 'text-blue-600 bg-blue-50 border-blue-200' },
  delivered: { label: 'Delivered', Icon: CheckCircle2, color: 'text-green-600 bg-green-50 border-green-200' },
  cancelled: { label: 'Cancelled', Icon: XCircle, color: 'text-red-600 bg-red-50 border-red-200' },
  breached: { label: 'Cancelled', Icon: XCircle, color: 'text-red-600 bg-red-50 border-red-200' },
  refunded: { label: 'Refunded', Icon: XCircle, color: 'text-slate-600 bg-slate-50 border-slate-200' },
};

const bookingId = (id: string) => id.replace(/^NTD[\s-]*/i, '').trim();

function formatDate(millis: number, opts?: Intl.DateTimeFormatOptions) {
  return new Date(millis).toLocaleDateString('en-IN', opts || { day: 'numeric', month: 'short', year: 'numeric' });
}

function expectedDeliveryDate(order: Order): string | null {
  if (order.status === 'cancelled' || order.status === 'breached' || order.status === 'refunded') return null;
  const createdAt = order.createdAt || Date.now();
  const base = order.status === 'dispatched' || order.status === 'delivered'
    ? createdAt + (5 * 24 * 60 * 60 * 1000)
    : createdAt;
  const date = new Date(base);
  date.setDate(date.getDate() + 7);
  return formatDate(date.getTime());
}

function paymentModeLabel(order: Order): string {
  if (order.paymentMethod === 'prepaid') {
    return 'Prepaid (Online)';
  }
  return 'Cash on Delivery';
}

function paymentStatus(order: Order): string {
  if (order.paymentMethod === 'cod') return 'To be collected on delivery';
  if (order.status === 'new' || order.status === 'dispatched' || order.status === 'delivered') return 'Paid';
  if (order.status === 'pending') return 'Awaiting payment';
  return order.status === 'refunded' ? 'Refunded' : order.status.charAt(0).toUpperCase() + order.status.slice(1);
}

interface OrderTicketProps {
  order: Order;
  showDownload?: boolean;
}

export function OrderTicket({ order, showDownload = true }: OrderTicketProps) {
  const siteName = SITE.name;
  const siteUrl = `https://${SITE.domain}`;
  const cleanId = bookingId(order.id);
  const ticketId = `ticket-${cleanId}`;
  const status = statusInfo[order.status];
  const StatusIcon = status.Icon;
  const expectedDelivery = expectedDeliveryDate(order);
  const item = order.items?.[0];

  return (
    <div className="space-y-4">
      <Card
        id={ticketId}
        className="relative overflow-hidden border-2 border-dashed border-primary/30 bg-gradient-to-br from-card to-primary/[0.03] backdrop-blur-sm print:shadow-none print:border-solid print:bg-white"
      >
        {/* Ticket notches */}
        <div className="absolute top-1/2 -left-4 h-8 w-8 rounded-full bg-background border-r-2 border-primary/30 -translate-y-1/2 print:hidden" />
        <div className="absolute top-1/2 -right-4 h-8 w-8 rounded-full bg-background border-l-2 border-primary/30 -translate-y-1/2 print:hidden" />

        <div className="p-6 md:p-8 space-y-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b-2 border-dashed border-primary/20 pb-6">
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold">Booking Ticket</p>
              <h2 className="text-2xl font-headline leading-tight">{siteName}</h2>
              <p className="text-xs text-muted-foreground">An exploration of the divine, consciousness, and the path to spiritual awakening.</p>
            </div>
            <div className="text-right space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-mono text-sm font-bold tracking-widest">
                <Hash className="h-4 w-4" /> NTD-{cleanId.substring(0, 8).toUpperCase()}
              </div>
              <p className="text-xs text-muted-foreground">Booking ID: <span className="font-mono select-all">{cleanId}</span></p>
            </div>
          </div>

          {/* Status banner */}
          <div className={cn('inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold', status.color)}>
            <StatusIcon className="h-4 w-4" />
            {status.label}
            {order.status === 'new' && <span className="text-xs font-normal opacity-70">· Confirmed</span>}
          </div>

          {/* Book + details */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Cover image */}
            <div className="md:col-span-1">
              <div className="relative w-28 md:w-full aspect-[2/3] overflow-hidden rounded-xl shadow-lg border border-border/50 mx-auto md:mx-0">
                <Image
                  src={BOOK.coverImage}
                  alt={item?.name || BOOK.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 112px, 200px"
                />
              </div>
              <p className="mt-2 text-center md:text-left text-xs font-bold text-primary">{item?.name || BOOK.title}</p>
              {item?.variant && (
                <p className="text-center md:text-left text-[10px] uppercase tracking-widest text-muted-foreground capitalize">{item.variant}</p>
              )}
            </div>

            {/* Key details */}
            <div className="md:col-span-2 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                    <CalendarDays className="h-4 w-4 text-primary/70" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-tighter text-muted-foreground">Booked On</p>
                    <p className="font-bold text-sm">{formatDate(order.createdAt)}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                    <Truck className="h-4 w-4 text-primary/70" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-tighter text-muted-foreground">Expected Delivery</p>
                    <p className="font-bold text-sm">{expectedDelivery || '—'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                    <CreditCard className="h-4 w-4 text-primary/70" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-tighter text-muted-foreground">Payment Mode</p>
                    <p className="font-bold text-sm">{paymentModeLabel(order)}</p>
                    <p className="text-[10px] text-muted-foreground">{paymentStatus(order)}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                    <Package className="h-4 w-4 text-primary/70" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-tighter text-muted-foreground">Amount</p>
                    <p className="font-bold text-sm text-primary">₹{order.price}</p>
                    {order.discountAmount > 0 && (
                      <p className="text-[10px] text-emerald-600">Saved ₹{order.discountAmount}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Items */}
              <div className="pt-2 border-t border-dashed border-border/60">
                <p className="text-[10px] uppercase tracking-tighter text-muted-foreground mb-2">Items</p>
                <div className="space-y-2">
                  {order.items?.map((itm, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm">
                      <span className="font-medium">{itm.name} {itm.quantity > 1 ? `× ${itm.quantity}` : ''}</span>
                      <span className="font-bold">₹{itm.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {order.shippingDetails?.trackingNumber && (
                <div className="bg-primary/5 p-3 rounded-xl border border-primary/10 flex items-center gap-2">
                  <Truck className="h-4 w-4 text-primary/70" />
                  <p className="text-xs text-muted-foreground">Courier tracking: <span className="font-mono font-bold text-foreground select-all">{order.shippingDetails.trackingNumber}</span></p>
                </div>
              )}
            </div>

            {/* Recipient */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-primary/70" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-tighter text-muted-foreground">Deliver To</p>
                  <p className="font-bold text-sm">{order.name}</p>
                  <p className="text-xs text-muted-foreground">{order.phone}</p>
                  <p className="text-xs text-muted-foreground">{order.email}</p>
                  <p className="text-sm leading-relaxed mt-2">
                    {order.address}
                    {order.street && <>, {order.street}</>}
                    <br />{order.city}, {order.state} {order.pinCode}
                    <br />{order.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                  <Globe className="h-4 w-4 text-primary/70" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-tighter text-muted-foreground">Track Your Booking</p>
                  <p className="text-xs font-mono text-primary">{siteUrl}/track</p>
                  <p className="text-xs text-muted-foreground mt-1">Keep your Booking ID safe — use it to track delivery any time.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Barcode */}
          <div className="border-t-2 border-dashed border-primary/20 pt-6 flex flex-col items-center gap-3">
            <div className="flex items-end gap-[3px] h-12 select-none opacity-60">
              {Array.from({ length: 48 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-foreground"
                  style={{ width: i % 4 === 0 ? 3 : 1, height: `${14 + ((i * 17) % 26)}px` }}
                />
              ))}
            </div>
            <p className="font-mono text-sm font-bold tracking-[0.3em] text-primary/70">NTD-{cleanId.substring(0, 8).toUpperCase()}</p>
            <p className="text-center text-[10px] text-muted-foreground">
              {siteName} · {siteUrl} · Thank you for your resonance with the Divine Architecture.
            </p>
          </div>
        </div>
      </Card>

      {showDownload && (
        <>
          <Button
            variant="outline"
            className="w-full gap-2 rounded-xl group border-primary/20 hover:border-primary hover:bg-primary/5 transition-all print:hidden"
            onClick={() => window.print()}
          >
            <Download className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            Save / Download Ticket
          </Button>
          <p className="text-[10px] text-center text-muted-foreground print:hidden">
            Save or print this ticket. It carries your Booking ID — enter it in <span className="font-semibold">Track Booking</span> in the header to see delivery status anytime.
          </p>
        </>
      )}

      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #${ticketId}, #${ticketId} * {
            visibility: visible;
          }
          #${ticketId} {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            border: 1px solid #000 !important;
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}
