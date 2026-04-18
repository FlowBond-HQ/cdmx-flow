export type FlowStep = {
  title: string;
  description: string;
};

export type SponsorTier = {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
};

export const flowSteps: FlowStep[] = [
  {
    title: "Sponsors define missions",
    description: "Brands set clear call-to-actions aligned with campaign objectives.",
  },
  {
    title: "Attendees complete actions",
    description: "Social interactions, wallet actions, in-person touchpoints, and content creation.",
  },
  {
    title: "Rewards unlock",
    description: "Drinks, food, merch, and premium access are activated through participation.",
  },
  {
    title: "Engagement data is captured",
    description: "FlowBond tracks participation and outcomes for measurable sponsor impact.",
  },
];

export const globalCities: string[] = [
  "Buenos Aires",
  "Austin",
  "Tulum",
  "Bali",
  "New York City",
  "Miami",
  "Ciudad de México",
  "Puerto Vallarta",
];

export const sponsorTiers: SponsorTier[] = [
  {
    name: "FLOWNATION PARTNER",
    price: "$30,000 USD / 600,000 MXN",
    featured: true,
    features: [
      "Primary logo placement",
      "PR and media presence",
      "Banners and branding",
      "Custom content production",
      "Merch integration",
      "5 missions (call-to-actions)",
      "Full FlowBond integration",
      "Engagement analytics",
      "Ecosystem positioning across FlowNation",
    ],
  },
  {
    name: "FLOW PARTNER",
    price: "$10,000 USD / 200,000 MXN",
    features: [
      "Logo placement and mentions",
      "Stage presence (up to 30 min)",
      "Content production",
      "3 missions",
      "Integration into reward system",
      "Audience engagement tools",
    ],
  },
  {
    name: "SPARK PARTNER",
    price: "$1,000 USD / 20,000 MXN",
    features: ["Logo placement", "Mentions", "1 banner or stand", "Content inclusion", "1 mission"],
  },
  {
    name: "LOCAL / MISSION PARTNER",
    price: "$5,000 MXN",
    features: [
      "Inclusion in mission system",
      "1 call-to-action",
      "Local activation presence",
      "Visibility within event ecosystem",
    ],
  },
];
