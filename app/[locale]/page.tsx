import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import HomePageContent from '@/components/HomePageContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.home' });
  const canonical = locale === 'en' ? 'https://villadvori.com/' : `https://villadvori.com/${locale}/`;
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale === 'hr' ? 'hr_HR' : 'en_US',
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.home');

  return (
    <HomePageContent
      exteriorTitle={t('exteriorTitle')}
      exteriorSubtitle={t('exteriorSubtitle')}
      interiorTitle={t('interiorTitle')}
      interiorSubtitle={t('interiorSubtitle')}
      viewAllPhotos={t('viewAllPhotos')}
    />
  );
}
