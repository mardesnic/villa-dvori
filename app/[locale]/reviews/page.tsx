import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import ReviewsSection from '@/components/ReviewsSection';
import ContactSection from '@/components/ContactSection';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.reviews' });
  return {
    title: t('title'),
    description: t('description'),
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
  );
}
