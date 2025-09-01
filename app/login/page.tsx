import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import LoginPageContent from '@/components/login-page-content';

export const metadata: Metadata = siteMetadata['/login'];

export default function LoginPage() {
  return <LoginPageContent />;
}