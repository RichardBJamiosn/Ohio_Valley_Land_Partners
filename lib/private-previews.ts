export interface PrivatePreviewStat {
  label: string;
  value: string;
  detail?: string;
}

export interface PrivatePreview {
  token: string;
  eyebrow: string;
  title: string;
  summary: string;
  address: string;
  parcelId: string;
  flyerPath: string;
  flyerAlt: string;
  stats: PrivatePreviewStat[];
  inquirySubject: string;
}

/** Unlisted builder previews — never add these URLs to sitemap or public nav. */
export const privatePreviews: Record<string, PrivatePreview> = {
  k7m2x9q4: {
    token: 'k7m2x9q4',
    eyebrow: 'Builder / Investor Opportunity',
    title: 'Columbus Multi-Home Infill Lot',
    summary:
      'Off-market parcel in East Linden — large enough for multiple townhomes or single-family builds, utilities at street, school directly across Woodland Avenue.',
    address: '2577 Woodland Ave · Columbus, OH 43211',
    parcelId: '190-000591',
    flyerPath: '/private-previews/k7m2x9q4-flyer.png',
    flyerAlt:
      '2577 Woodland Ave — Columbus multi-home infill lot property sheet with parcel map and aerial context',
    stats: [
      { label: 'Lot Size', value: '0.686 AC', detail: '29,882 sq ft' },
      { label: 'Target Pricing', value: 'Near $40K', detail: 'Best qualified offer' },
      { label: 'Utilities', value: 'Water + Sewer', detail: 'At street' },
      { label: 'Access', value: 'Paved Frontage', detail: 'Woodland Avenue' },
    ],
    inquirySubject: '2577 Woodland Ave — Builder Inquiry',
  },
};

export const privatePreviewTokens = Object.keys(privatePreviews);

export function getPrivatePreview(token: string): PrivatePreview | undefined {
  return privatePreviews[token];
}