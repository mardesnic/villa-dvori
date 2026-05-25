import type { Metadata } from 'next';

export const metadata: Metadata = {
  icons: {
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
