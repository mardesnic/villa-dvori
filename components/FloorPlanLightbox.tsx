'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

interface Props {
  alt: string;
}

export default function FloorPlanLightbox({ alt }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: 0,
          border: 'none',
          background: 'none',
          cursor: 'zoom-in',
          display: 'block',
          width: '100%',
        }}
        onMouseEnter={e => {
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.transform = 'scale(1.02)';
        }}
        onMouseLeave={e => {
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.transform = 'scale(1)';
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <Image
            src='/images/gallery/floor-plan/thumbs/1.webp'
            alt={alt}
            width={900}
            height={506}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              transition: 'transform 0.4s',
            }}
          />
        </div>
      </button>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: '/images/gallery/floor-plan/1.webp', alt }]}
        plugins={[Zoom]}
      />
    </>
  );
}
