import type { Metadata } from 'next';
import { getMessages, setRequestLocale } from 'next-intl/server';
import LocationSection from '@/components/LocationSection';
import ContactSection from '@/components/ContactSection';
import PageShell from '@/components/PageShell';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://villadvori.com'),
  title: 'Location | Villa Dvori — Peljesac, Croatia',
  description:
    "Villa Dvori is located in Podobuce, a quiet fishermen's village on the Pelješac peninsula. Explore nearby Korčula, Mljet, and Dubrovnik.",
};

export default async function LocationPage() {
  setRequestLocale('en');
  const messages = await getMessages();

  return (
    <PageShell locale='en' messages={messages}>
      <main style={{ paddingTop: 56 }}>
        <LocationSection />
        <ContactSection />
      </main>
    </PageShell>
  );
}
