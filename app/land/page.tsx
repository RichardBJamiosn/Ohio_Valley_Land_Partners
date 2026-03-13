import type { Metadata } from 'next';
import { silos } from '@/lib/seo-config';
import { ArrowRight, MapPin, DollarSign, Clock } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BreadcrumbSchema } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: silos.land.title,
  description: silos.land.description,
  keywords: silos.land.keywords,
};

const features = [
  {
    title: 'Motivated Seller Pipeline',
    description: 'Access to off-market wholesale opportunities from our extensive network of motivated sellers across the Ohio Valley.',
    icon: MapPin,
  },
  {
    title: 'Cash Buyer Network',
    description: 'Direct connections with institutional and individual cash buyers ready to acquire quality land parcels.',
    icon: DollarSign,
  },
  {
    title: 'Fast Close Timeline',
    description: '7-30 day closing options for qualified deals with flexible terms and all-cash negotiations.',
    icon: Clock,
  },
];

const deals = [
  {
    location: 'Belmont County, OH',
    acres: '45.5',
    type: 'Raw Land',
    price: '$125,000',
  },
  {
    location: 'Jefferson County, OH',
    acres: '12.8',
    type: 'Development-Ready',
    price: '$89,500',
  },
  {
    location: 'Ohio County, WV',
    acres: '78.2',
    type: 'Commercial',
    price: '$245,000',
  },
];

export default function LandPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: silos.land.title, url: silos.land.path }]} />

      <section className="py-20 sm:py-28 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Land Wholesaling
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              Strategic land acquisitions and wholesale opportunities for motivated sellers and cash buyers
              across the Ohio Valley region.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4 flex-wrap">
              <Button size="lg" asChild>
                <Link href="/contact?type=land">
                  View Current Deals
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact?type=partnership">Become a Partner</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center mb-16">
            Our Process
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="absolute left-6 top-1/2 h-1 w-16 bg-accent/20" style={{ display: idx === 2 ? 'none' : 'block' }} />
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center mb-16">
            Featured Opportunities
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {deals.map((deal) => (
              <article key={deal.location} className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{deal.location}</h3>
                    <p className="text-sm text-accent mt-1">{deal.type}</p>
                  </div>
                  <span className="text-sm font-semibold bg-accent/10 text-accent px-3 py-1 rounded-full">
                    {deal.acres} acres
                  </span>
                </div>
                <p className="text-2xl font-bold text-foreground">{deal.price}</p>
                <Link
                  href="/contact?type=land"
                  className="mt-4 inline-flex text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                >
                  Inquire &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
