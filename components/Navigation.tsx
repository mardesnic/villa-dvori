'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'HOME' },
  { href: '/photo/', label: 'GALLERY' },
  { href: '/location/', label: 'LOCATION' },
  { href: '/video/', label: 'VIDEO' },
  { href: '/contact/', label: 'BOOK NOW' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav
      className='navbar navbar-expand-sm bg-white fixed-top'
      style={{ minHeight: 56, borderBottom: '1px solid #e0ddd8' }}
    >
      <div className='container-fluid px-4'>
        <Link
          className='navbar-brand py-0 text-dark fw-semibold'
          href='/'
          style={{
            fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
            letterSpacing: '0.22em',
            fontSize: '1.1rem',
          }}
        >
          VILLA DVORI
        </Link>

        <button
          className='navbar-toggler border-0'
          onClick={() => setOpen(o => !o)}
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>

        <div className={`navbar-collapse collapse ${open ? 'show' : ''}`}>
          <ul className='navbar-nav ms-auto mb-2 mb-sm-0 gap-1'>
            {links.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <li className='nav-item' key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className='nav-link px-3 py-2'
                    style={{
                      letterSpacing: '0.12em',
                      fontSize: '0.78rem',
                      fontWeight: active ? 700 : 400,
                      color: active ? '#000' : '#666',
                      position: 'relative',
                      transition: 'color 0.15s',
                    }}
                  >
                    {label}
                    {active && (
                      <span
                        className='nav-active-bar'
                        style={{
                          position: 'absolute',
                          bottom: 4,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 18,
                          height: 2,
                          background: '#000',
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
