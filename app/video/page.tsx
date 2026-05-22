import type { Metadata } from 'next';
import VideoSection from '@/components/VideoSection';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Video Tour | Villa Dvori — Peljesac, Croatia',
  description:
    'Watch a video tour of Villa Dvori in Podobuce, Peljesac, Croatia. See the pool, gardens, terraces, and stunning Adriatic sea views.',
};

export default function VideoPage() {
  return (
    <main style={{ paddingTop: 56 }}>
      <VideoSection
        heading='VIDEO TOUR'
        subtitle='Villa Dvori & Podobuce, Pelješac'
        headingAs='h1'
      />

      <ContactSection />
    </main>
  );
}
