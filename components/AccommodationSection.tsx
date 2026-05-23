const details = [
  { label: 'ACCOMMODATES', value: '12' },
  { label: 'ROOMS', value: '6' },
  { label: 'KINGSIZE BEDS', value: '3' },
  { label: 'BATHROOMS', value: '6' },
  { label: 'AC UNITS', value: '4' },
  { label: 'WIFI', value: '✔' },
  { label: 'MIN. STAY', value: '7 days' },
  { label: 'ARRIVAL', value: 'Saturday' },
  { label: 'TOTAL AREA', value: '208 m²' },
];

export default function AccommodationSection() {
  return (
    <section id='intro' className='container py-5' style={{ scrollMarginTop: 56 }}>
      <div className='row gy-4'>
        <div className='col-md-7'>
          <h1 className='mb-4' style={{ lineHeight: 1.3 }}>
            <strong>VILLA DVORI</strong>
            <br />
            <span
              className='font-garamond'
              style={{ fontSize: '1.1em', fontStyle: 'italic' }}
            >
              Mediterranean house for 12
            </span>
          </h1>
          <p className='text-justify' style={{ lineHeight: 1.8 }}>
            Would you like to enjoy a sea view from a heated swimming pool
            surrounded by beautiful Mediterranean gardens? The villa is composed
            of three living units, each with two bedrooms, a bathroom and a
            living room. It also has a spacious and fully equipped
            kitchen/dining room area also with its own bathroom.
          </p>
          <p className='mt-3' style={{ lineHeight: 1.8 }}>
            It is built with an idea to make a perfect space for multiple
            families who wish to spend a lovely time together while keeping
            their personal space. All of the living units have a TV, WiFi and an
            air conditioning unit.
          </p>
        </div>

        <div className='col-md-4 offset-md-1'>
          <p className='section-label mb-3'>Accommodation details</p>
          <table className='table table-sm table-borderless'>
            <tbody>
              {details.map(({ label, value }) => (
                <tr key={label} className='border-bottom'>
                  <td
                    className='text-muted ps-0'
                    style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}
                  >
                    {label}
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
