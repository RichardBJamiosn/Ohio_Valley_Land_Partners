import type { Metadata } from 'next';
import { sampleProperties } from '@/lib/property-data';
import { BreadcrumbSchema, OrganizationSchema } from '@/components/seo/json-ld';
import { Building2, MapPin, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Available Properties - Ohio Valley Land Partners',
  description: 'Browse all available land, commercial, and development properties across the Ohio Valley region. Wholesale opportunities, development sites, and investment-grade real estate.',
  keywords: 'Ohio Valley properties, land for sale, commercial real estate, development sites, wholesale land',
};

export default function PropertiesPage() {
  const landProperties = sampleProperties.filter((p) => p.type === 'land');
  const commercialProperties = sampleProperties.filter((p) => p.type === 'commercial');
  const developmentProperties = sampleProperties.filter((p) => p.type === 'development');

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Properties', url: '/properties' }]} />
      <OrganizationSchema />

      <section className="py-20 sm:py-28 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Available Properties
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              Explore our curated portfolio of land, commercial, and development opportunities
              across the Ohio Valley region.
            </p>
            <div className="mt-8">
              <Button asChild>
                <Link href="/contact?type=inquiry">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Land Wholesaling Opportunities
            </h2>
            <p className="text-lg text-muted-foreground">
              Off-market wholesale deals with motivated sellers and fast closing timelines
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {landProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Commercial Properties
            </h2>
            <p className="text-lg text-muted-foreground">
              Industrial and retail development sites with institutional-grade potential
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {commercialProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Development Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Long-term residential and mixed-use development opportunities
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {developmentProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PropertyCard({ property }: { property: typeof sampleProperties[0] }) {
  return (
    <article className="rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all">
      <div className="aspect-video bg-muted relative overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.name}
          className="object-cover w-full h-full"
          loading="lazy"
        />
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center rounded-full bg-background/90 backdrop-blur-sm px-3 py-1 text-sm font-semibold text-foreground">
            {property.acres} acres
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {property.county}, {property.state}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-3">{property.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {property.description}
        </p>
        <div className="flex items-baseline gap-2 mb-4">
          <DollarSign className="h-5 w-5 text-accent" />
          <span className="text-2xl font-bold text-accent">
            ${(property.price / 1000).toFixed(0)}K
          </span>
          <span className="text-sm text-muted-foreground">
            ${Math.round(property.price / property.acres).toLocaleString()}/acre
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {property.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="text-xs bg-accent/10 text-accent px-2 py-1 rounded"
            >
              {feature}
            </span>
          ))}
        </div>
        <Link
          href={`/properties/${property.id}`}
          className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
        >
          View Property Details &rarr;
        </Link>
      </div>
    </article>
  );
}
