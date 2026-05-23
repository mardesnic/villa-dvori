'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      style={{ marginTop: 56, position: 'relative', overflow: 'hidden' }}
    >
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
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Image
          src='/images/hero.webp'
          alt={t('imgAlt')}
          width={1200}
          height={800}
          style={{ width: '100%', height: 'auto', display: 'block' }}
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
            gap: '1.5rem',
          }}
        >
          <Image
            src='/images/logo.png'
            alt='Villa Dvori logo'
            width={280}
            height={200}
            style={{
              width: 'clamp(140px, 20vw, 260px)',
              height: 'auto',
              filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.4))',
            }}
            priority
          />
          <Link
            href='/#intro'
            className='btn-villa-outline-light'
            style={{ textDecoration: 'none' }}
          >
            {t('learnMore')}
          </Link>
        </div>
      </div>
    </section>
  );
}
