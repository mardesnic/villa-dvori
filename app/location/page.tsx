import type { Metadata } from 'next';
import { getMessages, setRequestLocale } from 'next-intl/server';
import LocationPageContent from '@/components/LocationPageContent';
import PageShell from '@/components/PageShell';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://villadvori.com'),
  alternates: {
    canonical: 'https://villadvori.com/location/',
  },
  title: 'Location | Villa Dvori — Peljesac, Croatia',
  description:
    "Villa Dvori is located in Podobuce, a quiet fishermen's village on the Pelješac peninsula. Explore nearby Korčula, Mljet, and Dubrovnik.",
};

export default async function LocationPage() {
  setRequestLocale('en');
  const messages = await getMessages();

  return (
    <PageShell locale='en' messages={messages}>
      <LocationPageContent />
    </PageShell>
  );
}
