"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "calc(100vh - 48px)",
        marginTop: 48,
        overflow: "hidden",
      }}
    >
      <Image
        src="/villa-dvori/img/villa.webp"
        alt="Villa Dvori aerial view"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        <Image
          src="/villa-dvori/img/logo-1.png"
          alt="Villa Dvori logo"
          width={280}
          height={200}
          style={{
            width: "clamp(160px, 25vw, 280px)",
            height: "auto",
            filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.4))",
          }}
          priority
        />
        <a
          href="#intro"
          className="btn-villa-outline-light"
          style={{ textDecoration: "none" }}
        >
          LEARN MORE
        </a>
      </div>
    </section>
  );
}
