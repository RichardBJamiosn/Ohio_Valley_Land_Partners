import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MainNav } from '@/components/navigation/main-nav';
import { Footer } from '@/components/navigation/footer';
import { siteConfig } from '@/lib/seo-config';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Ohio Valley real estate',
    'land wholesaling',
    'commercial development',
    'residential development',
    'Belmont County',
    'Jefferson County',
    'real estate investment',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <MainNav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
