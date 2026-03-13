import type { Metadata } from 'next';
import { silos, counties } from '@/lib/seo-config';
import { MapPin, TrendingUp, Building2 } from 'lucide-react';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: silos.guides.title,
  description: silos.guides.description,
  keywords: silos.guides.keywords,
};

const countyMetrics = {
  'belmont-county-oh': { medianPrice: '$145,000', avgDaysOnMarket: 32, appreciation: '4.2%' },
  'jefferson-county-oh': { medianPrice: '$165,000', avgDaysOnMarket: 28, appreciation: '3.8%' },
  'columbiana-county-oh': { medianPrice: '$135,000', avgDaysOnMarket: 35, appreciation: '3.5%' },
  'harrison-county-oh': { medianPrice: '$125,000', avgDaysOnMarket: 40, appreciation: '2.9%' },
  'carroll-county-oh': { medianPrice: '$140,000', avgDaysOnMarket: 38, appreciation: '3.1%' },
  'ohio-county-wv': { medianPrice: '$155,000', avgDaysOnMarket: 30, appreciation: '3.9%' },
  'marshall-county-wv': { medianPrice: '$135,000', avgDaysOnMarket: 36, appreciation: '3.4%' },
  'brooke-county-wv': { medianPrice: '$130,000', avgDaysOnMarket: 33, appreciation: '3.6%' },
};

export default function GuidesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: silos.guides.title, url: silos.guides.path }]} />

      <section className="py-20 sm:py-28 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Ohio Valley Market Guides
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              Comprehensive county-by-county real estate analysis, market trends, and investment
              opportunities across the entire Ohio Valley region.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              County-by-County Analysis
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore detailed market intelligence for each county in our service area
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {counties.map((county) => {
              const metrics = countyMetrics[county.slug as keyof typeof countyMetrics];
              return (
                <Link
                  key={county.slug}
                  href={`/ohio-valley-guides/${county.slug}`}
                  className="group relative rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all p-6"
                >
                  <article>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                          {county.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{county.state}</p>
                      </div>
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">Median Price:</span>
                        <span className="font-semibold text-foreground">{metrics.medianPrice}</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">DOM:</span>
                        <span className="font-semibold text-foreground">{metrics.avgDaysOnMarket} days</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">YoY Growth:</span>
                        <span className="font-semibold text-accent">{metrics.appreciation}</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <span className="text-sm font-semibold text-accent group-hover:text-accent/80 transition-colors">
                        View Market Report →
                      </span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center mb-16">
            What's in Each Guide
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <article className="rounded-xl border border-border bg-card p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Market Analysis</h3>
              <p className="text-muted-foreground">
                Historical trends, price appreciation, inventory levels, and days on market metrics for each county.
              </p>
            </article>

            <article className="rounded-xl border border-border bg-card p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Development Opportunities</h3>
              <p className="text-muted-foreground">
                Zoning analysis, development potential, infrastructure capacity, and growth corridors specific to each county.
              </p>
            </article>

            <article className="rounded-xl border border-border bg-card p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Investment Insights</h3>
              <p className="text-muted-foreground">
                Key drivers, seasonal trends, institutional activity, and wholesale opportunities unique to each market.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
