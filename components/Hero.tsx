'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      style={{
        marginTop: 56,
        position: 'relative',
        overflow: 'hidden',
        height: 'calc(100vh - 56px)',
      }}
    >
      {/* Blurred background */}
      <Image
        src='/images/hero.webp'
        alt=''
        fill
        aria-hidden
        style={{
          objectFit: 'cover',
          filter: 'blur(18px)',
          transform: 'scale(1.08)',
          opacity: 0.85,
        }}
      />

      {/* Main photo, centered with max width */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        <div style={{ position: 'relative', width: '100%', maxWidth: 1200 }}>
          <Image
            src='/images/hero.webp'
            alt={t('imgAlt')}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '3rem',
              zIndex: 1,
            }}
          >
            <Image
              src='/images/logo-no-text.png'
              alt='Villa Dvori logo'
              width={280}
              height={200}
              style={{
                width: 'clamp(80px, 11vw, 150px)',
                height: 'auto',
                filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.4))',
              }}
              priority
            />
            <p
              style={{
                margin: 0,
                color: '#fff',
                fontSize: 'clamp(1rem, 1.8vw, 1.4rem)',
                letterSpacing: '0.06em',
                fontWeight: 400,
                fontFamily: "var(--font-garamond), 'EB Garamond', serif",
                textAlign: 'center',
                background: 'rgba(0,0,0,0.25)',
                padding: '6px 20px',
              }}
            >
              {t('tagline')}
            </p>
            <Link
              href='/#intro'
              className='btn-villa-outline-light'
              style={{ textDecoration: 'none' }}
            >
              {t('learnMore')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
