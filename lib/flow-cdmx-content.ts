import type { CauseEntry, FlowSiteCopy, PartnerEntry, ProfileEntry, TicketTier } from "./flow-cdmx-site";

const TICKETS_COMING_SOON = "#registro-boletos";

export const partnersShared: Omit<PartnerEntry, "description">[] = [
  {
    name: "ROVE Collective",
    logo: "/flow-cdmx-assets/ROVE LOGOS/1.png",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/rovecollective/" },
      { label: "flowvallarta.com", href: "https://www.flowvallarta.com/" },
    ],
  },
  {
    name: "The Box Collective",
    logo: "/flow-cdmx-assets/The box Collective LOGOS/1.png",
    links: [],
  },
  {
    name: "Ermantourage",
    logo: "/flow-cdmx-assets/ERMANTOURAGE LOGOS/1.png",
    links: [],
  },
  {
    name: "Flow Vallarta",
    logo: "/flow-cdmx-assets/FLOW VALLARTA LOGOS/1.png",
    links: [{ label: "flowvallarta.com", href: "https://www.flowvallarta.com/" }],
  },
  {
    name: "Festival de Cine Consciente",
    logo: "/flow-cdmx-assets/festival de Cine Consciente LOGOS.png",
    links: [],
  },
  {
    name: "Yelapa Foundation",
    logo: "/flow-cdmx-assets/Yelapa Foundation LOGOS.png",
    links: [],
  },
  {
    name: "FlowBond",
    logo: "/flow-cdmx-assets/FlowBond LOGOS/1.png",
    links: [{ label: "flowbond.app", href: "https://flowbond.app" }],
  },
  {
    name: "DANZ",
    logo: "/flow-cdmx-assets/Danz LOGOS/1.png",
    links: [{ label: "danz.now", href: "https://danz.now" }],
  },
];

export const partnersEs: PartnerEntry[] = partnersShared.map((p, i) => {
  const descriptions: Record<number, string> = {
    0: "Plataforma de arte y comunidad que une creatividad, bienestar e impacto social a través de experiencias en vivo. Ha colaborado con más de 1.000 artistas y organizaciones como Women in Music, NAMI West LA y The Trevor Project.",
    1: "Ecosistema creativo e incubadora que conecta artistas, emprendedores e innovadores en música, arte, medios, bienestar y tecnología — de Los Ángeles a la Ciudad de México.",
    2: "Red internacional de networking y comunidad cinematográfica con eventos en grandes ciudades y un enfoque en conectar historias y profesionales del entretenimiento.",
    3: "Comunidad en Puerto Vallarta dedicada a experiencias, cultura consciente y retiros; proyectos como Spark Your Flow Fest y la Fiesta del Cacao Vallarta.",
    4: "Plataforma cultural itinerante que une cine, sostenibilidad y comunidad para fomentar consciencia ecológica, transformación social y sanación colectiva.",
    5: "Organización dedicada a proteger y honrar el planeta Tierra mediante proyectos culturales y regenerativos dentro de comunidades indígenas, comenzando en Yelapa.",
    6: "Infraestructura social y cultural para activar colaboración, tecnología y comunidad con propósito.",
    7: "Protocolo social en movimiento que integra música, cuerpo y presencia colectiva.",
  };
  return { ...p, description: descriptions[i] ?? "" };
});

export const partnersEn: PartnerEntry[] = partnersShared.map((p, i) => {
  const descriptions: Record<number, string> = {
    0: "An arts and community platform bridging creativity, wellness, and social impact through live experiences — from GRAMMY Week to grassroots pop-ups.",
    1: "A creative ecosystem connecting artists, entrepreneurs, and innovators across music, art, media, wellness, and technology — now active from LA to CDMX.",
    2: "A global film-and-community network hosting industry-facing experiences across major cities, built for storytellers who move culture.",
    3: "A Puerto Vallarta-rooted community helping people find their flow through experiences, culture, and retreats across the region.",
    4: "A traveling cultural platform uniting cinema, sustainability, and community — built for ecological awareness and collective healing.",
    5: "A foundation protecting Planet Earth through culturally rooted, regenerative projects within Indigenous communities — starting in Yelapa.",
    6: "Social infrastructure for purpose-driven collaboration across culture and technology.",
    7: "A movement protocol weaving music, embodiment, and collective presence.",
  };
  return { ...p, description: descriptions[i] ?? "" };
});

export const copyEs: FlowSiteCopy = {
  metaTitle: "FLOW CDMX — 30 de abril, Huerto Roma Verde",
  nav: { labelEs: "Español", labelEn: "English", hrefEs: "/", hrefEn: "/sundance-mexico-city" },
  sections: {
    about: "Evento",
    aliados: "Aliados",
    equipo: "Equipo",
    artistas: "Artistas",
    causa: "Impacto",
    tickets: "Boletos",
  },
  hero: {
    kicker: "30 de abril · Huerto Roma Verde · CDMX",
    title: "Un día de flujo.",
    lead: "Cine, música, bienestar y comunidad consciente.",
    cta: "Supporter Pass VIP — $777",
    ctaSecondary: { label: "Ver programa", href: "#programa" },
  },
  about: {
    kicker: "Sobre FLOW",
    title: "Un encuentro cultural de día y noche",
    paragraphs: [
      "FLOW reúne a cineastas, artistas, músicos, emprendedores y líderes culturales en una experiencia inmersiva de día y noche. Proyecciones, paneles, DJs, círculo de cacao, breathwork y Ecstatic DANZ — curados para elevar el movimiento creativo de México en un escenario global.",
    ],
    alliance: {
      prefix: "En alianza con",
      orgs: ["Yelapa Foundation", "Festival de Cine Consciente"],
    },
    badges: ["Cine", "Música", "Bienestar", "Comunidad"],
  },
  partnersTitle: "Aliados y organizaciones",
  partnersSubtitle: "Quienes hacen posible esta experiencia.",
  teamTitle: "Equipo principal",
  artistsTitle: "Artistas y panelistas",
  causeTitle: "Causa e impacto",
  causeSubtitle: "Parte de lo recaudado apoya a estas organizaciones.",
  ticketsTitle: "Boletos",
  ticketsLead: "Precios en pesos mexicanos (MXN). Cupo limitado.",
  ticketsFootnote:
    "Estamos levantando una lista de interés para contacto y recaudación previa. En cuanto el checkout esté listo, conectaremos esta sección a la compra directa.",
  footer: {
    line1: "30 de abril · Huerto Roma Verde · CDMX",
    rights: "© 2026 FlowNation · cdmx.flownation.world",
  },
};

export const copyEn: FlowSiteCopy = {
  metaTitle: "FLOW CDMX — Sundance Mexico City Side Experience",
  nav: { labelEs: "Español", labelEn: "English", hrefEs: "/", hrefEn: "/sundance-mexico-city" },
  sections: {
    about: "Experience",
    aliados: "Partners",
    equipo: "Team",
    artistas: "Artists",
    causa: "Impact",
    tickets: "Tickets",
  },
  hero: {
    kicker: "April 30 · Huerto Roma Verde · Mexico City",
    title: "FLOW CDMX",
    lead: "A curated cultural side experience during Sundance CDMX week — film, music, wellness, and community in one immersive day and night at Huerto Roma Verde.",
    cta: "Get tickets",
    ctaSecondary: { label: "Versión en español", href: "/" },
  },
  about: {
    kicker: "Sundance Mexico City",
    title: "Film, music, and conscious culture — built for connection",
    paragraphs: [
      "FLOW CDMX is an independent cultural gathering running parallel to Sundance CDMX — celebrating the future of film, creativity, and conscious culture in Mexico. On April 30, Huerto Roma Verde becomes a meeting ground for filmmakers, artists, media, musicians, wellness leaders, founders, and cultural producers for a fully immersive day-to-night experience.",
      "Expect screenings, recorded conversations, live interviews, music, DJs, and community-led moments — including panels, a cacao circle, breathwork, Ecstatic DANZ, and FlowBond activations. The tone is intimate, elevated, and human: less “conference,” more living room for culture.",
      "The positioning is creativity, consciousness, and collaboration — a platform that highlights emerging voices, strengthens cross-border connections (Mexico, the US, and beyond), and creates meaningful opportunities for sponsors, media, and partners who care about high-trust audiences.",
      "A portion of the gathering supports Yelapa Foundation and Festival de Cine Consciente — initiatives focused on social impact, storytelling, and community-forward culture.",
    ],
    badges: ["Film", "Music", "Wellness", "Community", "Technology"],
  },
  partnersTitle: "Partners & organizations",
  partnersSubtitle: "The network behind the experience.",
  teamTitle: "Core team",
  artistsTitle: "Artists & panelists",
  causeTitle: "Cause & impact",
  causeSubtitle: "Organizations we’re supporting through this event.",
  ticketsTitle: "Tickets",
  ticketsLead: "Pricing in Mexican Pesos (MXN). Limited capacity.",
  ticketsFootnote:
    "To purchase or request an invoice, email events@flownation.world. A secure online checkout link will be added here as soon as it’s live.",
  footer: {
    line1: "April 30 · Huerto Roma Verde · Mexico City",
    rights: "© 2026 FlowNation · cdmx.flownation.world",
  },
};

export const causesEs: CauseEntry[] = [
  {
    title: "Yelapa Foundation",
    body: "Proteger y honrar el planeta Tierra a través de proyectos culturales y regenerativos dentro de comunidades indígenas, con un enfoque que parte de Yelapa y busca expandirse con modelos replicables de bienestar holístico y soberanía cultural.",
  },
  {
    title: "Festival de Cine Consciente",
    body: "Una plataforma cultural itinerante que une cine, sostenibilidad y comunidad. Su octava edición será en noviembre en la Ciudad de México — una invitación a sanación colectiva y conciencia socioambiental a través del cine.",
  },
];

export const causesEn: CauseEntry[] = [
  {
    title: "Yelapa Foundation",
    body: "Protecting and honoring Planet Earth through cultural and regenerative projects within Indigenous communities — beginning in Yelapa with the intention to grow globally.",
  },
  {
    title: "Festival de Cine Consciente",
    body: "A traveling cultural platform uniting cinema, sustainability, and community. The 8th edition takes place in November in Mexico City — cinema as a catalyst for ecological awareness and collective care.",
  },
];

export const ticketsEs: TicketTier[] = [
  {
    name: "General · Preventa",
    priceLabel: "$333 MXN",
    description: "Acceso al día completo de programación en Huerto Roma Verde. Ideal para vivir el encuentro con ritmo propio.",
    ctaLabel: "Link de boletos coming soon",
    ctaHref: TICKETS_COMING_SOON,
  },
  {
    name: "General · Puerta",
    priceLabel: "$400 MXN",
    description: "Mismo acceso; compra en sitio el día del evento.",
    ctaLabel: "Link de boletos coming soon",
    ctaHref: TICKETS_COMING_SOON,
  },
  {
    name: "Supporter Pass VIP · Preventa",
    priceLabel: "$777 MXN",
    description:
      "Incluye bebidas en el evento y apoya de forma directa la producción y el impacto social del encuentro. Experiencia ampliada para quienes quieren estar más cerca del proyecto.",
    featured: true,
    featuredBadge: "Bebidas incluidas",
    ctaLabel: "Link de boletos coming soon",
    ctaHref: TICKETS_COMING_SOON,
  },
  {
    name: "Supporter Pass VIP · Puerta",
    priceLabel: "$850 MXN",
    description: "VIP en compra en sitio el día del evento, sujeto a disponibilidad.",
    ctaLabel: "Link de boletos coming soon",
    ctaHref: TICKETS_COMING_SOON,
  },
];

export const ticketsEn: TicketTier[] = [
  {
    name: "General admission",
    priceLabel: "$333 MXN",
    description: "Full-day access to programming at Huerto Roma Verde — screenings, conversations, music, and community moments.",
    ctaLabel: "Ticket link coming soon",
    ctaHref: TICKETS_COMING_SOON,
  },
  {
    name: "Supporter pass",
    priceLabel: "$777 MXN",
    description:
      "Includes drinks at the event and directly supports production and social impact. For guests who want to go deeper and help the project scale with intention.",
    featured: true,
    featuredBadge: "Drinks included",
    ctaLabel: "Ticket link coming soon",
    ctaHref: TICKETS_COMING_SOON,
  },
];

const img = {
  michelle: "/flow-cdmx-assets/Michelle Young.png",
  steph: "/flow-cdmx-assets/Steph Ferrera.png",
  luna: "/flow-cdmx-assets/Luna Tamayo.png",
  haaz: "/flow-cdmx-assets/Haaz Rugerio (Tatewari).png",
  patricio: "/flow-cdmx-assets/Patricio Martinez.png",
  mariana: "/flow-cdmx-assets/Mariana-Garcia-Marians.png",
  celina: "/flow-cdmx-assets/Celina Kyle Wolf.png",
  erman: "/flow-cdmx-assets/Erman Baradi.png",
  emmanuel: "/flow-cdmx-assets/Emmanuel-Massu.png",
  crissy: "/flow-cdmx-assets/Crissy J.png",
};

export const teamEs: ProfileEntry[] = [
  {
    name: "Michelle Young",
    role: "Fundadora, ROVE Collective · Productora y marketer de experiencias",
    paragraphs: [
      "Michelle Young, fundadora de ROVE Collective y cofundadora de The Box Collective y Flow Vallarta, es una artista multidisciplinaria, productora y especialista en marketing con más de 18 años de experiencia en producción de festivales y más de 12 años en marketing experiencial.",
      "Ha trabajado con agencias y marcas como Refinery29, ENTER, VICE, Render Event Design, iheartcomix, A-OK Collective, Disney, YSL, Soho House, Rolling Stone, Amazon, entre otras.",
      "Ha producido activaciones de alto impacto en eventos como Coachella, Super Bowl, SXSW, GRAMMYs, NYFW, LAFW, CES y más, además de eventos como el Children’s Hospital Los Angeles Benefit Gala, que recaudó $5.5 millones de dólares en una sola noche. Es reconocida por su capacidad de liderar producciones complejas, integrar narrativa con ejecución y crear experiencias culturales de alto impacto.",
    ],
    image: img.michelle,
    links: [
      { label: "Sitio web", href: "http://michelleinflow.com" },
      { label: "Instagram · @michelleinflow", href: "https://www.instagram.com/michelleinflow/" },
    ],
  },
  {
    name: "Steph Ferrera",
    role: "Fundadora, FlowBond · Arquitecta social",
    paragraphs: [
      "Steph Ferrera es fundadora, arquitecta social y tecnóloga creativa enfocada en la intersección de tecnología, cultura y sistemas regenerativos.",
      "Es la creadora de FlowBond, una plataforma diseñada para transformar la presencia, el movimiento y la conexión humana en valor medible a través de nuevas infraestructuras digitales.",
      "Su trabajo se enfoca en el desarrollo de redes globales de experiencias, integrando tecnología, comunidad y cultura para generar sistemas de colaboración y regeneración a escala.",
      "A través de DANZ, impulsa una red de eventos donde la interacción humana se convierte en una capa activa de valor, conectando experiencias físicas con sistemas digitales. Colabora globalmente en el desarrollo de proyectos que integran identidad descentralizada, inteligencia artificial para la regeneración gamificando y experiencias en el mundo real, con el objetivo de construir nuevas formas de organización, conexión y expansión colectiva.",
    ],
    image: img.steph,
    links: [{ label: "Linktree · stepbystephBTM", href: "https://linktr.ee/stepbystephBTM" }],
  },
  {
    name: "Luna Tamayo",
    role: "Productora · Conductora · Locutora",
    paragraphs: [
      "Luna Tamayo es una artista multidisciplinaria, actriz, productora y locutora con una sólida trayectoria en medios, cine y artes escénicas.",
      "Licenciada en Artes Escénicas por la Universidad de Guadalajara, actualmente es productora y conductora de El Resplandor, CPS News y Radiante 98.3, además de creadora del pódcast Polytales.",
      "Ha participado como actriz en cortometrajes reconocidos en festivales como Shorts México y FICPV. Bilingüe en inglés y español, combina experiencia en producción, entrevistas, conducción de eventos y creación de narrativas para proyectos culturales y marcas. Luna es una de las figuras más dinámicas de la escena mediática actual en el occidente de México. Especialista en comunicación, producción y narrativa de impacto.",
    ],
    image: img.luna,
    links: [],
  },
  {
    name: "Haaz Rugerio (Tatewari)",
    role: "DJ · Productor · Director creativo",
    paragraphs: [
      "Haaz Rugerio (Tatewari) es un DJ y productor mexicano de música electrónica basado en la Ciudad de México.",
      "Apasionado del arte y la humanidad. Es director creativo de Sexico City Camp en AfrikaBurn y productor de eventos enfocado en crear experiencias inmersivas, con especial interés en el diseño de iluminación como elemento central.",
    ],
    image: img.haaz,
    links: [],
  },
  {
    name: "Patricio Martínez",
    role: "Documentalista · Cinefotógrafo",
    paragraphs: [
      "Patricio Martínez es un documentalista, cinefotógrafo y narrador visual radicado en Ciudad de México, cuyo trabajo explora el territorio, la memoria, la identidad y la relación entre las comunidades y la tierra que habitan.",
      "Con formación en fotografía y artes visuales, ha colaborado con organizaciones y medios como National Geographic, The Washington Post, NPR, CNBC, The New York Times y las Naciones Unidas.",
      "Su aclamado proyecto RIVUS: El Último Río Vivo documenta el rescate y la preservación del último río vivo de la Ciudad de México, llevando atención urgente a temas de agua, ecología y conservación liderada por las comunidades.",
    ],
    image: img.patricio,
    links: [
      { label: "Sitio web", href: "https://www.patriciomtz.com" },
      { label: "Instagram · @patriciomtz", href: "https://www.instagram.com/patriciomtz/" },
    ],
  },
  {
    name: "Mariana García (Márians)",
    role: "Productora · DJ · Creadora de experiencias",
    paragraphs: [
      "Productora, DJ y creadora de experiencias enfocadas en arte, música y experiencia humana.",
      "Ha trabajado en destinos como Careyes y Cuixmala, produciendo eventos de alto nivel para figuras internacionales, marcas y comunidades creativas.",
      "Su enfoque integra estética, logística y presencia, diseñando espacios donde el arte y el cuerpo generan conexión real.",
    ],
    image: img.mariana,
    links: [{ label: "Sitio web · marians.mx", href: "https://marians.mx/es" }],
  },
  {
    name: "Celina Kyle Wolf",
    role: "Productora de moda y experiencias",
    paragraphs: [
      "Productora de moda y experiencias con más de 17 años de trayectoria trabajando con marcas globales como Dior, Versace, Oscar de la Renta y Vogue.",
      "Integra estética, sostenibilidad y ejecución de alto nivel en proyectos culturales y de moda.",
    ],
    image: img.celina,
    links: [],
  },
  {
    name: "Erman Baradi",
    role: "Cineasta · Fundador, Ermantourage",
    paragraphs: [
      "Cineasta, emprendedor y fundador de Ermantourage, enfocado en conectar personas a través del storytelling y experiencias globales.",
      "Ha producido eventos en múltiples ciudades internacionales y ha desarrollado plataformas que conectan industria, comunidad y cultura.",
    ],
    image: img.erman,
    links: [{ label: "Instagram · @ermanbaradi", href: "https://www.instagram.com/ermanbaradi/" }],
  },
];

export const teamEn: ProfileEntry[] = teamEs.map((m) => {
  const en: Record<string, ProfileEntry> = {
    "Michelle Young": {
      ...m,
      role: "Founder, ROVE Collective · Producer & experiential marketer",
      paragraphs: [
        "Michelle is the founder of ROVE Collective and co-founder of The Box Collective. She’s a multidisciplinary artist and producer with 18+ years in festivals and 12+ years in experiential marketing — with agencies and brands spanning Refinery29, VICE, Render Event Design, iheartcomix, and A-OK Collective.",
        "She’s produced high-impact activations around Coachella, Super Bowl, SXSW, GRAMMYs, NYFW, LAFW, CES, VR Fest, and more — connecting flawless logistics with emotional storytelling, from launch campaigns to VIP press and talent experiences.",
        "Through ROVE, she builds arts-driven events with social impact alongside organizations like NAMI WLA, The Trevor Project, Saving Innocence, and Women in Music. Based in Puerto Vallarta with a growing footprint in Mexico City and the US, she’s focused on binational collaboration with global taste.",
      ],
    },
    "Steph Ferrera": {
      ...m,
      role: "Founder, FlowBond · Social architect",
      paragraphs: [
        "Creator of FlowBond — a platform focused on technology, culture, and regenerative systems. Her work connects community, art, and digital tools with real-world outcomes rather than empty hype.",
        "She advances DANZ as a social-in-motion protocol: a contemporary way to gather body, music, and collective presence.",
      ],
    },
    "Luna Tamayo": {
      ...m,
      role: "Producer · Host · Voice talent",
      paragraphs: [
        "A multidisciplinary artist at the intersection of performance and mass communication — trained in Performing Arts at Universidad de Guadalajara.",
        "She’s a core voice in broadcast: producer and host for El Resplandor (radio with simultaneous TV), host for CPS News on Tv Mar, and voice talent on Radiante 98.3. Creator of the Polytales podcast.",
        "Her on-camera work includes award-recognized short films; she’s trained across contemporary and African dance, advanced acting, and clown — with advanced English (Cambridge C2) for international collaborations.",
      ],
    },
    "Haaz Rugerio (Tatewari)": {
      ...m,
      role: "DJ · Producer · Creative director",
      paragraphs: [
        "Electronic music DJ and producer with a focus on immersive experiences and lighting design — creative director of Sexico City Camp at AfrikaBurn.",
        "His practice bridges dancefloor, stage, and atmosphere: building sonic and visual worlds you don’t just watch — you enter.",
      ],
    },
    "Patricio Martínez": {
      ...m,
      role: "Documentary filmmaker · Cinematographer",
      paragraphs: [
        "Published work includes National Geographic, The Washington Post, The New York Times, and UN agencies. Creator of RIVUS — cinema of territory, memory, and environmental urgency.",
        "His lens pairs journalistic rigor with cinematic sensitivity — images in service of truth and beauty at once.",
      ],
    },
    "Mariana García (Márians)": {
      ...m,
      role: "Producer · DJ · Experience designer",
      paragraphs: [
        "She produces events in rare destinations like Careyes and Cuixmala — integrating aesthetics, logistics, and hospitality for global figures and brands.",
        "Her work lives at the intersection of art, music, and human experience: atmospheres where the body leads and presence becomes possible — as DJ, multidisciplinary artist, and cultural producer.",
      ],
    },
    "Celina Kyle Wolf": {
      ...m,
      role: "Fashion & experience producer",
      paragraphs: [
        "17+ years across logistics, creative direction, and production for runways, editorial campaigns, fashion films, and brand experiences — from NYFW/LFW to Dior Cruise 2023 in Mexico.",
        "Collaborations include Oscar de la Renta, Versace, Michael Kors, Tory Burch, Vogue México & LATAM, and more — blending aesthetics, sustainability, and flawless execution. Fluent in Spanish, English, French, and Italian.",
      ],
    },
    "Erman Baradi": {
      ...m,
      role: "Filmmaker · Founder, Ermantourage",
      paragraphs: [
        "Virginia Beach born, Hollywood raised. Founder of Ermantourage — a career built around bringing people together through story. Named a “Top Networker in Hollywood” by The Huffington Post at 26.",
        "He’s produced industry-facing experiences across Los Angeles, New York, London, Miami, Toronto, and beyond — film, community, and conversation as doorways.",
      ],
    },
  };
  return en[m.name] ?? m;
});

export const artistsEs: ProfileEntry[] = [
  {
    name: "Emmanuel Massú aka El Chilo del Trapteño",
    role: "Cineasta · Cantautor · Rapero",
    paragraphs: [
      "Cineasta, Cantautor y Rapero Sinaloense, nacido en Culiacán, Sinaloa; con 19 años en el medio se ha abierto paso en la industria musical fusionado el hip hop con paisajes sonoros del norte de México, creando así el Trapteño.",
      "Como cineaste, hizo un documental que se llama Los Plebes. En 2018 dio a luz este cortometraje junto al cineasta Eduardo Giral, mostrando una realidad alejada del lujo y glamour: la vida de un grupo de sicarios adolescentes, sus aspiraciones y su contexto inmediato.",
      "El documental ganó Selección Ahora México en FICUNAM 2021 y ha sido distribuido con el apoyo de Cine Buró y Vice Media.",
    ],
    image: img.emmanuel,
    links: [],
  },
  {
    name: "Crissy J",
    role: "Artista · Violinista · DJ",
    paragraphs: [
      "Artista, violinista y DJ multi-género, curadora y activista enfocada en la conciencia y la conexión a través de la música.",
      "Ha participado en escenarios internacionales y ha creado experiencias innovadoras que combinan música, arte, comunidad y sanación.",
    ],
    image: img.crissy,
    links: [
      { label: "Sitio web", href: "https://mscrissyj.com/" },
      { label: "Instagram · @mscrissyj", href: "https://www.instagram.com/mscrissyj/" },
    ],
  },
];

export const artistsEn: ProfileEntry[] = [
  {
    name: "Emmanuel Massú aka El Chilo del Trapteño",
    role: "Filmmaker · Singer-songwriter · Rapper",
    paragraphs: [
      "Nearly two decades in the industry fusing hip hop with the sonic landscapes of northern Mexico — forging Trapteño as both sound and story with regional roots and global ambition.",
      "His documentary Los Plebes was a FICUNAM 2021 Selección Ahora México pick and distributed via Vice Media — cinema that speaks from the territory with truth and style.",
    ],
    image: img.emmanuel,
    links: [],
  },
  {
    name: "Crissy J",
    role: "Artist · Violinist · DJ",
    paragraphs: [
      "A Caribbean-American multi-genre violinist/DJ, curator, activist, and educator — from Carnegie Hall to the GRAMMYs, redefining what live performance can mean in community.",
      "Her #UnifyTheUniverse movement invites people across worlds to gather under music’s universal language — healing-forward, culture-forward, stage-forward.",
    ],
    image: img.crissy,
    links: [
      { label: "Website", href: "https://mscrissyj.com/" },
      { label: "Instagram · @mscrissyj", href: "https://www.instagram.com/mscrissyj/" },
    ],
  },
];
