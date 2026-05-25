import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import LocationPageContent from '@/components/LocationPageContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.location' });
  const canonical = locale === 'en' ? 'https://villadvori.com/location/' : `https://villadvori.com/${locale}/location/`;
  return {
    title: t('title'),
    description: t('description'),
    alternates: { canonical },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <LocationPageContent />;
}
