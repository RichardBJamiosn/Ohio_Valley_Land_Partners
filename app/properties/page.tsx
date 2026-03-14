import type { Metadata } from 'next';
import { BreadcrumbSchema, OrganizationSchema } from '@/components/seo/json-ld';
import { Bell, MapPin, ArrowRight, TreePine } from 'lucide-react';
import Link from 'next/link';
import { InvestorIntakeForm } from '@/components/forms/investor-intake-form';

export const metadata: Metadata = {
  title: 'Buy Land — Ohio Valley Land Partners',
  description: 'Join our buyer network to get first access to off-market land deals in the Ohio Valley. Hunting tracts, farm ground, development sites, and investment parcels across eight counties.',
  keywords: 'buy land Ohio Valley, off-market land deals Ohio, hunting land Ohio, farm ground Ohio West Virginia, land buyer network',
};

const counties = [
  'Belmont County, OH',
  'Jefferson County, OH',
  'Columbiana County, OH',
  'Harrison County, OH',
  'Carroll County, OH',
  'Ohio County, WV',
  'Marshall County, WV',
  'Brooke County, WV',
];

export default function PropertiesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Buy Land', url: '/properties' }]} />
      <OrganizationSchema />

      <div className="min-h-screen bg-background">

        {/* Hero */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">

              <div>
                <p className="heading-serif text-amber text-2xl mb-4">Buyer network</p>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl leading-tight">
                  Off-Market Land Deals
                  <span className="block text-amber mt-1">in the Ohio Valley.</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  We don't list properties publicly. When we have a parcel to sell, it goes to
                  our buyer list first — directly, with a phone call. Join the list and tell us
                  what you're looking for. We call when we have a match.
                </p>

                <div className="mt-8 flex flex-col gap-3">
                  {[
                    { icon: Bell, text: 'First access — before any public listing' },
                    { icon: TreePine, text: 'Hunting, farm, development & investment parcels' },
                    { icon: MapPin, text: 'All eight Ohio Valley counties' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.text} className="flex items-center gap-3 text-sm font-medium text-foreground">
                        <Icon className="h-4 w-4 text-amber flex-shrink-0" />
                        {item.text}
                      </div>
                    );
                  })}
                </div>

                {/* County coverage */}
                <div className="mt-10 pt-8 border-t border-border">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                    Counties We Source In
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {counties.map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground"
                      >
                        <MapPin className="h-3 w-3 text-amber" />
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Intake form */}
              <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
                <div className="mb-6 text-center">
                  <h2 className="text-xl font-bold text-foreground">Join the Deal List</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Tell us what you want. We call when it's available.
                  </p>
                </div>
                <InvestorIntakeForm />
              </div>
            </div>
          </div>
        </section>

        {/* No public listings note */}
        <section className="py-16 bg-card border-t border-border">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-xl font-bold text-foreground mb-4">Why We Don't List Publicly</h2>
            <p className="text-muted-foreground leading-8 mb-4">
              When we acquire a parcel and have it ready to sell, it goes to our buyer list first.
              Buyers who've told us what they want get a direct call. If it's a fit, we work the
              deal directly. No listing fees, no bidding wars, no agents in the middle.
            </p>
            <p className="text-muted-foreground leading-8">
              If you want first access to Ohio Valley land, the buyer list is the only way to get it.
            </p>
            <div className="mt-8">
              <Link
                href="/investor-portal"
                className="inline-flex items-center gap-2 rounded-lg bg-amber px-6 py-3 text-sm font-bold text-forest hover:bg-amber/90 transition-colors"
              >
                Full Buyer Portal <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
