import Link from 'next/link';
import { TreePine, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { siteConfig, silos, counties } from '@/lib/seo-config';

const footerNavigation = {
  services: [
    { name: 'Land Wholesaling', href: '/land' },
    { name: 'Commercial Real Estate', href: '/commercial' },
    { name: 'Residential Development', href: '/development' },
    { name: 'Investor Portal', href: '/investor-portal' },
  ],
  guides: counties.slice(0, 4).map((county) => ({
    name: `${county.name}, ${county.state}`,
    href: `/ohio-valley-guides/${county.slug}`,
  })),
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Community & Giving', href: '/community' },
    { name: 'Land Scouts', href: '/land-scouts' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-forest border-t border-white/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber/20">
                <TreePine className="h-5 w-5 text-amber" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-amber">
                  Ohio Valley
                </span>
                <span className="text-xs font-medium text-white/50 -mt-0.5">
                  Land Partners
                </span>
              </div>
            </Link>
            <p className="text-sm leading-6 text-white/60 max-w-xs">
              Local cash land buyer serving eight counties across Ohio and West Virginia.
              Intentional. Not international.
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber flex-shrink-0" />
                <span>
                  {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality},{' '}
                  {siteConfig.address.addressRegion} {siteConfig.address.postalCode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber flex-shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-amber transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-amber transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-meadow/30 bg-meadow/10 px-3 py-1.5 w-fit">
              <Heart className="h-3.5 w-3.5 text-meadow" />
              <span className="text-xs text-meadow font-medium">5% back to the Ohio Valley</span>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">Services</h3>
                <ul role="list" className="space-y-4">
                  {footerNavigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-white/60 hover:text-amber transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">County Guides</h3>
                <ul role="list" className="space-y-4">
                  {footerNavigation.guides.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-white/60 hover:text-amber transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">Company</h3>
                <ul role="list" className="space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-white/60 hover:text-amber transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">Legal</h3>
                <ul role="list" className="space-y-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-white/60 hover:text-amber transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col gap-3 text-center">
          <p className="text-xs leading-5 text-white/40">
            &copy; {new Date().getFullYear()} Ohio Valley Land Partners. All rights reserved.
          </p>
          <p className="text-xs leading-5 text-white/30 max-w-2xl mx-auto">
            Ohio Valley Land Partners operates as a principal buyer of real estate. We are not
            licensed real estate brokers or agents and do not represent sellers or buyers in an
            agency capacity. We purchase properties for our own account.
          </p>
        </div>
      </div>
    </footer>
  );
}
