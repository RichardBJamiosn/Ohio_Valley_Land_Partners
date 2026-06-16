import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { silos } from '@/lib/seo-config';
import { BreadcrumbSchema } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: silos.guides.title,
  description: silos.guides.description,
  keywords: silos.guides.keywords,
};

const FILTER_TABS = [
  { label: 'All Guides', href: '/ohio-valley-guides', active: true },
  { label: 'Valley Market Report', href: '/blog/ohio-valley-land-market-2026' },
  { label: 'Franklin County', href: '/ohio-valley-guides/franklin-county-oh' },
  { label: 'Belmont County', href: '/ohio-valley-guides/belmont-county-oh' },
  { label: 'Columbiana County', href: '/ohio-valley-guides/columbiana-county-oh' },
  { label: 'Sell Land', href: '/land' },
  { label: 'Browse Listings', href: '/properties' },
];

const ATLAS_STATES = [
  { abbr: 'PA', name: 'Pennsylvania' },
  { abbr: 'OH', name: 'Ohio' },
  { abbr: 'WV', name: 'West Virginia' },
  { abbr: 'KY', name: 'Kentucky' },
];

const COUNTY_GUIDES = [
  {
    slug: 'belmont-county-oh',
    name: 'Belmont County',
    state: 'OH' as const,
    mark: 'BC',
    headerClass: 'bg-gradient-to-br from-[#1a3328] via-meadow/50 to-[#0f1f18]',
    hook: 'Timber, shale country & Ohio River acreage',
    description:
      "Rural parcels, inherited land, and farm ground in one of the valley's most active land markets.",
  },
  {
    slug: 'jefferson-county-oh',
    name: 'Jefferson County',
    state: 'OH' as const,
    mark: 'JC',
    headerClass: 'bg-gradient-to-br from-[#2a3f4f] via-[#1e3040] to-forest',
    hook: 'Hill country & river-bottom land',
    description:
      'Steep acreage, timber tracts, and parcels along the Ohio — a market with its own pricing logic.',
  },
  {
    slug: 'columbiana-county-oh',
    name: 'Columbiana County',
    state: 'OH' as const,
    mark: 'CC',
    headerClass: 'bg-gradient-to-br from-[#3d3020] via-amber/35 to-forest',
    hook: 'East Palestine & post-derailment context',
    description:
      'Market conditions, land value factors, and what sellers in this county should understand right now.',
    highlighted: true,
  },
  {
    slug: 'harrison-county-oh',
    name: 'Harrison County',
    state: 'OH' as const,
    mark: 'HC',
    headerClass: 'bg-gradient-to-br from-[#1c2e22] via-[#264a38] to-[#142218]',
    hook: 'Remote acreage & hunting land',
    description:
      'Back-tax parcels, wooded tracts, and rural ground — what moves and what sits in this county.',
  },
  {
    slug: 'carroll-county-oh',
    name: 'Carroll County',
    state: 'OH' as const,
    mark: 'CR',
    headerClass: 'bg-gradient-to-br from-[#2a3d1f] via-[#3d5a2a] to-forest',
    hook: 'Farm ground & rolling hill country',
    description: 'Agricultural parcels, wooded acreage, and inherited family land in Amish country.',
  },
  {
    slug: 'franklin-county-oh',
    name: 'Franklin County',
    state: 'OH' as const,
    mark: 'FC',
    headerClass: 'bg-gradient-to-br from-[#2c3444] via-[#3a4a5c] to-forest',
    hook: 'Columbus infill & metro-fringe lots',
    description: 'Central Ohio campaign — different market than the river counties, worth its own guide.',
  },
  {
    slug: 'ohio-county-wv',
    name: 'Ohio County, WV',
    state: 'WV' as const,
    mark: 'OC',
    headerClass: 'bg-gradient-to-br from-[#1e3550] via-[#2a4a6b] to-[#152535]',
    hook: 'Wheeling metro & northern panhandle',
    description:
      'Vacant lots and acreage on the West Virginia side of the valley — market overview and FAQs.',
  },
  {
    slug: 'marshall-county-wv',
    name: 'Marshall County',
    state: 'WV' as const,
    mark: 'MC',
    headerClass: 'bg-gradient-to-br from-[#2a2f35] via-[#3d4550] to-[#1a1f24]',
    hook: 'Industrial fringe & river parcels',
    description: 'Land near Moundsville and the Ohio River — development and investment market notes.',
  },
  {
    slug: 'brooke-county-wv',
    name: 'Brooke County',
    state: 'WV' as const,
    mark: 'BK',
    headerClass: 'bg-gradient-to-br from-[#1a3040] via-[#254a5a] to-[#122028]',
    hook: 'Ohio River frontage & small-town lots',
    description: 'River-adjacent acreage and vacant parcels in the northern panhandle.',
  },
];

const INSIDE_GUIDES = [
  {
    num: '01',
    title: 'Land types in this county',
    description:
      "Vacant lots, timber, farm ground, inherited parcels, back-tax land — what's common here and what buyers look for.",
  },
  {
    num: '02',
    title: 'Seller situations we see',
    description:
      'Inherited land, out-of-state owners, estate settlements, delinquent taxes — how each situation plays out locally.',
  },
  {
    num: '03',
    title: 'County FAQs',
    description:
      'Zoning, pricing patterns, and process — plain answers from someone operating in that county.',
  },
];

const SCOPE_STATS = [
  {
    num: '4',
    label: 'Ohio River states',
    sub: 'Pennsylvania, Ohio, West Virginia & Kentucky — the valley is vast before you reach a single county.',
  },
  {
    num: '981',
    label: 'Miles of river',
    sub: "From Pittsburgh to Cairo — the corridor that defines Appalachia's western edge.",
  },
  {
    num: '9',
    label: 'County guides',
    sub: 'Our active footprint within the valley — where we publish, buy, and know the ground.',
  },
];

function StatePill({ state }: { state: 'OH' | 'WV' }) {
  return (
    <span
      className={`absolute bottom-2.5 left-3 z-10 text-[0.62rem] font-extrabold px-2 py-1 rounded-md text-white ${
        state === 'OH' ? 'bg-meadow' : 'bg-[#2a4a6b]'
      }`}
    >
      {state}
    </span>
  );
}

export default function GuidesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: 'Home', url: '/' }, { name: silos.guides.title, url: silos.guides.path }]}
      />

      <div className="min-h-screen bg-background">

        {/* Hero — solid forest, no bright photo behind the type */}
        <section className="relative min-h-[78vh] flex items-center overflow-hidden bg-forest">
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(51,117,94,0.18),transparent_55%),radial-gradient(ellipse_at_80%_20%,rgba(200,150,58,0.08),transparent_45%)]"
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-center">
              <div>
                <p className="heading-serif text-[#e8c47a] text-2xl sm:text-[1.65rem] mb-3.5">
                  County-by-county. Written by the buyer.
                </p>
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] leading-[1.06]">
                  Ohio Valley Guides
                  <span className="block text-amber mt-1.5">for buyers and sellers.</span>
                </h1>
                <p className="mt-5 text-base text-white/80 leading-relaxed max-w-lg">
                  Field notes from the counties where we work — what land is worth, who buys it,
                  and how each market actually behaves. For landowners selling and builders buying
                  in the same valley.
                </p>
                <div className="flex flex-wrap gap-2 mt-7">
                  <a
                    href="#county-guides"
                    className="text-[0.7rem] font-semibold px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 text-white/90 hover:bg-white/[0.14] transition-colors"
                  >
                    9 county guides
                  </a>
                  <Link
                    href="/blog/ohio-valley-land-market-2026"
                    className="text-[0.7rem] font-semibold px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 text-white/90 hover:bg-white/[0.14] transition-colors"
                  >
                    2026 market report
                  </Link>
                  <Link
                    href="/blog"
                    className="text-[0.7rem] font-semibold px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 text-white/90 hover:bg-white/[0.14] transition-colors"
                  >
                    All blog posts
                  </Link>
                </div>
              </div>

              <div className="rounded-[20px] border border-white/15 bg-[#142218]/90 p-7 shadow-xl">
                <h2 className="text-white text-xs font-bold uppercase tracking-widest text-center mb-2">
                  The Ohio Valley atlas
                </h2>
                <p className="text-white/70 text-[0.72rem] text-center mb-4 leading-snug">
                  The Ohio River runs 981 miles — Pennsylvania to Illinois. Four states define the
                  heart of the valley we work in.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {ATLAS_STATES.map((state) => (
                    <div
                      key={state.abbr}
                      className="text-center py-4 px-2 rounded-xl bg-black/30 border border-white/10"
                    >
                      <div className="text-xl font-extrabold text-amber">{state.abbr}</div>
                      <div className="text-[0.58rem] font-semibold text-white/75 uppercase tracking-wide mt-1 leading-tight">
                        {state.name}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-center text-[0.68rem] text-white/60 heading-serif italic">
                  Our guides cover 9 active counties within this corridor — the ground we know.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filter tabs */}
        <div className="sticky top-[72px] z-40 bg-card border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {FILTER_TABS.map((tab) => (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`text-[0.78rem] font-bold px-4 py-2 rounded-full border transition-colors ${
                    tab.active
                      ? 'bg-forest text-white border-forest'
                      : 'bg-muted text-muted-foreground border-border hover:border-amber hover:text-foreground'
                  }`}
                >
                  {tab.label}
                </Link>
              ))}
            </div>
            <span className="text-[0.78rem] text-muted-foreground hidden sm:inline">
              Quick jump — every link goes to an existing page.
            </span>
          </div>
        </div>

        {/* Featured Franklin */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 pt-14 pb-6">
          <p className="heading-serif text-amber text-2xl mb-2">Primary campaign</p>
          <h2 className="text-3xl font-extrabold tracking-tight">Start here if you&apos;re in Central Ohio</h2>

          <article className="mt-6 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] rounded-3xl overflow-hidden border-2 border-amber bg-card shadow-[0_12px_48px_rgba(200,150,58,0.15)]">
            <div className="relative min-h-[220px] lg:min-h-[300px] bg-gradient-to-br from-[#2c3444] via-forest to-meadow/25 flex items-center justify-center p-8">
              <div className="text-center">
                <span className="inline-block bg-amber text-forest text-[0.65rem] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-md mb-4">
                  Franklin County · Active Campaign
                </span>
                <p className="text-5xl sm:text-6xl font-extrabold text-white/10 tracking-tight">Franklin</p>
                <p className="heading-serif text-[#e8c47a] text-xl mt-2">Central Ohio · Columbus metro</p>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <h3 className="text-2xl font-extrabold">Franklin County, OH</h3>
              <p className="text-amber font-semibold text-sm mt-2">
                Columbus infill lots, residential parcels & urban-fringe acreage
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3.5">
                Franklin sits outside the core Ohio River Valley — it&apos;s our active Columbus campaign.
                A different market than Belmont or Jefferson, with its own zoning, pricing, and buyer demand.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {['Infill lots', 'Intel corridor', 'Columbus metro'].map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.68rem] font-semibold px-2.5 py-1 rounded-lg bg-muted text-meadow"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/ohio-valley-guides/franklin-county-oh"
                className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg bg-amber px-5 py-3 text-sm font-extrabold text-forest hover:bg-amber/90 transition-colors"
              >
                Read Franklin County Guide <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </section>

        {/* County grid */}
        <section id="county-guides" className="mx-auto max-w-7xl px-6 lg:px-8 py-8 pb-16 sm:pb-20">
          <p className="heading-serif text-amber text-2xl mb-2">Our active footprint</p>
          <h2 className="text-3xl font-extrabold tracking-tight">County guides — Ohio & West Virginia</h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-xl leading-relaxed">
            Nine counties where we buy and publish. Each guide covers land types, common seller
            situations, and county-specific FAQs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
            {COUNTY_GUIDES.map((county) => (
              <Link
                key={county.slug}
                href={`/ohio-valley-guides/${county.slug}`}
                className={`group rounded-[20px] overflow-hidden bg-card border shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${
                  county.highlighted ? 'border-amber/40' : 'border-border'
                }`}
              >
                <div className={`relative h-[120px] ${county.headerClass}`}>
                  <span
                    className="absolute inset-0 flex items-center justify-center text-5xl font-extrabold text-white/[0.07] tracking-widest select-none"
                    aria-hidden
                  >
                    {county.mark}
                  </span>
                  <StatePill state={county.state} />
                </div>
                <div className="p-5 pb-6">
                  <h3 className="text-lg font-extrabold group-hover:text-amber transition-colors">
                    {county.name}
                  </h3>
                  <p className="text-[0.78rem] text-amber font-semibold mt-1.5 leading-snug">
                    {county.hook}
                  </p>
                  <p className="text-[0.78rem] text-muted-foreground leading-relaxed mt-2.5">
                    {county.description}
                  </p>
                  <span className="block mt-3.5 text-[0.75rem] font-bold text-meadow group-hover:text-meadow/80 transition-colors">
                    Read guide →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* What's inside */}
        <section className="bg-forest text-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center mb-10">What&apos;s inside every guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {INSIDE_GUIDES.map((item) => (
                <div
                  key={item.num}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-7"
                >
                  <div className="text-3xl font-extrabold text-amber/50 leading-none">{item.num}</div>
                  <h3 className="text-base font-bold mt-3 mb-2">{item.title}</h3>
                  <p className="text-[0.82rem] text-white/70 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Editorial scope */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {SCOPE_STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold text-amber">{stat.num}</div>
                <div className="text-[0.72rem] font-bold uppercase tracking-wider text-foreground mt-2">
                  {stat.label}
                </div>
                <p className="text-[0.78rem] text-muted-foreground mt-1.5 leading-relaxed">{stat.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-20 sm:pb-28">
          <div className="rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-forest via-[#1e3328] to-meadow/30 p-8 sm:p-12 text-white shadow-md">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Go deeper on your county</h2>
            <p className="text-sm text-white/75 leading-relaxed mt-3 max-w-2xl">
              Pick a guide above, or read the full{' '}
              <Link
                href="/blog/ohio-valley-land-market-2026"
                className="text-[#e8c47a] font-semibold hover:text-amber transition-colors"
              >
                2026 Ohio Valley land market report
              </Link>{' '}
              for regional context across PA, OH, WV, and KY.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-lg bg-amber px-5 py-3 text-sm font-extrabold text-forest hover:bg-amber/90 transition-colors"
              >
                Read the Blog <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/land"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors"
              >
                Ready to sell? Start here
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}