import { HeroSection } from '@/components/home/hero-section';
import { LocalBusinessSchema, OrganizationSchema } from '@/components/seo/json-ld';
import { Building2, TrendingUp, Users, Target } from 'lucide-react';
import Link from 'next/link';
import { silos } from '@/lib/seo-config';

const pillars = [
  {
    name: silos.land.title,
    description: 'Strategic land acquisitions and wholesale opportunities for motivated sellers and cash buyers in the Ohio Valley region.',
    href: silos.land.path,
    icon: Target,
    stats: '2,500+ acres',
  },
  {
    name: silos.commercial.title,
    description: 'Industrial and retail development opportunities designed for long-term value creation and regional economic growth.',
    href: silos.commercial.path,
    icon: Building2,
    stats: '45 projects',
  },
  {
    name: silos.development.title,
    description: 'Long-term residential development projects with comprehensive investor relations and transparent reporting.',
    href: silos.development.path,
    icon: TrendingUp,
    stats: '12 communities',
  },
  {
    name: silos.guides.title,
    description: 'Comprehensive county-by-county market analysis and investment guides for the entire Ohio Valley region.',
    href: silos.guides.path,
    icon: Users,
    stats: '8 counties',
  },
];

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <OrganizationSchema />

      <HeroSection />

      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Strategic Investment Pillars
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Four specialized divisions working together to create comprehensive real estate solutions
              across the Ohio Valley region.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.name}
                  className="group relative flex flex-col gap-6 rounded-2xl border border-border bg-card p-8 hover:border-accent/50 transition-all hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-semibold text-muted-foreground">
                      {pillar.stats}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      <Link href={pillar.href}>
                        <span className="absolute inset-0" />
                        {pillar.name}
                      </Link>
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Link
                      href={pillar.href}
                      className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                    >
                      Learn more &rarr;
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-accent">
              Investor-First Approach
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built for Long-Term Value Creation
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our 20-year roadmap focuses on sustainable growth, transparent reporting,
              and building lasting partnerships with our investor community.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  Transparent Reporting
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    Quarterly market reports with detailed IRR analysis and performance metrics
                    for all active projects and developments.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  Regional Expertise
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    Deep local knowledge across eight counties with established relationships
                    and proven track records in each market.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  Proven Track Record
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    Over 20 years of successful land transactions, development projects,
                    and satisfied investor partnerships across the region.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
