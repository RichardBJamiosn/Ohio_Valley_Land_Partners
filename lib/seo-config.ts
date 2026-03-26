export const siteConfig = {
  name: 'Ohio Valley Land Partners',
  description: 'Premier land wholesaling, residential development, and commercial real estate authority in the Ohio Valley region',
  url: 'https://ohiovalleylandpartners.com',
  ogImage: 'https://ohiovalleylandpartners.com/og.jpg',
    phone: '(614) 653-7430',
  email: 'info@ovlandpartners.com',
  address: {
    streetAddress: '100 Market Street',
    addressLocality: 'Wheeling',
    addressRegion: 'WV',
    postalCode: '26003',
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
