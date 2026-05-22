'use client';

import Image from 'next/image';

const destinations = [
  {
    img: '/images/location/podobuce.jpg',
    name: 'Podobuče',
    sub: 'Pelješac Peninsula',
  },
  {
    img: '/images/location/korcula.jpg',
    name: 'Korčula Island',
    sub: 'boat taxi ride',
  },
  {
    img: '/images/location/mljet.jpg',
    name: 'Mljet National Park',
    sub: 'boat taxi ride',
  },
  {
    img: '/images/location/dubrovnik.jpg',
    name: 'Dubrovnik',
    sub: '2 hrs by car',
  },
];

export default function LocationSection() {
  return (
    <section style={{ background: '#f8f7f5' }}>
      {/* Text block */}
      <div className='container py-5'>
        <div className='row justify-content-center'>
          <div className='col-lg-7 text-center'>
            <h2 className='mb-1' style={{ letterSpacing: '0.08em' }}>
              LOCATION
            </h2>
            <p
              className='font-garamond mb-4'
              style={{ fontStyle: 'italic', fontSize: '1.3rem', color: '#666' }}
            >
              Podobuce, Pelješac, Croatia
            </p>
            <p style={{ lineHeight: 1.9, color: '#444' }}>
              Podobuce is a quiet fishermen&apos;s village on the Pelješac
              peninsula — two restaurants, crystal-clear water, and an unhurried
              pace of life. From here you can reach Korčula island by boat taxi,
              explore Mljet&apos;s lakes and forests, taste the peninsula&apos;s
              famous Dingač wines, and drive to Dubrovnik for a day in the old
              city.
            </p>
          </div>
        </div>
      </div>

      {/* Photo destination cards */}
      <div className='container-fluid px-0 pb-0'>
        <div className='row g-0'>
          {destinations.map(({ img, name, sub }) => (
            <div key={name} className='col-6 col-md-3'>
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={img}
                  alt={name}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.6s' }}
                  onMouseEnter={e =>
                    ((e.currentTarget as HTMLImageElement).style.transform =
                      'scale(1.06)')
                  }
                  onMouseLeave={e =>
                    ((e.currentTarget as HTMLImageElement).style.transform =
                      'scale(1)')
                  }
                />
                {/* Gradient overlay */}
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
                    {name}
                  </div>
                  <div
                    className='font-garamond'
                    style={{
                      fontStyle: 'italic',
                      fontSize: '1rem',
                      color: 'rgba(255,255,255,0.8)',
                    }}
                  >
                    {sub}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
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
