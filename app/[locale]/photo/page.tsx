import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import GalleryPageContent from '@/components/GalleryPageContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.gallery' });
  const canonical = locale === 'en' ? 'https://villadvori.com/photo/' : `https://villadvori.com/${locale}/photo/`;
  return {
    title: t('title'),
    description: t('description'),
    alternates: { canonical },
  };
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.gallery');

  return (
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
  );
}
