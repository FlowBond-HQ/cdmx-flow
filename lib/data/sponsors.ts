export type SponsorTier = {
  id: 'spark' | 'flow' | 'movement';
  name: string;
  priceUSD: number;
  priceMXN: number;
  tagline: string;
  benefits: string[];
  highlighted?: boolean;
  cta: string;
};

export const sponsorTiers: SponsorTier[] = [
  {
    id: 'spark',
    name: 'Spark',
    priceUSD: 1000,
    priceMXN: 20000,
    tagline: 'Presencia curada en el evento',
    benefits: [
      'Logo en el sitio web',
      'Logo en impresos del evento',
      'Menciones en redes del colectivo',
      'Acceso para 2 personas',
    ],
    cta: 'Aplicar como Spark',
  },
  {
    id: 'flow',
    name: 'Flow',
    priceUSD: 10000,
    priceMXN: 200000,
    tagline: 'Activación con voz propia',
    benefits: [
      'Todo lo de Spark',
      '5 minutos en escenario principal',
      'Activación o stand en sitio',
      'Producción de contenido (foto + video)',
      'Logo destacado en todos los materiales',
      'Acceso para 6 personas',
    ],
    highlighted: true,
    cta: 'Aplicar como Flow',
  },
  {
    id: 'movement',
    name: 'Movement',
    priceUSD: 30000,
    priceMXN: 600000,
    tagline: 'Partner estratégico del flow',
    benefits: [
      'Todo lo de Flow',
      '15 minutos en escenario principal',
      'Producción de contenido premium',
      'Prioridad en roadmap 2026: NYC, LA, Bogotá, Miami',
      'Co-branding en comunicación clave',
      'Acceso VIP ilimitado',
    ],
    cta: 'Conversemos',
  },
];
