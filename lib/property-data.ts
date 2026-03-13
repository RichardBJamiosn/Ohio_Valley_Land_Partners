export interface Property {
  id: string;
  name: string;
  description: string;
  price: number;
  location: string;
  county: string;
  state: string;
  acres: number;
  type: 'land' | 'commercial' | 'development';
  status: 'available' | 'pending' | 'sold';
  features: string[];
  images: string[];
  zoning?: string;
  utilities?: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export const sampleProperties: Property[] = [
  {
    id: 'belmont-45-raw',
    name: '45 Acre Raw Land Parcel',
    description: 'Prime raw land parcel in Belmont County with excellent highway access and development potential. Rolling terrain with mixed woodlands and open fields. Utilities available at road frontage.',
    price: 125000,
    location: 'Belmont County',
    county: 'Belmont County',
    state: 'OH',
    acres: 45.5,
    type: 'land',
    status: 'available',
    features: [
      'Highway frontage',
      'Utilities at road',
      'Mixed terrain',
      'Excellent access',
      'Development ready',
    ],
    images: [
      'https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg',
    ],
    zoning: 'Agricultural/Residential',
    utilities: ['Electric', 'Water'],
  },
  {
    id: 'jefferson-commercial-site',
    name: 'Commercial Development Site',
    description: 'Development-ready commercial parcel in high-traffic Jefferson County corridor. Perfect for retail, office, or mixed-use development. All utilities in place, zoning approved.',
    price: 289500,
    location: 'Jefferson County',
    county: 'Jefferson County',
    state: 'OH',
    acres: 12.8,
    type: 'commercial',
    status: 'available',
    features: [
      'High traffic location',
      'All utilities',
      'Zoned commercial',
      'Site-ready',
      'Development approved',
    ],
    images: [
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
    ],
    zoning: 'Commercial',
    utilities: ['Electric', 'Water', 'Sewer', 'Gas'],
  },
  {
    id: 'ohio-county-industrial',
    name: 'Industrial Park Expansion Site',
    description: 'Large-scale industrial development opportunity in Ohio County, WV. Adjacent to existing industrial park with excellent interstate access. Perfect for manufacturing, logistics, or distribution.',
    price: 445000,
    location: 'Ohio County',
    county: 'Ohio County',
    state: 'WV',
    acres: 78.2,
    type: 'commercial',
    status: 'available',
    features: [
      'Interstate access',
      'Industrial zoning',
      'Rail access nearby',
      'Existing infrastructure',
      'Expansion opportunity',
    ],
    images: [
      'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg',
    ],
    zoning: 'Industrial',
    utilities: ['Electric', 'Water', 'Sewer'],
  },
  {
    id: 'columbiana-residential-dev',
    name: 'Residential Development Tract',
    description: 'Exceptional residential development opportunity in growing Columbiana County corridor. Master-planned community site with utilities staged and preliminary approvals in place.',
    price: 520000,
    location: 'Columbiana County',
    county: 'Columbiana County',
    state: 'OH',
    acres: 120.5,
    type: 'development',
    status: 'available',
    features: [
      'Master-planned',
      'Utilities staged',
      'Approvals in place',
      'Growing corridor',
      '200+ lot potential',
    ],
    images: [
      'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg',
    ],
    zoning: 'Residential Development',
    utilities: ['Electric', 'Water', 'Sewer'],
  },
  {
    id: 'marshall-wholesale',
    name: 'Wholesale Land Package',
    description: 'Off-market wholesale opportunity in Marshall County. Multiple parcels available for bulk purchase. Ideal for land banking or phased development strategy.',
    price: 185000,
    location: 'Marshall County',
    county: 'Marshall County',
    state: 'WV',
    acres: 65.3,
    type: 'land',
    status: 'available',
    features: [
      'Off-market deal',
      'Multiple parcels',
      'Wholesale pricing',
      'Flexible terms',
      'Land banking opportunity',
    ],
    images: [
      'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg',
    ],
    zoning: 'Agricultural',
    utilities: ['Electric'],
  },
  {
    id: 'harrison-energy',
    name: 'Energy Sector Development Site',
    description: 'Strategic land parcel in Harrison County energy corridor. Excellent for energy-related infrastructure, support facilities, or industrial applications.',
    price: 165000,
    location: 'Harrison County',
    county: 'Harrison County',
    state: 'OH',
    acres: 38.7,
    type: 'commercial',
    status: 'available',
    features: [
      'Energy corridor',
      'Highway access',
      'Industrial potential',
      'Support facility site',
      'Mineral rights negotiable',
    ],
    images: [
      'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
    ],
    zoning: 'Industrial',
    utilities: ['Electric', 'Water'],
  },
];

export function getPropertyById(id: string): Property | undefined {
  return sampleProperties.find((p) => p.id === id);
}

export function getPropertiesByCounty(county: string): Property[] {
  return sampleProperties.filter((p) => p.county.toLowerCase().includes(county.toLowerCase()));
}

export function getPropertiesByType(type: Property['type']): Property[] {
  return sampleProperties.filter((p) => p.type === type);
}
