const rules = [
  'Villa Dvori is only rented as a whole unit.',
  'Villa Dvori minimum stay is 7 nights.',
  'Villa Dvori is only rented from Saturdays to Saturdays.',
  'Villa Dvori is only rented for up to 12 persons, infants and children included.',
  'Reservation fee is 25% of the full renting price.',
  'Check in is after 16:00, check out before 10:00.',
];

export default function ContactSection() {
  return (
    <section id='contact' style={{ background: '#e8e6e2' }}>
      <div className='container py-5'>
        {/* Top contact block */}
        <div className='row justify-content-center mb-5'>
          <div className='col-lg-6 text-center'>
            <p className='section-label mb-2'>Availability &amp; Booking</p>
            <h2
              className='mb-1'
              style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                letterSpacing: '0.05em',
              }}
            >
              CONTACT US
            </h2>
            <p
              className='font-garamond mb-4'
              style={{
                fontStyle: 'italic',
                fontSize: '1.15rem',
                color: '#555',
              }}
            >
              Send us your request and we will be happy to provide our best
              offer
            </p>
            <div className='d-flex flex-column flex-sm-row justify-content-center gap-3'>
              <a
                href='mailto:sanda.desnica@gmail.com'
                className='btn-villa'
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                sanda.desnica@gmail.com
              </a>
              <a
                href='tel:+385914714378'
                className='btn-villa'
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                +385 91 471 4378
              </a>
            </div>
            <p className='mt-4 mb-0' style={{ fontSize: '0.8rem', color: '#888' }}>
              Also available on{' '}
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

        <hr style={{ borderColor: '#c8c5bf', margin: '0 0 2.5rem' }} />

        {/* House rules */}
        <div className='row justify-content-center'>
          <div className='col-lg-7'>
            <p className='section-label text-center mb-4'>House Rules</p>
            <div className='row gy-3'>
              {rules.map((rule, i) => (
                <div key={i} className='col-md-6'>
                  <div className='d-flex gap-3 align-items-start'>
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
                        marginTop: 2,
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
    </section>
  );
}
