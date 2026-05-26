'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { LOCALES } from '@/lib/locales';

const navKeys = [
  { href: '/' as const, key: 'home' },
  { href: '/accommodation' as const, key: 'accommodation' },
  { href: '/location' as const, key: 'location' },
  { href: '/photo' as const, key: 'gallery' },
  { href: '/video' as const, key: 'video' },
  { href: '/reviews' as const, key: 'reviews' },
  { href: '/contact' as const, key: 'bookNow' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations('nav');

  const current = LOCALES.find(l => l.code === locale) ?? LOCALES[0];

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const switchLocale = (next: string) => {
    router.replace(pathname, { locale: next });
    setLangOpen(false);
    setOpen(false);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <nav
      className='navbar navbar-expand-lg bg-white fixed-top'
      style={{ minHeight: 56, borderBottom: '1px solid #e0ddd8' }}
    >
      <div className='container-fluid px-4'>
        <Link
          className='navbar-brand py-0 text-dark fw-semibold d-flex align-items-center gap-2'
          href='/'
          style={{
            fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
            letterSpacing: '0.22em',
            fontSize: '1.1rem',
          }}
        >
          <img
            src='/images/logo-no-text.png'
            alt=''
            height={28}
            style={{ display: 'block', filter: 'invert(1)' }}
          />
          <span
            style={{
              lineHeight: 1,
              letterSpacing: '0.22em',
              position: 'relative',
              top: 3,
            }}
          >
            VILLA DVORI
          </span>
        </Link>

        <button
          className='navbar-toggler border-0'
          onClick={() => setOpen(o => !o)}
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>

        <div className={`navbar-collapse collapse ${open ? 'show pt-3' : ''}`}>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0 gap-1'>
            {navKeys.map(({ href, key }) => {
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
                    {t(key)}
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

          {/* Mobile: inline flags row */}
          <div className='d-flex d-lg-none flex-wrap gap-1 py-2'>
            {LOCALES.map(({ code, flag, label }) => (
              <button
                key={code}
                onClick={() => switchLocale(code)}
                title={label}
                style={{
                  background: code === locale ? 'rgba(0,0,0,0.06)' : 'none',
                  border: 'none',
                  borderRadius: 4,
                  padding: '4px 5px',
                  cursor: code === locale ? 'default' : 'pointer',
                }}
              >
                <img
                  src={flag}
                  alt={label}
                  width={20}
                  height={15}
                  style={{
                    display: 'block',
                    opacity: code === locale ? 1 : 0.55,
                  }}
                />
              </button>
            ))}
          </div>

          {/* Desktop: dropdown */}
          <div
            ref={langRef}
            className='d-none d-lg-block ms-lg-3'
            style={{ position: 'relative' }}
          >
            <button
              onClick={() => setLangOpen(o => !o)}
              aria-label='Select language'
              style={{
                background: 'none',
                border: 'none',
                borderRadius: 4,
                padding: '4px 8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <img
                src={current.flag}
                alt={current.label}
                width={20}
                height={15}
                style={{ display: 'block' }}
              />
            </button>

            {langOpen && (
              <div className='lang-dropdown'>
                {LOCALES.map(({ code, flag, label }) => (
                  <button
                    key={code}
                    onClick={() => switchLocale(code)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      width: '100%',
                      background: code === locale ? '#f8f7f5' : 'none',
                      border: 'none',
                      padding: '6px 12px',
                      cursor: 'pointer',
                      fontSize: '0.78rem',
                      letterSpacing: '0.04em',
                      color: '#333',
                      textAlign: 'left',
                    }}
                  >
                    <img
                      src={flag}
                      alt=''
                      width={20}
                      height={15}
                      style={{ display: 'block', flexShrink: 0 }}
                    />
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
