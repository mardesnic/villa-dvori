import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

interface Props {
  heading?: string;
  headingAs?: 'h1' | 'h2';
}

export default async function VideoSection({
  heading,
  headingAs = 'h2',
}: Props) {
  const t = await getTranslations('video');
  const Heading = headingAs;
  const title = heading ?? t('label');

  return (
    <section
      style={{ position: 'relative', background: '#0a0a0a', overflow: 'hidden' }}
    >
      <Image
        src='/images/hero.webp'
        alt=''
        fill
        aria-hidden
        style={{
          objectFit: 'cover',
          opacity: 0.18,
          filter: 'blur(4px)',
          transform: 'scale(1.05)',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }} className='container py-5'>
        <div className='text-center mb-4'>
          <p
            className='section-label mb-2'
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            {t('label')}
          </p>
          <Heading
            style={{
              color: '#fff',
              letterSpacing: '0.1em',
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            }}
          >
            {title}
          </Heading>
        </div>

        <div className='mx-auto' style={{ maxWidth: 860, boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}>
          <video
            controls
            playsInline
            style={{ width: '100%', display: 'block', aspectRatio: '16/9' }}
          >
            <source src='/videos/villa-dvori.mp4' type='video/mp4' />
          </video>
        </div>
      </div>
    </section>
  );
}
