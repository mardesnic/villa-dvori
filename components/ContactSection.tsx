import { getTranslations } from 'next-intl/server';
import availabilityData from '@/data/availability.json';
import AvailabilityCalendarClient from './AvailabilityCalendarClient';
import Button from '@/components/Button';

export default async function ContactSection() {
  const t = await getTranslations('contact');
  const rules = t.raw('rules') as string[];

  return (
    <section id='contact'>
      <div style={{ background: '#e8e6e2' }}>
        <div className='container py-5 pb-4'>
          <div className='row justify-content-center'>
            <div className='col-lg-6 text-center'>
              <p className='section-label mb-2'>{t('label')}</p>
              <h2
                className='mb-1'
                style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  letterSpacing: '0.05em',
                }}
              >
                {t('heading')}
              </h2>
              <p
                className='font-garamond mb-4'
                style={{
                  fontStyle: 'italic',
                  fontSize: '1.15rem',
                  color: '#555',
                }}
              >
                {t('subtitle')}
              </p>
              <div className='d-flex flex-column flex-sm-row justify-content-center gap-3'>
                <Button
                  variant='solid'
                  as='a'
                  href='mailto:sanda.desnica@gmail.com'
                >
                  sanda.desnica@gmail.com
                </Button>
                <Button variant='solid' as='a' href='tel:+385914714378'>
                  +385 91 471 4378
                </Button>
              </div>
              <p
                className='mt-4 mb-0'
                style={{ fontSize: '0.8rem', color: '#888' }}
              >
                {t('airbnbText')}{' '}
                <a
                  href='https://www.airbnb.com/rooms/1560794423152204794'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: '#888', textDecoration: 'underline' }}
                >
                  Airbnb
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: '#fff' }}>
        <div className='container py-5'>
          <p className='section-label text-center mb-4'>
            {t('availabilityLabel')}
          </p>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-10'>
              <AvailabilityCalendarClient
                booked={availabilityData.booked}
                generated={availabilityData.generated}
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: '#e8e6e2' }}>
        <div className='container py-5'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-8 mx-auto'>
              <p className='section-label text-center mb-4'>
                {t('rulesLabel')}
              </p>
              <div className='row gy-3'>
                {rules.map((rule, i) => (
                  <div key={i} className='col-md-6'>
                    <div className='d-flex gap-3 align-items-center'>
                      <span
                        style={{
                          flexShrink: 0,
                          width: 28,
                          height: 28,
                          border: '1px solid #999',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.75rem',
                          color: '#666',
                        }}
                      >
                        {i + 1}
                      </span>
                      <p className='mb-0 small' style={{ lineHeight: 1.6 }}>
                        {rule}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
