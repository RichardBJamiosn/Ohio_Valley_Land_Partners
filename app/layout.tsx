import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Cormorant_Garamond } from 'next/font/google';
import { MainNav } from '@/components/navigation/main-nav';
import { Footer } from '@/components/navigation/footer';
import { MobileStickyCta } from '@/components/navigation/mobile-sticky-cta';
import { WebSiteSchema, PersonSchema, OrganizationSchema, ServiceSchema } from '@/components/seo/json-ld';
import { siteConfig } from '@/lib/seo-config';
import Script from 'next/script';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Ohio Valley real estate',
    'land offers',
    'sell land Ohio Valley',
    'cash land buyer Ohio',
    'Belmont County land',
    'Jefferson County land',
    'sell inherited land Ohio',
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
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Ohio Valley Land Partners — Cash Land Buyers in the Ohio Valley',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
    <html lang="en" className={`${poppins.variable} ${cormorant.variable}`}>
      <body className={poppins.className}>
        {/* GHL LeadConnector A2P widget embed. Keep this as raw HTML for scanner detection. */}
        <div
          data-chat-widget=""
          data-widget-id="6a1730411b5a98ef9dec746a"
          data-location-id="bNT4wp0nukIQdBJbQDaa"
        />
        <script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a1730411b5a98ef9dec746a"
          data-location-id="bNT4wp0nukIQdBJbQDaa"
          data-source="WEB_USER"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7FQDXC8DVC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7FQDXC8DVC');
          `}
        </Script>
        <WebSiteSchema />
        <OrganizationSchema />
        <ServiceSchema />
        <PersonSchema />
        {siteConfig.clarityProjectId ? (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${siteConfig.clarityProjectId}");
            `}
          </Script>
        ) : null}
        <MainNav />
        <main className="min-h-screen pb-20 lg:pb-0">{children}</main>
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  );
}
