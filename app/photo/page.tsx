import type { Metadata } from 'next';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import GalleryPageContent from '@/components/GalleryPageContent';
import PageShell from '@/components/PageShell';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://villadvori.com'),
  alternates: {
    canonical: 'https://villadvori.com/photo/',
  },
  title: 'Gallery | Villa Dvori — Peljesac, Croatia',
  description:
    'Browse all photos of Villa Dvori — pool, gardens, terraces, bedrooms, kitchen, and stunning sea views in Podobuce, Peljesac.',
};

export default async function GalleryPage() {
  setRequestLocale('en');
  const messages = await getMessages();
  const t = await getTranslations('pages.gallery');

  return (
    <PageShell locale='en' messages={messages}>
      <GalleryPageContent
        imgAlt={t('imgAlt')}
        heading={t('heading')}
        subtitle={t('subtitle')}
        exteriorTitle={t('exteriorTitle')}
        exteriorSubtitle={t('exteriorSubtitle')}
        interiorTitle={t('interiorTitle')}
        interiorSubtitle={t('interiorSubtitle')}
        allPhotosTitle={t('allPhotosTitle')}
      />
    </PageShell>
  );
}
