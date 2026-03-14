'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, TrendingUp, Award, Users, ShieldCheck } from 'lucide-react';
import { SellerForm } from '@/components/forms/seller-form';
import { InvestorIntakeForm } from '@/components/forms/investor-intake-form';

const stats = [
  { label: 'Cash Offer Turnaround', value: '24 Hours', icon: TrendingUp },
  { label: 'Close Timeline', value: '14 Days', icon: Award },
  { label: 'Acres in Our Market', value: '1.77M+', icon: MapPin },
  { label: 'Counties Covered', value: '8', icon: Users },
];

const serviceRegions = [
  { label: 'Belmont County', slug: 'belmont-county-oh' },
  { label: 'Jefferson County', slug: 'jefferson-county-oh' },
  { label: 'Columbiana County', slug: 'columbiana-county-oh' },
  { label: 'Harrison County', slug: 'harrison-county-oh' },
  { label: 'Carroll County', slug: 'carroll-county-oh' },
  { label: 'Ohio County', slug: 'ohio-county-wv' },
  { label: 'Marshall County', slug: 'marshall-county-wv' },
  { label: 'Brooke County', slug: 'brooke-county-wv' },
];

const sellerTrustPoints = [
  'Local buyer — rooted in the Ohio Valley',
  'No agent fees or commissions',
  'Close in as little as 14 days',
];

const buyerTrustPoints = [
  'First access to off-market Ohio Valley land',
  'Hunting, farming, development, and investment parcels',
  'No membership fees — ever',
];

type Tab = 'sell' | 'buy';

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<Tab>('sell');

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">

          {/* Left — Headline + dynamic trust points */}
          <div className="pt-2">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Local Ohio Valley Land Buyer — Not an Outside Investor
              </span>
            </div>

            {activeTab === 'sell' ? (
              <>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Sell Your Ohio Valley Land
                  <span className="block text-primary mt-2">Fast. Fair. Simple.</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  We buy vacant land, inherited property, and back-tax parcels across eight
                  counties in Ohio and West Virginia. Cash offers in 24 hours — no agents,
                  no fees, no hassle.
                </p>
                <ul className="mt-6 flex flex-col gap-2">
                  {sellerTrustPoints.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <ShieldCheck className="h-4 w-4 text-accent flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Buy Off-Market Land
                  <span className="block text-primary mt-2">in the Ohio Valley</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Join our buyer network and get first access to off-market land deals across
                  eight counties in Ohio and West Virginia. Tell us what you're looking for —
                  we'll call you when it's available.
                </p>
                <ul className="mt-6 flex flex-col gap-2">
                  {buyerTrustPoints.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <ShieldCheck className="h-4 w-4 text-accent flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent mb-2">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — Tabbed form card */}
          <div className="w-full">
            <div className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden">

              {/* Tab switcher */}
              <div className="grid grid-cols-2 border-b border-border">
                <button
                  type="button"
                  onClick={() => setActiveTab('sell')}
                  className={`py-4 text-sm font-bold tracking-wide transition-colors ${
                    activeTab === 'sell'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card text-muted-foreground hover:text-foreground'
                  }`}
                >
                  I Want to SELL Land
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('buy')}
                  className={`py-4 text-sm font-bold tracking-wide transition-colors ${
                    activeTab === 'buy'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card text-muted-foreground hover:text-foreground'
                  }`}
                >
                  I Want to BUY Land
                </button>
              </div>

              <div className="p-8">
                {activeTab === 'sell' ? (
                  <>
                    <div className="mb-6 text-center">
                      <h2 className="text-xl font-bold text-foreground">Get My Cash Offer</h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        Takes 30 seconds. We call within 24 hours.
                      </p>
                    </div>
                    <SellerForm />
                  </>
                ) : (
                  <>
                    <div className="mb-6 text-center">
                      <h2 className="text-xl font-bold text-foreground">Join the Deal List</h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        Tell us what you want. We contact you when it's available.
                      </p>
                    </div>
                    <InvestorIntakeForm />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* County service area strip */}
        <div className="mt-20 border-t border-border pt-10">
          <div className="text-center mb-6">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Counties We Serve
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceRegions.map((region) => (
              <Link
                key={region.slug}
                href={`/sell-land/${region.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent/5 hover:border-accent transition-colors"
              >
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-foreground">{region.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-tr from-accent/20 to-primary/20 opacity-20"
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
      </div>
    </section>
  );
}
