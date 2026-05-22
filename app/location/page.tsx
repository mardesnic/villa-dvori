import type { Metadata } from 'next';
import LocationSection from '@/components/LocationSection';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Location | Villa Dvori — Peljesac, Croatia',
  description:
    "Villa Dvori is located in Podobuce, a quiet fishermen's village on the Pelješac peninsula. Explore nearby Korčula, Mljet, and Dubrovnik.",
};

export default function LocationPage() {
  return (
    <main style={{ paddingTop: 56 }}>
      <LocationSection />
      <ContactSection />
    </main>
  );
}
