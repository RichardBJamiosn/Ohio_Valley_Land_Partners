'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ChevronDown, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { silos } from '@/lib/seo-config';
import { Button } from '@/components/ui/button';

const navigation = [
  {
    name: 'Properties',
    href: '/properties',
    description: 'Browse available listings',
  },
  {
    name: silos.land.title,
    href: silos.land.path,
    description: 'Wholesale opportunities & land acquisitions',
  },
  {
    name: silos.commercial.title,
    href: silos.commercial.path,
    description: 'Industrial & retail developments',
  },
  {
    name: silos.development.title,
    href: silos.development.path,
    description: 'Long-term projects & investor relations',
  },
  {
    name: silos.guides.title,
    href: silos.guides.path,
    description: 'County-by-county market guides',
  },
];

export function MainNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <Building2 className="h-8 w-8 text-primary" strokeWidth={2.5} />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-primary">
                Ohio Valley
              </span>
              <span className="text-sm font-semibold text-muted-foreground -mt-1">
                Land Partners
              </span>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-semibold leading-6 transition-colors hover:text-primary',
                pathname?.startsWith(item.href)
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-muted-foreground'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="outline" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild>
            <Link href="/investor-portal">Investor Portal</Link>
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                <Building2 className="h-7 w-7 text-primary" />
                <span className="text-lg font-bold text-primary">OVLP</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-muted transition-colors',
                        pathname?.startsWith(item.href)
                          ? 'text-primary bg-muted'
                          : 'text-foreground'
                      )}
                    >
                      <div>{item.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">{item.description}</div>
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-2">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Contact Us
                    </Link>
                  </Button>
                  <Button className="w-full" asChild>
                    <Link href="/investor-portal" onClick={() => setMobileMenuOpen(false)}>
                      Investor Portal
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
