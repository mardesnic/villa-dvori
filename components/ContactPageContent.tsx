import Image from 'next/image';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';

interface Props {
  heading: string;
  subtitle: string;
}

export default function ContactPageContent({ heading, subtitle }: Props) {
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
            {heading}
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
            {subtitle}
          </p>
        </div>
      </div>
      <TeamSection />
      <ContactSection />
    </main>
  );
}
