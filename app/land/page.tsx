import type { Metadata } from 'next';
import { silos } from '@/lib/seo-config';
import { ArrowRight, MapPin, Clock, DollarSign, ShieldCheck, TreePine } from 'lucide-react';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/seo/json-ld';
import { SellerForm } from '@/components/forms/seller-form';

export const metadata: Metadata = {
  title: silos.land.title,
  description: silos.land.description,
  keywords: silos.land.keywords,
};

const counties = [
  { label: 'Belmont County, OH', slug: 'belmont-county-oh' },
  { label: 'Jefferson County, OH', slug: 'jefferson-county-oh' },
  { label: 'Columbiana County, OH', slug: 'columbiana-county-oh' },
  { label: 'Harrison County, OH', slug: 'harrison-county-oh' },
  { label: 'Carroll County, OH', slug: 'carroll-county-oh' },
  { label: 'Ohio County, WV', slug: 'ohio-county-wv' },
  { label: 'Marshall County, WV', slug: 'marshall-county-wv' },
  { label: 'Brooke County, WV', slug: 'brooke-county-wv' },
];

const process = [
  {
    step: '01',
    title: 'Submit Your Property',
    description: 'Give us the address and your phone number. That\'s all we need to get started.',
    icon: MapPin,
  },
  {
    step: '02',
    title: 'We Call Within 24 Hours',
    description: 'A real person calls you — not a bot, not a form response. We ask a few questions and discuss your situation.',
    icon: Clock,
  },
  {
    step: '03',
    title: 'Cash Offer in Writing',
    description: 'We send a written offer with our number and the reasoning behind it. No mystery pricing.',
    icon: DollarSign,
  },
  {
    step: '04',
    title: 'Close in 14 Days',
    description: 'If you accept, we handle everything. Close in as little as 14 days, no agent commissions, no fees from you.',
    icon: ShieldCheck,
  },
];

const whatWeBuy = [
  'Vacant land — any size, any condition',
  'Inherited property going through probate',
  'Land with delinquent or back taxes',
  'Farm ground where the owner is ready to exit',
  'Timber tracts and hunting land',
  'Out-of-state owners with Ohio Valley parcels',
  'Landowners who\'ve tried and failed to sell through agents',
  'Estate land being liquidated after a settlement',
];

export default function LandPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: silos.land.title, url: silos.land.path }]} />

      <div className="min-h-screen bg-background">

        {/* Hero + Form */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">

              <div>
                <p className="heading-serif text-amber text-2xl mb-4">Cash land buyer</p>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl leading-tight">
                  We Buy Ohio Valley Land.
                  <span className="block text-amber mt-1">Direct. No Agents. No Fees.</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Vacant land, inherited property, back-tax parcels — we make cash offers on all of it,
                  across eight counties in Ohio and West Virginia. Call within 24 hours. Close in 14 days.
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {[
                    'Local buyer — rooted in the Ohio Valley',
                    'No agent fees or commissions — ever',
                    'Cash offer in 24 hours, close in 14 days',
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm font-medium text-foreground">
                      <ShieldCheck className="h-4 w-4 text-amber flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* County strip */}
                <div className="mt-10 pt-8 border-t border-border">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                    Counties We Serve
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {counties.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/sell-land/${c.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground hover:border-amber/50 hover:text-amber transition-colors"
                      >
                        <MapPin className="h-3 w-3" />
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Seller form */}
              <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
                <div className="mb-6 text-center">
                  <h2 className="text-xl font-bold text-foreground">Get My Cash Offer</h2>
                  <p className="text-sm text-muted-foreground mt-1">30 seconds. We call within 24 hours.</p>
                </div>
                <SellerForm />
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-foreground">How It Works</h2>
              <p className="mt-4 text-muted-foreground">Four steps. No surprises.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="relative rounded-2xl border border-border bg-background p-8">
                    <div className="text-5xl font-black text-amber/15 mb-4">{step.step}</div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber/10 text-amber mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What we buy */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="rounded-2xl border border-border bg-card p-8 sm:p-12">
              <div className="flex items-center gap-3 mb-8">
                <TreePine className="h-6 w-6 text-amber" />
                <h2 className="text-2xl font-bold text-foreground">What We Buy</h2>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {whatWeBuy.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1 h-2 w-2 rounded-full bg-amber flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  If your land is in one of our eight counties and you want to sell, we want to hear from you.
                  Even if you're not sure it qualifies — call us anyway.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-lg bg-amber px-6 py-3 text-sm font-bold text-forest hover:bg-amber/90 transition-colors"
                >
                  Get a Cash Offer <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
