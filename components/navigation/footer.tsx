import Link from 'next/link';
import { Mail, Phone, Heart, MapPin } from 'lucide-react';
import { siteConfig, silos, counties } from '@/lib/seo-config';
import Image from 'next/image';

const footerNavigation = {
  services: [
    { name: 'Land Offers', href: '/land' },
    { name: 'Commercial Real Estate', href: '/commercial' },
    { name: 'Residential Development', href: '/development' },
    { name: 'Investor Portal', href: '/investor-portal' },
  ],
  sellLandByState: [
    { state: 'Ohio', abbr: 'OH' },
    { state: 'West Virginia', abbr: 'WV' },
  ].map(({ state, abbr }) => ({
    state,
    counties: counties
      .filter((county) => county.state === abbr)
      .map((county) => ({
        name: county.name,
        href: `/sell-land/${county.slug}`,
      })),
  })),
  guides: counties.slice(0, 4).map((county) => ({
    name: `${county.name}, ${county.state}`,
    href: `/ohio-valley-guides/${county.slug}`,
  })),
  campaigns: [
    { name: 'Geauga County, OH', href: '/blog/sell-vacant-land-geauga-county-ohio-2026' },
    { name: 'Franklin County Campaign', href: '/sell-land/franklin-county-oh' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Community & Giving', href: '/community' },
    { name: 'Introductions', href: '/land-scouts' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Legal Disclaimer', href: '/disclaimer' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-forest border-t border-white/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Ohio Valley Land Partners"
                width={200}
                height={80}
                className="object-contain"
              />
            </Link>
            <p className="text-sm leading-6 text-white/60 max-w-xs">
              Prospective principal land buyer across the Ohio Valley — OH, PA, WV, KY, and Indiana. Direct acquisition inquiries and private portfolio marketing.
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/60">
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
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-amber flex-shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.streetAddress}<br />
                  {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion} {siteConfig.address.postalCode}
                </span>
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
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Sell Land</h3>
                <div className="space-y-4">
                  {footerNavigation.sellLandByState.map((group) => (
                    <div key={group.state}>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-white/35 mb-2">
                        {group.state}
                      </p>
                      <ul role="list" className="space-y-1.5">
                        {group.counties.map((item) => (
                          <li key={item.href}>
                            <Link href={item.href} className="text-sm text-white/60 hover:text-amber transition-colors">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
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
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">Campaigns</h3>
                <ul role="list" className="space-y-4 mb-8">
                  {footerNavigation.campaigns.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-white/60 hover:text-amber transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
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
            Principal buyer — not a licensed broker, agent, or law firm.{' '}
            <Link href="/disclaimer" className="underline underline-offset-2 hover:text-white/45">
              Legal disclaimer
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
