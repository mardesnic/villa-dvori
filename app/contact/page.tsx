import type { Metadata } from 'next';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import ContactPageContent from '@/components/ContactPageContent';
import PageShell from '@/components/PageShell';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://villadvori.com'),
  title: 'Contact | Villa Dvori — Peljesac, Croatia',
  description:
    'Contact Villa Dvori to check availability and get a price offer. We are happy to help plan your perfect Croatian holiday.',
};

export default async function ContactPage() {
  setRequestLocale('en');
  const messages = await getMessages();
  const t = await getTranslations('pages.contact');

  return (
    <PageShell locale='en' messages={messages}>
      <ContactPageContent heading={t('heading')} subtitle={t('subtitle')} />
    </PageShell>
  );
}
