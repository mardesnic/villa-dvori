export const exteriorImages = [
  { src: '/images/gallery/exterior/1.webp', thumb: '/images/gallery/exterior/thumbs/1.webp', alt: 'Villa Dvori exterior view 1' },
  { src: '/images/gallery/exterior/2.webp', thumb: '/images/gallery/exterior/thumbs/2.webp', alt: 'Villa Dvori exterior view 2' },
  { src: '/images/gallery/exterior/3.webp', thumb: '/images/gallery/exterior/thumbs/3.webp', alt: 'Villa Dvori exterior view 3' },
  { src: '/images/gallery/exterior/4.webp', thumb: '/images/gallery/exterior/thumbs/4.webp', alt: 'Villa Dvori exterior view 4' },
  { src: '/images/gallery/exterior/5.webp', thumb: '/images/gallery/exterior/thumbs/5.webp', alt: 'Villa Dvori floor plan' },
];

export const interiorImages = [
  { src: '/images/gallery/interior/1.webp', thumb: '/images/gallery/interior/thumbs/1.webp', alt: 'Villa Dvori interior 1' },
  { src: '/images/gallery/interior/2.webp', thumb: '/images/gallery/interior/thumbs/2.webp', alt: 'Villa Dvori interior 2' },
  { src: '/images/gallery/interior/3.webp', thumb: '/images/gallery/interior/thumbs/3.webp', alt: 'Villa Dvori interior 3' },
  { src: '/images/gallery/interior/4.webp', thumb: '/images/gallery/interior/thumbs/4.webp', alt: 'Villa Dvori interior 4' },
  { src: '/images/gallery/interior/5.webp', thumb: '/images/gallery/interior/thumbs/5.webp', alt: 'Villa Dvori interior 5' },
  { src: '/images/gallery/interior/6.webp', thumb: '/images/gallery/interior/thumbs/6.webp', alt: 'Villa Dvori interior 6' },
  { src: '/images/gallery/interior/7.webp', thumb: '/images/gallery/interior/thumbs/7.webp', alt: 'Villa Dvori interior 7' },
  { src: '/images/gallery/interior/8.webp', thumb: '/images/gallery/interior/thumbs/8.webp', alt: 'Villa Dvori interior 8' },
];

export const allPhotos = [
  ...Array.from({ length: 39 }, (_, i) => ({
    src: `/images/gallery/${i + 1}.webp`,
    thumb: `/images/gallery/thumbs/${i + 1}.webp`,
    alt: `Villa Dvori photo ${i + 1}`,
  })),
  { src: '/images/gallery/exterior/5.webp', thumb: '/images/gallery/exterior/thumbs/5.webp', alt: 'Villa Dvori floor plan' },
];
