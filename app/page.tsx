import Hero from '@/components/Hero';
import AccommodationSection from '@/components/AccommodationSection';
import GalleryGrid from '@/components/GalleryGrid';
import LocationSection from '@/components/LocationSection';
import TeamSection from '@/components/TeamSection';
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

export default function Home() {
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
          title='Exterior'
          subtitle='Gardens, pool, terraces & Adriatic views'
        />
      </div>

      <div className='pb-4'>
        <GalleryGrid
          images={interiorImages}
          layout='interior'
          title='Interior'
          subtitle='Bedrooms, living spaces & fully equipped kitchen'
        />
      </div>

      <LocationSection />

      <TeamSection />

      <ContactSection />
    </main>
  );
}
