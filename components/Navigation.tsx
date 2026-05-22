"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { href: "/", label: "INFO" },
  { href: "/gallery/", label: "GALLERY" },
  { href: "/video/", label: "VIDEO" },
  { href: "/contact/", label: "CONTACT" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" || pathname === "/villa-dvori/" : pathname.startsWith(href) || pathname.startsWith("/villa-dvori" + href);

  return (
    <nav className="navbar navbar-expand-sm bg-white border-bottom fixed-top" style={{ minHeight: 48 }}>
      <div className="container-fluid px-3">
        <Link className="navbar-brand py-0" href="/">
          <Image
            src="/villa-dvori/img/logo-horiz.png"
            alt="Villa Dvori"
            width={120}
            height={32}
            style={{ height: 32, width: "auto" }}
          />
        </Link>

        <button
          className="navbar-toggler border-0"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`navbar-collapse collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
            {links.map(({ href, label }) => (
              <li className="nav-item" key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`nav-link text-dark small fw-semibold ${isActive(href) ? "border-bottom border-dark" : ""}`}
                  style={{ letterSpacing: "0.1em" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
