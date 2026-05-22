import Image from "next/image";
import Link from "next/link";

export default function TeamSection() {
  return (
    <section className="container py-5 text-center">
      <h2 className="mb-2">
        <span className="font-garamond" style={{ fontStyle: "italic" }}>
          Villa Dvori team,{" "}
        </span>
        A FAMILY
      </h2>
      <p className="text-muted small mb-4" style={{ letterSpacing: "0.05em" }}>
        We are all here to help you with anything you need
      </p>
      <Link href="/contact/">
        <Image
          src="/villa-dvori/img/family.jpg"
          alt="Villa Dvori team — a family"
          width={900}
          height={500}
          className="img-fluid"
          style={{ maxWidth: 700 }}
        />
      </Link>
    </section>
  );
}
