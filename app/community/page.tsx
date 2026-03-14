import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Leaf, ArrowRight, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Giving Back — Ohio Valley Community Partners',
  description:
    'Ohio Valley Land Partners donates a portion of every land closing to organizations protecting Ohio Valley land, waterways, and families — including Arc of Appalachia and Salvation Army East Palestine recovery.',
  keywords: [
    'Ohio land buyers giving back',
    'support East Palestine recovery',
    'Arc of Appalachia partner',
    'Ohio Valley community investment',
    'land buyer nonprofit partner Ohio',
  ],
};

const partners = [
  {
    icon: Leaf,
    name: 'Arc of Appalachia',
    url: 'https://arcofappalachia.org',
    tagline: 'Protecting Ohio\'s forests, wetlands, and wild places.',
    description:
      'Arc of Appalachia acquires and permanently protects natural lands across the Ohio Hill Country — forests, wetlands, prairies, and stream corridors. They restore invasive-damaged land, clear illegal dump sites from rural properties, and maintain trail systems that connect communities to the natural landscape. As a land buyer operating in this region, supporting the organization doing the most important land stewardship work here is a natural fit.',
    focus: 'Land Conservation & Restoration',
    region: 'Southern & Eastern Ohio',
  },
  {
    icon: Heart,
    name: 'Salvation Army — East Palestine Recovery',
    url: 'https://www.salvationarmyusa.org',
    tagline: 'On the ground for Ohio Valley families when it matters most.',
    description:
      'The February 2023 Norfolk Southern train derailment in East Palestine, Ohio — in Columbiana County, one of the eight counties we serve — released toxic chemicals into the air, soil, and waterways of a community that had no warning and no resources to respond alone. The Salvation Army has maintained a presence there since the first days of the disaster, providing clean water, cleanup supplies, food, and emotional support to families whose land and health were compromised through no fault of their own. Supporting their continued work in East Palestine and across the Ohio Valley is personal for us.',
    focus: 'Disaster Recovery & Family Support',
    region: 'East Palestine, OH / Ohio Valley',
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-meadow/30 bg-meadow/10 px-4 py-2">
              <Heart className="h-4 w-4 text-meadow" />
              <span className="text-sm font-semibold text-meadow">Community Partners</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl leading-tight">
              Every Deal Gives Back
              <span className="block text-amber mt-2">to the Ohio Valley.</span>
            </h1>
            <div className="mt-8 flex flex-col gap-5 text-lg leading-9 text-muted-foreground">
              <p>
                A portion of every land closing Ohio Valley Land Partners completes goes
                directly to organizations doing real work in this region — protecting the
                land, cleaning up what others have damaged, and supporting the families
                who live here.
              </p>
              <p>
                This is not a corporate giving program designed to look good on a website.
                The Ohio Valley has real problems — environmental damage, economic hardship,
                communities hit by disasters they didn't cause. We are a land business
                operating in this region. We have an obligation to invest in it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Giving model */}
      <section className="py-12 border-t border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
            <div className="flex flex-col items-center gap-2 p-6">
              <span className="text-4xl font-black text-amber">5%</span>
              <span className="text-sm font-semibold text-foreground">of Every Closing</span>
              <span className="text-xs text-muted-foreground max-w-[200px]">
                5% of every land closing goes directly to our community partners
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 p-6">
              <span className="text-4xl font-black text-amber">2</span>
              <span className="text-sm font-semibold text-foreground">Partner Organizations</span>
              <span className="text-xs text-muted-foreground max-w-[200px]">
                Arc of Appalachia and Salvation Army East Palestine — both doing essential work in our region
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 p-6">
              <span className="text-4xl font-black text-amber">Ohio Valley</span>
              <span className="text-sm font-semibold text-foreground">Stays in the Ohio Valley</span>
              <span className="text-xs text-muted-foreground max-w-[200px]">
                Every dollar goes to organizations working specifically in the communities we serve
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Partner cards */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-14">Our Community Partners</h2>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {partners.map((partner) => {
              const Icon = partner.icon;
              return (
                <div
                  key={partner.name}
                  className="rounded-2xl border border-border bg-card p-8 flex flex-col gap-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-meadow/10 text-meadow">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{partner.name}</h3>
                      <p className="text-sm text-meadow font-medium mt-1">{partner.tagline}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-7">{partner.description}</p>

                  <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-border">
                    <span className="inline-flex items-center rounded-md bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      {partner.focus}
                    </span>
                    <span className="inline-flex items-center rounded-md bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      {partner.region}
                    </span>
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-meadow hover:text-meadow/80 transition-colors"
                    >
                      Visit {partner.name} <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* East Palestine callout */}
      <section className="py-16 bg-card border-t border-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-background p-8 sm:p-10">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Why East Palestine Matters to Us
            </h2>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground leading-7">
              <p>
                East Palestine is in Columbiana County — one of the eight counties we
                actively buy land in. The February 2023 Norfolk Southern derailment
                contaminated soil, water, and air in a community that had no warning
                and no resources to fight back on their own.
              </p>
              <p>
                Families in that area are still dealing with the aftermath. Some are
                looking to sell land and relocate. Others are staying and rebuilding.
                Either way, they deserve to work with a buyer who understands what
                happened there and is actively investing in the recovery — not one
                treating it as just another market.
              </p>
              <p>
                If you own land in Columbiana County and have been affected by the
                derailment, contact us. We will be straightforward about what your
                land is worth in current conditions and what your options are.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/sell-land/columbiana-county-oh"
                className="inline-flex items-center gap-2 rounded-lg bg-amber px-5 py-2.5 text-sm font-bold text-forest hover:bg-amber/90 transition-colors"
              >
                Sell Columbiana County Land <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-bold text-foreground hover:border-amber/50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency note */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Transparency Commitment</h2>
          <p className="text-muted-foreground leading-8 mb-6">
            We will publish an annual summary of donations made to our community partners —
            which organizations received funds, how much, and which deals generated them.
            We are in our first year of operation. That report will be published when we
            have closings to report.
          </p>
          <p className="text-sm text-muted-foreground">
            Want to know more about our giving model or suggest a community partner?{' '}
            <Link href="/contact" className="text-meadow hover:underline font-medium">
              Contact us directly.
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
