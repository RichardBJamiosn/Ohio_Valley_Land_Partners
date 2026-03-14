'use client';

import Link from 'next/link';
import { MapPin, TrendingUp, Award, Users, ShieldCheck } from 'lucide-react';
import { SellerForm } from '@/components/forms/seller-form';

const stats = [
  { label: 'Acres Transacted', value: '12,500+', icon: MapPin },
  { label: 'Years of Experience', value: '20+', icon: TrendingUp },
  { label: 'Counties Served', value: '8', icon: Award },
  { label: 'Active Investors', value: '150+', icon: Users },
];

const serviceRegions = [
  { label: 'Belmont County', slug: 'belmont-county' },
  { label: 'Jefferson County', slug: 'jefferson-county' },
  { label: 'Columbiana County', slug: 'columbiana-county' },
  { label: 'Harrison County', slug: 'harrison-county' },
  { label: 'Carroll County', slug: 'carroll-county' },
  { label: 'Ohio County', slug: 'ohio-county' },
  { label: 'Marshall County', slug: 'marshall-county' },
  { label: 'Brooke County', slug: 'brooke-county' },
];

const trustPoints = [
  'No agent fees or commissions',
  'Close in as little as 14 days',
  'We buy land in any condition',
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">

        {/* Split layout: left headline / right seller form */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          {/* Left — Headline + Stats */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Ohio Valley's Premier Cash Land Buyer
              </span>
            </div>

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
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <ShieldCheck className="h-4 w-4 text-accent flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent mb-2">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — Cash Offer Form */}
          <div className="w-full">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold text-foreground">
                  Get My Cash Offer
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Takes 30 seconds. We call you within 24 hours.
                </p>
              </div>
              <SellerForm />
              <div className="mt-4 border-t border-border pt-4 text-center">
                <p className="text-xs text-muted-foreground">
                  Are you an investor?{' '}
                  <Link href="/investor-portal" className="text-accent hover:underline font-medium">
                    Access the Investor Portal
                  </Link>
                </p>
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
                href={`/ohio-valley-guides/${region.slug}`}
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
