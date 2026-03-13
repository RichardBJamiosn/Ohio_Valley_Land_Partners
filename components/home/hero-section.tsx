'use client';

import Link from 'next/link';
import { ArrowRight, MapPin, TrendingUp, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { label: 'Acres Transacted', value: '12,500+', icon: MapPin },
  { label: 'Years of Experience', value: '20+', icon: TrendingUp },
  { label: 'Counties Served', value: '8', icon: Award },
  { label: 'Active Investors', value: '150+', icon: Users },
];

const serviceRegions = [
  'Belmont County',
  'Jefferson County',
  'Columbiana County',
  'Harrison County',
  'Carroll County',
  'Ohio County',
  'Marshall County',
  'Brooke County',
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Ohio Valley's Premier Real Estate Authority
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Strategic Land Investments
            <span className="block text-primary mt-2">Across the Ohio Valley</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            We specialize in land wholesaling, commercial development, and long-term residential projects
            across eight counties in Ohio and West Virginia. Building wealth through strategic real estate
            for over two decades.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-4 gap-y-4 flex-wrap">
            <Button size="lg" className="h-12 px-8" asChild>
              <Link href="/land">
                Explore Land Opportunities
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8" asChild>
              <Link href="/investor-portal">
                Investor Portal
              </Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent mb-3">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">Service Area Coverage</h2>
            <p className="text-muted-foreground mt-2">
              Comprehensive real estate services across the Ohio Valley region
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceRegions.map((region) => (
              <Link
                key={region}
                href={`/ohio-valley-guides/${region.toLowerCase().replace(' ', '-')}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent/5 hover:border-accent transition-colors"
              >
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-foreground">{region}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-tr from-accent/20 to-primary/20 opacity-20"
          style={{
            clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
      </div>
    </section>
  );
}
