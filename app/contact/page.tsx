import type { Metadata } from 'next';
import { siteConfig } from '@/lib/seo-config';
import { ContactForm } from '@/components/forms/contact-form';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Ohio Valley Land Partners. Contact our team for inquiries about land wholesaling, commercial development, and investment opportunities.',
};

export default function ContactPage({
  searchParams,
}: {
  searchParams: { type?: string };
}) {
  const leadType = searchParams.type as
    | 'land'
    | 'commercial'
    | 'investor'
    | 'partnership'
    | 'inquiry'
    | undefined;

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Have questions about our land wholesaling, commercial development, or investment
            opportunities? Our team is ready to help. Fill out the form below and we'll get back
            to you within 24 hours.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <Suspense fallback={<div className="text-center py-8">Loading form...</div>}>
                <ContactForm defaultLeadType={leadType || 'inquiry'} />
              </Suspense>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-lg font-semibold text-foreground mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Phone</p>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="mt-1 text-foreground font-semibold hover:text-accent transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-1 text-foreground font-semibold hover:text-accent transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Address</p>
                    <address className="mt-1 not-italic text-foreground font-semibold">
                      {siteConfig.address.streetAddress}
                      <br />
                      {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion}{' '}
                      {siteConfig.address.postalCode}
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-muted/30 p-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Response Times</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-baseline gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <span>
                    <strong>Land Inquiries:</strong> 24 hours
                  </span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <span>
                    <strong>Commercial:</strong> 48 hours
                  </span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <span>
                    <strong>Investor Relations:</strong> 24 hours
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
