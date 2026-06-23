/**
 * Backend-only SEO copy (meta titles, descriptions, OG).
 * High-intent keywords live here — not in visible page copy.
 */

export function countyVisualHeadline(countyName: string, stateAbbr: string): string {
  return `We Buy Land in ${countyName}, ${stateAbbr}`;
}

export function countyVisualSubheadline(countyName: string): string {
  return `Direct acquisition inquiry for ${countyName}. Property-specific review by a prospective principal buyer in the Ohio Valley.`;
}

export function countySellMetaTitle(
  countyName: string,
  stateAbbr: string,
  slug?: string,
): string {
  if (slug === 'franklin-county-oh') {
    return `Sell Land in Franklin County, OH | Cash Offer in 24 Hours | Columbus`;
  }
  return `Sell Land in ${countyName}, ${stateAbbr} | Cash Offer in 24 Hours`;
}

export function countySellMetaDescription(
  countyName: string,
  state: string,
  stateAbbr: string,
  slug?: string,
): string {
  const region =
    slug === 'franklin-county-oh'
      ? 'Columbus and Central Ohio'
      : `the ${countyName} market in ${state}`;
  return `Selling vacant land, inherited property, or back-tax parcels in ${countyName}, ${stateAbbr}? Ohio Valley Land Partners buys land in ${region} — cash offer in 24 hours, close in 14–21 days. No agent fees. Principal buyer serving the Ohio Valley.`;
}

export const homepageSeoMeta = {
  title: 'Sell Land in the Ohio Valley | Cash Land Buyer',
  description:
    'We buy land all over the Ohio Valley — Ohio and West Virginia. Cash offers in 24 hours, close in 14–21 days. Vacant lots, inherited property, and tax-delinquent parcels. Principal buyer, no agent fees.',
  keywords: [
    'sell land Ohio Valley',
    'cash land buyer Ohio',
    'cash offer for land',
    'sell vacant land Ohio',
    'sell inherited land Ohio',
    'we buy land Ohio Valley',
    'sell land West Virginia',
  ],
} as const;