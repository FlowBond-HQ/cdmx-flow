import type { CauseEntry, FlowSiteCopy, PartnerEntry, ProfileEntry, TicketTier } from "./flow-cdmx-site";

const MAIL_GENERAL =
  "mailto:events@flownation.world?subject=FLOW%20CDMX%20%E2%80%94%20Entrada%20general%20(MXN%20222)";
const MAIL_SUPPORTER =
  "mailto:events@flownation.world?subject=FLOW%20CDMX%20%E2%80%94%20Supporter%20pass%20(MXN%20777%20con%20bebidas)";

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
    links: [{ label: "flowbond.xyz", href: "https://flowbond.xyz" }],
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
    kicker: "30 de abril · Huerto Roma Verde · Ciudad de México",
    title: "FLOW CDMX",
    lead: "Un encuentro cultural paralelo a Sundance CDMX que celebra el futuro del cine, la creatividad y la cultura consciente en México — con proyecciones, paneles, música, bienestar y comunidad en un solo día.",
    cta: "Consigue tu lugar",
    ctaSecondary: { label: "Versión internacional (EN)", href: "/sundance-mexico-city" },
  },
  about: {
    kicker: "Sobre el evento",
    title: "Un día completo de cine, música y cultura consciente",
    paragraphs: [
      "Este evento está concebido como un encuentro cultural paralelo a Sundance CDMX que celebra el futuro del cine, la creatividad y la cultura consciente en México. Tendrá lugar en Huerto Roma Verde el 30 de abril y reunirá a cineastas, artistas, medios, músicos, líderes de bienestar, emprendedores y referentes culturales para vivir una experiencia inmersiva de día y noche.",
      "La programación incluye proyecciones, conversaciones grabadas, entrevistas en vivo, música, DJs y experiencias comunitarias. Entre las activaciones previstas están paneles, círculo de cacao, breathwork, Ecstatic DANZ y momentos FlowBond — siempre con un tono cálido, curado y presente.",
      "Diseñado para elevar el movimiento creativo de México en un escenario global, el evento funciona como plataforma y catalizador: destacando voces emergentes, fortaleciendo conexiones culturales entre México, Estados Unidos y otros países, y creando oportunidades significativas para patrocinadores, medios y colaboradores alineados con una audiencia de alto impacto y propósito.",
      "A través de este encuentro también apoyamos a Yelapa Foundation y al Festival de Cine Consciente, impulsando iniciativas enfocadas en impacto social, consciencia, comunidad y narrativas con propósito.",
    ],
    badges: ["Cine", "Música", "Bienestar", "Comunidad", "Tecnología"],
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
    "Para completar tu compra o resolver dudas, escríbenos a events@flownation.world o contáctanos por Instagram. Pronto activaremos también el enlace de pago en línea.",
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
    name: "Entrada general",
    priceLabel: "$222 MXN",
    description: "Acceso al día completo de programación en Huerto Roma Verde. Ideal para vivir el encuentro con ritmo propio.",
    ctaLabel: "Solicitar entrada general",
    ctaHref: MAIL_GENERAL,
  },
  {
    name: "Supporter pass",
    priceLabel: "$777 MXN",
    description:
      "Incluye bebidas en el evento y apoya de forma directa la producción y el impacto social del encuentro. Experiencia ampliada para quienes quieren estar más cerca del proyecto.",
    featured: true,
    featuredBadge: "Bebidas incluidas",
    ctaLabel: "Solicitar supporter pass",
    ctaHref: MAIL_SUPPORTER,
  },
];

export const ticketsEn: TicketTier[] = [
  {
    name: "General admission",
    priceLabel: "$222 MXN",
    description: "Full-day access to programming at Huerto Roma Verde — screenings, conversations, music, and community moments.",
    ctaLabel: "Request general admission",
    ctaHref: MAIL_GENERAL,
  },
  {
    name: "Supporter pass",
    priceLabel: "$777 MXN",
    description:
      "Includes drinks at the event and directly supports production and social impact. For guests who want to go deeper and help the project scale with intention.",
    featured: true,
    featuredBadge: "Drinks included",
    ctaLabel: "Request supporter pass",
    ctaHref: MAIL_SUPPORTER,
  },
];

const img = {
  michelle: "/flow-cdmx-assets/Michelle Young.png",
  steph: "/flow-cdmx-assets/Steph Ferrera.png",
  luna: "/flow-cdmx-assets/Luna Tamayo.png",
  haaz: "/flow-cdmx-assets/Haaz Rugerio (Tatewari).png",
  patricio: "/flow-cdmx-assets/Patricio Martinez.png",
  mariana: "/flow-cdmx-assets/Mariana García (Márians).png",
  celina: "/flow-cdmx-assets/Celina Kyle Wolf.png",
  erman: "/flow-cdmx-assets/Erman Baradi.png",
  emmanuel: "/flow-cdmx-assets/Emmanuel Massú aka El Chilo del Trapteño.png",
  crissy: "/flow-cdmx-assets/Crissy J.png",
};

export const teamEs: ProfileEntry[] = [
  {
    name: "Michelle Young",
    role: "Fundadora, ROVE Collective · Productora y marketer de experiencias",
    paragraphs: [
      "Michelle es fundadora de ROVE Collective y co-fundadora de The Box Collective. Artista multidisciplinaria y productora con más de 18 años en festivales y más de 12 años en marketing experiencial; ha colaborado con compañías y agencias premiadas como Refinery29, VICE, Render Event Design, iheartcomix y A-OK Collective.",
      "Ha producido activaciones de alto impacto alrededor de Coachella, Super Bowl, SXSW, GRAMMYs, NYFW, LAFW, CES y VR Fest, entre otros. Su trabajo conecta producción impecable con narrativa emocional: desde campañas de lanzamiento hasta experiencias VIP para prensa, talento y marcas de lujo.",
      "Como fundadora de ROVE, dirige eventos artísticos con impacto social en alianza con organizaciones como NAMI WLA, The Trevor Project, Saving Innocence y Women in Music. Vive en Puerto Vallarta con presencia creciente en la Ciudad de México y Estados Unidos, impulsando colaboración binacional con visión global.",
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
      "Creadora de FlowBond, plataforma enfocada en tecnología, cultura y sistemas regenerativos. Su trabajo conecta comunidad, arte y herramientas digitales con un enfoque en impacto real — no en promesas vacías.",
      "Impulsa DANZ como protocolo social en movimiento: una forma contemporánea de reunir cuerpo, música y presencia colectiva. Su enfoque combina visión estratégica con sensibilidad cultural profunda.",
    ],
    image: img.steph,
    links: [{ label: "Linktree · stepbystephBTM", href: "https://linktr.ee/stepbystephBTM" }],
  },
  {
    name: "Luna Tamayo",
    role: "Productora · Conductora · Locutora",
    paragraphs: [
      "Artista multidisciplinaria con trayectoria en la intersección del arte escénico y la comunicación masiva. Licenciada en Artes Escénicas por la Universidad de Guadalajara.",
      "Hoy es pieza clave en radio y televisión: productora y locutora de El Resplandor (radio con transmisión simultánea en TV), conductora de CPS News en Tv Mar y locutora en Radiante 98.3. Es creadora del podcast Polytales.",
      "Su trabajo frente a cámara incluye reconocimientos en cortometrajes y formación en danza contemporánea, actuación y clown; domina el inglés a nivel avanzado (Cambridge C2) para colaboraciones internacionales.",
    ],
    image: img.luna,
    links: [],
  },
  {
    name: "Haaz Rugerio (Tatewari)",
    role: "DJ · Productor · Director creativo",
    paragraphs: [
      "DJ y productor de música electrónica con enfoque en experiencias inmersivas y diseño de iluminación. Director creativo de Sexico City Camp en AfrikaBurn.",
      "Su práctica cruza pista, escena y atmósfera: construye mundos sonoros y visuales para que la audiencia habite el momento, no solo observe.",
    ],
    image: img.haaz,
    links: [],
  },
  {
    name: "Patricio Martínez",
    role: "Documentalista · Cinefotógrafo",
    paragraphs: [
      "Su trabajo ha sido publicado en National Geographic, The Washington Post, The New York Times y organismos de la ONU. Creador de RIVUS: El último río vivo — cine de territorio, memoria y urgencia ambiental.",
      "Su mirada combina rigor periodístico con sensibilidad cinematográfica; acompaña historias donde la imagen sirve a la verdad y a la belleza al mismo tiempo.",
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
      "Ha producido eventos en destinos exclusivos como Careyes y Cuixmala, integrando estética, logística y hospitalidad para figuras internacionales y marcas globales.",
      "Su enfoque habita el cruce entre arte, música y experiencia humana: atmósferas donde el cuerpo guía y la presencia se vuelve posible. Trabaja como DJ, artista multidisciplinaria y gestora cultural.",
    ],
    image: img.mariana,
    links: [{ label: "Sitio web · marians.mx", href: "https://marians.mx/es" }],
  },
  {
    name: "Celina Kyle Wolf",
    role: "Productora de moda y experiencias",
    paragraphs: [
      "Más de 17 años en logística, dirección creativa y producción de pasarelas, campañas editoriales, fashion films y experiencias de marca — de New York Fashion Week y London Fashion Week a Dior Cruise 2023 en México.",
      "Ha colaborado con casas como Oscar de la Renta, Versace, Michael Kors, Tory Burch y Vogue México y LATAM; integra estética, sostenibilidad y ejecución impecable. Habla español, inglés, francés e italiano.",
    ],
    image: img.celina,
    links: [],
  },
  {
    name: "Erman Baradi",
    role: "Cineasta · Fundador, Ermantourage",
    paragraphs: [
      "Nacido en Virginia Beach y formado en Hollywood. Fundador de Ermantourage; su carrera gira en torno a acercar a las personas a través del relato. The Huffington Post lo nombró “Top Networker in Hollywood” a los 26 años.",
      "Ha producido eventos de la industria en Los Ángeles, Nueva York, Londres, Miami, Toronto y más allá; combina cine, comunidad y conversaciones que abren puertas.",
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
      "Con casi dos décadas en la industria, fusiona hip hop con los paisajes sonoros del norte de México y ha forjado el Trapteño — una propuesta musical y narrativa con raíz regional y proyección internacional.",
      "Su documental Los Plebes fue selección Ahora México en FICUNAM 2021 y se distribuyó con Vice Media, consolidando un cine que habla desde el territorio con honestidad y estética propia.",
    ],
    image: img.emmanuel,
    links: [],
  },
  {
    name: "Crissy J",
    role: "Artista · Violinista · DJ",
    paragraphs: [
      "Violinista y DJ multi-género, curadora y activista; ha tocado desde Carnegie Hall hasta los GRAMMYs, llevando el escenario en vivo a nuevas alturas con propuestas que mezclan música, sanación y comunidad.",
      "Su movimiento #UnifyTheUniverse invita a converger bajo el lenguaje universal de la música — una apuesta por sanar el alma, un show a la vez.",
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
