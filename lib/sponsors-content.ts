export type SponsorsTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export type SponsorsMagazinePackage = {
  title: string;
  bullets: string[];
};

export type SponsorsCopy = {
  lang: "es" | "en";
  alternateHref: string;
  alternateLabel: string;
  metaTitle: string;
  heroEyebrow: string;
  heroTitle: string;
  introParagraphs: string[];
  benefitsParagraph: string;
  internationalTitle: string;
  internationalTiers: SponsorsTier[];
  nationalTitle: string;
  nationalTiers: SponsorsTier[];
  magazineSectionTitle: string;
  magazineIntro: string;
  magazineAdsNote: string;
  adRatesTitle: string;
  adRates: { label: string; price: string }[];
  magazinePackagesTitle: string;
  magazinePackages: SponsorsMagazinePackage[];
  sponsoredFeatureTitle: string;
  sponsoredFeaturePrice: string;
  sponsoredFeatureBullets: string[];
  vendorsEyebrow: string;
  vendorsTitle: string;
  vendorsIntro: string;
  vendorRatesTitle: string;
  vendorRates: { label: string; price: string }[];
  vendorIncludesTitle: string;
  vendorIncludes: string[];
  vendorAddOnsNote: string;
  closingTitle: string;
  closingBody: string;
  formTitle: string;
  formLead?: string;
  formSuccess: string;
  formSending: string;
  formSubmitError: string;
  formLabels: {
    name: string;
    email: string;
    brand: string;
    description: string;
    bringing: string;
    website: string;
    social: string;
    contact: string;
    submit: string;
  };
  ctaTiers: string;
  ctaContact: string;
  finalEyebrow: string;
  finalTitle: string;
  finalBody: string;
  finalCtaSponsor: string;
  finalCtaEmail: string;
  includesLabel: string;
};

export const sponsorsCopyEs: SponsorsCopy = {
  lang: "es",
  alternateHref: "/sponsors/english",
  alternateLabel: "English version",
  metaTitle: "Patrocinios · Flow CDMX",
  heroEyebrow: "Flow CDMX · Sundance CDMX",
  heroTitle: "Patrocina Flow CDMX Durante la Semana de Sundance Film Festival CDMX",
  introParagraphs: [
    "Flow CDMX es una experiencia cultural paralela al mundo del cine que se llevará a cabo el 30 de abril en Ciudad de México durante la semana de Sundance CDMX.",
    "Reuniremos a cineastas, artistas, músicos, líderes de bienestar, emprendedores, medios y marcas conscientes para una experiencia de un día enfocada en creatividad, conexión y cultura.",
    "Al patrocinar Flow CDMX, tu marca no solo está apoyando un evento: está alineándose con un ecosistema internacional que conecta CDMX, Austin, Los Ángeles, Puerto Vallarta, Tulum, Guadalajara, Lisboa y más.",
    "También queremos fomentar más intercambio cultural y turismo consciente dentro de México, invitando a colaboradores, artistas, marcas, medios y líderes creativos de distintas partes del país (y del mundo) a participar, conectar y construir juntos.",
  ],
  benefitsParagraph:
    "Los patrocinadores reciben una combinación de visibilidad durante el evento, presencia en revista, storytelling digital, promoción en redes sociales y acceso a una comunidad altamente curada.",
  internationalTitle: "Oportunidades de Patrocinio",
  internationalTiers: [
    {
      name: "Presenting Partner",
      price: "$30,000 USD",
      description: "Nuestro nivel más alto de patrocinio. Ideal para grandes marcas internacionales, grupos hoteleros, empresas de wellness, marcas de lujo, turismo, medios y marcas de consumo alineadas.",
      featured: true,
      features: [
        'Naming rights como “Presented by”',
        "Presencia premium de logo en sitio web, señalética, gráficos, página de patrocinadores y materiales de recapitulación",
        "Activación o presencia de marca en el evento",
        "Integración en escenario o programación, cuando sea apropiado",
        "Página completa en la revista",
        "Artículo destacado en la revista",
        "Publicación del artículo en nuestro blog",
        "Promoción dedicada en redes sociales",
        "Entradas VIP",
        "Inclusión de producto en gifting o experiencias especiales",
        "Prioridad para futuras colaboraciones con Flow y The Box Collective",
      ],
    },
    {
      name: "Official Partner",
      price: "$10,000 USD",
      description:
        "Para marcas que buscan fuerte visibilidad, oportunidades de contenido y presencia relevante en el evento.",
      features: [
        "Presencia destacada de logo en sitio web, señalética, página de patrocinadores y materiales del evento",
        "Activación o presencia de marca en el evento",
        "Reconocimiento verbal como partner oficial",
        "Página completa en la revista",
        "Artículo destacado en la revista",
        "Publicación del artículo en nuestro blog",
        "Promoción dedicada en redes sociales",
        "Entradas VIP",
        "Inclusión de producto en gifting o experiencias especiales",
      ],
    },
    {
      name: "Supporting Partner",
      price: "$5,000 USD",
      description:
        "Perfecto para hoteles boutique, marcas de wellness, moda, agencias creativas, restaurantes, belleza y lifestyle.",
      features: [
        "Presencia de logo en sitio web, página de patrocinadores y señalética",
        "Presencia de marca o mesa de activación, si aplica",
        "Página completa en la revista",
        "Una mención destacada en redes sociales",
        "Inclusión en publicaciones de agradecimiento a patrocinadores",
        "Entradas al evento",
      ],
    },
    {
      name: "Community Partner",
      price: "$1,000 USD",
      description:
        "Una opción simple y accesible para marcas internacionales más pequeñas y negocios alineados que quieren apoyar el evento y formar parte de la experiencia.",
      features: [
        "Nombre o logo en la página de patrocinadores",
        "Inclusión en señalética seleccionada",
        "Página completa en la revista",
        "Una mención en redes sociales",
        "2 entradas al evento",
        "Opción de incluir producto o sampling, si el espacio lo permite",
      ],
    },
  ],
  nationalTitle: "Oportunidades de Patrocinio Nacional",
  nationalTiers: [
    {
      name: "Impact Partner",
      price: "$10,000 MXN",
      description: "Nuestro nivel más alto de patrocinio local.",
      features: [
        "Presencia destacada en la página de patrocinadores",
        "Mayor visibilidad de logo en señalética y materiales locales",
        "Página completa en la revista",
        "Artículo destacado en la revista",
        "Publicación del artículo en nuestro blog",
        "Spotlight dedicado en redes sociales",
        "Inclusión de flyer, oferta o producto",
        "2 entradas al evento",
        "Posibilidad de mesa o presencia física en el evento, si aplica",
      ],
    },
    {
      name: "Featured Partner",
      price: "$5,000 MXN",
      description:
        "Una gran opción para negocios locales, restaurantes, boutiques, marcas de wellness y organizaciones comunitarias.",
      features: [
        "Inclusión en la página de patrocinadores",
        "Media página en la revista",
        "Al menos una mención en redes sociales",
        "Inclusión en publicaciones de agradecimiento a patrocinadores",
        "Inclusión de flyer, cupón o producto, si aplica",
        "2 entradas al evento",
      ],
    },
    {
      name: "Amigx del Flow",
      price: "$2,500 MXN",
      description: "Una forma accesible de apoyar el evento y ser parte de la comunidad.",
      features: [
        "Nombre o logo en la página de patrocinadores",
        "Un cuarto de página en la revista",
        "Al menos una mención en redes sociales",
        "Opción de incluir flyer o cupón",
      ],
    },
  ],
  magazineSectionTitle: "Revista y Add-Ons de Storytelling Digital",
  magazineIntro:
    "Estamos creando una revista impresa y digital con arte, fotografía, poesía, entrevistas, perfiles de artistas, historias de marcas y contenido de comunidad. Los espacios publicitarios en la revista están disponibles como oportunidad independiente o como complemento a los paquetes de patrocinio.",
  magazineAdsNote:
    "Todos los anuncios en la revista incluyen visibilidad digital o presencia en nuestro sitio web.",
  adRatesTitle: "Tarifas de Anuncios",
  adRates: [
    { label: "Cuarto de Página", price: "$350 MXN" },
    { label: "Media Página", price: "$550 MXN" },
    { label: "Página Completa", price: "$1,000 MXN" },
    { label: "Página Completa del otro lado de las portadas", price: "$1,250 MXN" },
    { label: "Contraportada", price: "$1,750 MXN" },
  ],
  magazinePackagesTitle: "Paquetes de revista",
  magazinePackages: [
    {
      title: "Cuarto de Página",
      bullets: [
        "Un cuarto de página en la revista",
        "Inclusión en la página de patrocinadores o colaboradores en el sitio web",
      ],
    },
    {
      title: "Media Página",
      bullets: ["Media página en la revista", "Inclusión en sitio web", "Una mención en historias de Instagram"],
    },
    {
      title: "Página Completa",
      bullets: ["Página completa en la revista", "Inclusión en sitio web", "Una mención en redes sociales"],
    },
    {
      title: "Contraportada",
      bullets: ["Contraportada en la revista", "Inclusión en sitio web", "Spotlight destacado en redes sociales"],
    },
  ],
  sponsoredFeatureTitle: "Sponsored Feature",
  sponsoredFeaturePrice: "$2,500 MXN",
  sponsoredFeatureBullets: [
    "Entrevista o historia escrita",
    "Publicación en la revista",
    "Publicación en el blog",
    "Promoción en redes sociales",
  ],
  vendorsEyebrow: "Vendors",
  vendorsTitle: "Oportunidades para Vendors y Mercado",
  vendorsIntro:
    "También contamos con espacios limitados para vendors, marcas, artistas, food vendors y pequeños negocios alineados.",
  vendorRatesTitle: "Tarifas para Vendors",
  vendorRates: [
    { label: "Mesa Básica", price: "$1,500 MXN" },
    { label: "Mesa Premium", price: "$3,000 MXN" },
    { label: "Vendor de Comida / Bebida", price: "$5,000 MXN" },
  ],
  vendorIncludesTitle: "Incluye",
  vendorIncludes: [
    "Inclusión en listado o página de vendors",
    "Al menos una mención en redes sociales",
    "Oportunidad de aparecer en mapa o guía de vendors",
  ],
  vendorAddOnsNote:
    "Los add-ons opcionales pueden incluir electricidad, mobiliario extra, menciones adicionales en redes o ubicación premium.",
  closingTitle: "Construyamos Algo Significativo Juntos",
  closingBody:
    "Actualmente estamos confirmando patrocinadores, vendors, colaboradores y partners comunitarios para el 30 de abril. Si te interesa explorar un patrocinio, activación personalizada o alianza de medios, nos encantaría conectar.",
  formTitle: "Solicitud de información",
  formLead: "Cuéntanos sobre tu marca o proyecto. Te respondemos por correo.",
  formSuccess: "Gracias. Recibimos tu mensaje y te contactaremos pronto.",
  formSending: "Enviando…",
  formSubmitError: "No se pudo enviar. Intenta de nuevo o escríbenos por correo.",
  formLabels: {
    name: "Nombre",
    email: "Correo electrónico",
    brand: "Marca / proyecto",
    description: "Descripción",
    bringing: "¿Qué te gustaría activar?",
    website: "Sitio web",
    social: "Redes sociales",
    contact: "Tel u otro contacto (opcional)",
    submit: "Enviar solicitud",
  },
  ctaTiers: "Ver niveles de patrocinio",
  ctaContact: "Contacto",
  finalEyebrow: "Flow CDMX",
  finalTitle: "Hablemos de tu participación",
  finalBody:
    "Cuéntanos sobre tu marca y cómo te gustaría integrarte en Flow CDMX durante la semana de Sundance CDMX.",
  finalCtaSponsor: "Ver patrocinios",
  finalCtaEmail: "Escríbenos",
  includesLabel: "Incluye",
};

export const sponsorsCopyEn: SponsorsCopy = {
  lang: "en",
  alternateHref: "/sponsors",
  alternateLabel: "Versión en español",
  metaTitle: "Sponsorship · Flow CDMX",
  heroEyebrow: "Flow CDMX · Sundance CDMX",
  heroTitle: "Sponsor Flow CDMX During Sundance Film Festival CDMX Week",
  introParagraphs: [
    "Flow CDMX is a cultural experience running parallel to the world of film, taking place on April 30 in Mexico City during Sundance CDMX week.",
    "We’re bringing together filmmakers, artists, musicians, wellness leaders, founders, media, and conscious brands for a one-day experience focused on creativity, connection, and culture.",
    "By sponsoring Flow CDMX, your brand isn’t only supporting an event — you’re aligning with an international ecosystem that connects CDMX, Austin, Los Angeles, Puerto Vallarta, Tulum, Guadalajara, Lisbon, and more.",
    "We also want to foster more cultural exchange and conscious tourism within Mexico, inviting collaborators, artists, brands, media, and creative leaders from across the country (and the world) to participate, connect, and build together.",
  ],
  benefitsParagraph:
    "Sponsors receive a combination of visibility during the event, magazine presence, digital storytelling, social promotion, and access to a highly curated community.",
  internationalTitle: "Sponsorship Opportunities",
  internationalTiers: [
    {
      name: "Presenting Partner",
      price: "$30,000 USD",
      description:
        "Our highest sponsorship tier. Ideal for major international brands, hotel groups, wellness companies, luxury brands, tourism, media, and aligned consumer brands.",
      featured: true,
      features: [
        'Naming rights as “Presented by”',
        "Premium logo presence on the website, signage, graphics, sponsor page, and recap materials",
        "Brand activation or presence at the event",
        "Integration on stage or in programming, when appropriate",
        "Full page in the magazine",
        "Featured article in the magazine",
        "Article published on our blog",
        "Dedicated social promotion",
        "VIP tickets",
        "Product inclusion in gifting or special experiences",
        "Priority for future collaborations with Flow and The Box Collective",
      ],
    },
    {
      name: "Official Partner",
      price: "$10,000 USD",
      description: "For brands seeking strong visibility, content opportunities, and meaningful presence at the event.",
      features: [
        "Prominent logo presence on the website, signage, sponsor page, and event materials",
        "Brand activation or presence at the event",
        "Verbal recognition as an official partner",
        "Full page in the magazine",
        "Featured article in the magazine",
        "Article published on our blog",
        "Dedicated social promotion",
        "VIP tickets",
        "Product inclusion in gifting or special experiences",
      ],
    },
    {
      name: "Supporting Partner",
      price: "$5,000 USD",
      description:
        "A strong fit for boutique hotels, wellness brands, fashion, creative agencies, restaurants, beauty, and lifestyle.",
      features: [
        "Logo presence on the website, sponsor page, and signage",
        "Brand presence or activation table, when applicable",
        "Full page in the magazine",
        "One featured social mention",
        "Inclusion in sponsor thank-you posts",
        "Event tickets",
      ],
    },
    {
      name: "Community Partner",
      price: "$1,000 USD",
      description:
        "A simple, accessible option for smaller international brands and aligned businesses that want to support the event and be part of the experience.",
      features: [
        "Name or logo on the sponsor page",
        "Inclusion on selected signage",
        "Full page in the magazine",
        "One social mention",
        "2 event tickets",
        "Option to include product or sampling, if space allows",
      ],
    },
  ],
  nationalTitle: "National Sponsorship Opportunities (Mexico)",
  nationalTiers: [
    {
      name: "Impact Partner",
      price: "$10,000 MXN",
      description: "Our highest local sponsorship tier.",
      features: [
        "Prominent placement on the sponsor page",
        "Greater logo visibility on signage and local materials",
        "Full page in the magazine",
        "Featured article in the magazine",
        "Article published on our blog",
        "Dedicated social spotlight",
        "Flyer, offer, or product inclusion",
        "2 event tickets",
        "Possible table or physical presence at the event, when applicable",
      ],
    },
    {
      name: "Featured Partner",
      price: "$5,000 MXN",
      description:
        "A great option for local businesses, restaurants, boutiques, wellness brands, and community organizations.",
      features: [
        "Inclusion on the sponsor page",
        "Half page in the magazine",
        "At least one social mention",
        "Inclusion in sponsor thank-you posts",
        "Flyer, coupon, or product inclusion, when applicable",
        "2 event tickets",
      ],
    },
    {
      name: "Amigx del Flow",
      price: "$2,500 MXN",
      description: "An accessible way to support the event and be part of the community.",
      features: [
        "Name or logo on the sponsor page",
        "Quarter page in the magazine",
        "At least one social mention",
        "Option to include a flyer or coupon",
      ],
    },
  ],
  magazineSectionTitle: "Magazine & Digital Storytelling Add-Ons",
  magazineIntro:
    "We’re producing a print and digital magazine with art, photography, poetry, interviews, artist profiles, brand stories, and community content. Ad space is available as a standalone opportunity or as an add-on to sponsorship packages.",
  magazineAdsNote: "All magazine ads include digital visibility or presence on our website.",
  adRatesTitle: "Ad Rates",
  adRates: [
    { label: "Quarter Page", price: "$350 MXN" },
    { label: "Half Page", price: "$550 MXN" },
    { label: "Full Page", price: "$1,000 MXN" },
    { label: "Full Page (inside front / opposite covers)", price: "$1,250 MXN" },
    { label: "Back Cover", price: "$1,750 MXN" },
  ],
  magazinePackagesTitle: "Magazine placements",
  magazinePackages: [
    {
      title: "Quarter Page",
      bullets: [
        "Quarter page in the magazine",
        "Inclusion on the sponsors or collaborators page on the website",
      ],
    },
    {
      title: "Half Page",
      bullets: ["Half page in the magazine", "Website inclusion", "One mention in Instagram stories"],
    },
    {
      title: "Full Page",
      bullets: ["Full page in the magazine", "Website inclusion", "One social mention"],
    },
    {
      title: "Back Cover",
      bullets: ["Back cover in the magazine", "Website inclusion", "Featured social spotlight"],
    },
  ],
  sponsoredFeatureTitle: "Sponsored Feature",
  sponsoredFeaturePrice: "$2,500 MXN",
  sponsoredFeatureBullets: [
    "Interview or written story",
    "Publication in the magazine",
    "Publication on the blog",
    "Social promotion",
  ],
  vendorsEyebrow: "Vendors",
  vendorsTitle: "Vendor & Market Opportunities",
  vendorsIntro:
    "We also have limited space for vendors, brands, artists, food vendors, and aligned small businesses.",
  vendorRatesTitle: "Vendor Rates",
  vendorRates: [
    { label: "Basic Table", price: "$1,500 MXN" },
    { label: "Premium Table", price: "$3,000 MXN" },
    { label: "Food / Beverage Vendor", price: "$5,000 MXN" },
  ],
  vendorIncludesTitle: "Includes",
  vendorIncludes: [
    "Inclusion on the vendor listing or page",
    "At least one social mention",
    "Opportunity to appear on a vendor map or guide",
  ],
  vendorAddOnsNote:
    "Optional add-ons can include power, extra furniture, additional social mentions, or premium placement.",
  closingTitle: "Let’s Build Something Meaningful Together",
  closingBody:
    "We’re currently confirming sponsors, vendors, collaborators, and community partners for April 30. If you’d like to explore sponsorship, a custom activation, or a media partnership, we’d love to connect.",
  formTitle: "Inquiry form",
  formLead: "Tell us about your brand or project. We will follow up by email.",
  formSuccess: "Thank you — we received your message and will be in touch soon.",
  formSending: "Sending…",
  formSubmitError: "Could not send. Try again or email us.",
  formLabels: {
    name: "Name",
    email: "Email",
    brand: "Brand / project",
    description: "Description",
    bringing: "What would you like to activate?",
    website: "Website",
    social: "Social links",
    contact: "Phone or other contact (optional)",
    submit: "Submit inquiry",
  },
  ctaTiers: "View sponsorship tiers",
  ctaContact: "Contact",
  finalEyebrow: "Flow CDMX",
  finalTitle: "Let’s talk about your role",
  finalBody:
    "Tell us about your brand and how you’d like to plug into Flow CDMX during Sundance CDMX week.",
  finalCtaSponsor: "View sponsorship",
  finalCtaEmail: "Email us",
  includesLabel: "Includes",
};
