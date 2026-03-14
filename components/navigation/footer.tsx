import Link from 'next/link';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';
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
    <footer className="border-t border-border bg-card" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <Building2 className="h-10 w-10 text-primary" strokeWidth={2.5} />
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-primary">
                  Ohio Valley
                </span>
                <span className="text-sm font-semibold text-muted-foreground -mt-1">
                  Land Partners
                </span>
              </div>
            </Link>
            <p className="text-sm leading-6 text-muted-foreground max-w-xs">
              Strategic real estate investments across the Ohio Valley. Building wealth through land
              wholesaling, commercial development, and residential projects since 2005.
            </p>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>
                  {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality},{' '}
                  {siteConfig.address.addressRegion} {siteConfig.address.postalCode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-accent transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-accent transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-accent transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">County Guides</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.guides.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-accent transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-accent transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-accent transition-colors"
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
        <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24 flex flex-col gap-3 text-center">
          <p className="text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} Ohio Valley Land Partners. All rights reserved.
          </p>
          <p className="text-xs leading-5 text-muted-foreground max-w-2xl mx-auto">
            Ohio Valley Land Partners operates as a principal buyer of real estate. We are not
            licensed real estate brokers or agents and do not represent sellers or buyers in an
            agency capacity. We purchase properties for our own account.
          </p>
        </div>
      </div>
    </footer>
  );
}
