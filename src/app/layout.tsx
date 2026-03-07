import type { Metadata } from 'next';
import './globals.css';
import './lumaband-refined.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CartProvider } from '../components/CartProvider';
import SmoothScrolling from '../components/SmoothScrolling';
import GSAPAnimations from '../components/GSAPAnimations';

export const metadata: Metadata = {
  title: 'LumaBand | Care You Can Wear',
  description: 'Smart fall detection wearable designed for elders. No subscriptions, sustainable 3D-printed case, lifetime updates.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ paddingTop: '75px' }} suppressHydrationWarning>
        <SmoothScrolling>
          <GSAPAnimations />
          <CartProvider>
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </CartProvider>
        </SmoothScrolling>
      </body>
    </html>
  );
}
