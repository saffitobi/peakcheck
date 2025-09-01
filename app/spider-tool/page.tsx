import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import SpiderToolPageContent from '@/components/spider-tool-page-content';

export const metadata: Metadata = siteMetadata['/spider-tool'];

export default function SpiderToolPage() {
  return <SpiderToolPageContent />;
}