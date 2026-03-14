/**
 * county-sell-data.ts — Data for county-specific seller landing pages
 * URL pattern: /sell-land/[slug]
 * Each entry targets county-level long-tail seller keywords.
 */

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
  landTypes: string[];
  commonSituations: string[];
  faqs: { q: string; a: string }[];
}

export const countySellPages: CountySellData[] = [
  {
    slug: 'belmont-county-oh',
    name: 'Belmont County',
    state: 'Ohio',
    stateAbbr: 'OH',
    headline: 'We Buy Vacant Land in Belmont County, OH for Cash',
    subheadline: 'Sell your Belmont County land fast — no agent, no fees, cash offer in 24 hours.',
    metaTitle: 'Sell Vacant Land Fast in Belmont County, OH | Cash Offer in 24 Hours',
    metaDescription:
      'Need to sell vacant land in Belmont County, Ohio? We pay cash for land in any condition — inherited parcels, back-tax lots, and farm ground. Offer in 24 hours, close in 14 days.',
    keywords: [
      'sell land Belmont County Ohio',
      'cash land buyers Belmont County OH',
      'sell vacant land Belmont County',
      'sell inherited land Belmont County Ohio',
      'sell land St Clairsville Ohio',
    ],
    why: `Belmont County is one of the most active land markets in eastern Ohio. Located along the Ohio River corridor with significant energy sector activity and proximity to Wheeling, WV, parcels here attract a wide range of buyers — from recreational hunters to energy investors to rural residential developers. We know the Belmont County market well and can move quickly on any parcel.`,
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
        q: 'Do I need to hire a real estate agent to sell to you?',
        a: 'No. We buy directly. No agent, no commission, no listing. You deal directly with us from offer to closing.',
      },
    ],
  },
  {
    slug: 'jefferson-county-oh',
    name: 'Jefferson County',
    state: 'Ohio',
    stateAbbr: 'OH',
    headline: 'We Buy Vacant Land in Jefferson County, OH for Cash',
    subheadline: 'Sell your Jefferson County land fast — cash offer in 24 hours, close in 14 days.',
    metaTitle: 'Sell Vacant Land Fast in Jefferson County, OH | Cash Offer in 24 Hours',
    metaDescription:
      'Selling land in Jefferson County, Ohio? We buy vacant lots, farm ground, and inherited parcels for cash — no agent required. Offer within 24 hours.',
    keywords: [
      'sell land Jefferson County Ohio',
      'cash land buyers Jefferson County OH',
      'sell vacant land Steubenville Ohio',
      'sell inherited land Jefferson County',
      'sell land back taxes Jefferson County Ohio',
    ],
    why: `Jefferson County sits on the Ohio River across from Weirton, WV, and has a long history of industrial and agricultural land use. We actively purchase parcels throughout the county — from the Steubenville metro area to rural townships. Energy activity and recreational demand from Pittsburgh-area buyers keep the market active for sellers willing to work with a direct buyer.`,
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
    ],
  },
  {
    slug: 'columbiana-county-oh',
    name: 'Columbiana County',
    state: 'Ohio',
    stateAbbr: 'OH',
    headline: 'We Buy Vacant Land in Columbiana County, OH for Cash',
    subheadline: 'Sell your Columbiana County land fast — no agent fees, cash offer in 24 hours.',
    metaTitle: 'Sell Vacant Land Fast in Columbiana County, OH | Cash Offer in 24 Hours',
    metaDescription:
      'Selling vacant land in Columbiana County, Ohio? We pay cash for land in any condition. No agent fees. Offer in 24 hours. Close in as little as 14 days.',
    keywords: [
      'sell land Columbiana County Ohio',
      'cash land buyers Columbiana County',
      'sell vacant land Lisbon Ohio',
      'sell farm land Columbiana County Ohio',
      'sell inherited property Columbiana County',
    ],
    why: `Columbiana County is an agricultural and recreational land market with steady demand from farming operations, hunters, and investors from the Youngstown-Canton corridor. The county's central location between Cleveland, Pittsburgh, and Columbus makes it attractive for rural residential buyers. We purchase throughout the county from Lisbon to East Liverpool.`,
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
      'Want to sell without dealing with a real estate agent',
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
    ],
  },
  {
    slug: 'harrison-county-oh',
    name: 'Harrison County',
    state: 'Ohio',
    stateAbbr: 'OH',
    headline: 'We Buy Vacant Land in Harrison County, OH for Cash',
    subheadline: 'Sell your Harrison County land fast — cash offer within 24 hours.',
    metaTitle: 'Sell Vacant Land Fast in Harrison County, OH | Cash Offer in 24 Hours',
    metaDescription:
      'Selling land in Harrison County, Ohio? We buy vacant lots, timber tracts, and inherited parcels for cash. No agent fees. Offer in 24 hours, close in 14 days.',
    keywords: [
      'sell land Harrison County Ohio',
      'cash land buyers Harrison County OH',
      'sell vacant land Cadiz Ohio',
      'sell timber land Harrison County',
      'sell inherited land Harrison County Ohio',
    ],
    why: `Harrison County is one of Ohio's premier hunting and recreational land markets. Heavily wooded with abundant white-tailed deer, turkey, and upland game, the county draws buyers from Cleveland, Columbus, Pittsburgh, and beyond. We regularly acquire hunting tracts, timber parcels, and rural acreage throughout the county and have an active buyer network ready for well-located parcels.`,
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
    ],
  },
  {
    slug: 'carroll-county-oh',
    name: 'Carroll County',
    state: 'Ohio',
    stateAbbr: 'OH',
    headline: 'We Buy Vacant Land in Carroll County, OH for Cash',
    subheadline: 'Sell your Carroll County land fast — cash offer in 24 hours, no agent required.',
    metaTitle: 'Sell Vacant Land Fast in Carroll County, OH | Cash Offer in 24 Hours',
    metaDescription:
      'Selling land in Carroll County, Ohio? We buy rural lots, farm ground, timber tracts, and inherited parcels for cash. No agent fees. Offer within 24 hours.',
    keywords: [
      'sell land Carroll County Ohio',
      'cash land buyers Carroll County OH',
      'sell vacant land Carrollton Ohio',
      'sell hunting land Carroll County Ohio',
      'sell farm land Carroll County Ohio',
    ],
    why: `Carroll County sits between Canton and the Ohio River Valley and offers a mix of agricultural, recreational, and rural residential land. The county is known for quality hunting ground, productive farmland, and proximity to both the Utica shale play and the Canton metro. We actively buy throughout Carroll County and know the local land market well.`,
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
      'Want to sell quickly without an agent or MLS listing',
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
    ],
  },
  {
    slug: 'ohio-county-wv',
    name: 'Ohio County',
    state: 'West Virginia',
    stateAbbr: 'WV',
    headline: 'We Buy Vacant Land in Ohio County, WV for Cash',
    subheadline: 'Sell your Ohio County West Virginia land fast — cash offer in 24 hours.',
    metaTitle: 'Sell Vacant Land Fast in Ohio County, WV | Cash Offer in 24 Hours',
    metaDescription:
      'Selling land in Ohio County, West Virginia? We buy vacant lots, rural parcels, and inherited property in the Wheeling area for cash. No agent fees. Offer in 24 hours.',
    keywords: [
      'sell land Ohio County West Virginia',
      'cash land buyers Ohio County WV',
      'sell vacant land Wheeling WV',
      'sell inherited land Ohio County WV',
      'sell land fast Wheeling West Virginia',
    ],
    why: `Ohio County is the economic and population center of the northern West Virginia panhandle. Anchored by Wheeling, the county has a diverse land market ranging from urban residential lots to rural agricultural parcels. Proximity to Pittsburgh and the Ohio River make it one of the more liquid land markets in the region. We buy throughout Ohio County — Wheeling, Triadelphia, Valley Grove, and all surrounding areas.`,
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
      'Want to sell without dealing with a WV real estate agent',
    ],
    faqs: [
      {
        q: 'Do you buy land in West Virginia?',
        a: 'Yes. We buy throughout the Ohio Valley — including Ohio County, Marshall County, and Brooke County in West Virginia.',
      },
      {
        q: 'Is West Virginia land harder to sell than Ohio land?',
        a: 'WV land has a smaller buyer pool for traditional listings, which is exactly why cash buyers like us are valuable. We know the market and have buyers specifically looking for WV panhandle parcels.',
      },
      {
        q: 'How does WV probate differ from Ohio probate for land sales?',
        a: 'West Virginia probate follows a similar general process but goes through the WV Circuit Court rather than Ohio Probate Court. Timelines and procedures vary by county. We\'ve worked through WV estate sales before and can navigate it with you.',
      },
      {
        q: 'Do you buy land in the city of Wheeling?',
        a: 'Yes — urban and suburban lots in Wheeling are something we evaluate. Value depends on location, zoning, and condition of any existing structures.',
      },
    ],
  },
  {
    slug: 'marshall-county-wv',
    name: 'Marshall County',
    state: 'West Virginia',
    stateAbbr: 'WV',
    headline: 'We Buy Vacant Land in Marshall County, WV for Cash',
    subheadline: 'Sell your Marshall County West Virginia land fast — cash offer in 24 hours.',
    metaTitle: 'Sell Vacant Land Fast in Marshall County, WV | Cash Offer in 24 Hours',
    metaDescription:
      'Selling land in Marshall County, West Virginia? We buy rural parcels, farm ground, and inherited property for cash. No agent fees. Offer within 24 hours.',
    keywords: [
      'sell land Marshall County West Virginia',
      'cash land buyers Marshall County WV',
      'sell vacant land Moundsville WV',
      'sell rural land Marshall County WV',
      'sell inherited land Marshall County West Virginia',
    ],
    why: `Marshall County stretches along the Ohio River south of Wheeling and has a mix of rural farmland, wooded hills, and Ohio River corridor parcels. The county is quieter than Ohio County but offers solid demand from rural residential buyers, farmers, and recreational land investors. We actively purchase in Marshall County — Moundsville, Cameron, Glen Dale, and throughout the county's rural townships.`,
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
    ],
  },
  {
    slug: 'brooke-county-wv',
    name: 'Brooke County',
    state: 'West Virginia',
    stateAbbr: 'WV',
    headline: 'We Buy Vacant Land in Brooke County, WV for Cash',
    subheadline: 'Sell your Brooke County West Virginia land fast — cash offer in 24 hours.',
    metaTitle: 'Sell Vacant Land Fast in Brooke County, WV | Cash Offer in 24 Hours',
    metaDescription:
      'Selling land in Brooke County, West Virginia? We buy vacant lots and rural parcels in the Wellsburg area for cash. No agent. Offer in 24 hours.',
    keywords: [
      'sell land Brooke County West Virginia',
      'cash land buyers Brooke County WV',
      'sell vacant land Wellsburg WV',
      'sell inherited land Brooke County WV',
      'sell land fast Brooke County West Virginia',
    ],
    why: `Brooke County is the northernmost county in West Virginia's panhandle — a narrow strip of land between Pennsylvania and Ohio. Anchored by Wellsburg, it's a compact market with steady demand from buyers in the Pittsburgh metro looking for WV rural and recreational land at lower price points than comparable Pennsylvania properties. We buy throughout Brooke County and know how to move parcels here.`,
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
      'Want to sell without hiring a WV real estate agent',
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
    ],
  },
];

export function getCountySellPage(slug: string): CountySellData | undefined {
  return countySellPages.find((c) => c.slug === slug);
}
