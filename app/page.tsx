import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/hero-section';
import { LocalBusinessSchema, FAQSchema } from '@/components/seo/json-ld';
import { TreePine, Clock, DollarSign, MapPin, Heart, ChevronDown, ArrowRight, Target } from 'lucide-react';
import Link from 'next/link';
import { silos, siteConfig } from '@/lib/seo-config';
import { countySellPages } from '@/lib/county-sell-data';
import { campaignFeaturedSlug } from '@/lib/blog-data';

export const metadata: Metadata = {
  alternates: {
    canonical: siteConfig.url,
  },
};

const homepageFAQs = [
  {
    question: 'How do I sell vacant land in Ohio without a real estate agent?',
    answer:
      'Submit your parcel address through our contact form or homepage. Ohio Valley Land Partners reviews county auditor records, tax history, and comparable sales, then calls you with a written cash offer within 24 hours. If you accept, we sign a purchase agreement and close through a licensed title company in 14–21 days — no listing, no showings, and no agent commissions.',
  },
  {
    question: 'Do you buy land with back taxes or tax liens?',
    answer:
      'Yes. Under ORC § 5721.181 in Ohio (and comparable WV processes), delinquent taxes become a lien paid at closing from sale proceeds. We factor the total tax debt into our offer so you do not pay out of pocket. Selling before a county tax sale or forfeiture is almost always better than doing nothing.',
  },
  {
    question: 'Can I sell inherited land before probate is complete?',
    answer:
      'Often yes, with court authorization. Under ORC § 2113.39, an Ohio executor or administrator can petition probate court to approve a sale of estate real property before the estate fully closes. Ohio Valley Land Partners regularly purchases from estates mid-probate and coordinates with your attorney.',
  },
  {
    question: 'Do you buy landlocked parcels with no road access?',
    answer:
      'We evaluate them case by case. Landlocked parcels are worth less, but many still have value — especially if they adjoin larger tracts or have a recorded easement. Submit the address and we will check county GIS maps and title records before giving you an honest assessment.',
  },
  {
    question: 'How fast can you close on vacant land?',
    answer:
      'Typically 14–21 days from signed purchase agreement on a clean-title parcel. Probate, heir disputes, or complex title issues can extend the timeline, but we handle those with a local title company. No lender approval or appraisal contingency is required because we pay cash.',
  },
  {
    question: 'What counties in Ohio and West Virginia do you buy land in?',
    answer:
      'Nine counties: Franklin, Belmont, Jefferson, Columbiana, Harrison, and Carroll in Ohio; Ohio, Marshall, and Brooke in West Virginia. Franklin County is our active Columbus campaign. Each county has a dedicated sell-land page and Ohio Valley guide on this site.',
  },
  {
    question: 'How do you calculate a cash offer for my land?',
    answer:
      'We pull comparable land sales from the county auditor, assess road access, utilities, zoning, liens, and back taxes, then build an offer based on what the parcel can realistically support for our end use. We explain the number when we call — no obligation to accept.',
  },
  {
    question: 'What happens after I submit my parcel information?',
    answer:
      'We research your parcel within 24 hours using county auditor and GIS records. A team member calls you with a cash offer and walks through next steps. If you accept, we send a purchase agreement, open title, and schedule closing. You can also reach us at (614) 653-7430.',
  },
];

const whatWeDo = [
  {
    name: silos.land.title,
    description: 'Cash offers on vacant land, inherited property, back-tax parcels, and Franklin County infill lots. No agents, no fees.',
    href: silos.land.path,
    icon: TreePine,
    tag: 'Core Business',
  },
  {
    name: silos.guides.title,
    description: 'County-by-county guides to selling land in the Ohio Valley and active campaign markets — what land sells for, who buys it, and how the process works.',
    href: silos.guides.path,
    icon: MapPin,
    tag: '9 Active',
  },
];

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={homepageFAQs} />

      <HeroSection />

      {/* Geauga County campaign — Monday outbound push */}
      <section className="border-b border-amber/20 bg-amber/5">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-xs font-semibold text-amber mb-4">
                <Target className="h-3.5 w-3.5" />
                Active Campaign — Geauga County, OH
              </div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Selling vacant land in Chesterland, Chardon, or western Geauga?
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We are buying vacant lots, inherited parcels, and long-held infill ground across
                western Geauga — ZIP codes 44022, 44023, 44026, 44065, 44072, and 44202. Cash offer
                within 24 hours. Close in 14–21 days.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href={`/blog/${campaignFeaturedSlug}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:border-amber/40 transition-colors"
              >
                Read the Geauga guide
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber px-5 py-3 text-sm font-bold text-forest hover:bg-amber/90 transition-colors"
              >
                Get Cash Offer <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sell-land index — crawl paths for county conversion pages */}
      <section className="py-16 border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="heading-serif text-amber text-xl mb-2">Sell Your Land</p>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              County Cash-Buyer Pages
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Every county we buy in has a dedicated page with local FAQs, tax guidance, and a direct
              path to a cash offer.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {countySellPages.map((county) => (
              <Link
                key={county.slug}
                href={`/sell-land/${county.slug}`}
                className="flex items-center justify-between rounded-xl border border-border bg-background px-5 py-4 text-sm font-medium text-foreground hover:border-amber/40 hover:text-amber transition-colors"
              >
                <span>
                  {county.name}, {county.stateAbbr}
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Also buying in{' '}
            <Link href={`/blog/${campaignFeaturedSlug}`} className="text-meadow font-semibold hover:underline">
              Geauga County, Ohio
            </Link>
            {' '}this season —{' '}
            <Link href="/ohio-valley-guides" className="text-meadow font-semibold hover:underline">
              browse all county guides
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Market Coverage — Census-verified numbers */}
      <section className="py-16 border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 text-center">
            <div className="flex flex-col items-center gap-2">
              <span className="text-5xl font-black text-amber">1.77M+</span>
              <span className="text-sm font-semibold text-foreground">Core Ohio Valley Acres</span>
              <span className="text-xs text-muted-foreground max-w-[200px]">
                Multiple active campaigns across the entire Ohio Valley
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-5xl font-black text-amber">370K+</span>
              <span className="text-sm font-semibold text-foreground">Core Service-Area Population</span>
              <span className="text-xs text-muted-foreground max-w-[200px]">
                Serving the Ohio Valley while launching a thriving builder-buyer community.
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-5xl font-black text-amber">9</span>
              <span className="text-sm font-semibold text-foreground">Active Campaigns Across Ohio</span>
              <span className="text-xs text-muted-foreground max-w-[200px]">
                Nine Ohio Valley Campaigns actively giving back to local communities.
              </span>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Source: U.S. Census Bureau, 2020 Decennial Census
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="heading-serif text-amber text-2xl mb-3">Who we are / What we do</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              We are builders and developers working directly with landowners.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              No hedge fund. No call center. A network of local buyers with one focus — buying land
              in the Ohio Valley from sellers who want a fair deal
              and a fast close.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-4xl grid grid-cols-1 gap-8 sm:grid-cols-2">
            {whatWeDo.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.name}
                  className="group relative flex flex-col gap-6 rounded-2xl border border-border bg-card p-8 hover:border-amber/40 transition-all hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber/10 text-amber group-hover:bg-amber group-hover:text-forest transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold text-amber/70 border border-amber/20 rounded-full px-3 py-1">
                      {item.tag}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-amber transition-colors">
                      <Link href={item.href}>
                        <span className="absolute inset-0" />
                        {item.name}
                      </Link>
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Link
                      href={item.href}
                      className="text-sm font-semibold text-meadow hover:text-meadow/80 transition-colors"
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

      {/* FAQ section */}
      <section className="py-24 sm:py-32 bg-background border-t border-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="heading-serif text-amber text-2xl mb-3">Common Questions</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Selling Land To Ohio Valley Land Partners
            </h2>
            <p className="mt-4 text-muted-foreground">
              Straightforward answers to the questions sellers ask most.
            </p>
          </div>
          <dl className="flex flex-col gap-4">
            {homepageFAQs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-border bg-card p-6 open:border-amber/30 transition-all"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-foreground list-none">
                  <dt>{faq.question}</dt>
                  <ChevronDown className="h-5 w-5 text-amber shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <dd className="mt-4 text-sm leading-7 text-muted-foreground">{faq.answer}</dd>
              </details>
            ))}
          </dl>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Have a question that isn&apos;t answered here?{' '}
            <Link href="/contact" className="text-meadow hover:underline font-semibold">
              Contact us directly.
            </Link>
          </p>
        </div>
      </section>

      {/* Mission section */}
      <section className="py-24 sm:py-32 bg-card border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="heading-serif text-amber text-2xl mb-3">Why we exist</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Built for the Ohio Valley.
                <span className="block text-amber mt-1">Not Just Built in It.</span>
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
                  5% of every closing goes directly to Arc of Appalachia — protecting
                  Ohio's forests and waterways — and the Salvation Army's East Palestine
                  recovery work in Columbiana County. A business operating in the Ohio Valley
                  should invest in it.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-meadow hover:text-meadow/80 transition-colors"
                >
                  More about who we are and why we started &rarr;
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                { label: 'Cash offer turnaround', value: '24 Hours', sub: 'Guaranteed response on every inquiry', icon: Clock },
                { label: 'Average close timeline', value: '14 Days', sub: 'From signed agreement to funded close', icon: Clock },
                { label: 'Agent fees charged', value: '$0', sub: 'You deal directly with the buyer', icon: DollarSign },
                { label: 'Back to the Ohio Valley', value: '5%', sub: 'Of every closing to Arc of Appalachia & Salvation Army East Palestine', icon: Heart },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-border bg-background p-6">
                  <div className="text-2xl font-black text-amber mb-1">{item.value}</div>
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
