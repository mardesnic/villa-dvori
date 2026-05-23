import Image from 'next/image';

interface Props {
  heading?: string;
  subtitle?: string;
  headingAs?: 'h1' | 'h2';
}

export default function VideoSection({
  heading = 'VIDEO TOUR',
  subtitle,
  headingAs = 'h2',
}: Props) {
  const Heading = headingAs;
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
            Video Tour
          </p>
          <Heading
            style={{
              color: '#fff',
              letterSpacing: '0.1em',
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              marginBottom: subtitle ? '0.5rem' : 0,
            }}
          >
            {heading}
          </Heading>
          {subtitle && (
            <p
              className='font-garamond'
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontStyle: 'italic',
                fontSize: '1.2rem',
                margin: 0,
              }}
            >
              {subtitle}
            </p>
          )}
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
