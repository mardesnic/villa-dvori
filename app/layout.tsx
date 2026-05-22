import type { Metadata } from 'next';
import { EB_Garamond, Josefin_Sans } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const josefin = Josefin_Sans({
  variable: '--font-josefin',
  subsets: ['latin'],
  weight: ['300', '400', '600'],
});

const garamond = EB_Garamond({
  variable: '--font-garamond',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://villadvori.com'),
  title: 'Villa Dvori | Mediterranean House for 12 | Peljesac, Croatia',
  description:
    'Villa Dvori — luxury holiday villa in Podobuce, Peljesac, Croatia. Heated pool, Mediterranean gardens, sea views. Sleeps up to 12 guests.',
  openGraph: {
    title: 'Villa Dvori | Mediterranean House for 12 | Peljesac, Croatia',
    description:
      'Luxury holiday villa in Podobuce, Peljesac, Croatia. Heated pool, Mediterranean gardens, sea views. Sleeps up to 12 guests.',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/images/hero.webp', alt: 'Villa Dvori exterior view' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' data-scroll-behavior='smooth' className={`${josefin.variable} ${garamond.variable}`}>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
