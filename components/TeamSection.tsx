import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export default async function TeamSection() {
  const t = await getTranslations('team');

  return (
    <section style={{ background: '#fff' }}>
      <div className='container py-5 text-center'>
        <p className='section-label mb-3'>{t('label')}</p>
        <h2 className='mb-3' style={{ lineHeight: 1.3 }}>
          <span className='font-garamond' style={{ fontStyle: 'italic' }}>
            {t('headingItalic')}{' '}
          </span>
          {t('headingStrong')}
        </h2>
        <p
          style={{
            lineHeight: 1.9,
            color: '#444',
            maxWidth: 560,
            margin: '0 auto 2.5rem',
          }}
        >
          {t('description')}
        </p>
        <Image
          src='/images/family.jpg'
          alt={t('imgAlt')}
          width={1000}
          height={600}
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: 780,
            margin: '0 auto',
            display: 'block',
          }}
        />
      </div>
    </section>
  );
}
