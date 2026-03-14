import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Heart, Shield, MapPin, Handshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — Ohio Valley Land Partners',
  description:
    'Ohio Valley Land Partners is a cash land buyer dedicated to the Ohio Valley region — built on honest offers, fast closings, and a commitment to giving back to the communities we serve.',
};

const principles = [
  {
    icon: Shield,
    title: 'Honest Offers. Every Time.',
    description:
      'We explain every number we put in front of you. If we can\'t make the math work for both sides, we say so — and we say it quickly, so you\'re not waiting on an answer that isn\'t coming.',
  },
  {
    icon: Handshake,
    title: 'Direct. No Middlemen.',
    description:
      'We are the buyer. There is no chain of investors, no assignment flip happening behind the scenes. We make an offer, we sign a purchase agreement, we close. That\'s the entire process.',
  },
  {
    icon: MapPin,
    title: 'Local. Not a Land Grab.',
    description:
      'There is real concern in the Ohio Valley about outside investors sweeping in to buy family land cheap. We are not that. We are rooted here — buying in eight specific counties in Ohio and West Virginia because this is where we live, not because an algorithm pointed us here.',
  },
  {
    icon: Heart,
    title: 'Built to Give Back.',
    description:
      'A portion of every transaction we close goes toward a nonprofit for children and families in need across the Ohio Valley — currently in formation. A business built on this region should invest in it.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">

      {/* Hero */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl leading-tight">
              We Started This Because
              <span className="block text-primary mt-2">Landowners Deserve Better.</span>
            </h1>
            <div className="mt-8 flex flex-col gap-5 text-lg leading-9 text-muted-foreground">
              <p>
                Selling land in the Ohio Valley is harder than it should be. The traditional
                market ignores rural parcels. National cash buyers treat them as line items.
                Agents who do take the listing rarely know the county, the zoning, or the
                specific circumstances that make every land sale different.
              </p>
              <p>
                Ohio Valley Land Partners was built to change that — one parcel at a time,
                in eight counties we know and care about. Direct, honest, and committed to
                doing right by every seller we work with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 border-t border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground">How We Operate</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Four things that are true about every deal we do — from the first call to the closing table.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="rounded-2xl border border-border bg-background p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent mb-5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-7">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The mission */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                The Commitment Beyond the Deal
              </h2>
              <div className="flex flex-col gap-5 text-muted-foreground leading-8">
                <p>
                  Ohio Valley Land Partners is currently forming a nonprofit organization
                  dedicated to children and families in need across the Ohio Valley region.
                  A portion of every land transaction we close will fund that organization.
                </p>
                <p>
                  This isn't a cause we added to a website to look good. It is the reason
                  the company was built the way it was — with a long-term commitment to this
                  specific region, not a short-term play to flip deals and move on.
                </p>
                <p>
                  When you sell your land to Ohio Valley Land Partners, part of that transaction
                  stays in the Ohio Valley — invested in the people and families who live here.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-10">
              <Heart className="h-10 w-10 text-accent mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-4">
                Ohio Valley Community Fund
              </h3>
              <p className="text-muted-foreground leading-7 mb-6">
                Currently in formation. Planned launch: 2027. Dedicated to children and
                families in need across the eight-county Ohio Valley region we serve.
              </p>
              <p className="text-sm font-semibold text-foreground">
                Every deal. A portion back to the Valley.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Who We're Here For</h2>
          <div className="flex flex-col gap-4 text-muted-foreground leading-8">
            <p>
              We built this company for the family that inherited land from a parent and
              doesn't know what to do with it. For the landowner who's been paying taxes
              on a parcel they haven't visited in years. For the estate executor who needs
              to settle an account cleanly and quickly. For the out-of-state heir who just
              needs the process to be simple.
            </p>
            <p>
              We are not the right buyer for every deal. But for land in the Ohio Valley —
              rural parcels, vacant lots, inherited properties, back-tax land — we are
              ready to make a serious offer and follow through.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get a Cash Offer <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-bold text-foreground hover:border-accent/50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
          <p className="mt-10 text-xs text-muted-foreground">
            Ohio Valley Land Partners operates as a principal buyer of real estate. We are not
            licensed real estate brokers or agents and do not represent sellers or buyers in
            an agency capacity.
          </p>
        </div>
      </section>
    </div>
  );
}
