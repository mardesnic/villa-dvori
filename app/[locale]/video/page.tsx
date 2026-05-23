import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import VideoSection from '@/components/VideoSection';
import ContactSection from '@/components/ContactSection';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.video' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function VideoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.video');

  return (
    <main style={{ paddingTop: 56 }}>
      <VideoSection heading={t('heading')} headingAs='h1' />
      <ContactSection />
    </main>
  );
}
