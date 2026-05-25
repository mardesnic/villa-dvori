import VideoSection from '@/components/VideoSection';
import ContactSection from '@/components/ContactSection';

interface Props {
  heading: string;
}

export default function VideoPageContent({ heading }: Props) {
  return (
    <main style={{ paddingTop: 56 }}>
      <VideoSection heading={heading} headingAs='h1' />
      <ContactSection />
    </main>
  );
}
