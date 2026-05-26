import { getTranslations } from 'next-intl/server';
import FloorPlanLightbox from '@/components/FloorPlanLightbox';

export default async function SpaceSection() {
  const t = await getTranslations('space');

  return (
    <section style={{ borderTop: '1px solid #e2dfda' }}>
    <div className='container py-5'>
      <div className='row gy-5 align-items-center'>
        <div className='col-md-6'>
          <p className='section-label mb-3'>{t('label')}</p>
          <h2 className='mb-4' style={{ lineHeight: 1.3 }}>
            <span className='font-garamond' style={{ fontStyle: 'italic' }}>
              {t('headingItalic')}{' '}
            </span>
            {t('headingStrong')}
          </h2>
          <p style={{ lineHeight: 1.9, color: '#444' }}>{t('p1')}</p>
          <p className='mt-3' style={{ lineHeight: 1.9, color: '#444' }}>
            {t('p2')}
          </p>
        </div>
        <div className='col-md-5 offset-md-1'>
          <FloorPlanLightbox alt={t('floorPlanAlt')} />
        </div>
      </div>
    </div>
    </section>
  );
}
