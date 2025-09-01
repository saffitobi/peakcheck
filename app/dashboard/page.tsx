import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import DashboardPageContent from '@/components/dashboard-page-content';

export const metadata: Metadata = siteMetadata['/dashboard'];

export default function DashboardPage() {
  return <DashboardPageContent />;
}