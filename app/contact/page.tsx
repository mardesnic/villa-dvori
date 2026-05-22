import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Villa Dvori — Peljesac, Croatia",
  description:
    "Contact Villa Dvori to check availability and get a price offer. We are happy to help plan your perfect Croatian holiday.",
};

export default function ContactPage() {
  return (
    <main style={{ paddingTop: 48 }}>
      <ContactSection />
    </main>
  );
}
