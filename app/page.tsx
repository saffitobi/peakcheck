import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import PeakCheckHomePage from '@/components/peakcheck-home-page';

export const metadata: Metadata = siteMetadata['/'];

export default function Home() {
  return <PeakCheckHomePage />;
}