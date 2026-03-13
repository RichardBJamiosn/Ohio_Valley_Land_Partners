import type { Metadata } from 'next';
import { silos } from '@/lib/seo-config';
import { ArrowRight, Warehouse, Briefcase, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BreadcrumbSchema } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: silos.commercial.title,
  description: silos.commercial.description,
  keywords: silos.commercial.keywords,
};

const opportunities = [
  {
    title: 'Industrial Development',
    description: 'Manufacturing, logistics, and distribution center opportunities with built-in tenant relationships.',
    icon: Warehouse,
  },
  {
    title: 'Retail Centers',
    description: 'Mixed-use and retail developments in high-traffic Ohio Valley commercial corridors.',
    icon: Briefcase,
  },
  {
    title: 'Value-Add Projects',
    description: 'Repositioning and expansion opportunities with proven 15-20% IRR potential.',
    icon: TrendingUp,
  },
];

const projects = [
  {
    name: 'Wheeling Industrial Park',
    location: 'Ohio County, WV',
    sqft: '125,000',
    status: 'Pre-Development',
  },
  {
    name: 'Jefferson County Commerce Hub',
    location: 'Jefferson County, OH',
    sqft: '85,000',
    status: 'Site Acquisition',
  },
  {
    name: 'Belmont Retail Corridor',
    location: 'Belmont County, OH',
    sqft: '45,000',
    status: 'Leasing Phase',
  },
];

export default function CommercialPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: silos.commercial.title, url: silos.commercial.path }]} />

      <section className="py-20 sm:py-28 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Commercial Real Estate
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              Industrial and retail development opportunities designed for long-term value creation
              and regional economic growth across the Ohio Valley.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4 flex-wrap">
              <Button size="lg" asChild>
                <Link href="/contact?type=commercial">
                  Explore Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/investor-portal">Investor Reports</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center mb-16">
            Development Opportunities
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {opportunities.map((opp) => {
              const Icon = opp.icon;
              return (
                <article key={opp.title} className="rounded-xl border border-border bg-card p-8 hover:border-accent/50 transition-all hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{opp.title}</h3>
                  <p className="text-muted-foreground">{opp.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center mb-16">
            Active Projects
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.name} className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{project.location}</p>
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-foreground">{project.sqft}</span>
                  <span className="text-sm text-muted-foreground">sq ft</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold bg-accent/10 text-accent px-3 py-1 rounded-full">
                    {project.status}
                  </span>
                  <Link
                    href="/investor-portal"
                    className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                  >
                    Details &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
