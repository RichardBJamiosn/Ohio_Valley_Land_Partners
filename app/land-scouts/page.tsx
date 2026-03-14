import type { Metadata } from 'next';
import Link from 'next/link';
import { DollarSign, Eye, Phone, Users, MapPin, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Land Scouts — Earn Referral Fees for Ohio Valley Land Leads',
  description:
    'Know someone who needs to sell land in the Ohio Valley? Earn a referral fee when we close. No license required. We work with attorneys, farmers, and anyone with local connections.',
};

const whoWeWant = [
  {
    icon: FileText,
    title: 'Estate & Probate Attorneys',
    description:
      'You handle estates with land in them every week. When your clients need to sell fast, refer them to us. We close clean, pay cash, and make you look like a hero.',
  },
  {
    icon: MapPin,
    title: 'County Auditor & Recorder Contacts',
    description:
      'You see delinquent tax lists, estate transfers, and distressed parcels before anyone else. That information is valuable to us — and we pay for it.',
  },
  {
    icon: Users,
    title: 'Farmers and Rural Neighbors',
    description:
      'If you know someone locally who has land they\'d sell — vacant lots, old family farms, timber tracts — a referral from a trusted neighbor carries more weight than any marketing we can do.',
  },
  {
    icon: Phone,
    title: 'Rural Real Estate Agents',
    description:
      'Have a listing that won\'t move through traditional channels? Refer it to us. We buy what the market won\'t finance, and we pay a referral fee at closing.',
  },
  {
    icon: Eye,
    title: 'Mail Carriers and Route Drivers',
    description:
      'You see overgrown lots, abandoned properties, and neglected land before anyone else does. If you spot something that looks like a motivated seller situation, we want to know.',
  },
  {
    icon: DollarSign,
    title: 'Anyone with Local Connections',
    description:
      'No license required. If you have a relationship in the Ohio Valley and can put us in front of someone who needs to sell land, we can make it worth your time.',
  },
];

const howItWorks = [
  {
    step: '01',
    title: 'You Identify a Lead',
    description:
      'Someone you know has land they want to sell — inherited property, vacant lots, back-tax parcels, anything. You make the introduction.',
  },
  {
    step: '02',
    title: 'We Take It From There',
    description:
      'We contact the seller, evaluate the property, and make a cash offer. You don\'t have to do anything else. No paperwork, no follow-up required from you.',
  },
  {
    step: '03',
    title: 'We Close and You Get Paid',
    description:
      'When we close on the deal, you receive your referral fee. Paid at closing, through the title company, on the HUD settlement statement — clean and transparent.',
  },
];

export default function LandScoutsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">

      {/* Hero */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
              <DollarSign className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Land Scout Referral Program</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Know Someone Who Needs to Sell Land?
              <span className="block text-primary mt-2">Get Paid for the Introduction.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Ohio Valley Land Partners pays referral fees to anyone who connects us with a
              motivated land seller — attorneys, farmers, neighbors, real estate agents, or
              anyone else with local knowledge and relationships across the Ohio Valley.
            </p>
            <div className="mt-10">
              <Link
                href="/contact?type=partnership"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Become a Land Scout
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground">How It Works</h2>
            <p className="mt-4 text-muted-foreground">Three steps. No license required. No complicated paperwork.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {howItWorks.map((step) => (
              <div key={step.step} className="relative rounded-2xl border border-border bg-card p-8">
                <div className="text-5xl font-black text-primary/10 mb-4">{step.step}</div>
                <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Want */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground">Who Makes a Good Land Scout</h2>
            <p className="mt-4 text-muted-foreground">
              You don't need a license or real estate experience. You just need local knowledge and a connection.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whoWeWant.map((type) => {
              const Icon = type.icon;
              return (
                <div
                  key={type.title}
                  className="rounded-xl border border-border bg-card p-6 hover:border-accent/50 hover:shadow-md transition-all"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{type.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Qualifies */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">What Kind of Leads We're Looking For</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                'Vacant land with no active use',
                'Inherited property going through probate',
                'Land with delinquent property taxes',
                'Landowners who\'ve tried and failed to sell',
                'Out-of-state owners with Ohio Valley land',
                'Parcels with overgrown, neglected condition',
                'Farm ground where the farmer is ready to exit',
                'Family land being sold after an estate settlement',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Earning Referral Fees?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact us and we'll explain the referral fee structure for your specific situation.
            Every deal is different — we'll give you a straight answer on what your introduction
            is worth before you commit to anything.
          </p>
          <Link
            href="/contact?type=partnership"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Contact Us About Scouting
          </Link>
          <p className="mt-6 text-xs text-muted-foreground">
            Ohio Valley Land Partners operates as a principal buyer, not a licensed real estate broker or agent.
            Referral arrangements are structured accordingly and comply with applicable state law.
          </p>
        </div>
      </section>
    </div>
  );
}
