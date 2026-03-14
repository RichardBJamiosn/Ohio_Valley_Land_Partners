'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, TreePine } from 'lucide-react';
import { cn } from '@/lib/utils';
import { silos } from '@/lib/seo-config';

const navigation = [
  { name: 'Buy Land', href: '/properties', description: 'Browse available listings' },
  { name: 'County Guides', href: silos.guides.path, description: 'County-by-county market guides' },
  { name: 'Blog', href: '/blog', description: 'Seller guides & market reports' },
  { name: 'Community', href: '/community', description: 'Our giving commitment' },
  { name: 'About', href: '/about', description: 'Who we are' },
];

export function MainNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-forest border-b border-white/10 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber/20 group-hover:bg-amber/30 transition-colors">
              <TreePine className="h-5 w-5 text-amber" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-bold tracking-tight text-amber">
                Ohio Valley
              </span>
              <span className="text-xs font-medium text-white/60 tracking-wide">
                Land Partners
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop nav links */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors',
                pathname?.startsWith(item.href)
                  ? 'text-amber'
                  : 'text-white/70 hover:text-white'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3">
          <Link
            href="/land-scouts"
            className="text-sm font-medium text-white/60 hover:text-white transition-colors px-3 py-2"
          >
            Land Scouts
          </Link>
          <Link
            href="/"
            className="rounded-lg bg-amber px-4 py-2 text-sm font-semibold text-forest hover:bg-amber/90 transition-colors"
          >
            Get a Cash Offer
          </Link>
          <Link
            href="/investor-portal"
            className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Buyer Portal
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-forest px-6 py-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <TreePine className="h-6 w-6 text-amber" />
                <span className="font-bold text-amber">Ohio Valley Land Partners</span>
              </Link>
              <button
                type="button"
                className="rounded-lg p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'rounded-lg px-4 py-3 text-base font-medium transition-colors',
                    pathname?.startsWith(item.href)
                      ? 'text-amber bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  )}
                >
                  {item.name}
                  <div className="text-xs text-white/40 mt-0.5 font-normal">{item.description}</div>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-8">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full rounded-lg bg-amber py-3 text-center text-sm font-bold text-forest hover:bg-amber/90 transition-colors"
              >
                Get a Cash Offer
              </Link>
              <Link
                href="/investor-portal"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full rounded-lg border border-white/20 py-3 text-center text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Buyer Portal
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
