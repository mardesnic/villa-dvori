import Hero from '@/components/Hero';
import AccommodationSection from '@/components/AccommodationSection';
import GalleryGrid from '@/components/GalleryGrid';
import LocationSection from '@/components/LocationSection';
import TeamSection from '@/components/TeamSection';
import ReviewsSection from '@/components/ReviewsSection';
import ContactSection from '@/components/ContactSection';
import { exteriorImages, interiorImages } from '@/data/images';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'Villa Dvori',
  description:
    'Luxury holiday villa in Podobuče, Pelješac, Croatia. Heated pool, Mediterranean gardens, sea views. Sleeps up to 12 guests across three private apartments.',
  url: 'https://villadvori.com',
  image: 'https://villadvori.com/images/hero.webp',
  telephone: '+385914714378',
  email: 'sanda.desnica@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Podobuče',
    addressRegion: 'Pelješac',
    addressCountry: 'HR',
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Heated swimming pool', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'WiFi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Air conditioning', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Barbecue', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Table tennis', value: true },
  ],
  numberOfRooms: 6,
  occupancy: { '@type': 'QuantitativeValue', maxValue: 12 },
};

interface Props {
  exteriorTitle: string;
  exteriorSubtitle: string;
  interiorTitle: string;
  interiorSubtitle: string;
}

export default function HomePageContent({
  exteriorTitle,
  exteriorSubtitle,
  interiorTitle,
  interiorSubtitle,
}: Props) {
  return (
    <main>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AccommodationSection />
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
      <LocationSection />
      <TeamSection />
      <ReviewsSection preview />
      <ContactSection />
    </main>
  );
}
