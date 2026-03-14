import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { countySellPages, getCountySellPage } from '@/lib/county-sell-data';
import { FAQSchema, LocalBusinessSchema } from '@/components/seo/json-ld';
import { SellerForm } from '@/components/forms/seller-form';
import { CheckCircle, MapPin } from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return countySellPages.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const county = getCountySellPage(params.slug);
  if (!county) return {};
  return {
    title: county.metaTitle,
    description: county.metaDescription,
    keywords: county.keywords,
  };
}

export default function CountySellPage({ params }: Props) {
  const county = getCountySellPage(params.slug);
  if (!county) notFound();

  const faqs = county.faqs.map((f) => ({ question: f.q, answer: f.a }));

  return (
    <>
      <LocalBusinessSchema
        name={`Ohio Valley Land Partners — ${county.name}, ${county.stateAbbr}`}
        description={county.metaDescription}
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">

        {/* Hero + Form */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">

              {/* Left */}
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs font-semibold text-primary">
                    {county.name}, {county.state}
                  </span>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  {county.headline}
                </h1>
                <p className="mt-4 text-lg text-muted-foreground leading-8">
                  {county.subheadline}
                </p>

                <div className="mt-8">
                  <h2 className="text-base font-semibold text-foreground mb-4">
                    Common Situations We Help With
                  </h2>
                  <ul className="flex flex-col gap-3">
                    {county.commonSituations.map((s) => (
                      <li key={s} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <h2 className="text-base font-semibold text-foreground mb-4">
                    Types of {county.name} Land We Buy
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {county.landTypes.map((type) => (
                      <span
                        key={type}
                        className="inline-flex items-center rounded-md border border-border bg-card px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — Seller form */}
              <div>
                <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
                  <div className="mb-6 text-center">
                    <h2 className="text-xl font-bold text-foreground">
                      Get a Cash Offer on Your {county.name} Land
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      We call you within 24 hours. No obligation.
                    </p>
                  </div>
                  <SellerForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why section */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Why We Buy Land in {county.name}
            </h2>
            <p className="text-muted-foreground leading-8">{county.why}</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Common Questions About Selling Land in {county.name}
            </h2>
            <div className="flex flex-col gap-6">
              {county.faqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-foreground mb-3">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-7">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-xl px-6 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to Sell Your {county.name} Land?
            </h2>
            <p className="text-muted-foreground mb-8">
              Submit your property above or browse our county guides for more market information.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href={`/ohio-valley-guides/${params.slug.replace('-oh', '').replace('-wv', '')}`}
                className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent/50 transition-colors"
              >
                {county.name} Market Guide
              </Link>
              <Link
                href="/blog"
                className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent/50 transition-colors"
              >
                Seller Resources &amp; Blog
              </Link>
            </div>
            <p className="mt-8 text-xs text-muted-foreground">
              Ohio Valley Land Partners operates as a principal buyer, not a licensed real estate broker
              or agent. We are not affiliated with any MLS or real estate brokerage.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
