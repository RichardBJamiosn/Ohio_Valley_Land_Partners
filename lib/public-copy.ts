/**
 * Public-facing copy safeguards.
 * OVLP speaks only as a prospective principal buyer. Questions involving law,
 * taxes, title, valuation, brokerage, or professional judgment are redirected
 * to independent licensed professionals.
 */

/** Canonical seller positioning — not cash offers. */
export const sellerPositioning = {
  analysisLabel: 'Full Property Analysis',
  analysisSub: 'In-depth review before every proposal',
  closingSub: 'Aggressively fast closings when necessary',
  countySectionTitle: 'County Property Pages',
  countySectionSub:
    'Every county we work in has a dedicated page with local FAQs and property context — and a direct path to a full property analysis, with aggressively fast closings when necessary.',
  formTitle: 'Request Your Property Analysis',
  formSub: 'Full in-depth analysis. Aggressively fast closings when necessary.',
} as const;

export function countySubheadline(countyName: string): string {
  return `Full property analysis for ${countyName} parcels. Aggressively fast closings when necessary.`;
}

/** FAQ section framing — process only, not seller advice. */
export const faqFraming = {
  sectionTitle: 'Questions About Working With OVLP',
  sectionSub:
    'What we can tell you about our acquisition process — not legal, tax, brokerage, or sale-strategy advice.',
} as const;

const PROFESSIONAL_TOPIC =
  /(probate|inherit|estate|executor|administrator|fiduciary|heir|court|tax|lien|foreclos|forfeit|mineral|deed|title|split|survey|easement|zoning|legal)/i;

export function softenCountyFaq(question: string, answer: string): string {
  const combined = `${question} ${answer}`;

  if (/how (?:do|to) i sell|without a real estate agent|without an agent|sell.*without.*agent/i.test(combined)) {
    return 'OVLP does not advise on how to sell property or whether to use an agent. We review submitted parcel information only to decide whether we may wish to purchase the property for our own account. Sale strategy, listing decisions, and legal questions belong with a licensed attorney, tax professional, or real estate professional.';
  }

  if (/(real estate agent|listing agent|hire an agent|need.*agent|without an agent|without a mls)/i.test(combined)) {
    return 'OVLP is a prospective principal buyer, not a listing agent or broker. Whether you use a real estate agent is your decision. We do not advise on sale strategy or marketing. Consult a licensed real estate professional if you want guidance on your options.';
  }

  if (/(probate|inherit|estate|executor|administrator|fiduciary|heir|court)/i.test(combined)) {
    return 'Estate authority and the ability to transfer inherited property depend on the deed, estate documents, court orders, and applicable law. OVLP may review the parcel only as a prospective principal buyer and does not determine who may sign or what the estate must do. Please consult the estate attorney and title company.';
  }

  if (/(tax|lien|foreclos|forfeit|sheriff|redemption)/i.test(combined)) {
    return 'Delinquent taxes and related deadlines are property- and county-specific. OVLP may consider the parcel in its acquisition review, but does not interpret notices, calculate legal deadlines, or promise that a transaction can resolve the matter. Confirm the current status with the county and consult an attorney, title company, and tax professional.';
  }

  if (/(mineral|oil|gas|lease|surface rights)/i.test(combined)) {
    return 'Mineral and surface interests depend on recorded documents and applicable law. OVLP may consider the interests disclosed during its acquisition review, but does not provide a title or mineral-rights opinion. A qualified attorney, title professional, and—when appropriate—independent appraiser should review the records.';
  }

  if (/(title|deed|split|survey|easement|access|landlocked|zoning|utilities|flood)/i.test(combined)) {
    return 'Access, boundaries, zoning, utilities, title, and other parcel conditions require property-specific verification. OVLP reviews these matters only to decide whether the property fits its own criteria. Our review is not a survey, title opinion, zoning determination, appraisal, or legal opinion.';
  }

  return answer
    .replace(/Typically 14–21 days[^.]*\./gi, 'Timing varies by property, written terms, title review, and third-party requirements.')
    .replace(/within 24 hours/gi, 'after review')
    .replace(/worth less/gi, 'may be evaluated differently')
    .replace(/we handle them/gi, 'additional professional review may be needed');
}

export function publicBlogSummary(category: string): string {
  if (category === 'Market Reports') {
    return 'General regional market observations from OVLP. Not an appraisal, forecast, investment recommendation, or professional real estate advice.';
  }
  if (category === 'County Guides') {
    return 'General county property observations and OVLP acquisition interests. Property value, title, taxes, land use, and sale strategy require independent professional review.';
  }
  return 'General educational background from OVLP. Not legal, tax, title, appraisal, brokerage, investment, or transaction advice.';
}
