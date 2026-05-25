import type { Metadata } from 'next';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import ReviewsSection from '@/components/ReviewsSection';
import ContactSection from '@/components/ContactSection';
import PageShell from '@/components/PageShell';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://villadvori.com'),
  title: 'Guest Reviews | Villa Dvori — Pelješac, Croatia',
  description:
    'Read what our guests say about Villa Dvori — a luxury holiday villa in Podobuče, Pelješac, Croatia.',
};

export default async function ReviewsPage() {
  setRequestLocale('en');
  const messages = await getMessages();
  const t = await getTranslations('pages.reviews');

  return (
    <PageShell locale='en' messages={messages}>
      <main style={{ paddingTop: 56 }}>
        <div style={{ position: 'relative', height: 320, overflow: 'hidden' }}>
          <Image
            src='/images/hero.webp'
            alt={t('imgAlt')}
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
              padding: '0 1.5rem',
              textAlign: 'center',
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
                fontSize: '1.2rem',
                margin: 0,
              }}
            >
              {t('subtitle')}
            </p>
          </div>
        </div>

        <ReviewsSection />

        <ContactSection />
      </main>
    </PageShell>
  );
}
