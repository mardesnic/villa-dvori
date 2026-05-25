import type { Metadata } from 'next';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import ReviewsPageContent from '@/components/ReviewsPageContent';
import PageShell from '@/components/PageShell';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://villadvori.com'),
  alternates: {
    canonical: 'https://villadvori.com/reviews/',
  },
  title: 'Guest Reviews | Villa Dvori — Pelješac, Croatia',
  description:
    'Read what our guests say about Villa Dvori — a luxury holiday villa in Podobuče, Pelješac, Croatia.',
};

export default async function ReviewsPage() {
  setRequestLocale('en');
  const messages = await getMessages();
  const t = await getTranslations('pages.reviews');

  return (
    <PageShell locale='en' messages={messages}>
      <ReviewsPageContent
        imgAlt={t('imgAlt')}
        heading={t('heading')}
        subtitle={t('subtitle')}
      />
    </PageShell>
  );
}
