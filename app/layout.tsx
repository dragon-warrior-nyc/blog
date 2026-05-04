import './global.css';
import 'katex/dist/katex.min.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/footer';
import { baseUrl } from './sitemap';
import { katexMain, katexMath } from './fonts';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Cun (Matthew) Mu',
    template: '%s | Cun (Matthew) Mu',
  },
  description: "Cun (Matthew) Mu's personal website and blog — data science, machine learning, and AI-powered search.",
  openGraph: {
    title: 'Cun (Matthew) Mu',
    description: "Cun (Matthew) Mu's personal website and blog — data science, machine learning, and AI-powered search.",
    url: baseUrl,
    siteName: 'Cun (Matthew) Mu',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const cx = (...classes: (string | undefined | false)[]) =>
  classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-neutral-100 dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable,
        katexMain.variable,
        katexMath.variable,
      )}
    >
      <body className="antialiased max-w-2xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
