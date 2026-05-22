"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface GalleryImage {
  src: string;
  alt: string;
  thumb?: string;
}

interface Props {
  images: GalleryImage[];
  layout?: "exterior" | "interior" | "grid";
  title?: string;
}

export default function GalleryGrid({ images, layout = "grid", title }: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openLightbox = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const slides = images.map((img) => ({ src: img.src, alt: img.alt }));

  const imgBtn = (i: number, aspectStyle: React.CSSProperties) => (
    <button
      key={i}
      onClick={() => openLightbox(i)}
      style={{
        display: "block",
        width: "100%",
        padding: 0,
        border: "none",
        background: "none",
        overflow: "hidden",
        cursor: "pointer",
        ...aspectStyle,
      }}
    >
      <Image
        src={images[i].src}
        alt={images[i].alt}
        fill
        style={{ objectFit: "cover", transition: "transform 0.4s" }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
      />
    </button>
  );

  if (layout === "exterior") {
    return (
      <div className="container-fluid px-3 px-md-4">
        {title && <p className="section-label mb-3">{title}</p>}
        <div className="row g-1 g-md-2" style={{ minHeight: 300 }}>
          <div className="col-6" style={{ position: "relative" }}>
            {imgBtn(0, { position: "relative", height: "100%" })}
          </div>
          <div className="col-6">
            <div className="row g-1 g-md-2" style={{ height: "100%" }}>
              <div className="col-12" style={{ position: "relative", height: "50%" }}>
                {imgBtn(1, { position: "relative", height: "100%" })}
              </div>
              <div className="col-6" style={{ position: "relative", height: "50%" }}>
                {imgBtn(2, { position: "relative", height: "100%" })}
              </div>
              <div className="col-6" style={{ position: "relative", height: "50%" }}>
                {imgBtn(3, { position: "relative", height: "100%" })}
              </div>
            </div>
          </div>
        </div>
        <Lightbox open={open} close={() => setOpen(false)} index={index} slides={slides} />
      </div>
    );
  }

  if (layout === "interior") {
    return (
      <div className="container-fluid px-3 px-md-4">
        {title && <p className="section-label mb-3">{title}</p>}
        <div className="row g-1 g-md-2">
          {images.slice(0, 8).map((_, i) => (
            <div key={i} className="col-6 col-md-3" style={{ position: "relative", paddingBottom: "25%" }}>
              <button
                onClick={() => openLightbox(i)}
                style={{
                  position: "absolute",
                  inset: "4px",
                  padding: 0,
                  border: "none",
                  background: "none",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <Image
                  src={images[i].src}
                  alt={images[i].alt}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.4s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
                />
              </button>
            </div>
          ))}
        </div>
        <Lightbox open={open} close={() => setOpen(false)} index={index} slides={slides} />
      </div>
    );
  }

  // Grid layout for gallery page
  return (
    <>
      {title && (
        <p className="section-label text-center mb-4" style={{ fontSize: "1rem" }}>
          {title}
        </p>
      )}
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2">
        {images.map((img, i) => (
          <div key={i} className="col">
            <button
              onClick={() => openLightbox(i)}
              style={{
                display: "block",
                width: "100%",
                padding: 0,
                border: "none",
                background: "none",
                cursor: "pointer",
                overflow: "hidden",
              }}
            >
              <Image
                src={img.thumb || img.src}
                alt={img.alt}
                width={400}
                height={300}
                className="img-fluid"
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            </button>
          </div>
        ))}
      </div>
      <Lightbox open={open} close={() => setOpen(false)} index={index} slides={slides} />
    </>
  );
}
