export const siteConfig = {
  name: 'Ohio Valley Land Partners',
  description: 'Premier land wholesaling, residential development, and commercial real estate authority in the Ohio Valley region',
  url: 'https://ohiovalleylandpartners.com',
  ogImage: 'https://ohiovalleylandpartners.com/og.jpg',
  phone: '(614) 653-7430',
  email: 'info@ovlandpartners.com',
  // Author / founder — used in Article schema and About page
  // TODO: Replace with real name once About page is updated
  authorName: 'Richard B. Jamison',
  authorTitle: 'Founder, Ohio Valley Land Partners',
  authorUrl: 'https://ohiovalleylandpartners.com/about',
  // sameAs — populate as each account is created
  // TODO: Replace placeholder comments with real URLs
  sameAs: [
    // 'https://www.linkedin.com/company/ohio-valley-land-partners', // add after LinkedIn created
    // 'https://www.google.com/maps/place/[GBP_ID]',                 // add after GBP verified
    // 'https://www.bbb.org/us/wv/wheeling/profile/[profile]',       // add after BBB listing
    // 'https://www.landwatch.com/[listing]',                        // add after LandWatch listing
    // 'https://www.land.com/[listing]',                             // add after Land.com listing
  ] as string[],
  address: {
    streetAddress: '2025 Riverside Drive, STE 35682',
    addressLocality: 'Columbus',
    addressRegion: 'OH',
    postalCode: '43221',
    addressCountry: 'US',
  },
  serviceArea: [
    'Belmont County, OH',
    'Jefferson County, OH',
    'Columbiana County, OH',
    'Harrison County, OH',
    'Carroll County, OH',
    'Ohio County, WV',
    'Marshall County, WV',
    'Brooke County, WV',
  ],
};

export const silos = {
  land: {
    title: 'Land Wholesaling',
    path: '/land',
    description: 'Strategic land acquisitions and wholesale opportunities for motivated sellers and cash buyers',
    keywords: 'land wholesaling, cash land buyers, motivated sellers, Ohio Valley land',
  },
  commercial: {
    title: 'Commercial Real Estate',
    path: '/commercial',
    description: 'Industrial and retail development opportunities across the Ohio Valley region',
    keywords: 'commercial real estate, industrial development, retail properties, Ohio Valley',
  },
  development: {
    title: 'Residential Development',
    path: '/development',
    description: 'Long-term residential development projects and investor relations',
    keywords: 'residential development, investor relations, long-term projects, Ohio Valley',
  },
  guides: {
    title: 'Ohio Valley Guides',
    path: '/ohio-valley-guides',
    description: 'Comprehensive county-by-county real estate guides for the Ohio Valley region',
    keywords: 'Ohio Valley real estate, county guides, local market analysis',
  },
};

export const counties = [
  { name: 'Belmont County', state: 'OH', slug: 'belmont-county-oh' },
  { name: 'Jefferson County', state: 'OH', slug: 'jefferson-county-oh' },
  { name: 'Columbiana County', state: 'OH', slug: 'columbiana-county-oh' },
  { name: 'Harrison County', state: 'OH', slug: 'harrison-county-oh' },
  { name: 'Carroll County', state: 'OH', slug: 'carroll-county-oh' },
  { name: 'Ohio County', state: 'WV', slug: 'ohio-county-wv' },
  { name: 'Marshall County', state: 'WV', slug: 'marshall-county-wv' },
  { name: 'Brooke County', state: 'WV', slug: 'brooke-county-wv' },
];
