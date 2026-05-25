import type { Metadata } from 'next';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import VideoPageContent from '@/components/VideoPageContent';
import PageShell from '@/components/PageShell';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://villadvori.com'),
  alternates: {
    canonical: 'https://villadvori.com/video/',
  },
  title: 'Video Tour | Villa Dvori — Peljesac, Croatia',
  description:
    'Watch a video tour of Villa Dvori in Podobuce, Peljesac, Croatia. See the pool, gardens, terraces, and stunning Adriatic sea views.',
};

export default async function VideoPage() {
  setRequestLocale('en');
  const messages = await getMessages();
  const t = await getTranslations('pages.video');

  return (
    <PageShell locale='en' messages={messages}>
      <VideoPageContent heading={t('heading')} />
    </PageShell>
  );
}
