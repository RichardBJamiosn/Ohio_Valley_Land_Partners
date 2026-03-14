'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Clock, DollarSign, TreePine, ShieldCheck, Users } from 'lucide-react';
import { SellerForm } from '@/components/forms/seller-form';
import { InvestorIntakeForm } from '@/components/forms/investor-intake-form';

const stats = [
  { label: 'Cash Offer', value: '24 hrs', icon: Clock },
  { label: 'Close Timeline', value: '14 Days', icon: DollarSign },
  { label: 'Acres Covered', value: '1.77M+', icon: TreePine },
  { label: 'Counties', value: '8', icon: MapPin },
];

const serviceRegions = [
  { label: 'Belmont County', slug: 'belmont-county-oh' },
  { label: 'Jefferson County', slug: 'jefferson-county-oh' },
  { label: 'Columbiana County', slug: 'columbiana-county-oh' },
  { label: 'Harrison County', slug: 'harrison-county-oh' },
  { label: 'Carroll County', slug: 'carroll-county-oh' },
  { label: 'Ohio County WV', slug: 'ohio-county-wv' },
  { label: 'Marshall County WV', slug: 'marshall-county-wv' },
  { label: 'Brooke County WV', slug: 'brooke-county-wv' },
];

const sellerTrustPoints = [
  'Local buyer — rooted in the Ohio Valley',
  'No agent fees or commissions',
  'Close in as little as 14 days',
];

const buyerTrustPoints = [
  'First access to off-market Ohio Valley land',
  'Hunting, farm, development & investment parcels',
  'No membership fees — ever',
];

type Tab = 'sell' | 'buy';

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<Tab>('sell');

  return (
    <section className="relative overflow-hidden bg-forest">

      {/* Animated pulse rings — New Western style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2">
          <div className="h-64 w-64 rounded-full border border-amber/20 animate-pulse-ring" />
          <div className="absolute inset-0 h-64 w-64 rounded-full border border-amber/15 animate-pulse-ring-delay" />
        </div>
        <div className="absolute top-1/3 right-1/4">
          <div className="h-48 w-48 rounded-full border border-meadow/20 animate-pulse-ring" style={{ animationDelay: '0.7s' }} />
        </div>
        {/* Subtle gradient blobs */}
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-amber/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-meadow/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">

          {/* Left — Headline + trust points + stats */}
          <div className="pt-2 animate-fade-up">

            {/* Serif italic label — Mynd style */}
            <p className="heading-serif text-amber text-2xl mb-4">
              {activeTab === 'sell' ? 'Sell your land with confidence.' : 'Buy before it hits the market.'}
            </p>

            {activeTab === 'sell' ? (
              <>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
                  Ohio Valley Land Buyer.
                  <span className="block text-amber mt-1">Local. Intentional. Fair.</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-white/70">
                  We buy vacant land, inherited property, and back-tax parcels across eight
                  counties in Ohio and West Virginia. Cash offer in 24 hours. Close in 14 days.
                  No agents, no fees, no out-of-state buyers.
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {sellerTrustPoints.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm font-medium text-white/80">
                      <ShieldCheck className="h-4 w-4 text-amber flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
                  Off-Market Land Deals
                  <span className="block text-amber mt-1">in the Ohio Valley.</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-white/70">
                  Join our buyer network and get first access to off-market land deals —
                  hunting tracts, farm ground, development sites, and investment parcels
                  across eight Ohio Valley counties.
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {buyerTrustPoints.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm font-medium text-white/80">
                      <Users className="h-4 w-4 text-amber flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-4 gap-4 border-t border-white/10 pt-10">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex flex-col items-center text-center">
                    <Icon className="h-4 w-4 text-amber mb-2" />
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/50 mt-0.5">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Community giving badge */}
            <div className="mt-8">
              <Link
                href="/community"
                className="inline-flex items-center gap-2 rounded-full border border-meadow/40 bg-meadow/10 px-4 py-2 text-xs font-medium text-meadow hover:bg-meadow/20 transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-meadow" />
                5% of every closing supports Ohio Valley communities
              </Link>
            </div>
          </div>

          {/* Right — Tabbed form card */}
          <div className="w-full animate-fade-up-delay-1">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl">

              {/* Tab switcher */}
              <div className="grid grid-cols-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('sell')}
                  className={`py-4 text-sm font-bold tracking-wide transition-all ${
                    activeTab === 'sell'
                      ? 'bg-amber text-forest'
                      : 'bg-transparent text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  I Want to SELL
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('buy')}
                  className={`py-4 text-sm font-bold tracking-wide transition-all border-l border-white/10 ${
                    activeTab === 'buy'
                      ? 'bg-amber text-forest'
                      : 'bg-transparent text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  I Want to BUY
                </button>
              </div>

              {/* Form content */}
              <div className="p-8 bg-white rounded-b-2xl">
                {activeTab === 'sell' ? (
                  <>
                    <div className="mb-6 text-center">
                      <h2 className="text-xl font-bold text-foreground">Get My Cash Offer</h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        30 seconds. We call within 24 hours.
                      </p>
                    </div>
                    <SellerForm />
                  </>
                ) : (
                  <>
                    <div className="mb-6 text-center">
                      <h2 className="text-xl font-bold text-foreground">Join the Deal List</h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        Tell us what you want. We call when it's available.
                      </p>
                    </div>
                    <InvestorIntakeForm />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* County strip */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="text-xs font-semibold text-white/40 uppercase tracking-widest text-center mb-5">
            Counties We Serve
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {serviceRegions.map((region) => (
              <Link
                key={region.slug}
                href={`/sell-land/${region.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 hover:border-amber/50 hover:text-amber transition-colors"
              >
                <MapPin className="h-3 w-3" />
                {region.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
