import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Tour | Villa Dvori — Peljesac, Croatia",
  description:
    "Watch a video tour of Villa Dvori in Podobuce, Peljesac, Croatia. See the pool, gardens, terraces, and stunning Adriatic sea views.",
};

export default function VideoPage() {
  return (
    <main style={{ paddingTop: 48 }}>
      <div className="container py-5">
        <h1 className="text-center mb-1" style={{ letterSpacing: "0.1em" }}>VIDEO</h1>
        <p
          className="text-center mb-5 font-garamond"
          style={{ fontStyle: "italic", fontSize: "1.1rem" }}
        >
          Take a Villa Dvori &amp; Podobuce video tour
        </p>
        <div className="ratio ratio-16x9" style={{ maxWidth: 800, margin: "0 auto" }}>
          <iframe
            src="https://www.youtube.com/embed/jYORvEwjUQQ"
            title="Villa Dvori video tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </main>
  );
}
