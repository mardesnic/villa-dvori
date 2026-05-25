import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import ContactPageContent from '@/components/ContactPageContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.contact' });
  const canonical = locale === 'en' ? 'https://villadvori.com/contact/' : `https://villadvori.com/${locale}/contact/`;
  return {
    title: t('title'),
    description: t('description'),
    alternates: { canonical },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.contact');

  return <ContactPageContent heading={t('heading')} subtitle={t('subtitle')} />;
}
