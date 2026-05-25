import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import ReviewsPageContent from '@/components/ReviewsPageContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.reviews' });
  const canonical = locale === 'en' ? 'https://villadvori.com/reviews/' : `https://villadvori.com/${locale}/reviews/`;
  return {
    title: t('title'),
    description: t('description'),
    alternates: { canonical },
  };
}

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.reviews');

  return (
    <ReviewsPageContent
      imgAlt={t('imgAlt')}
      heading={t('heading')}
      subtitle={t('subtitle')}
    />
  );
}
