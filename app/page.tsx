import { HeroSection } from '@/components/home/hero-section';
import { LocalBusinessSchema, OrganizationSchema, FAQSchema } from '@/components/seo/json-ld';
import { TreePine, Clock, DollarSign, MapPin, Heart, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { silos } from '@/lib/seo-config';

const homepageFAQs = [
  {
    question: 'How long does it take to sell land to a cash buyer in the Ohio Valley?',
    answer:
      'Ohio Valley Land Partners closes most transactions in 14–21 business days from signed purchase agreement when title is ready. No lender approval, appraisal, or agent commission is required. Sellers in our core Ohio Valley counties and our active Franklin County campaign receive a written cash offer after property review.',
  },
  {
    question: 'What types of land do you buy in the Ohio Valley?',
    answer:
      'We buy vacant rural land, inherited land, tax-delinquent parcels, landlocked land, timber land, agricultural land, infill lots, and residential vacant lots across our Ohio Valley service area and Franklin County campaign. We buy land in any condition — no clean-up, no survey, and no repairs required.',
  },
  {
    question: 'Do I need a real estate agent to sell my land to you?',
    answer:
      'No. Ohio Valley Land Partners is a principal buyer, not a licensed broker. You deal directly with the buyer. There are no agent fees, no commissions, and no listing period. We pay all standard closing costs.',
  },
  {
    question: 'Can you buy land that has back taxes owed?',
    answer:
      'Yes. We regularly purchase land with delinquent property taxes in Ohio and West Virginia. Outstanding taxes are accounted for in our offer and resolved at closing through the title company. You do not need to pay them out of pocket before we can close.',
  },
  {
    question: 'Can you buy inherited land that is still in probate?',
    answer:
      'In many cases, yes. Ohio allows land to be sold during probate with court authorization once the estate is open and an executor has been appointed. We work with sellers in the probate process and can close once the executor has the authority to transfer title. Contact us and we will review your specific situation.',
  },
  {
    question: 'How do you determine your cash offer on a piece of land?',
    answer:
      'Our offer is based on comparable land sales from the past 12 months in the county, the parcel\'s access (road frontage or landlocked), zoning classification, any outstanding liens or taxes, and our intended use of the property. We provide a written offer with no obligation — you are free to accept, decline, or compare it with other options.',
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
      <OrganizationSchema />
      <FAQSchema faqs={homepageFAQs} />

      <HeroSection />

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
              No hedge fund. No call center. A local buyer with one focus — buying land
              in the Ohio Valley and Franklin County from sellers who want a fair deal
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
              Selling Land in the Ohio Valley
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
