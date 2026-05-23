import Image from 'next/image';

export default function TeamSection() {
  return (
    <section style={{ background: '#fff' }}>
      <div className='container py-5 text-center'>
        <p className='section-label mb-3'>Your Hosts</p>
        <h2 className='mb-3' style={{ lineHeight: 1.3 }}>
          <span className='font-garamond' style={{ fontStyle: 'italic' }}>
            Villa Dvori team,{' '}
          </span>
          A FAMILY
        </h2>
        <p
          style={{
            lineHeight: 1.9,
            color: '#444',
            maxWidth: 560,
            margin: '0 auto 2.5rem',
          }}
        >
          We are a family from Dubrovnik who built Villa Dvori to create the
          perfect space for multiple families to holiday together. We live
          locally and are always on hand — for restaurant tips, boat taxis, or
          simply a warm welcome when you arrive.
        </p>
        <Image
          src='/images/family.jpg'
          alt='Villa Dvori team — a family'
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
