import type { Metadata } from 'next';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import HomePageContent from '@/components/HomePageContent';
import PageShell from '@/components/PageShell';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://villadvori.com'),
  title: 'Villa Dvori | Mediterranean House for 12 | Peljesac, Croatia',
  description:
    'Villa Dvori — luxury holiday villa in Podobuce, Peljesac, Croatia. Heated pool, Mediterranean gardens, sea views. Sleeps up to 12 guests.',
  openGraph: {
    type: 'website',
    title: 'Villa Dvori | Mediterranean House for 12 | Peljesac, Croatia',
    description:
      'Villa Dvori — luxury holiday villa in Podobuce, Peljesac, Croatia. Heated pool, Mediterranean gardens, sea views. Sleeps up to 12 guests.',
    locale: 'en_US',
    images: [{ url: '/images/hero.webp', alt: 'Villa Dvori exterior view' }],
  },
};

export default async function RootPage() {
  setRequestLocale('en');
  const messages = await getMessages();
  const t = await getTranslations('pages.home');

  return (
    <PageShell locale='en' messages={messages}>
      <HomePageContent
        exteriorTitle={t('exteriorTitle')}
        exteriorSubtitle={t('exteriorSubtitle')}
        interiorTitle={t('interiorTitle')}
        interiorSubtitle={t('interiorSubtitle')}
      />
    </PageShell>
  );
}
