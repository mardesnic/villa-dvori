import GalleryGrid from '@/components/GalleryGrid';
import { exteriorImages, interiorImages } from '@/data/images';

interface Props {
  exteriorTitle: string;
  exteriorSubtitle: string;
  interiorTitle: string;
  interiorSubtitle: string;
}

export default function ExteriorInteriorGalleries({
  exteriorTitle,
  exteriorSubtitle,
  interiorTitle,
  interiorSubtitle,
}: Props) {
  return (
    <>
      <div className='py-4'>
        <GalleryGrid
          images={exteriorImages}
          layout='exterior'
          title={exteriorTitle}
          subtitle={exteriorSubtitle}
        />
      </div>
      <div className='pb-4'>
        <GalleryGrid
          images={interiorImages}
          layout='interior'
          title={interiorTitle}
          subtitle={interiorSubtitle}
        />
      </div>
    </>
  );
}
