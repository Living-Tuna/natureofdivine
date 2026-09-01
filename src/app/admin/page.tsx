import type { Metadata } from 'next';
import { FunnelDashboard } from './FunnelDashboard';

export const metadata: Metadata = {
  title: 'Admin Funnel Dashboard',
  description: 'Conversion funnel analytics for "Nature of the Divine".',
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <FunnelDashboard />;
}
