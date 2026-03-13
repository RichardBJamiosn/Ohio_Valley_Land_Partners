import type { Metadata } from 'next';
import { silos } from '@/lib/seo-config';
import { ArrowRight, Chrome as Home, Users, ChartBar as BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BreadcrumbSchema } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: silos.development.title,
  description: silos.development.description,
  keywords: silos.development.keywords,
};

const timeline = [
  {
    phase: 'Site Acquisition & Planning',
    year: '2025',
    status: 'In Progress',
    description: 'Securing prime real estate and completing master planning',
  },
  {
    phase: 'Infrastructure Development',
    year: '2026-2027',
    status: 'Planned',
    description: 'Utilities, roads, and site preparation',
  },
  {
    phase: 'Phase 1 Construction',
    year: '2027-2028',
    status: 'Planned',
    description: '120 residential units with amenities',
  },
  {
    phase: 'Phase 2 Expansion',
    year: '2028-2030',
    status: 'Planned',
    description: '180 additional units and commercial space',
  },
];

const benefits = [
  {
    title: 'Long-Term Appreciation',
    description: 'Build wealth through residential development with 10-20 year hold periods and institutional-grade asset management.',
    icon: BarChart3,
  },
  {
    title: 'Community Impact',
    description: 'Create thriving communities that enhance property values and provide lasting value to the Ohio Valley region.',
    icon: Users,
  },
  {
    title: 'Investor Transparency',
    description: 'Quarterly performance reports, milestone tracking, and direct access to development teams and financial data.',
    icon: Home,
  },
];

export default function DevelopmentPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: silos.development.title, url: silos.development.path }]} />

      <section className="py-20 sm:py-28 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Residential Development
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              Long-term residential development projects with comprehensive investor relations
              and transparent reporting across the Ohio Valley.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4 flex-wrap">
              <Button size="lg" asChild>
                <Link href="/investor-portal">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact?type=investor">Investor Relations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center mb-16">
            Project Timeline Framework
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent to-accent/30 transform -translate-x-1/2" />
            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <article key={item.phase} className={`flex gap-8 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex-1" />
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-accent shadow-lg relative z-10">
                      <span className="text-sm font-semibold text-accent-foreground">{idx + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className={`rounded-lg border border-border bg-card p-6 ${item.status === 'In Progress' ? 'border-accent/50' : ''}`}>
                      <h3 className="text-lg font-semibold text-foreground">{item.phase}</h3>
                      <p className="text-sm text-accent font-semibold mt-1">{item.year}</p>
                      <p className="text-muted-foreground mt-2">{item.description}</p>
                      <span className={`inline-block mt-4 text-xs font-semibold px-3 py-1 rounded-full ${
                        item.status === 'In Progress'
                          ? 'bg-accent/10 text-accent'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center mb-16">
            Investor Benefits
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article key={benefit.title} className="rounded-xl border border-border bg-card p-8 hover:border-accent/50 transition-all hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
