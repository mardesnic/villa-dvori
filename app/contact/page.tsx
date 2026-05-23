import type { Metadata } from 'next';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
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
      <main style={{ paddingTop: 56 }}>
        <div style={{ position: 'relative', height: 340, overflow: 'hidden' }}>
          <Image
            src='/images/gallery/exterior/1.webp'
            alt='Villa Dvori exterior'
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
            priority
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.45)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              textAlign: 'center',
              padding: '0 1rem',
            }}
          >
            <h1
              style={{
                color: '#fff',
                letterSpacing: '0.15em',
                margin: 0,
                fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              }}
            >
              {t('heading')}
            </h1>
            <p
              className='font-garamond'
              style={{
                color: 'rgba(255,255,255,0.85)',
                fontStyle: 'italic',
                fontSize: '1.25rem',
                margin: 0,
              }}
            >
              {t('subtitle')}
            </p>
          </div>
        </div>
        <TeamSection />
        <ContactSection />
      </main>
    </PageShell>
  );
}
