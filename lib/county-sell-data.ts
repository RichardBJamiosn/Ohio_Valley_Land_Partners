/**
 * county-sell-data.ts — Data for county-specific seller landing pages
 * URL pattern: /sell-land/[slug]
 * Each entry targets county-level long-tail seller keywords.
 */

import { countySubheadline } from './public-copy';

export interface CountyCitation {
  source: string;
  detail: string;
}

export interface CountySellData {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  headline: string;
  subheadline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  why: string;
  localGeography: string;
  citations: CountyCitation[];
  relatedBlogSlugs: string[];
  landTypes: string[];
  commonSituations: string[];
  faqs: { q: string; a: string }[];
}

export const countySellPages: CountySellData[] = [
  {
    slug: 'franklin-county-oh',
    name: 'Franklin County',
    state: 'Ohio',
    stateAbbr: 'OH',
    headline: 'We Buy Vacant Land and Residential Lots in Franklin County, OH',
    subheadline: 'Direct acquisition inquiry for Franklin County. Any proposal is property-specific and is not an appraisal or statement of market value.',
    metaTitle: 'Franklin County Land | Direct Buyer Inquiry',
    metaDescription:
      'General information about OVLP acquisition interests in Franklin County, Ohio. Property-specific review by a prospective principal buyer; no guarantee of purchase, price, or timing.',
    keywords: [
      'sell land Franklin County Ohio',
      'cash land buyers Franklin County OH',
      'sell vacant lot Columbus Ohio',
      'sell infill lot Columbus Ohio',
      'sell inherited land Franklin County Ohio',
      'sell land with back taxes Franklin County Ohio',
      'sell teardown lot Columbus Ohio',
    ],
    why: `Franklin County remains Central Ohio's highest-growth land market, with US Census data showing sustained population gains across Columbus, Dublin, Hilliard, and New Albany. The Intel semiconductor campus expansion near Plain Township and US-33 corridor development have intensified builder demand for infill lots and acreage on the urban fringe. According to Franklin County Auditor parcel records, vacant residential lots inside Columbus city limits and along the I-270 belt consistently trade at a premium to rural Ohio Valley parcels. Ohio Valley Land Partners buys Franklin County land directly — inherited lots near German Village, tax-delinquent parcels in Whitehall, and acreage along US-40 toward Reynoldsburg — subject to property-specific review and mutually acceptable written terms.`,
    localGeography:
      'From the Intel-adjacent Plain Township corridor along US-33 to infill pockets in Clintonville, Franklinton, and the Hilliard–Dublin growth zone along I-270, Franklin County parcels vary widely by access, utilities, and zoning. Parcels near the Scioto River and the OSU campus area see different buyer pools than rural acreage east of Pickerington and south toward Grove City.',
    citations: [
      {
        source: 'Franklin County Auditor',
        detail: 'Parcel ownership, tax history, and GIS mapping for all Franklin County lots and acreage.',
      },
      {
        source: 'ORC § 5721.01',
        detail: 'Ohio delinquent property tax lien process — relevant when selling land with back taxes.',
      },
      {
        source: 'ORC § 2113.39',
        detail: 'Executor authority to sell real property during Ohio probate with court approval.',
      },
      {
        source: 'USDA NASS',
        detail: 'Ohio cropland and land value benchmarks used to contextualize rural Franklin County acreage.',
      },
    ],
    relatedBlogSlugs: ['franklin-county-ohio-sell-vacant-land-2026', 'land-near-intel-new-albany-ohio'],
    landTypes: [
      'Columbus infill lots',
      'Residential vacant lots',
      'Larger acreage of 0.8 acres and above',
      'Inherited land and estate parcels',
      'Tax-delinquent lots',
      'Teardown or redevelopment parcels',
    ],
    commonSituations: [
      'Own a vacant Columbus lot and want a direct buyer',
      'Inherited Franklin County land and do not want to list it',
      'Owe back taxes or have a parcel that has become a burden',
      'Have a small residential lot that agents have struggled to sell',
      'Want a clean sale without showings, repair requests, or commission fees',
    ],
    faqs: [
      {
        q: 'Is Franklin County part of the Ohio Valley?',
        a: 'No. Franklin County is the Columbus and Central Ohio market. Ohio Valley Land Partners is the company brand, and Franklin County is our first active sales campaign outside the core Ohio River Valley footprint.',
      },
      {
        q: 'Do you buy small infill lots in Columbus?',
        a: 'Yes. Franklin County is mainly an infill-lot and residential-lot campaign for us. We review access, utilities, zoning, frontage, nearby sales, and builder demand before making an offer.',
      },
      {
        q: 'Do you buy larger acreage in Franklin County?',
        a: 'Yes. We also review larger lots and acreage, especially parcels of 0.8 acres and above with strong access, clean ownership, and clear resale or development demand.',
      },
      {
        q: 'How do you price Franklin County land?',
        a: 'We compare recent land sales, active listings, utility access, zoning, buildability, tax status, and buyer demand in the specific ZIP or neighborhood. We then make a direct offer based on what the parcel can realistically support.',
      },
      {
        q: 'Will you text me after I submit my property?',
        a: 'For the first month of this campaign, our outreach is call-first. We use phone calls, voicemail when appropriate, and direct follow-up tasks rather than text campaigns.',
      },
      {
        q: 'Can I sell land in Franklin County if the property taxes are past due?',
        a: 'Yes — owing back taxes does not prevent you from selling vacant land in Franklin County. Under ORC § 5721.181, delinquent taxes become a lien on the property, but that lien is typically paid at or before closing from sale proceeds, so you walk away clean. Ohio Valley Land Partners buys tax-delinquent lots regularly and handles the payoff coordination as part of closing.',
      },
      {
        q: 'How does Franklin County\'s land split process affect my timeline if I want to sell part of my lot?',
        a: 'Splitting a parcel in Franklin County requires approval through the Franklin County Engineer\'s Office and, for lots inside Columbus city limits, may also require subdivision review. This process can take several weeks to several months depending on parcel size and zoning. Ohio Valley Land Partners can purchase the entire parcel as-is — no surveying or split approval required on your end.',
      },
      {
        q: 'Can I sell inherited Franklin County land while probate is still open?',
        a: 'Yes, with court authorization. Under ORC § 2113.39, the executor or administrator can petition the Franklin County Probate Court to approve a sale of estate real property before probate fully closes. Ohio Valley Land Partners regularly purchases from estates mid-probate and coordinates with the court-appointed fiduciary.',
      },
      {
        q: 'Do you buy vacant lots inside Columbus city limits with no utilities?',
        a: 'We evaluate them case by case. Columbus zoning districts (R-1 through R-4 and mixed-use overlays) and utility availability at the curb strongly affect what a vacant infill lot is worth. We pull Franklin County Auditor records and Columbus zoning maps before making an offer — you do not need a survey first.',
      },
    ],
  },
  {
    slug: 'belmont-county-oh',
    name: 'Belmont County',
    state: 'Ohio',
    stateAbbr: 'OH',
    headline: 'We Buy Vacant Land in Belmont County, OH',
    subheadline: 'Direct acquisition inquiry for Belmont County. Any proposal is property-specific and is not an appraisal or statement of market value.',
    metaTitle: 'Belmont County Land | Direct Buyer Inquiry',
    metaDescription:
      'General information about OVLP acquisition interests in Belmont County, Ohio. Property-specific review by a prospective principal buyer; no guarantee of purchase, price, or timing.',
    keywords: [
      'sell land Belmont County Ohio',
      'cash land buyers Belmont County OH',
      'sell vacant land Belmont County',
      'sell inherited land Belmont County Ohio',
      'sell land St Clairsville Ohio',
      'sell farm ground Belmont County Ohio cash',
    ],
    why: `Belmont County sits at the crossroads of Ohio's Utica and Marcellus shale plays and the I-70 corridor linking Columbus to Wheeling, WV. Surface parcels near St. Clairsville, Barnesville, and Shadyside draw interest from energy-adjacent buyers, agricultural operators, and investors holding along the Ohio River. Belmont County Auditor records show a mix of active farm ground, wooded acreage, and parcels with recorded oil and gas leases — each priced differently depending on mineral status. Ohio Valley Land Partners purchases Belmont County land directly, whether mineral rights are severed or still attached to the surface estate, subject to property-specific review and mutually acceptable written terms.`,
    localGeography:
      'Belmont County stretches from the Ohio River communities of Shadyside and Powhatan Point north to St. Clairsville along I-70 and east toward Barnesville and the Harrison County line. Parcels along the river corridor, in the Flushing–Lafferty agricultural zone, and near the I-470 bridge to Wheeling each attract different buyer profiles.',
    citations: [
      {
        source: 'Belmont County Auditor',
        detail: 'Parcel ownership, assessed values, and tax delinquency status for all Belmont County land.',
      },
      {
        source: 'ORC § 5723.01',
        detail: 'Ohio tax forfeiture process — land with unpaid taxes can eventually transfer to the state.',
      },
      {
        source: 'ORC § 5721.01',
        detail: 'Delinquent property tax lien process in Ohio, including interest accrual on back taxes.',
      },
      {
        source: 'USDA NASS',
        detail: 'Ohio cropland value data used to benchmark agricultural parcels in Belmont County.',
      },
    ],
    relatedBlogSlugs: ['sell-land-belmont-county-ohio-fast', 'sell-land-back-taxes-ohio'],
    landTypes: [
      'Vacant rural lots',
      'Agricultural and farm ground',
      'Timber and wooded parcels',
      'Mineral rights parcels',
      'Inherited estate land',
      'Delinquent tax properties',
    ],
    commonSituations: [
      'Inherited land from a family estate and need to settle quickly',
      'Owe back property taxes and want to avoid the county tax sale',
      'Own land out of state and have no use for it',
      'Been listed with an agent for months with no results',
      'Want a clean sale with no showings, repairs, or conditions',
    ],
    faqs: [
      {
        q: 'How fast can you close on Belmont County land?',
        a: 'Typically 14–21 days from signed purchase agreement. Title work in Belmont County runs through a local title company and is straightforward on most parcels.',
      },
      {
        q: 'Do you buy land with delinquent taxes in Belmont County?',
        a: 'Yes. We account for back taxes in our offer and pay them off at closing. You don\'t need to bring cash to the table.',
      },
      {
        q: 'What if my land is landlocked or has no road access?',
        a: 'We still evaluate it. Landlocked parcels are worth less, but many still have value — especially if they adjoin larger tracts. Submit the address and we\'ll give you an honest assessment.',
      },
      {
        q: 'Does OVLP act as my real estate agent?',
        a: 'No. OVLP is a prospective principal buyer reviewing whether we wish to purchase your property. We do not list property, represent sellers, or advise on sale strategy.',
      },
      {
        q: 'Does having oil, gas, or mineral rights attached to my Belmont County land affect how I sell it?',
        a: 'It can, and it\'s one of the most important questions to clarify before accepting an offer. Belmont County sits within Ohio\'s Utica and Marcellus shale formation areas, and mineral rights — whether severed from the surface or still attached — can significantly affect a parcel\'s value. Review your deed and any recorded Memorandums of Oil and Gas Lease at the Belmont County Recorder\'s Office to understand what you own. Ohio Valley Land Partners purchases surface rights and, where applicable, unsevered mineral interests.',
      },
      {
        q: 'What happens to my Belmont County land if it goes into the county tax forfeiture process?',
        a: 'Under ORC § 5723.01, land with unpaid taxes can eventually be certified to the State of Ohio as forfeited land, at which point it may be sold through the Belmont County Auditor\'s forfeited land sale and the original owner loses all interest. If your Belmont County property has accumulated delinquent taxes, selling to a direct buyer before forfeiture is initiated is typically the fastest and cleanest option — you receive proceeds rather than walking away with nothing.',
      },
      {
        q: 'How do I check whether mineral rights were severed from my Belmont County deed?',
        a: 'Review your deed and any recorded Memorandums of Oil and Gas Lease at the Belmont County Recorder\'s Office in St. Clairsville. A prior owner may have reserved minerals in a separate conveyance decades ago. Ohio Valley Land Partners evaluates surface rights independently and will explain how severed minerals affect our offer before you sign anything.',
      },
      {
        q: 'Do you buy Belmont County land near the Ohio River or I-70 corridor?',
        a: 'Yes. Parcels along the Ohio River near Shadyside and Powhatan Point and along the I-70 corridor through St. Clairsville are active acquisition areas for us. River frontage, road access, and flood zone status (check FEMA flood maps for your parcel) all factor into pricing.',
      },
    ],
  },
  {
    slug: 'jefferson-county-oh',
    name: 'Jefferson County',
    state: 'Ohio',
    stateAbbr: 'OH',
    headline: 'We Buy Vacant Land in Jefferson County, OH',
    subheadline: 'Direct acquisition inquiry for Jefferson County. Any proposal is property-specific and is not an appraisal or statement of market value.',
    metaTitle: 'Jefferson County Land | Direct Buyer Inquiry',
    metaDescription:
      'General information about OVLP acquisition interests in Jefferson County, Ohio. Property-specific review by a prospective principal buyer; no guarantee of purchase, price, or timing.',
    keywords: [
      'sell land Jefferson County Ohio',
      'cash land buyers Jefferson County OH',
      'sell vacant land Steubenville Ohio',
      'sell inherited land Jefferson County',
      'sell land back taxes Jefferson County Ohio',
    ],
    why: `Jefferson County sits on the Ohio River across from Weirton, WV, with Steubenville as the county seat and economic anchor. Jefferson County Auditor records show a mix of former industrial parcels, Ohio River frontage lots, and rural township acreage stretching toward Wintersville and Toronto. Energy activity and recreational demand from Pittsburgh-area buyers keep the market active for sellers who want a direct buyer instead of a long MLS listing. Ohio Valley Land Partners purchases throughout Jefferson County and reviews each opportunity individually.`,
    localGeography:
      'Jefferson County runs along the Ohio River from Steubenville and Mingo Junction through Toronto, Brilliant, and rural townships toward the Harrison County line. River corridor parcels, former industrial sites near US-22, and wooded acreage in the upland townships each have distinct buyer demand.',
    citations: [
      {
        source: 'Jefferson County Auditor',
        detail: 'Parcel ownership, tax history, and assessed values for all Jefferson County land.',
      },
      {
        source: 'ORC § 5721.01',
        detail: 'Ohio delinquent property tax lien process for parcels with back taxes.',
      },
      {
        source: 'ORC § 2113.39',
        detail: 'Executor authority to sell inherited real property during Ohio probate.',
      },
      {
        source: 'US Census Bureau',
        detail: 'Jefferson County population and housing data for market context.',
      },
    ],
    relatedBlogSlugs: ['sell-land-jefferson-county-ohio-steubenville', 'sell-land-back-taxes-ohio'],
    landTypes: [
      'Vacant residential and rural lots',
      'Former industrial sites',
      'Agricultural parcels',
      'Timber land',
      'Ohio River frontage parcels',
      'Inherited estate properties',
    ],
    commonSituations: [
      'Inherited land in Jefferson County and live out of state',
      'Owe delinquent property taxes and want out before foreclosure',
      'Land has been sitting unused for years with no plan',
      'Listed with a realtor with no offers',
      'Need to settle an estate quickly and cleanly',
    ],
    faqs: [
      {
        q: 'Do you buy land near Steubenville?',
        a: 'Yes. We buy throughout Jefferson County including Steubenville, Toronto, Brilliant, Mingo Junction, and all rural townships.',
      },
      {
        q: 'What if there is an old structure on the land?',
        a: 'We buy land as-is including parcels with old outbuildings, collapsed structures, or debris. We account for demo costs in our offer.',
      },
      {
        q: 'How do you determine what to offer for Jefferson County land?',
        a: 'We pull recent comparable sales from the Jefferson County Auditor records, assess the parcel\'s access, utilities, zoning, and any encumbrances, and build an offer from there. We\'ll walk you through the number.',
      },
      {
        q: 'Can you close through a local title company?',
        a: 'Yes. We use Ohio-licensed title companies and work with local attorneys familiar with Jefferson County records.',
      },
      {
        q: 'Do you buy inherited Jefferson County land from out-of-state heirs?',
        a: 'Frequently. Most of our Jefferson County sellers live outside Ohio. Under ORC § 2113, the estate executor or administrator must obtain court authority to sell, but you do not need to travel to Steubenville — we handle remote closings through a local title company.',
      },
      {
        q: 'What if my Jefferson County land has delinquent property taxes?',
        a: 'Back taxes do not block a sale. Under ORC § 5721.181, delinquent taxes become a lien paid at closing from sale proceeds. We factor the total tax debt into our offer so you walk away without paying out of pocket.',
      },
      {
        q: 'Do you buy Ohio River frontage parcels in Jefferson County?',
        a: 'Yes. River frontage near Steubenville, Mingo Junction, and Toronto attracts recreational and investment buyers. We evaluate flood zone status using FEMA flood map data and assess road access before making an offer.',
      },
      {
        q: 'How is Jefferson County land priced compared to Belmont or Harrison counties?',
        a: 'Jefferson County parcels near Steubenville typically command higher per-acre values than remote rural townships, but still trade below Columbus metro prices. We pull Jefferson County Auditor comparable sales and recent land transfers to build each offer.',
      },
    ],
  },
  {
    slug: 'columbiana-county-oh',
    name: 'Columbiana County',
    state: 'Ohio',
    stateAbbr: 'OH',
    headline: 'We Buy Vacant Land in Columbiana County, OH',
    subheadline: 'Direct acquisition inquiry for Columbiana County. Any proposal is property-specific and is not an appraisal or statement of market value.',
    metaTitle: 'Columbiana County Land | Direct Buyer Inquiry',
    metaDescription:
      'General information about OVLP acquisition interests in Columbiana County, Ohio. Property-specific review by a prospective principal buyer; no guarantee of purchase, price, or timing.',
    keywords: [
      'sell land Columbiana County Ohio',
      'cash land buyers Columbiana County',
      'sell vacant land Lisbon Ohio',
      'sell farm land Columbiana County Ohio',
      'sell inherited property Columbiana County',
    ],
    why: `Columbiana County is an agricultural and recreational land market anchored by Lisbon, with steady demand from farming operations, hunters, and investors from the Youngstown–Canton corridor. Columbiana County Auditor records show productive farm ground near Salem, wooded tracts in the northern townships, and vacant lots in East Liverpool along the Ohio River. Ohio Valley Land Partners purchases throughout the county — from Lisbon to Salem to East Liverpool — and reviews each opportunity individually.`,
    localGeography:
      'Columbiana County spans from the Ohio River at East Liverpool and Wellsville north through Lisbon and Salem toward the Pennsylvania border. Farm ground in the central townships, hunting land in the wooded hills, and residential lots near the Route 30 corridor each attract different buyers.',
    citations: [
      {
        source: 'Columbiana County Auditor',
        detail: 'Parcel ownership, assessed values, and tax delinquency records for all county land.',
      },
      {
        source: 'ORC § 5721.01',
        detail: 'Ohio delinquent property tax lien process.',
      },
      {
        source: 'ORC § 5723.01',
        detail: 'Tax forfeiture process for land with long-unpaid Ohio property taxes.',
      },
      {
        source: 'USDA NASS',
        detail: 'Ohio cropland value benchmarks for agricultural parcels in Columbiana County.',
      },
    ],
    relatedBlogSlugs: ['sell-land-columbiana-county-ohio', 'sell-land-back-taxes-ohio'],
    landTypes: [
      'Farm ground and agricultural parcels',
      'Hunting and recreational tracts',
      'Wooded and timber parcels',
      'Vacant residential lots',
      'Inherited estate land',
      'Delinquent tax properties',
    ],
    commonSituations: [
      'Own farm ground that is no longer being worked',
      'Inherited property from a parent or grandparent',
      'Land is generating property tax bills with no income',
      'Exploring a direct purchase inquiry',
      'Owe back taxes and need to act before the tax sale',
    ],
    faqs: [
      {
        q: 'Do you buy agricultural land in Columbiana County?',
        a: 'Yes. Farm ground is one of our primary acquisition types. Whether it\'s actively farmed or fallow, we can make an offer.',
      },
      {
        q: 'What is my Columbiana County land worth?',
        a: 'It depends on location, size, access, zoning, and condition. The best way to find out is to submit your address — we\'ll research it and give you a real number within 24 hours.',
      },
      {
        q: 'Can you close quickly if I\'m facing a tax sale?',
        a: 'Yes. If there\'s a pending tax sale date, tell us immediately. We can often close within 10–14 days when there\'s a deadline involved.',
      },
      {
        q: 'Do I need a survey before selling?',
        a: 'Not to sell to us. We work with the existing legal description on file with the county auditor. You don\'t need to commission a new survey.',
      },
      {
        q: 'Do you buy hunting and recreational land in Columbiana County?',
        a: 'Yes. Wooded tracts in the northern townships near the Pennsylvania border are popular with hunters from the Youngstown and Pittsburgh metros. We evaluate access roads, timber condition, and zoning before making an offer.',
      },
      {
        q: 'Can I sell Columbiana County land with back taxes before the county tax sale?',
        a: 'Yes. Under ORC § 5721, delinquent taxes become a lien paid at closing. Selling before the Columbiana County Auditor\'s tax sale or forfeiture process lets you keep sale proceeds instead of losing the parcel entirely.',
      },
      {
        q: 'Do you buy land near East Liverpool or the Ohio River?',
        a: 'We evaluate Ohio River corridor parcels in East Liverpool and Wellsville. Flood zone designation (check FEMA maps), road frontage, and any industrial history on the parcel all factor into our offer.',
      },
      {
        q: 'What if multiple heirs inherited Columbiana County land?',
        a: 'Under ORC § 5307 (Uniform Partition of Heirs Property Act), co-heirs have specific rights when one wants to sell. If the estate has a court-appointed executor with authority to sell, we can proceed. Active disputes among heirs must be resolved before closing.',
      },
    ],
  },
  {
    slug: 'harrison-county-oh',
    name: 'Harrison County',
    state: 'Ohio',
    stateAbbr: 'OH',
    headline: 'We Buy Vacant Land in Harrison County, OH',
    subheadline: 'Direct acquisition inquiry for Harrison County. Any proposal is property-specific and is not an appraisal or statement of market value.',
    metaTitle: 'Harrison County Land | Direct Buyer Inquiry',
    metaDescription:
      'General information about OVLP acquisition interests in Harrison County, Ohio. Property-specific review by a prospective principal buyer; no guarantee of purchase, price, or timing.',
    keywords: [
      'sell land Harrison County Ohio',
      'cash land buyers Harrison County OH',
      'sell vacant land Cadiz Ohio',
      'sell timber land Harrison County',
      'sell inherited land Harrison County Ohio',
      'sell undeveloped land Harrison County Ohio fast',
    ],
    why: `Harrison County is one of Ohio's premier hunting and recreational land markets, with Cadiz as the county seat and heavily wooded terrain throughout the rural townships. Harrison County Auditor records show strong demand for hunting tracts, timber parcels, and mineral-adjacent acreage from buyers in Cleveland, Columbus, and Pittsburgh. Ohio Valley Land Partners regularly acquires land throughout Harrison County and reviews each opportunity individually through a local title company.`,
    localGeography:
      'Harrison County covers the upland terrain between the Ohio River Valley and the Tuscarawas County line, with Cadiz at the center and rural townships extending toward Scio, Freeport, and the Carroll County border. Timber tracts, hunting ground, and parcels with oil and gas activity each have distinct market values.',
    citations: [
      {
        source: 'Harrison County Auditor',
        detail: 'Parcel ownership, tax history, and assessed values for all Harrison County land.',
      },
      {
        source: 'ORC § 5721.01',
        detail: 'Ohio delinquent property tax lien process.',
      },
      {
        source: 'Ohio DNR Division of Wildlife',
        detail: 'White-tailed deer harvest data — Harrison County ranks among Ohio\'s top hunting counties.',
      },
      {
        source: 'USDA NASS',
        detail: 'Ohio timberland and cropland value benchmarks.',
      },
    ],
    relatedBlogSlugs: ['brooke-harrison-carroll-county-land-buyers', 'sell-land-back-taxes-ohio'],
    landTypes: [
      'Hunting and recreational land',
      'Timber and wooded parcels',
      'Agricultural ground',
      'Mineral rights parcels',
      'Inherited estate land',
      'Vacant rural lots',
    ],
    commonSituations: [
      'Own hunting land that no one in the family uses anymore',
      'Inherited wooded acreage in Harrison County',
      'Owe back taxes on a rural parcel',
      'Want to sell without listing or showings',
      'Timber has been cut and land is no longer productive',
    ],
    faqs: [
      {
        q: 'Is there demand for hunting land in Harrison County?',
        a: 'Yes — strong demand. Harrison County is one of Ohio\'s top counties for white-tailed deer. Well-located hunting tracts move quickly to buyers from the metro areas.',
      },
      {
        q: 'Do you buy timber land in Harrison County?',
        a: 'Yes. We buy timber parcels whether the timber has been recently harvested or is mature and standing. We evaluate the land independently of the timber value.',
      },
      {
        q: 'What if my land has an old oil or gas well on it?',
        a: 'We evaluate properties with plugged or active wells. An active well with a lease is often a positive. An orphaned well may be a liability. Submit the property and we\'ll give you an honest assessment.',
      },
      {
        q: 'How do I find out if I owe back taxes in Harrison County?',
        a: 'Contact the Harrison County Treasurer\'s office in Cadiz, or we can look it up when you submit your property address.',
      },
      {
        q: 'Do you buy mineral rights parcels in Harrison County?',
        a: 'We evaluate surface and unsevered mineral interests. Harrison County sits within Ohio\'s Utica shale play, and recorded leases at the Harrison County Recorder\'s Office affect what a parcel is worth. Review your deed before accepting any offer.',
      },
      {
        q: 'Can I sell inherited Harrison County hunting land during probate?',
        a: 'Yes, with court approval. Under ORC § 2113.39, the estate fiduciary can petition the Harrison County Probate Court to authorize a sale. Ohio Valley Land Partners works with executors mid-probate and does not require the estate to be fully closed first.',
      },
      {
        q: 'What if my Harrison County land has no road access?',
        a: 'Landlocked parcels are worth less but often still salable if they adjoin larger tracts or have an easement on record. Submit the parcel address and we will check Harrison County Auditor GIS maps and recorded easements before giving you an honest assessment.',
      },
      {
        q: 'How fast can you close on Harrison County land with back taxes?',
        a: 'Typically 14–21 days. Under ORC § 5721.181, delinquent taxes are paid from closing proceeds. If a Harrison County tax sale date is approaching, tell us immediately — we can often accelerate the timeline.',
      },
    ],
  },
  {
    slug: 'carroll-county-oh',
    name: 'Carroll County',
    state: 'Ohio',
    stateAbbr: 'OH',
    headline: 'We Buy Vacant Land in Carroll County, OH',
    subheadline: 'Direct acquisition inquiry for Carroll County. Any proposal is property-specific and is not an appraisal or statement of market value.',
    metaTitle: 'Carroll County Land | Direct Buyer Inquiry',
    metaDescription:
      'General information about OVLP acquisition interests in Carroll County, Ohio. Property-specific review by a prospective principal buyer; no guarantee of purchase, price, or timing.',
    keywords: [
      'sell land Carroll County Ohio',
      'cash land buyers Carroll County OH',
      'sell vacant land Carrollton Ohio',
      'sell hunting land Carroll County Ohio',
      'sell farm land Carroll County Ohio',
      'Carroll County Ohio vacant land buyers cash',
    ],
    why: `Carroll County sits between Canton and the Ohio River Valley, with Carrollton as the county seat and Atwood Lake as a major recreational draw. Carroll County Auditor records show a mix of hunting ground, productive farmland, and Utica shale-adjacent acreage from Carrollton through Malvern and Minerva. Ohio Valley Land Partners actively buys throughout Carroll County and reviews each opportunity individually.`,
    localGeography:
      'Carroll County stretches from Carrollton and Sherrodsville south toward Atwood Lake and east toward the Columbiana County line. Farm ground in the central townships, recreational land near Atwood Lake, and wooded acreage in the northern hills each attract different buyer profiles.',
    citations: [
      {
        source: 'Carroll County Auditor',
        detail: 'Parcel ownership, assessed values, and tax delinquency status.',
      },
      {
        source: 'ORC § 5721.01',
        detail: 'Ohio delinquent property tax lien process.',
      },
      {
        source: 'ORC § 2113.39',
        detail: 'Executor authority to sell inherited real property during probate.',
      },
      {
        source: 'USDA NASS',
        detail: 'Ohio cropland value data for agricultural parcels in Carroll County.',
      },
    ],
    relatedBlogSlugs: ['brooke-harrison-carroll-county-land-buyers', 'sell-land-back-taxes-ohio'],
    landTypes: [
      'Hunting and recreational tracts',
      'Agricultural and farm parcels',
      'Wooded and timber land',
      'Vacant residential lots',
      'Inherited estate properties',
      'Oil and gas parcels',
    ],
    commonSituations: [
      'Family farm or hunting land that no one is using',
      'Inherited Carroll County property from an estate',
      'Delinquent property taxes piling up',
      'Out-of-state owner with no connection to the land',
      'Exploring a direct sale timeline',
    ],
    faqs: [
      {
        q: 'Do you buy land near Carrollton, Ohio?',
        a: 'Yes. We buy throughout Carroll County — Carrollton, Sherrodsville, Malvern, Minerva, and all rural townships.',
      },
      {
        q: 'How quickly can you close in Carroll County?',
        a: 'Typically 14–21 days. If there\'s a time-sensitive situation like a pending tax sale or estate deadline, we can often move faster.',
      },
      {
        q: 'Do oil and gas rights affect my land\'s value?',
        a: 'Yes. If you own mineral rights and there is Utica or Marcellus shale activity in your township, it can significantly increase the land\'s value. Let us know when you submit.',
      },
      {
        q: 'What happens if there\'s a dispute among heirs about selling?',
        a: 'We buy from authorized sellers. If the estate has a designated executor with authority to sell, we can proceed. If there\'s an active dispute, that needs to be resolved before any sale can close.',
      },
      {
        q: 'Do you buy land near Atwood Lake or Carrollton?',
        a: 'Yes. Recreational parcels near Atwood Lake and rural acreage around Carrollton are active acquisition areas. We evaluate lake access, road frontage, and Carroll County zoning before making an offer.',
      },
      {
        q: 'How do Utica shale leases affect Carroll County land value?',
        a: 'Active or recorded oil and gas leases at the Carroll County Clerk\'s Office can increase or complicate a parcel\'s value depending on whether minerals are severed. Tell us about any lease activity when you submit — we review recorded documents before pricing.',
      },
      {
        q: 'Can I sell Carroll County farm ground that is no longer being worked?',
        a: 'Yes. Fallow farm ground is one of our most common acquisition types in Carroll County. We use Carroll County Auditor comparable sales and USDA NASS cropland benchmarks to build each offer.',
      },
      {
        q: 'What if my Carroll County land has delinquent taxes?',
        a: 'Under ORC § 5721.181, back taxes are a lien paid at closing from sale proceeds. Selling before the Carroll County tax forfeiture process under ORC § 5723.01 is almost always better than letting the county take the parcel.',
      },
    ],
  },
  {
    slug: 'ohio-county-wv',
    name: 'Ohio County',
    state: 'West Virginia',
    stateAbbr: 'WV',
    headline: 'We Buy Vacant Land in Ohio County, WV',
    subheadline: 'Direct acquisition inquiry for Ohio County. Any proposal is property-specific and is not an appraisal or statement of market value.',
    metaTitle: 'Ohio County Land | Direct Buyer Inquiry',
    metaDescription:
      'General information about OVLP acquisition interests in Ohio County, West Virginia. Property-specific review by a prospective principal buyer; no guarantee of purchase, price, or timing.',
    keywords: [
      'sell land Ohio County West Virginia',
      'cash land buyers Ohio County WV',
      'sell vacant land Wheeling WV',
      'sell inherited land Ohio County WV',
      'sell land fast Wheeling West Virginia',
    ],
    why: `Ohio County is the economic center of West Virginia's northern panhandle, anchored by Wheeling along the Ohio River. Ohio County Assessor records show a diverse land market — from urban residential lots in Wheeling to rural acreage in Triadelphia and Valley Grove. Proximity to Pittsburgh and the I-70 corridor makes this one of the more liquid WV land markets. Ohio Valley Land Partners buys throughout Ohio County and reviews each opportunity individually through a West Virginia title company.`,
    localGeography:
      'Ohio County runs along the Ohio River from Wheeling through Triadelphia, Valley Grove, and the rural townships toward the Marshall County line. Urban lots in Wheeling, Ohio River corridor parcels, and hillside acreage toward the Pennsylvania border each have distinct buyer demand.',
    citations: [
      {
        source: 'Ohio County Assessor',
        detail: 'Parcel ownership, assessed values, and tax records for all Ohio County WV land.',
      },
      {
        source: 'WV Code § 11A-3',
        detail: 'West Virginia delinquent property tax lien and sheriff\'s sale process.',
      },
      {
        source: 'WV Code § 44-1',
        detail: 'West Virginia estates and probate administration for inherited land sales.',
      },
      {
        source: 'US Census Bureau',
        detail: 'Ohio County WV population and housing data for market context.',
      },
    ],
    relatedBlogSlugs: ['sell-land-ohio-county-west-virginia-wheeling', 'cash-land-buyers-ohio-valley'],
    landTypes: [
      'Vacant urban and suburban lots',
      'Rural acreage and farm parcels',
      'Inherited estate land',
      'Commercial-adjacent parcels',
      'Ohio River corridor land',
      'Delinquent tax properties',
    ],
    commonSituations: [
      'Inherited a lot or parcel in the Wheeling area',
      'Own land that\'s been sitting vacant for years',
      'Owe West Virginia property taxes and want to sell',
      'Out-of-state heir with West Virginia land',
      'Exploring a direct purchase inquiry',
    ],
    faqs: [
      {
        q: 'Do you buy land in West Virginia?',
        a: 'Yes. We buy throughout the Ohio Valley — including Ohio County, Marshall County, and Brooke County in West Virginia.',
      },
      {
        q: 'Is West Virginia land harder to sell than Ohio land?',
        a: 'WV land has a smaller buyer pool for traditional listings, which is exactly why direct buyers like us are valuable. We know the market and have buyers specifically looking for WV panhandle parcels.',
      },
      {
        q: 'How does WV probate differ from Ohio probate for land sales?',
        a: 'West Virginia probate follows a similar general process but goes through the WV Circuit Court rather than Ohio Probate Court. Timelines and procedures vary by county. We\'ve worked through WV estate sales before and can navigate it with you.',
      },
      {
        q: 'Do you buy land in the city of Wheeling?',
        a: 'Yes — urban and suburban lots in Wheeling are something we evaluate. Value depends on location, zoning, and condition of any existing structures.',
      },
      {
        q: 'Do you work with out-of-state heirs who inherited Ohio County WV land?',
        a: 'Frequently. Under WV Code § 44-1, the personal representative must obtain authority to sell estate property, but you do not need to travel to Wheeling. We handle remote closings through a local WV title company.',
      },
      {
        q: 'What happens if my Ohio County WV property taxes are delinquent?',
        a: 'Under WV Code § 11A-3, delinquent taxes can lead to a sheriff\'s tax sale. Selling to a direct buyer before that process completes lets you receive proceeds instead of losing the parcel through redemption deadlines.',
      },
      {
        q: 'Do you buy Ohio River frontage land in Ohio County?',
        a: 'Yes. River corridor parcels near Wheeling and the I-70 bridge attract recreational and investment buyers. We check FEMA flood zone maps and Ohio County Assessor records before pricing.',
      },
      {
        q: 'How is WV land in Ohio County priced compared to across the river in Ohio?',
        a: 'Ohio County WV parcels near Wheeling often trade at lower per-acre prices than comparable Ohio parcels, which is why direct buyers are valuable — we have end buyers specifically looking in the WV panhandle. We pull Ohio County Assessor comparable sales for each offer.',
      },
    ],
  },
  {
    slug: 'marshall-county-wv',
    name: 'Marshall County',
    state: 'West Virginia',
    stateAbbr: 'WV',
    headline: 'We Buy Vacant Land in Marshall County, WV',
    subheadline: 'Direct acquisition inquiry for Marshall County. Any proposal is property-specific and is not an appraisal or statement of market value.',
    metaTitle: 'Marshall County Land | Direct Buyer Inquiry',
    metaDescription:
      'General information about OVLP acquisition interests in Marshall County, West Virginia. Property-specific review by a prospective principal buyer; no guarantee of purchase, price, or timing.',
    keywords: [
      'sell land Marshall County West Virginia',
      'cash land buyers Marshall County WV',
      'sell vacant land Moundsville WV',
      'sell rural land Marshall County WV',
      'sell inherited land Marshall County West Virginia',
    ],
    why: `Marshall County stretches along the Ohio River south of Wheeling, with Moundsville as the county seat and a mix of rural farmland, wooded hills, and river corridor parcels. Marshall County Assessor records show steady demand from rural residential buyers, farmers, and recreational investors — quieter than Ohio County but with solid liquidity for well-located parcels. Ohio Valley Land Partners actively purchases in Marshall County and reviews each opportunity individually.`,
    localGeography:
      'Marshall County runs along the Ohio River from Moundsville and Glen Dale south through Cameron and the rural townships toward Wetzel County. River corridor parcels, farm ground in the central valleys, and wooded hillside acreage each attract different buyers.',
    citations: [
      {
        source: 'Marshall County Assessor',
        detail: 'Parcel ownership, assessed values, and tax records for all Marshall County WV land.',
      },
      {
        source: 'WV Code § 11A-3',
        detail: 'West Virginia delinquent property tax lien and sheriff\'s sale process.',
      },
      {
        source: 'WV Code § 44-1',
        detail: 'West Virginia probate and estate administration for inherited land.',
      },
      {
        source: 'US Census Bureau',
        detail: 'Marshall County WV population data for market context.',
      },
    ],
    relatedBlogSlugs: ['sell-land-marshall-county-wv-moundsville', 'cash-land-buyers-ohio-valley'],
    landTypes: [
      'Rural and agricultural parcels',
      'Wooded and recreational tracts',
      'Ohio River frontage land',
      'Inherited estate properties',
      'Vacant residential lots',
      'Oil and gas parcels',
    ],
    commonSituations: [
      'Inherited West Virginia land and live out of state',
      'Own land that\'s been unused for a decade or more',
      'Delinquent WV property taxes on a rural parcel',
      'Family land no one can agree on — need a clean exit',
      'Want a fast, simple sale without WV listing process',
    ],
    faqs: [
      {
        q: 'Do you buy land near Moundsville, WV?',
        a: 'Yes. We buy throughout Marshall County — Moundsville, Cameron, Glen Dale, Bendale, and all rural areas.',
      },
      {
        q: 'Is there demand for Marshall County land?',
        a: 'Yes — particularly for rural residential, recreational, and agricultural parcels. The Ohio River corridor also attracts commercial interest.',
      },
      {
        q: 'What if my West Virginia land has mineral rights issues?',
        a: 'Many WV parcels have severed mineral rights — meaning the surface and mineral ownership are separate. We evaluate surface rights independently and will be upfront about how severed minerals affect value.',
      },
      {
        q: 'Can you buy WV land quickly if there\'s an estate deadline?',
        a: 'Yes. We can close fast when there\'s a time constraint. Let us know the situation when you submit and we\'ll prioritize accordingly.',
      },
      {
        q: 'Do you buy land near Moundsville or the former prison site area?',
        a: 'Yes. Parcels in and around Moundsville, Glen Dale, and along US-2 are active evaluation areas. Zoning, road access, and any recorded easements at the Marshall County Clerk\'s Office factor into pricing.',
      },
      {
        q: 'What if my Marshall County WV land has severed mineral rights?',
        a: 'Many WV parcels have minerals severed from the surface estate. We evaluate surface rights independently and explain upfront how severed minerals affect our offer — review your deed and any recorded leases before signing.',
      },
      {
        q: 'Can I sell Marshall County land with delinquent WV property taxes?',
        a: 'Yes. Under WV Code § 11A-3, delinquent taxes must be addressed at closing. We factor the total tax debt into our offer and pay the county from sale proceeds so you do not pay out of pocket.',
      },
      {
        q: 'Do you buy Ohio River frontage in Marshall County?',
        a: 'River corridor parcels from Moundsville south toward Cameron attract recreational and investment interest. We check FEMA flood maps and Marshall County Assessor parcel data before making an offer.',
      },
    ],
  },
  {
    slug: 'brooke-county-wv',
    name: 'Brooke County',
    state: 'West Virginia',
    stateAbbr: 'WV',
    headline: 'We Buy Vacant Land in Brooke County, WV',
    subheadline: 'Direct acquisition inquiry for Brooke County. Any proposal is property-specific and is not an appraisal or statement of market value.',
    metaTitle: 'Brooke County Land | Direct Buyer Inquiry',
    metaDescription:
      'General information about OVLP acquisition interests in Brooke County, West Virginia. Property-specific review by a prospective principal buyer; no guarantee of purchase, price, or timing.',
    keywords: [
      'sell land Brooke County West Virginia',
      'cash land buyers Brooke County WV',
      'sell vacant land Wellsburg WV',
      'sell inherited land Brooke County WV',
      'sell land fast Brooke County West Virginia',
    ],
    why: `Brooke County is the northernmost county in West Virginia's panhandle — a narrow strip between Pennsylvania and Ohio, anchored by Wellsburg along the Ohio River. Brooke County Assessor records show steady demand from Pittsburgh-metro buyers seeking WV rural and recreational land at lower price points than comparable Pennsylvania parcels. Ohio Valley Land Partners buys throughout Brooke County — Wellsburg, Follansbee, Beech Bottom — and reviews each opportunity individually.`,
    localGeography:
      'Brooke County hugs the Ohio River from Wellsburg and Beech Bottom south through Follansbee toward the Hancock County line, with the Pennsylvania border to the east. Compact parcels, river corridor lots, and wooded hillside acreage each have limited but active buyer pools.',
    citations: [
      {
        source: 'Brooke County Assessor',
        detail: 'Parcel ownership, assessed values, and tax records for all Brooke County WV land.',
      },
      {
        source: 'WV Code § 11A-3',
        detail: 'West Virginia delinquent property tax lien and sheriff\'s sale process.',
      },
      {
        source: 'WV Code § 44-1',
        detail: 'West Virginia probate administration for inherited land sales.',
      },
      {
        source: 'US Census Bureau',
        detail: 'Brooke County WV population data — the smallest county in the WV panhandle.',
      },
    ],
    relatedBlogSlugs: ['brooke-county-wv-land-worth-2026', 'brooke-harrison-carroll-county-land-buyers', 'cash-land-buyers-ohio-valley'],
    landTypes: [
      'Vacant residential lots',
      'Rural acreage',
      'Inherited estate parcels',
      'Wooded recreational tracts',
      'Agricultural ground',
      'Ohio River frontage land',
    ],
    commonSituations: [
      'Inherited property in Brooke County WV as an out-of-state heir',
      'Old family land with delinquent taxes',
      'Small parcel that\'s hard to sell through traditional channels',
      'Exploring a direct purchase inquiry',
      'Need to wrap up an estate and get the land sold cleanly',
    ],
    faqs: [
      {
        q: 'Do you buy land in Brooke County, WV?',
        a: 'Yes. We buy throughout Brooke County — Wellsburg, Beech Bottom, Follansbee, and all rural areas.',
      },
      {
        q: 'Is Brooke County land hard to sell?',
        a: 'Small WV panhandle parcels can sit on the market for a long time through traditional channels because the buyer pool is limited. We have buyers looking specifically in this area and can move quickly.',
      },
      {
        q: 'Do you work with out-of-state WV landowners?',
        a: 'Frequently. Most of our Brooke County sellers live in Pennsylvania, Ohio, or other states. We handle everything remotely — you don\'t need to come to WV to close.',
      },
      {
        q: 'What is the WV property tax situation on delinquent parcels?',
        a: 'West Virginia sells tax liens at annual sheriff\'s sales. If your parcel\'s taxes are severely delinquent, the redemption window can be short. Tell us the situation and we\'ll tell you if we can move in time.',
      },
      {
        q: 'Do you buy small Brooke County lots that are hard to sell on the MLS?',
        a: 'Yes — small WV panhandle parcels are exactly what we specialize in. Traditional listings struggle here because the buyer pool is limited. We have end buyers looking specifically in Brooke County and can close without showings or agent fees.',
      },
      {
        q: 'Can I sell inherited Brooke County land from Pennsylvania or Ohio?',
        a: 'Frequently. Under WV Code § 44-1, the estate personal representative must have authority to sell, but you do not need to travel to Wellsburg. We coordinate remote closings through a West Virginia title company.',
      },
      {
        q: 'Do you buy land near Wellsburg or along the Ohio River?',
        a: 'Yes. River corridor parcels and hillside acreage near Wellsburg and Follansbee are active areas. We evaluate flood zone status via FEMA maps and Brooke County Assessor parcel records.',
      },
      {
        q: 'How fast can you close on Brooke County WV land?',
        a: 'Typically 14–21 days for a clean title. If a Brooke County sheriff\'s tax sale is approaching, contact us immediately — under WV Code § 11A-3, redemption windows can be short and we may be able to accelerate.',
      },
    ],
  },
];

for (const page of countySellPages) {
  page.subheadline = countySubheadline(page.name);
}

export function getCountySellPage(slug: string): CountySellData | undefined {
  return countySellPages.find((c) => c.slug === slug);
}
