import { getTranslations } from 'next-intl/server';

export default async function AccommodationSection() {
  const t = await getTranslations('accommodation');

  const details = [
    { key: 'accommodates', value: '12' },
    { key: 'rooms', value: '6' },
    { key: 'beds', value: '3' },
    { key: 'bathrooms', value: '6' },
    { key: 'ac', value: '4' },
    { key: 'wifi', value: '✔' },
    { key: 'minStay', value: t('values.minStay') },
    { key: 'arrival', value: t('values.arrival') },
    { key: 'area', value: '208 m²' },
  ];

  return (
    <section id='intro' className='container py-5' style={{ scrollMarginTop: 56 }}>
      <div className='row gy-4'>
        <div className='col-md-7'>
          <h1 className='mb-4' style={{ lineHeight: 1.3 }}>
            <strong>{t('heading')}</strong>
            <br />
            <span
              className='font-garamond'
              style={{ fontSize: '1.1em', fontStyle: 'italic' }}
            >
              {t('subheading')}
            </span>
          </h1>
          <p className='text-justify' style={{ lineHeight: 1.8 }}>
            {t('p1')}
          </p>
          <p className='mt-3' style={{ lineHeight: 1.8 }}>
            {t('p2')}
          </p>
        </div>

        <div className='col-md-4 offset-md-1'>
          <p className='section-label mb-3'>{t('detailsLabel')}</p>
          <table className='table table-sm table-borderless'>
            <tbody>
              {details.map(({ key, value }) => (
                <tr key={key} className='border-bottom'>
                  <td
                    className='text-muted ps-0'
                    style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}
                  >
                    {t(`details.${key}` as Parameters<typeof t>[0])}
                  </td>
                  <td className='fw-semibold pe-0'>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
