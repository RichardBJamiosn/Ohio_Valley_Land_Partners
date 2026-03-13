import { FAQSchema } from '@/components/seo/json-ld';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  county: string;
  state: string;
}

export function FAQSection({ county, state }: FAQSectionProps) {
  const faqs: FAQItem[] = [
    {
      question: `What is the average price of land in ${county}, ${state}?`,
      answer: `Land prices in ${county}, ${state} vary depending on location, size, and zoning, but typically range from affordable rural parcels to premium development-ready properties. Our market reports provide current median prices and trends specific to ${county}.`,
    },
    {
      question: `Is ${county} a good investment for real estate?`,
      answer: `${county} offers diverse investment opportunities including land wholesaling, residential development, and commercial real estate. The region benefits from strategic Ohio Valley location, established infrastructure, and steady appreciation rates.`,
    },
    {
      question: `What types of properties are available in ${county}?`,
      answer: `${county} features a wide range of properties including raw land, development-ready parcels, commercial sites, and residential lots. We specialize in connecting investors with off-market wholesale opportunities and institutional-grade developments.`,
    },
    {
      question: `How long does it take to sell land in ${county}?`,
      answer: `The timeline for selling land in ${county} depends on property type, pricing, and market conditions. Our wholesale network enables 7-30 day closings for qualified deals, significantly faster than traditional listings.`,
    },
    {
      question: `What are the zoning regulations in ${county}?`,
      answer: `Zoning regulations in ${county} vary by township and municipality. Our team provides comprehensive zoning analysis and development feasibility studies for all properties in our portfolio, ensuring investors understand all regulatory requirements.`,
    },
    {
      question: `Does Ohio Valley Land Partners offer financing?`,
      answer: `We work exclusively with cash buyers and institutional investors. However, we maintain relationships with regional lenders and can provide introductions to financing partners for qualified projects in ${county}.`,
    },
  ];

  return (
    <>
      <FAQSchema faqs={faqs} />
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <article key={idx} className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
