import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.contact' });
  return {
    title: t('title'),
    description: t('description'),
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

  return (
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
  );
}
