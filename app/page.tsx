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

      {/* Market Coverage — Census-verified numbers */}
      <section className="py-16 border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 text-center">
            <div className="flex flex-col items-center gap-2">
              <span className="text-5xl font-black text-primary">1.77M+</span>
              <span className="text-sm font-semibold text-foreground">Acres in Our Market</span>
              <span className="text-xs text-muted-foreground max-w-[200px]">
                Combined land area across all 8 Ohio Valley counties we serve
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-5xl font-black text-primary">370K+</span>
              <span className="text-sm font-semibold text-foreground">People in Our Service Area</span>
              <span className="text-xs text-muted-foreground max-w-[200px]">
                Serving the full Ohio Valley across Ohio and West Virginia
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-5xl font-black text-primary">8</span>
              <span className="text-sm font-semibold text-foreground">Counties. 2 States. One Buyer.</span>
              <span className="text-xs text-muted-foreground max-w-[200px]">
                The only cash land buyer focused exclusively on the Ohio Valley region
              </span>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Source: U.S. Census Bureau, 2020 Decennial Census
          </p>
        </div>
      </section>

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

      {/* Mission section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Built for the Ohio Valley.
                <span className="block text-primary mt-1">Not Just Built in It.</span>
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-muted-foreground leading-8">
                <p>
                  We are an intentional buyer — not an international one. Rooted in the
                  Ohio Valley, buying land in eight specific counties in Ohio and West Virginia.
                  No out-of-state hedge fund. No call center. A local buyer who knows this
                  market, understands what this land means to families here, and answers
                  the phone.
                </p>
                <p>
                  Every transaction we close contributes to a nonprofit we are currently
                  forming for children and families in need across the Ohio Valley. A business
                  built on this region should invest in it.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                >
                  More about who we are and why we started &rarr;
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                { label: 'Cash offer turnaround', value: '24 Hours', sub: 'Guaranteed response on every inquiry' },
                { label: 'Average close timeline', value: '14 Days', sub: 'From signed agreement to funded close' },
                { label: 'Agent fees charged', value: '$0', sub: 'You deal directly with the buyer' },
                { label: 'Commitment to community', value: 'Every Deal', sub: 'A portion funds our Ohio Valley nonprofit' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-border bg-card p-6">
                  <div className="text-2xl font-black text-primary mb-1">{item.value}</div>
                  <div className="text-sm font-semibold text-foreground mb-1">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
