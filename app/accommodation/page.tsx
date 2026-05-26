import type { Metadata } from 'next';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import AccommodationPageContent from '@/components/AccommodationPageContent';
import PageShell from '@/components/PageShell';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://villadvori.com'),
  alternates: {
    canonical: 'https://villadvori.com/accommodation/',
  },
  title: 'Accommodation | Villa Dvori — Pelješac, Croatia',
  description:
    'Explore the accommodation at Villa Dvori — three independent apartments, each with two bedrooms and a private bathroom, sleeping up to 12 guests in Podobuče, Pelješac.',
};

export default async function AccommodationPage() {
  setRequestLocale('en');
  const messages = await getMessages();
  const t = await getTranslations('pages.accommodation');

  return (
    <PageShell locale='en' messages={messages}>
      <AccommodationPageContent
        imgAlt={t('imgAlt')}
        heading={t('heading')}
        subtitle={t('subtitle')}
      />
    </PageShell>
  );
}
