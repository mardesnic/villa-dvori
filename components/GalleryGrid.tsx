'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/plugins/counter.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

interface GalleryImage {
  src: string;
  alt: string;
  thumb?: string;
}

interface Props {
  images: GalleryImage[];
  layout?: 'exterior' | 'interior' | 'grid';
  title?: string;
  subtitle?: string;
}

const btnStyle: React.CSSProperties = {
  padding: 0,
  border: 'none',
  background: 'none',
  overflow: 'hidden',
  cursor: 'pointer',
};

const hoverIn = (e: React.MouseEvent<HTMLButtonElement>) => {
  const img = e.currentTarget.querySelector('img');
  if (img) img.style.transform = 'scale(1.05)';
};
const hoverOut = (e: React.MouseEvent<HTMLButtonElement>) => {
  const img = e.currentTarget.querySelector('img');
  if (img) img.style.transform = 'scale(1)';
};

export default function GalleryGrid({
  images,
  layout = 'grid',
  title,
  subtitle,
}: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openLightbox = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const slides = images.map(img => ({ src: img.src, alt: img.alt }));

  const SectionHeader = () =>
    title || subtitle ? (
      <div className='mb-3'>
        {title && <p className='section-label'>{title}</p>}
        {subtitle && (
          <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.25rem' }}>
            {subtitle}
          </p>
        )}
      </div>
    ) : null;

  if (layout === 'exterior') {
    return (
      <div className='container-fluid px-3 px-md-4'>
        <SectionHeader />
        <div className='exterior-grid'>
          <button
            className='gallery-btn exterior-grid-main'
            onClick={() => openLightbox(0)}
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
            style={btnStyle}
          >
            <Image
              src={images[0].thumb || images[0].src}
              alt={images[0].alt}
              fill
              style={{ objectFit: 'cover', transition: 'transform 0.4s' }}
            />
          </button>
          <div className='exterior-grid-rest'>
            {images.slice(1).map((img, i) => (
              <button
                key={i}
                className='gallery-btn'
                onClick={() => openLightbox(i + 1)}
                onMouseEnter={hoverIn}
                onMouseLeave={hoverOut}
                style={{ ...btnStyle, position: 'relative' }}
              >
                <Image
                  src={img.thumb || img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.4s' }}
                />
              </button>
            ))}
          </div>
        </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
          plugins={[Counter, Zoom]}
        />
      </div>
    );
  }

  if (layout === 'interior') {
    return (
      <div className='container-fluid px-3 px-md-4'>
        <SectionHeader />
        <div className='interior-grid'>
          <div className='interior-grid-rest'>
            {images.slice(1, 5).map((img, i) => (
              <button
                key={i}
                className='gallery-btn'
                onClick={() => openLightbox(i + 1)}
                onMouseEnter={hoverIn}
                onMouseLeave={hoverOut}
                style={{ ...btnStyle, position: 'relative' }}
              >
                <Image
                  src={img.thumb || img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.4s' }}
                />
              </button>
            ))}
          </div>
          <button
            className='gallery-btn interior-grid-main'
            onClick={() => openLightbox(0)}
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
            style={btnStyle}
          >
            <Image
              src={images[0].thumb || images[0].src}
              alt={images[0].alt}
              fill
              style={{ objectFit: 'cover', transition: 'transform 0.4s' }}
            />
          </button>
        </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
          plugins={[Counter, Zoom]}
        />
      </div>
    );
  }

  return (
    <div className='container-fluid px-3 px-md-4'>
      <SectionHeader />
      <div className='row g-2'>
        {images.map((img, i) => (
          <div key={i} className='col-6 col-md-4 col-lg-3'>
            <button
              className='gallery-btn'
              onClick={() => openLightbox(i)}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
              style={{
                ...btnStyle,
                display: 'block',
                width: '100%',
                aspectRatio: '4 / 3',
                position: 'relative',
              }}
            >
              <Image
                src={img.thumb || img.src}
                alt={img.alt}
                fill
                loading={i < 8 ? 'eager' : 'lazy'}
                style={{ objectFit: 'cover', transition: 'transform 0.4s' }}
              />
            </button>
          </div>
        ))}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Counter, Zoom]}
      />
    </div>
  );
}
