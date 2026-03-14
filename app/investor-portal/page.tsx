import type { Metadata } from 'next';
import { Users, MapPin, TrendingUp, Bell } from 'lucide-react';
import { InvestorIntakeForm } from '@/components/forms/investor-intake-form';

export const metadata: Metadata = {
  title: 'Investor Portal — Join the Ohio Valley Land Deal List',
  description:
    'Get first access to off-market land deals across the Ohio Valley. Join our buyer network — hunting tracts, farm ground, development sites, and investment parcels.',
};

const benefits = [
  {
    icon: Bell,
    title: 'First Access',
    description:
      'Deals go to our buyer list before they hit any public marketplace. You see them first.',
  },
  {
    icon: MapPin,
    title: 'Hyper-Local',
    description:
      'We only work in the Ohio Valley — Belmont, Jefferson, Columbiana, Harrison, Carroll (OH) and Ohio, Marshall, Brooke (WV).',
  },
  {
    icon: TrendingUp,
    title: 'All Use Cases',
    description:
      'Hunting and recreational tracts, farm ground, residential development sites, commercial parcels — we source all of it.',
  },
  {
    icon: Users,
    title: 'No Fees, Ever',
    description:
      'Joining the buyer network costs nothing. We make our margin on the buy side. Your cost is zero.',
  },
];

export default function InvestorPortal() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">

      {/* Hero */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Ohio Valley Land
              <span className="block text-primary mt-1">Buyer Network</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We're building the Ohio Valley's go-to network for off-market land deals.
              Tell us what you're looking for and we'll contact you directly when a matching
              parcel becomes available. No spam. No fees. Just deals.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-20">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                </div>
              );
            })}
          </div>

          {/* Intake form */}
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground">Join the Deal List</h2>
                <p className="text-sm text-muted-foreground mt-2">
                  Fill out your criteria below. We match deals to buyers manually — no algorithm, just a direct call.
                </p>
              </div>
              <InvestorIntakeForm />
            </div>
          </div>

          {/* Honest disclaimer */}
          <p className="mt-10 text-center text-xs text-muted-foreground max-w-xl mx-auto">
            Ohio Valley Land Partners is a new company actively building its deal pipeline across
            the Ohio Valley region. We operate as principal buyers — not licensed real estate
            agents or brokers. Deal flow is growing. Joining the list now ensures you're first
            in line when parcels matching your criteria become available.
          </p>
        </div>
      </section>
    </div>
  );
}
