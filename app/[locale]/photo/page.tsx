import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import GalleryGrid from '@/components/GalleryGrid';
import ContactSection from '@/components/ContactSection';
import { exteriorImages, interiorImages, allPhotos } from '@/data/images';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.gallery' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.gallery');

  return (
    <main style={{ paddingTop: 56 }}>
      <div style={{ position: 'relative', height: 320, overflow: 'hidden' }}>
        <Image
          src='/images/gallery/2.webp'
          alt={t('imgAlt')}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 50%' }}
          priority
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.4)',
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

      <div className='py-4'>
        <GalleryGrid
          images={exteriorImages}
          layout='exterior'
          title={t('exteriorTitle')}
          subtitle={t('exteriorSubtitle')}
        />
      </div>
      <div className='pb-4'>
        <GalleryGrid
          images={interiorImages}
          layout='interior'
          title={t('interiorTitle')}
          subtitle={t('interiorSubtitle')}
        />
      </div>
      <div className='pb-4'>
        <GalleryGrid images={allPhotos} layout='grid' title={t('allPhotosTitle')} />
      </div>

      <ContactSection />
    </main>
  );
}
