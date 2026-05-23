import type { AbstractIntlMessages } from 'next-intl';
import { EB_Garamond, Josefin_Sans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import Navigation from './Navigation';
import Footer from './Footer';

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

export default function PageShell({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: AbstractIntlMessages;
}) {
  return (
    <html
      lang={locale}
      data-scroll-behavior='smooth'
      className={`${josefin.variable} ${garamond.variable}`}
    >
      <head>
        <link rel='preload' href='/images/hero.webp' as='image' type='image/webp' />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
