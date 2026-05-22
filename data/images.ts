export const exteriorImages = [
  {
    src: '/images/gallery/exterior/1.webp',
    alt: 'Villa Dvori exterior view 1',
  },
  {
    src: '/images/gallery/exterior/2.webp',
    alt: 'Villa Dvori exterior view 2',
  },
  {
    src: '/images/gallery/exterior/3.webp',
    alt: 'Villa Dvori exterior view 3',
  },
  {
    src: '/images/gallery/exterior/4.webp',
    alt: 'Villa Dvori exterior view 4',
  },
];

export const interiorImages = [
  {
    src: '/images/gallery/interior/1.webp',
    alt: 'Villa Dvori interior 1',
  },
  {
    src: '/images/gallery/interior/2.webp',
    alt: 'Villa Dvori interior 2',
  },
  {
    src: '/images/gallery/interior/3.webp',
    alt: 'Villa Dvori interior 3',
  },
  {
    src: '/images/gallery/interior/4.webp',
    alt: 'Villa Dvori interior 4',
  },
  {
    src: '/images/gallery/interior/5.webp',
    alt: 'Villa Dvori interior 5',
  },
  {
    src: '/images/gallery/interior/6.webp',
    alt: 'Villa Dvori interior 6',
  },
  {
    src: '/images/gallery/interior/7.webp',
    alt: 'Villa Dvori interior 7',
  },
  {
    src: '/images/gallery/interior/8.webp',
    alt: 'Villa Dvori interior 8',
  },
];

export const allPhotos = Array.from({ length: 39 }, (_, i) => ({
  src: `/images/gallery/${i + 1}.webp`,
  thumb: `/images/gallery/thumbs/${i + 1}.webp`,
  alt: `Villa Dvori photo ${i + 1}`,
}));
