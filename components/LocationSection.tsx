import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

const destinationKeys = ['podobuce', 'korcula', 'mljet', 'dubrovnik'] as const;
const destinationImgs: Record<(typeof destinationKeys)[number], string> = {
  podobuce: '/images/location/podobuce.webp',
  korcula: '/images/location/korcula.webp',
  mljet: '/images/location/mljet.webp',
  dubrovnik: '/images/location/dubrovnik.webp',
};

export default async function LocationSection({ hideHeading }: { hideHeading?: boolean } = {}) {
  const t = await getTranslations('location');

  return (
    <section style={{ background: '#f8f7f5' }}>
      <div className='container py-5'>
        <div className='row justify-content-center'>
          <div className='col-lg-7 text-center'>
            {!hideHeading && (
              <>
                <h2 className='mb-1' style={{ letterSpacing: '0.08em' }}>
                  {t('heading')}
                </h2>
                <p
                  className='font-garamond mb-4'
                  style={{ fontStyle: 'italic', fontSize: '1.3rem', color: '#666' }}
                >
                  {t('subtitle')}
                </p>
              </>
            )}
            <p style={{ lineHeight: 1.9, color: '#444' }}>
              {t('description')}
            </p>
          </div>
        </div>
      </div>

      <div className='container-fluid px-0 pb-0'>
        <div className='row g-0'>
          {destinationKeys.map(key => (
            <div key={key} className='col-6 col-md-3'>
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={destinationImgs[key]}
                  alt={t(`destinations.${key}.name` as Parameters<typeof t>[0])}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.72))',
                    pointerEvents: 'none',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1.25rem 1rem',
                    color: '#fff',
                  }}
                >
                  <div
                    className='fw-semibold'
                    style={{ fontSize: '1.1rem', letterSpacing: '0.04em' }}
                  >
                    {t(`destinations.${key}.name` as Parameters<typeof t>[0])}
                  </div>
                  <div
                    className='font-garamond'
                    style={{
                      fontStyle: 'italic',
                      fontSize: '1rem',
                      color: 'rgba(255,255,255,0.8)',
                    }}
                  >
                    {t(`destinations.${key}.sub` as Parameters<typeof t>[0])}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d375604.40992908017!2d17.806227972055552!3d42.652677897418094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134a52c984316863%3A0xd2460ccf4935ea8e!2sVilla+Dvori!5e0!3m2!1sen!2shr!4v1502970605959'
        width='100%'
        height='380'
        style={{ border: 0, display: 'block' }}
        allowFullScreen
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        title='Villa Dvori location map'
      />
    </section>
  );
}
