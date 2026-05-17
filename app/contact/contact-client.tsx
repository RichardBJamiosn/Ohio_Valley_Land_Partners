'use client';

import { useSearchParams } from 'next/navigation';
import { ContactForm } from '@/components/forms/contact-form';

export function ContactPageClient() {
  const searchParams = useSearchParams();
  const leadType = (searchParams.get('type') as
    | 'land'
    | 'commercial'
    | 'investor'
    | 'partnership'
    | 'inquiry') || 'inquiry';

  return <ContactForm defaultLeadType={leadType} />;
}
