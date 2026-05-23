'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { LOCALES } from '@/lib/locales';

export default function Footer() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (next: string) => {
    router.replace(pathname, { locale: next });
  };

  return (
    <footer style={{ background: '#e8e6e2', borderTop: '1px solid #d8d5cf' }}>
      <div className='container py-4'>
        <div
          className='d-flex flex-wrap justify-content-center'
          style={{ gap: '4px 2px' }}
        >
          {LOCALES.map(({ code, flag, label }) => {
            const active = code === locale;
            return (
              <button
                key={code}
                onClick={() => switchLocale(code)}
                title={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: active ? 'rgba(0,0,0,0.06)' : 'none',
                  border: 'none',
                  borderRadius: 4,
                  padding: '5px 6px',
                  cursor: active ? 'default' : 'pointer',
                }}
              >
                <img src={flag} alt={label} width={18} height={13} style={{ display: 'block', opacity: active ? 1 : 0.6 }} />
              </button>
            );
          })}
        </div>
        <p
          className='text-center mb-0 mt-3'
          style={{ fontSize: '0.7rem', color: '#aaa', letterSpacing: '0.04em' }}
        >
          © {new Date().getFullYear()} Villa Dvori · Podobuče, Pelješac, Croatia
        </p>
      </div>
    </footer>
  );
}
