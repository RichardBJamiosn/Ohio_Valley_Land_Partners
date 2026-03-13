import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPropertyById, sampleProperties } from '@/lib/property-data';
import { BreadcrumbSchema, RealEstateListingSchema } from '@/components/seo/json-ld';
import { MapPin, DollarSign, Maximize2, Building2, CircleCheck as CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    return { title: 'Property Not Found' };
  }

  return {
    title: `${property.name} - ${property.county}, ${property.state}`,
    description: property.description,
    keywords: [
      property.name,
      `${property.county} real estate`,
      property.type,
      'Ohio Valley land',
      'investment property',
    ],
  };
}

export async function generateStaticParams() {
  return sampleProperties.map((property) => ({
    id: property.id,
  }));
}

export default async function PropertyPage({ params }: Props) {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    notFound();
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Properties', url: '/properties' },
          { name: property.name, url: `/properties/${property.id}` },
        ]}
      />
      <RealEstateListingSchema
        name={property.name}
        description={property.description}
        price={property.price}
        address={{
          streetAddress: '',
          addressLocality: property.county,
          addressRegion: property.state,
          postalCode: '',
        }}
        propertyType={property.type === 'land' ? 'Land' : property.type === 'commercial' ? 'Commercial' : 'Residential'}
        lotSize={`${property.acres} acres`}
        images={property.images}
      />

      <article>
        <section className="py-20 sm:py-28 bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="text-sm font-semibold text-accent">
                    {property.county}, {property.state}
                  </span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
                  {property.name}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {property.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="rounded-xl border border-border bg-card p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="h-5 w-5 text-accent" />
                      <span className="text-sm text-muted-foreground">Price</span>
                    </div>
                    <p className="text-3xl font-bold text-foreground">
                      ${(property.price / 1000).toFixed(0)}K
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      ${Math.round(property.price / property.acres).toLocaleString()} per acre
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-card p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Maximize2 className="h-5 w-5 text-accent" />
                      <span className="text-sm text-muted-foreground">Size</span>
                    </div>
                    <p className="text-3xl font-bold text-foreground">{property.acres}</p>
                    <p className="text-sm text-muted-foreground mt-1">acres</p>
                  </div>
                </div>

                <div className="flex gap-4 flex-wrap">
                  <Button size="lg" asChild>
                    <Link href={`/contact?type=inquiry&property=${property.id}`}>
                      Schedule Viewing
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact?type=inquiry">Request Information</Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-border">
                <img
                  src={property.images[0]}
                  alt={property.name}
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12">
              Property Details
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Key Information</h3>
                <dl className="space-y-4">
                  <div className="flex justify-between border-b border-border pb-4">
                    <dt className="text-muted-foreground">Property Type</dt>
                    <dd className="font-semibold text-foreground capitalize">{property.type}</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-4">
                    <dt className="text-muted-foreground">Status</dt>
                    <dd className="font-semibold text-accent capitalize">{property.status}</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-4">
                    <dt className="text-muted-foreground">Size</dt>
                    <dd className="font-semibold text-foreground">{property.acres} acres</dd>
                  </div>
                  {property.zoning && (
                    <div className="flex justify-between border-b border-border pb-4">
                      <dt className="text-muted-foreground">Zoning</dt>
                      <dd className="font-semibold text-foreground">{property.zoning}</dd>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Location</dt>
                    <dd className="font-semibold text-foreground">
                      {property.county}, {property.state}
                    </dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Features</h3>
                <ul className="space-y-3">
                  {property.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {property.utilities && property.utilities.length > 0 && (
                  <>
                    <h3 className="text-xl font-semibold text-foreground mb-6 mt-8">Available Utilities</h3>
                    <ul className="space-y-3">
                      {property.utilities.map((utility) => (
                        <li key={utility} className="flex items-start gap-3">
                          <Building2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{utility}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-2xl border border-border bg-card p-8 sm:p-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                Interested in This Property?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact our team to schedule a viewing, request additional information, or discuss
                financing options for this property.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" asChild>
                  <Link href={`/contact?type=inquiry&property=${property.id}`}>
                    Contact Us About This Property
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/properties">View More Properties</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
