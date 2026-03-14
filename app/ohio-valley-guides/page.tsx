import type { Metadata } from 'next';
import { silos, counties } from '@/lib/seo-config';
import { MapPin, TreePine, FileText } from 'lucide-react';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: silos.guides.title,
  description: silos.guides.description,
  keywords: silos.guides.keywords,
};

export default function GuidesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: silos.guides.title, url: silos.guides.path }]} />

      <div className="min-h-screen bg-background">

        {/* Hero */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="heading-serif text-amber text-2xl mb-4">County-by-county</p>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Ohio Valley Land Seller Guides
              </h1>
              <p className="mt-6 text-xl leading-8 text-muted-foreground">
                What land sells for. Who buys it. How the process works. County-specific guides
                for every market we operate in — written by the people who are actually buying land there.
              </p>
            </div>
          </div>
        </section>

        {/* County cards */}
        <section className="pb-20 sm:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {counties.map((county) => (
                <Link
                  key={county.slug}
                  href={`/ohio-valley-guides/${county.slug}`}
                  className="group relative rounded-xl border border-border bg-card hover:border-amber/40 hover:shadow-lg transition-all p-6"
                >
                  <article>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-lg font-semibold text-foreground group-hover:text-amber transition-colors">
                          {county.name}
                        </h2>
                        <p className="text-sm text-muted-foreground">{county.state}</p>
                      </div>
                      <MapPin className="h-5 w-5 text-amber" />
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      Land market overview, common seller situations, and what to expect when
                      selling in {county.name}.
                    </p>

                    <div className="pt-4 border-t border-border">
                      <span className="text-sm font-semibold text-meadow group-hover:text-meadow/80 transition-colors">
                        View Seller Guide →
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* What's in each guide */}
        <section className="py-20 sm:py-28 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center mb-16">
              What's in Each Guide
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <article className="rounded-xl border border-border bg-background p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber/10 text-amber mb-4">
                  <TreePine className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Land Types We Buy</h3>
                <p className="text-muted-foreground">
                  Vacant lots, timber tracts, farm ground, inherited parcels, back-tax land —
                  what we actively look for in each county and why.
                </p>
              </article>

              <article className="rounded-xl border border-border bg-background p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber/10 text-amber mb-4">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Common Seller Situations</h3>
                <p className="text-muted-foreground">
                  Inherited land, delinquent taxes, out-of-state ownership, estate settlements —
                  how we handle the situations that come up most often in each county.
                </p>
              </article>

              <article className="rounded-xl border border-border bg-background p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber/10 text-amber mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">County-Specific FAQs</h3>
                <p className="text-muted-foreground">
                  Questions specific to each county's market, zoning, and process — answered
                  plainly by a buyer who operates there.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Sell CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-xl px-6 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to Sell? Skip the Guide.
            </h2>
            <p className="text-muted-foreground mb-8">
              Get a cash offer directly. We'll answer every question on the call.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-amber px-8 py-4 text-base font-bold text-forest hover:bg-amber/90 transition-colors"
            >
              Get a Cash Offer
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
