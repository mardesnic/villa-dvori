import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Villa Dvori — Peljesac, Croatia",
  description:
    "Browse all photos of Villa Dvori — pool, gardens, terraces, bedrooms, kitchen, and stunning sea views in Podobuce, Peljesac.",
};

const allImages = Array.from({ length: 39 }, (_, i) => ({
  src: `/villa-dvori/img/novo/villa-dvori-${i + 1}.webp`,
  thumb: `/villa-dvori/img/novo/thumb/villa-dvori-${i + 1}.webp`,
  alt: `Villa Dvori photo ${i + 1}`,
}));

export default function GalleryPage() {
  return (
    <main style={{ paddingTop: 48 }}>
      <div className="container py-5">
        <h1 className="text-center mb-1" style={{ letterSpacing: "0.1em" }}>GALLERY</h1>
        <p
          className="text-center mb-5 font-garamond"
          style={{ fontStyle: "italic", fontSize: "1.1rem" }}
        >
          Even more photos of Villa Dvori
        </p>
        <GalleryGrid images={allImages} layout="grid" />
      </div>
    </main>
  );
}
