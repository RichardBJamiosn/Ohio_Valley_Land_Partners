import type { Metadata } from 'next';
import { counties } from '@/lib/seo-config';
import { notFound } from 'next/navigation';
import { TrendingUp, Building2, MapPin, DollarSign, ChartBar as BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BreadcrumbSchema, ArticleSchema } from '@/components/seo/json-ld';
import { FAQSection } from '@/components/county/faq-section';
import { getPropertiesByCounty } from '@/lib/property-data';

const countyData: Record<
  string,
  {
    medianPrice: number;
    avgDaysOnMarket: number;
    appreciation: number;
    population: number;
    medianIncome: number;
    activeListings: number;
    economicDrivers: string[];
    majorEmployers: string[];
    growthAreas: string[];
    developmentOpportunities: string[];
  }
> = {
  'belmont-county-oh': {
    medianPrice: 145000,
    avgDaysOnMarket: 32,
    appreciation: 4.2,
    population: 67000,
    medianIncome: 52000,
    activeListings: 156,
    economicDrivers: ['Manufacturing', 'Healthcare', 'Coal Heritage Tourism', 'Retail'],
    majorEmployers: ['Wheeling Hospital', 'Arcelor Mittal Steel', 'Oglebay Institute', 'City Schools'],
    growthAreas: ['I-70 Corridor', 'Wheeling Downtown Redevelopment', 'Elm Grove Business District'],
    developmentOpportunities: [
      'Mixed-use downtown development',
      'Industrial park expansion',
      'Tourist accommodation properties',
      'Healthcare facilities expansion',
    ],
  },
  'jefferson-county-oh': {
    medianPrice: 165000,
    avgDaysOnMarket: 28,
    appreciation: 3.8,
    population: 82000,
    medianIncome: 58000,
    activeListings: 189,
    economicDrivers: ['Manufacturing', 'Retail', 'Education', 'Light Industry'],
    majorEmployers: ['Steubenville City Schools', 'Ford Assembly', 'Hiland Park', 'Local Retail'],
    growthAreas: ['Downtown Steubenville', 'I-470 Corridor', 'Retail Corridors'],
    developmentOpportunities: [
      'Riverfront development',
      'Educational campus expansion',
      'Manufacturing facilities',
      'Retail and entertainment centers',
    ],
  },
  'columbiana-county-oh': {
    medianPrice: 135000,
    avgDaysOnMarket: 35,
    appreciation: 3.5,
    population: 98000,
    medianIncome: 54000,
    activeListings: 142,
    economicDrivers: ['Agriculture', 'Light Manufacturing', 'Rural Residential', 'Logistics'],
    majorEmployers: ['Salem Diner Supply', 'Community Hospital', 'School Districts', 'Farm Cooperatives'],
    growthAreas: ['US-30 Corridor', 'Salem Downtown', 'Industrial Parks'],
    developmentOpportunities: [
      'Agricultural land conversion',
      'Light industrial facilities',
      'Rural residential communities',
      'Distribution centers',
    ],
  },
  'harrison-county-oh': {
    medianPrice: 125000,
    avgDaysOnMarket: 40,
    appreciation: 2.9,
    population: 65000,
    medianIncome: 48000,
    activeListings: 118,
    economicDrivers: ['Oil & Gas', 'Agriculture', 'Rural Development', 'Energy'],
    majorEmployers: ['Harrison County Schools', 'Local Farms', 'Oil & Gas Operations', 'Retail'],
    growthAreas: ['US-19 Corridor', 'Cadiz Downtown', 'Energy Sector'],
    developmentOpportunities: [
      'Energy-related infrastructure',
      'Agricultural processing facilities',
      'Rural commercial centers',
      'Residential communities',
    ],
  },
  'carroll-county-oh': {
    medianPrice: 140000,
    avgDaysOnMarket: 38,
    appreciation: 3.1,
    population: 72000,
    medianIncome: 51000,
    activeListings: 134,
    economicDrivers: ['Light Manufacturing', 'Agriculture', 'Retail', 'Logistics'],
    majorEmployers: ['Carroll County Schools', 'Industrial Parks', 'Farm Cooperatives', 'Retail'],
    growthAreas: ['US-22 Corridor', 'Carrollton Downtown', 'Industrial Districts'],
    developmentOpportunities: [
      'Manufacturing facilities',
      'Agricultural support facilities',
      'Retail centers',
      'Warehouse and logistics',
    ],
  },
  'ohio-county-wv': {
    medianPrice: 155000,
    avgDaysOnMarket: 30,
    appreciation: 3.9,
    population: 88000,
    medianIncome: 56000,
    activeListings: 167,
    economicDrivers: ['Manufacturing', 'Healthcare', 'Tourism', 'Government', 'Education'],
    majorEmployers: ['Wheeling Hospital', 'West Virginia University', 'City Government', 'Retail'],
    growthAreas: ['Downtown Wheeling', 'The Highlands', 'I-70 Corridor', 'Historic Districts'],
    developmentOpportunities: [
      'Downtown redevelopment',
      'Healthcare facilities',
      'Educational campus expansion',
      'Mixed-use developments',
    ],
  },
  'marshall-county-wv': {
    medianPrice: 135000,
    avgDaysOnMarket: 36,
    appreciation: 3.4,
    population: 76000,
    medianIncome: 52000,
    activeListings: 145,
    economicDrivers: ['Manufacturing', 'Logistics', 'Retail', 'Light Industry'],
    majorEmployers: ['Marshall County Schools', 'Industrial Parks', 'Retail Centers', 'Logistics'],
    growthAreas: ['Moundsville Downtown', 'I-70 Corridor', 'Industrial Zones'],
    developmentOpportunities: [
      'Manufacturing expansion',
      'Warehouse facilities',
      'Retail development',
      'Industrial parks',
    ],
  },
  'brooke-county-wv': {
    medianPrice: 130000,
    avgDaysOnMarket: 33,
    appreciation: 3.6,
    population: 62000,
    medianIncome: 49000,
    activeListings: 128,
    economicDrivers: ['Manufacturing', 'Retail', 'Healthcare', 'Transportation'],
    majorEmployers: ['Brooke County Schools', 'Manufacturing', 'Retail', 'Healthcare'],
    growthAreas: ['Wellsburg Downtown', 'I-70 Corridor', 'Commercial Districts'],
    developmentOpportunities: [
      'Manufacturing facilities',
      'Retail centers',
      'Healthcare facilities',
      'Transportation hubs',
    ],
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const county = counties.find((c) => c.slug === slug);

  if (!county) {
    return { title: 'County Guide Not Found' };
  }

  return {
    title: `${county.name}, ${county.state} - Real Estate Market Guide`,
    description: `Comprehensive real estate market analysis and investment opportunities in ${county.name}, ${county.state}. Median prices, economic data, and development prospects.`,
    keywords: [
      `${county.name} real estate`,
      `${county.name} market analysis`,
      `${county.state} land wholesaling`,
      'Ohio Valley real estate',
    ],
  };
}

export async function generateStaticParams() {
  return counties.map((county) => ({
    slug: county.slug,
  }));
}

export default async function CountyGuidePage({ params }: Props) {
  const { slug } = await params;
  const county = counties.find((c) => c.slug === slug);
  const data = countyData[slug];
  const properties = getPropertiesByCounty(county?.name || '');

  if (!county || !data) {
    notFound();
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Ohio Valley Guides', url: '/ohio-valley-guides' },
          { name: `${county.name}, ${county.state}`, url: `/ohio-valley-guides/${slug}` },
        ]}
      />
      <ArticleSchema
        headline={`${county.name}, ${county.state} Real Estate Market Guide`}
        description={`Comprehensive real estate market analysis and investment opportunities in ${county.name}, ${county.state}`}
        datePublished="2025-01-01"
        dateModified="2026-03-13"
      />

      <section className="py-20 sm:py-28 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {county.name}, {county.state}
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Real Estate Market Guide & Investment Analysis
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Comprehensive market intelligence, economic data, and development opportunities for
              investors and developers in {county.name}.
            </p>
            <div className="mt-8">
              <Button asChild>
                <Link href={`/contact?type=land&county=${county.name}`}>
                  Explore Investment Opportunities
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12">
            Market Snapshot
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">Median Price</span>
                <DollarSign className="h-5 w-5 text-accent" />
              </div>
              <p className="text-3xl font-bold text-foreground">
                ${(data.medianPrice / 1000).toFixed(0)}K
              </p>
            </article>

            <article className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">Days on Market</span>
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <p className="text-3xl font-bold text-foreground">{data.avgDaysOnMarket}</p>
              <p className="text-sm text-muted-foreground mt-2">average</p>
            </article>

            <article className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">YoY Growth</span>
                <TrendingUp className="h-5 w-5 text-accent" />
              </div>
              <p className="text-3xl font-bold text-accent">{data.appreciation}%</p>
              <p className="text-sm text-muted-foreground mt-2">appreciation</p>
            </article>

            <article className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">Active Listings</span>
                <Building2 className="h-5 w-5 text-accent" />
              </div>
              <p className="text-3xl font-bold text-foreground">{data.activeListings}</p>
              <p className="text-sm text-muted-foreground mt-2">properties</p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12">
            Economic Overview
          </h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Demographic Data</h3>
              <dl className="space-y-4">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Population</dt>
                  <dd className="font-semibold text-foreground">
                    {data.population.toLocaleString()}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Median Household Income</dt>
                  <dd className="font-semibold text-foreground">
                    ${(data.medianIncome / 1000).toFixed(0)}K
                  </dd>
                </div>
              </dl>

              <h3 className="text-lg font-semibold text-foreground mt-8 mb-4">Economic Drivers</h3>
              <ul className="space-y-2">
                {data.economicDrivers.map((driver) => (
                  <li key={driver} className="flex items-center gap-2 text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                    {driver}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Major Employers</h3>
              <ul className="space-y-3">
                {data.majorEmployers.map((employer) => (
                  <div key={employer} className="flex items-start gap-3">
                    <span className="h-5 w-5 rounded bg-accent/10 text-accent flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-foreground">{employer}</span>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12">
            Growth Areas
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            {data.growthAreas.map((area) => (
              <div key={area} className="rounded-lg border border-accent/30 bg-accent/5 p-4">
                <p className="font-semibold text-foreground">{area}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12 mt-16">
            Development Opportunities
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {data.developmentOpportunities.map((opp) => (
              <article
                key={opp}
                className="rounded-xl border border-border bg-card p-6 hover:border-accent/50 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <BarChart3 className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-lg font-semibold text-foreground">{opp}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {properties.length > 0 && (
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12">
              Available Properties in {county.name}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {properties.map((property) => (
                <article
                  key={property.id}
                  className="rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                      src={property.images[0]}
                      alt={property.name}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-foreground">{property.name}</h3>
                      <span className="text-xs font-semibold bg-accent/10 text-accent px-2 py-1 rounded-full">
                        {property.acres} acres
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {property.description}
                    </p>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-2xl font-bold text-accent">
                        ${(property.price / 1000).toFixed(0)}K
                      </span>
                      <span className="text-sm text-muted-foreground">
                        ${Math.round(property.price / property.acres).toLocaleString()}/acre
                      </span>
                    </div>
                    <Link
                      href={`/properties/${property.id}`}
                      className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                    >
                      View Details &rarr;
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQSection county={county.name} state={county.state} />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Ready to Invest in {county.name}?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Connect with our team to explore available opportunities and investment potential.
            </p>
            <div className="mt-8 flex gap-4 justify-center flex-wrap">
              <Button asChild>
                <Link href={`/contact?type=land&county=${county.name}`}>
                  View Opportunities
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/investor-portal">Investor Portal</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
