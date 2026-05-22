"use client";

import { useState } from "react";
import Image from "next/image";

const locationImages = [
  { src: "/villa-dvori/img/galerija/location/1 Podobuce (1).jpg", alt: "Podobuce village" },
  { src: "/villa-dvori/img/galerija/location/1 Podobuce (2).jpg", alt: "Podobuce bay" },
  { src: "/villa-dvori/img/galerija/location/1 Podobuce (3).jpg", alt: "Podobuce coastline" },
  { src: "/villa-dvori/img/galerija/location/1 Podobuce (4).jpg", alt: "Podobuce sea view" },
  { src: "/villa-dvori/img/galerija/location/1 Podobuce (5).jpg", alt: "Podobuce harbour" },
  { src: "/villa-dvori/img/galerija/location/3._Near_Korcula_island.jpg", alt: "Near Korcula island" },
  { src: "/villa-dvori/img/galerija/location/4._Short_boat_ride_from_Mljet.jpg", alt: "Short boat ride from Mljet" },
  { src: "/villa-dvori/img/galerija/location/5._Two_hours_by_car_from_Dubrovnik.jpg", alt: "Two hours by car from Dubrovnik" },
];

export default function LocationSection() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="container py-5">
      <div className="row gy-4 align-items-start">
        <div className="col-md-5">
          <h2 style={{ lineHeight: 1.4 }}>
            LOCATION
            <br />
            <span className="font-garamond" style={{ fontStyle: "italic", fontSize: "1em" }}>
              Peljesac, Croatia
            </span>
          </h2>
          <p className="mt-3" style={{ lineHeight: 1.8 }}>
            Podobuce is a lovely fishermen&apos;s village where you can find two
            restaurants serving traditional Croatian food. You can get a boat
            taxi and go for a day excursion to Korcula island known as the
            birthplace of Marco Polo, or island Mljet with its wonderful
            national park.
          </p>
          <p className="mt-2" style={{ lineHeight: 1.8 }}>
            Dubrovnik, with its world famous city walls and Game of Thrones
            filming locations is only 2 hours by car away.
          </p>
        </div>

        <div className="col-md-6 offset-md-1">
          <p className="section-label mb-2">Location and surroundings gallery</p>

          {/* Main slider image */}
          <div style={{ position: "relative", width: "100%", paddingBottom: "62%", background: "#eee" }}>
            <Image
              src={locationImages[current].src}
              alt={locationImages[current].alt}
              fill
              style={{ objectFit: "cover" }}
            />
            <button
              onClick={() => setCurrent((c) => (c - 1 + locationImages.length) % locationImages.length)}
              style={{
                position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.7)", border: "none", cursor: "pointer",
                fontSize: "1.4rem", lineHeight: 1, padding: "4px 10px",
              }}
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={() => setCurrent((c) => (c + 1) % locationImages.length)}
              style={{
                position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.7)", border: "none", cursor: "pointer",
                fontSize: "1.4rem", lineHeight: 1, padding: "4px 10px",
              }}
              aria-label="Next"
            >
              ›
            </button>
          </div>

          {/* Thumbnails */}
          <div className="d-flex gap-1 mt-1 overflow-auto">
            {locationImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  flexShrink: 0, width: 52, height: 36,
                  padding: 0, border: i === current ? "2px solid #000" : "2px solid transparent",
                  overflow: "hidden", cursor: "pointer", background: "none", position: "relative",
                }}
              >
                <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover" }} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d375604.40992908017!2d17.806227972055552!3d42.652677897418094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134a52c984316863%3A0xd2460ccf4935ea8e!2sVilla+Dvori!5e0!3m2!1sen!2shr!4v1502970605959"
          width="100%"
          height="350"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Villa Dvori location map"
        />
      </div>
    </section>
  );
}
