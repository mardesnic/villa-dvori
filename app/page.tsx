import type { Metadata } from 'next';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import AccommodationSection from '@/components/AccommodationSection';
import GalleryGrid from '@/components/GalleryGrid';
import LocationSection from '@/components/LocationSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import PageShell from '@/components/PageShell';
import { exteriorImages, interiorImages } from '@/data/images';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://villadvori.com'),
  title: 'Villa Dvori | Mediterranean House for 12 | Peljesac, Croatia',
  description:
    'Villa Dvori — luxury holiday villa in Podobuce, Peljesac, Croatia. Heated pool, Mediterranean gardens, sea views. Sleeps up to 12 guests.',
  openGraph: {
    type: 'website',
    title: 'Villa Dvori | Mediterranean House for 12 | Peljesac, Croatia',
    description:
      'Villa Dvori — luxury holiday villa in Podobuce, Peljesac, Croatia. Heated pool, Mediterranean gardens, sea views. Sleeps up to 12 guests.',
    locale: 'en_US',
    images: [{ url: '/images/hero.webp', alt: 'Villa Dvori exterior view' }],
  },
};

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

export default async function RootPage() {
  setRequestLocale('en');
  const messages = await getMessages();
  const t = await getTranslations('pages.home');

  return (
    <PageShell locale='en' messages={messages}>
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
            title={t('exteriorTitle')}
            subtitle={t('exteriorSubtitle')}
          />
        </div>
        <div className='pb-4'>
          <GalleryGrid
            images={interiorImages}
            layout='interior'
            title={t('interiorTitle')}
            subtitle={t('interiorSubtitle')}
          />
        </div>
        <LocationSection />
        <TeamSection />
        <ContactSection />
      </main>
    </PageShell>
  );
}
