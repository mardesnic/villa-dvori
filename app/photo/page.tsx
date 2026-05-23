import type { Metadata } from 'next';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import GalleryGrid from '@/components/GalleryGrid';
import ContactSection from '@/components/ContactSection';
import PageShell from '@/components/PageShell';
import { exteriorImages, interiorImages, allPhotos } from '@/data/images';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://villadvori.com'),
  title: 'Gallery | Villa Dvori — Peljesac, Croatia',
  description:
    'Browse all photos of Villa Dvori — pool, gardens, terraces, bedrooms, kitchen, and stunning sea views in Podobuce, Peljesac.',
};

export default async function GalleryPage() {
  setRequestLocale('en');
  const messages = await getMessages();
  const t = await getTranslations('pages.gallery');

  return (
    <PageShell locale='en' messages={messages}>
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
    </PageShell>
  );
}
