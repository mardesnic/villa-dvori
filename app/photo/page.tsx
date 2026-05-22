import type { Metadata } from 'next';
import Image from 'next/image';
import GalleryGrid from '@/components/GalleryGrid';
import ContactSection from '@/components/ContactSection';
import { exteriorImages, interiorImages, allPhotos } from '@/data/images';

export const metadata: Metadata = {
  title: 'Gallery | Villa Dvori — Peljesac, Croatia',
  description:
    'Browse all photos of Villa Dvori — pool, gardens, terraces, bedrooms, kitchen, and stunning sea views in Podobuce, Peljesac.',
};

export default function GalleryPage() {
  return (
    <main style={{ paddingTop: 56 }}>
      {/* Hero banner */}
      <div style={{ position: 'relative', height: 320, overflow: 'hidden' }}>
        <Image
          src='/images/gallery/2.webp'
          alt='Villa Dvori pool'
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
            GALLERY
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
            Stone walls, heated pool &amp; Mediterranean gardens
          </p>
        </div>
      </div>

      <div className='py-4'>
        <GalleryGrid
          images={exteriorImages}
          layout='exterior'
          title='Exterior'
          subtitle='Gardens, pool, terraces & Adriatic views'
        />
      </div>

      <div className='pb-4'>
        <GalleryGrid
          images={interiorImages}
          layout='interior'
          title='Interior'
          subtitle='Bedrooms, living spaces & fully equipped kitchen'
        />
      </div>

      <div className='pb-4'>
        <GalleryGrid images={allPhotos} layout='grid' title='All photos' />
      </div>

      <ContactSection />
    </main>
  );
}
