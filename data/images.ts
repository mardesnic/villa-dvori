export const exteriorImages = Array.from({ length: 5 }, (_, i) => ({
  src: `/images/gallery/exterior/${i + 1}.webp`,
  thumb: `/images/gallery/exterior/thumbs/${i + 1}.webp`,
  alt: `Villa Dvori exterior view ${i + 1}`,
}));

export const interiorImages = Array.from({ length: 5 }, (_, i) => ({
  src: `/images/gallery/interior/${i + 1}.webp`,
  thumb: `/images/gallery/interior/thumbs/${i + 1}.webp`,
  alt: `Villa Dvori interior ${i + 1}`,
}));

export const allPhotos = [
  ...Array.from({ length: 40 }, (_, i) => ({
    src: `/images/gallery/${i + 1}.webp`,
    thumb: `/images/gallery/thumbs/${i + 1}.webp`,
    alt: `Villa Dvori photo ${i + 1}`,
  })),
];
