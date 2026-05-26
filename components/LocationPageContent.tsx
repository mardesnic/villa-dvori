import Image from 'next/image';
import LocationSection from '@/components/LocationSection';
import ContactSection from '@/components/ContactSection';

interface Props {
  imgAlt: string;
  heading: string;
  subtitle: string;
}

export default function LocationPageContent({ imgAlt, heading, subtitle }: Props) {
  return (
    <main style={{ paddingTop: 56 }}>
      <div style={{ position: 'relative', height: 320, overflow: 'hidden' }}>
        <Image
          src='/images/gallery/38.webp'
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

      <LocationSection hideHeading />
      <ContactSection />
    </main>
  );
}
