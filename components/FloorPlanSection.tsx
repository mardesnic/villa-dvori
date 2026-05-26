'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

interface Props {
  title: string;
  subtitle: string;
}

export default function FloorPlanSection({ title, subtitle }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className='container-fluid px-3 px-md-4 pb-4'>
      <div className='mb-3'>
        <p className='section-label'>{title}</p>
        <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.25rem' }}>
          {subtitle}
        </p>
      </div>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <button
          onClick={() => setOpen(true)}
          style={{
            padding: 0,
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            display: 'block',
            width: '100%',
            position: 'relative',
            aspectRatio: '4 / 3',
            overflow: 'hidden',
          }}
          onMouseEnter={e => {
            const img = e.currentTarget.querySelector('img');
            if (img) img.style.transform = 'scale(1.03)';
          }}
          onMouseLeave={e => {
            const img = e.currentTarget.querySelector('img');
            if (img) img.style.transform = 'scale(1)';
          }}
        >
          <Image
            src='/images/gallery/floor-plan/thumbs/1.webp'
            alt={title}
            fill
            style={{ objectFit: 'contain', transition: 'transform 0.4s' }}
          />
        </button>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: '/images/gallery/floor-plan/1.webp', alt: title }]}
        plugins={[Zoom]}
      />
    </div>
  );
}
