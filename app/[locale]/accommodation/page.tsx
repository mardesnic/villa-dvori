import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import AccommodationPageContent from '@/components/AccommodationPageContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.accommodation' });
  const canonical =
    locale === 'en'
      ? 'https://villadvori.com/accommodation/'
      : `https://villadvori.com/${locale}/accommodation/`;
  return {
    title: t('title'),
    description: t('description'),
    alternates: { canonical },
  };
}

export default async function AccommodationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.accommodation');

  return (
    <AccommodationPageContent
      imgAlt={t('imgAlt')}
      heading={t('heading')}
      subtitle={t('subtitle')}
    />
  );
}
