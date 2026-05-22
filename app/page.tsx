import Hero from "@/components/Hero";
import AccommodationSection from "@/components/AccommodationSection";
import GalleryGrid from "@/components/GalleryGrid";
import LocationSection from "@/components/LocationSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

const exteriorImages = [
  { src: "/villa-dvori/img/novo/exterior/1.webp", alt: "Villa Dvori exterior view 1" },
  { src: "/villa-dvori/img/novo/exterior/2.webp", alt: "Villa Dvori exterior view 2" },
  { src: "/villa-dvori/img/novo/exterior/3.webp", alt: "Villa Dvori exterior view 3" },
  { src: "/villa-dvori/img/novo/exterior/4.webp", alt: "Villa Dvori exterior view 4" },
];

const interiorImages = [
  { src: "/villa-dvori/img/novo/interior/1.webp", alt: "Villa Dvori interior 1" },
  { src: "/villa-dvori/img/novo/interior/2.webp", alt: "Villa Dvori interior 2" },
  { src: "/villa-dvori/img/novo/interior/3.webp", alt: "Villa Dvori interior 3" },
  { src: "/villa-dvori/img/novo/interior/4.webp", alt: "Villa Dvori interior 4" },
  { src: "/villa-dvori/img/novo/interior/5.webp", alt: "Villa Dvori interior 5" },
  { src: "/villa-dvori/img/novo/interior/6.webp", alt: "Villa Dvori interior 6" },
  { src: "/villa-dvori/img/novo/interior/7.webp", alt: "Villa Dvori interior 7" },
  { src: "/villa-dvori/img/novo/interior/8.webp", alt: "Villa Dvori interior 8" },
];

export default function Home() {
  return (
    <main style={{ paddingTop: 48 }}>
      <Hero />

      <AccommodationSection />

      <div className="py-3">
        <GalleryGrid images={exteriorImages} layout="exterior" title="Exterior gallery" />
      </div>

      <div className="py-3">
        <GalleryGrid images={interiorImages} layout="interior" title="Interior gallery" />
      </div>

      <div className="text-center py-4">
        <Link href="/gallery/" className="btn-villa" style={{ textDecoration: "none" }}>
          <span className="font-garamond" style={{ fontStyle: "italic" }}>more </span>PHOTOS &gt;
        </Link>
      </div>

      <LocationSection />

      <TeamSection />

      <ContactSection />
    </main>
  );
}
