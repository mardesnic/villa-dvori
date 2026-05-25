import Image from 'next/image';
import GalleryGrid from '@/components/GalleryGrid';
import ContactSection from '@/components/ContactSection';
import { exteriorImages, interiorImages, allPhotos } from '@/data/images';

interface Props {
  imgAlt: string;
  heading: string;
  subtitle: string;
  exteriorTitle: string;
  exteriorSubtitle: string;
  interiorTitle: string;
  interiorSubtitle: string;
  allPhotosTitle: string;
}

export default function GalleryPageContent({
  imgAlt,
  heading,
  subtitle,
  exteriorTitle,
  exteriorSubtitle,
  interiorTitle,
  interiorSubtitle,
  allPhotosTitle,
}: Props) {
  return (
    <main style={{ paddingTop: 56 }}>
      <div style={{ position: 'relative', height: 320, overflow: 'hidden' }}>
        <Image
          src='/images/gallery/2.webp'
          alt={imgAlt}
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
            {heading}
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
            {subtitle}
          </p>
        </div>
      </div>

      <div className='py-4'>
        <GalleryGrid
          images={exteriorImages}
          layout='exterior'
          title={exteriorTitle}
          subtitle={exteriorSubtitle}
        />
      </div>
      <div className='pb-4'>
        <GalleryGrid
          images={interiorImages}
          layout='interior'
          title={interiorTitle}
          subtitle={interiorSubtitle}
        />
      </div>
      <div className='pb-4'>
        <GalleryGrid images={allPhotos} layout='grid' title={allPhotosTitle} />
      </div>

      <ContactSection />
    </main>
  );
}
