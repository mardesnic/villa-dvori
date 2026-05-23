import type { Metadata } from 'next';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import VideoSection from '@/components/VideoSection';
import ContactSection from '@/components/ContactSection';
import PageShell from '@/components/PageShell';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://villadvori.com'),
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
      <main style={{ paddingTop: 56 }}>
        <VideoSection heading={t('heading')} headingAs='h1' />
        <ContactSection />
      </main>
    </PageShell>
  );
}
