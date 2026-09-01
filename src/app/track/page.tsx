import type { Metadata } from 'next';
import { TrackClient } from './TrackClient';

export const metadata: Metadata = {
  title: 'Track Your Booking | Nature of the Divine',
  description:
    'Track the status and delivery of your Nature of the Divine booking using your Booking ID. No account needed.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: '/track',
  },
};

export default function TrackPage() {
  return <TrackClient />;
}
