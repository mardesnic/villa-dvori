import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import reviewsData from '@/data/reviews.json';
import Button from '@/components/Button';

const PREVIEW_COUNT = 3;

export default async function ReviewsSection({ preview = false }: { preview?: boolean }) {
  const t = await getTranslations('reviews');
  const reviews = preview ? reviewsData.slice(0, PREVIEW_COUNT) : reviewsData;

  return (
    <section style={{ background: '#f7f5f1' }}>
      <div className='container py-5'>
        <p className='section-label text-center mb-3'>{t('label')}</p>
        <h2 className='text-center mb-5' style={{ lineHeight: 1.3 }}>
          <span className='font-garamond' style={{ fontStyle: 'italic' }}>
            {t('headingItalic')}{' '}
          </span>
          {t('headingStrong')}
        </h2>

        <div className='row g-4'>
          {reviews.map((review, i) => (
            <div key={i} className='col-12 col-md-6 col-lg-4'>
              <div
                style={{
                  background: '#fff',
                  borderRadius: 4,
                  padding: '1.5rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <p
                  className='font-garamond'
                  style={{
                    fontStyle: 'italic',
                    fontSize: '1rem',
                    lineHeight: 1.75,
                    color: '#444',
                    margin: 0,
                    flex: 1,
                  }}
                >
                  &ldquo;{review.text}&rdquo;
                </p>
                <p
                  style={{
                    fontSize: '0.68rem',
                    letterSpacing: '0.1em',
                    color: '#999',
                    margin: 0,
                    fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  }}
                >
                  — {review.author}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-5 d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3'>
          {preview && (
            <Button variant='outline' as={Link} href='/reviews'>
              {t('viewAll')}
            </Button>
          )}
          {!preview && <a
            href='https://maps.app.goo.gl/RZEshETRXGrNHjHm6'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: "var(--font-garamond), 'EB Garamond', serif",
              fontSize: '0.95rem',
              letterSpacing: '0.03em',
              color: '#777',
              textDecoration: 'none',
            }}
          >
            <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
              <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'/>
              <circle cx='12' cy='10' r='3'/>
            </svg>
            {t('viewOnGoogle')}
          </a>}
        </div>
      </div>
    </section>
  );
}
