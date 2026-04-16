"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type LinkItem = {
  label: string;
  href: string;
  isInstagram?: boolean;
};

type Partner = {
  name: string;
  description: string;
  logoCandidates: string[];
  links: LinkItem[];
};

type Person = {
  name: string;
  role: string;
  bio: string;
  image: string;
  links: LinkItem[];
};

const sectionAnim = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.2 },
};

const aboutText =
  "FLOW CDMX es un encuentro cultural paralelo a Sundance CDMX que celebra el futuro del cine, la creatividad y la cultura consciente en Mexico. Durante un solo dia vivimos proyecciones de cine, paneles y conversaciones en vivo, musica y DJs, circulo de cacao, breathwork, Ecstatic DANZ y experiencias FlowBond para activar comunidad, arte, bienestar y tecnologia en un mismo espacio.";

const partners: Partner[] = [
  {
    name: "ROVE Collective",
    description: "Colectivo creativo que conecta talento, marca y experiencias culturales.",
    logoCandidates: [
      "/flow-cdmx-assets/ROVE LOGOS/logo.svg",
      "/flow-cdmx-assets/ROVE LOGOS/logo.png",
      "/flow-cdmx-assets/ROVE LOGOS/rove.svg",
      "/flow-cdmx-assets/ROVE LOGOS/rove.png",
    ],
    links: [
      { label: "@rovecollective", href: "https://www.instagram.com/rovecollective/", isInstagram: true },
      { label: "flowvallarta.com", href: "https://www.flowvallarta.com/" },
    ],
  },
  {
    name: "The Box Collective",
    description: "Plataforma colaborativa enfocada en produccion creativa y experiencias inmersivas.",
    logoCandidates: [
      "/flow-cdmx-assets/The box Collective LOGOS/logo.svg",
      "/flow-cdmx-assets/The box Collective LOGOS/logo.png",
      "/flow-cdmx-assets/The box Collective LOGOS/the-box.svg",
      "/flow-cdmx-assets/The box Collective LOGOS/the-box.png",
    ],
    links: [],
  },
  {
    name: "Ermantourage",
    description: "Comunidad global de cine y networking para creadores, storytellers y productores.",
    logoCandidates: [
      "/flow-cdmx-assets/ERMANTOURAGE LOGOS/logo.svg",
      "/flow-cdmx-assets/ERMANTOURAGE LOGOS/logo.png",
      "/flow-cdmx-assets/ERMANTOURAGE LOGOS/ermantourage.svg",
      "/flow-cdmx-assets/ERMANTOURAGE LOGOS/ermantourage.png",
    ],
    links: [],
  },
  {
    name: "Flow Vallarta",
    description: "Festival y ecosistema de cultura consciente que inspira colaboracion y comunidad.",
    logoCandidates: [
      "/flow-cdmx-assets/FLOW VALLARTA LOGOS/logo.svg",
      "/flow-cdmx-assets/FLOW VALLARTA LOGOS/logo.png",
      "/flow-cdmx-assets/FLOW VALLARTA LOGOS/flow-vallarta.svg",
      "/flow-cdmx-assets/FLOW VALLARTA LOGOS/flow-vallarta.png",
    ],
    links: [{ label: "flowvallarta.com", href: "https://www.flowvallarta.com/" }],
  },
  {
    name: "Festival de Cine Consciente",
    description: "Movimiento cinematografico itinerante que une sostenibilidad, arte y participacion comunitaria.",
    logoCandidates: [
      "/flow-cdmx-assets/festival de Cine Consciente LOGOS.png",
      "/flow-cdmx-assets/festival de Cine Conscie...OS.png",
    ],
    links: [],
  },
  {
    name: "Yelapa Foundation",
    description: "Organizacion dedicada a proyectos regenerativos y culturales en comunidades indigenas.",
    logoCandidates: [
      "/flow-cdmx-assets/Yelapa Foundation LOGOS.png",
      "/flow-cdmx-assets/Yelapa Foundat...OS.png",
    ],
    links: [],
  },
  {
    name: "FlowBond",
    description: "Infraestructura social y cultural para conectar personas, arte y tecnologia consciente.",
    logoCandidates: [
      "/flow-cdmx-assets/FlowBond LOGOS/logo.svg",
      "/flow-cdmx-assets/FlowBond LOGOS/logo.png",
      "/flow-cdmx-assets/FlowBond LOGOS/flowbond.svg",
      "/flow-cdmx-assets/FlowBond LOGOS/flowbond.png",
    ],
    links: [{ label: "flowbond.xyz", href: "https://flowbond.xyz" }],
  },
  {
    name: "DANZ",
    description: "Protocolo social en movimiento que fusiona cuerpo, musica, presencia y comunidad.",
    logoCandidates: [
      "/flow-cdmx-assets/Danz LOGOS/logo.svg",
      "/flow-cdmx-assets/Danz LOGOS/logo.png",
      "/flow-cdmx-assets/Danz LOGOS/danz.svg",
      "/flow-cdmx-assets/Danz LOGOS/danz.png",
    ],
    links: [{ label: "danz.now", href: "https://danz.now" }],
  },
];

const team: Person[] = [
  {
    name: "Michelle Young",
    role: "Fundadora ROVE Collective · Productora",
    bio: "Artista multidisciplinaria y productora con 18+ anos en festivales. Ha trabajado con Disney, VICE, Rolling Stone, Soho House. Activaciones en Coachella, Super Bowl, SXSW, GRAMMYs.",
    image: "/flow-cdmx-assets/Michelle Young.png",
    links: [
      { label: "Sitio", href: "http://michelleinflow.com" },
      { label: "@michelleinflow", href: "https://www.instagram.com/michelleinflow/", isInstagram: true },
    ],
  },
  {
    name: "Steph Ferrera",
    role: "Fundadora FlowBond · Arquitecta Social",
    bio: "Creadora de FlowBond. Enfocada en tecnologia, cultura y sistemas regenerativos. Impulsa DANZ como protocolo social en movimiento.",
    image: "/flow-cdmx-assets/Steph Ferrera.png",
    links: [
      { label: "Linktree", href: "https://linktr.ee/stepbystephBTM" },
      { label: "Instagram", href: "https://www.instagram.com/", isInstagram: true },
    ],
  },
  {
    name: "Luna Tamayo",
    role: "Productora · Conductora · Locutora",
    bio: "Actriz, productora y conductora de El Resplandor y Radiante 98.3. Creadora del podcast Polytales. Licenciada en Artes Escenicas, UdeG.",
    image: "/flow-cdmx-assets/Luna Tamayo.png",
    links: [{ label: "Instagram", href: "https://www.instagram.com/", isInstagram: true }],
  },
  {
    name: "Haaz Rugerio (Tatewari)",
    role: "DJ · Productor · Director Creativo",
    bio: "DJ y productor de musica electronica. Director creativo de Sexico City Camp en AfrikaBurn. Especialista en experiencias inmersivas y diseno de iluminacion.",
    image: "/flow-cdmx-assets/Haaz Rugerio (Tatewari).png",
    links: [{ label: "Instagram", href: "https://www.instagram.com/", isInstagram: true }],
  },
  {
    name: "Patricio Martinez",
    role: "Documentalista · Cinefotografo",
    bio: "Ha colaborado con National Geographic, The Washington Post, NYT y ONU. Creador de RIVUS: El Ultimo Rio Vivo.",
    image: "/flow-cdmx-assets/Patricio Martinez.png",
    links: [
      { label: "Sitio", href: "https://www.patriciomtz.com" },
      { label: "Instagram", href: "https://www.instagram.com/", isInstagram: true },
    ],
  },
  {
    name: "Mariana Garcia (Marians)",
    role: "Productora · DJ · Creadora de Experiencias",
    bio: "Ha producido eventos en Careyes y Cuixmala para figuras internacionales y marcas globales. Integra estetica, logistica y arte.",
    image: "/flow-cdmx-assets/Mariana Garcia (Marians).png",
    links: [
      { label: "Sitio", href: "https://marians.mx/es" },
      { label: "Instagram", href: "https://www.instagram.com/", isInstagram: true },
    ],
  },
  {
    name: "Celina Kyle Wolf",
    role: "Productora de Moda y Experiencias",
    bio: "17+ anos con Dior, Versace, Oscar de la Renta y Vogue. Integra estetica, sostenibilidad y ejecucion de alto nivel.",
    image: "/flow-cdmx-assets/Celina Kyle Wolf.png",
    links: [{ label: "Instagram", href: "https://www.instagram.com/", isInstagram: true }],
  },
  {
    name: "Erman Baradi",
    role: "Cineasta · Fundador Ermantourage",
    bio: '"Top Networker in Hollywood" por The Huffington Post. Ha producido eventos en LA, NY, Toronto, Londres, Miami, Chicago y Austin.',
    image: "/flow-cdmx-assets/Erman Baradi.png",
    links: [{ label: "Instagram", href: "https://www.instagram.com/", isInstagram: true }],
  },
];

const artists: Person[] = [
  {
    name: "Emmanuel Massu aka El Chilo del Trapteño",
    role: "Cineasta · Cantautor · Rapero",
    bio: "19 anos en la industria fusionando hip hop con paisajes sonoros del norte de Mexico, creando el Trapteno. Su documental Los Plebes gano Seleccion Ahora Mexico en FICUNAM 2021, distribuido con Vice Media.",
    image: "/flow-cdmx-assets/Emmanuel Massu aka El Chilo del Trapteno.png",
    links: [{ label: "Instagram", href: "https://www.instagram.com/", isInstagram: true }],
  },
  {
    name: "Crissy J",
    role: "Artista · Violinista · DJ",
    bio: "DJ multi-genero, violinista, curadora y activista. Escenarios internacionales. Combina musica, arte, comunidad y sanacion.",
    image: "/flow-cdmx-assets/Crissy J.png",
    links: [
      { label: "Sitio", href: "https://mscrissyj.com/" },
      { label: "Instagram", href: "https://www.instagram.com/", isInstagram: true },
    ],
  },
];

function LogoImage({ candidates, alt }: { candidates: string[]; alt: string }) {
  return (
    <Image
      src={candidates[0]}
      alt={alt}
      width={220}
      height={120}
      className="h-16 w-auto object-contain opacity-90"
    />
  );
}

function SectionTitle({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <motion.div {...sectionAnim} className="mb-10 space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-lime-300/80">{kicker}</p>
      <h2 className="text-3xl font-black leading-tight text-neutral-100 md:text-5xl">{title}</h2>
      {subtitle ? <p className="max-w-3xl text-neutral-300">{subtitle}</p> : null}
    </motion.div>
  );
}

function PersonCard({ person }: { person: Person }) {
  return (
    <motion.article
      {...sectionAnim}
      className="group rounded-2xl border border-lime-200/10 bg-zinc-900/60 p-6 backdrop-blur-sm transition hover:border-lime-300/35"
    >
      <div className="mb-4 overflow-hidden rounded-full border border-lime-200/20">
        <Image
          src={person.image}
          alt={person.name}
          width={220}
          height={220}
          className="mx-auto aspect-square w-full max-w-[220px] object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-extrabold text-white">{person.name}</h3>
      <p className="mt-1 text-sm font-medium text-lime-300/90">{person.role}</p>
      <p className="mt-3 text-sm leading-relaxed text-neutral-300">{person.bio}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        {person.links.map((link) => (
          <a
            key={`${person.name}-${link.label}`}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-lime-300/30 px-3 py-1 text-xs text-lime-200 hover:bg-lime-300/10"
          >
            <span aria-hidden>{link.isInstagram ? "IG" : "WEB"}</span>
            {link.label}
          </a>
        ))}
      </div>
    </motion.article>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#090b08] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(132,204,22,0.16),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(217,119,6,0.12),transparent_28%),linear-gradient(180deg,#090b08_0%,#0c140d_35%,#090b08_100%)]" />

      <section id="inicio" className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-5 py-24 md:px-10">
        <motion.p {...sectionAnim} className="mb-4 text-sm uppercase tracking-[0.25em] text-lime-300/85">
          30 de Abril · Huerto Roma Verde · Ciudad de Mexico
        </motion.p>
        <motion.h1 {...sectionAnim} className="max-w-4xl text-6xl font-black tracking-tight text-white md:text-8xl">
          FLOW CDMX
        </motion.h1>
        <motion.p {...sectionAnim} className="mt-7 max-w-3xl text-lg leading-relaxed text-neutral-200 md:text-2xl">
          Un encuentro cultural paralelo a Sundance CDMX que celebra el futuro del cine, la creatividad y la cultura consciente en Mexico.
        </motion.p>
        <motion.div {...sectionAnim} className="mt-10">
          <a
            href="#tickets"
            className="inline-flex rounded-full bg-lime-300 px-7 py-3 text-sm font-bold uppercase tracking-wide text-zinc-950 transition hover:bg-lime-200"
          >
            Consigue tu lugar
          </a>
        </motion.div>
      </section>

      <section id="evento" className="mx-auto w-full max-w-7xl px-5 py-20 md:px-10">
        <SectionTitle
          kicker="Sobre el evento"
          title="Cine, musica y conciencia en un solo dia"
          subtitle={aboutText}
        />
        <motion.div {...sectionAnim} className="flex flex-wrap gap-3">
          {["Cine", "Musica", "Bienestar", "Comunidad", "Tecnologia"].map((badge) => (
            <span key={badge} className="rounded-full border border-amber-300/35 bg-amber-200/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-amber-100">
              {badge}
            </span>
          ))}
        </motion.div>
      </section>

      <section id="aliados" className="mx-auto w-full max-w-7xl px-5 py-20 md:px-10">
        <SectionTitle kicker="Aliados y organizaciones" title="Red que hace posible FLOW CDMX" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {partners.map((partner) => (
            <motion.article
              key={partner.name}
              {...sectionAnim}
              className="rounded-2xl border border-lime-200/10 bg-zinc-900/65 p-5"
            >
              <div className="mb-4 flex h-20 items-center justify-center rounded-xl bg-black/20">
                <LogoImage candidates={partner.logoCandidates} alt={`Logo ${partner.name}`} />
              </div>
              <h3 className="text-lg font-bold text-white">{partner.name}</h3>
              <p className="mt-2 min-h-12 text-sm text-neutral-300">{partner.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {partner.links.length > 0 ? (
                  partner.links.map((link) => (
                    <a
                      key={`${partner.name}-${link.label}`}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-lime-300/30 px-3 py-1 text-xs text-lime-200 hover:bg-lime-300/10"
                    >
                      <span aria-hidden>{link.isInstagram ? "IG" : "WEB"}</span>
                      {link.label}
                    </a>
                  ))
                ) : (
                  <span className="text-xs text-neutral-500">Sin sitio publico listado</span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="equipo" className="mx-auto w-full max-w-7xl px-5 py-20 md:px-10">
        <SectionTitle kicker="Equipo" title="Quienes producen FLOW CDMX" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {team.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </section>

      <section id="artistas" className="mx-auto w-full max-w-7xl px-5 py-20 md:px-10">
        <SectionTitle kicker="Artistas y panelistas" title="Voces que activan la jornada" />
        <div className="grid gap-5 md:grid-cols-2">
          {artists.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </section>

      <section id="causa" className="mx-auto w-full max-w-7xl px-5 py-20 md:px-10">
        <SectionTitle kicker="Causa e impacto" title="Organizaciones beneficiarias" />
        <div className="grid gap-5 md:grid-cols-2">
          <motion.article {...sectionAnim} className="rounded-2xl border border-amber-200/20 bg-amber-100/5 p-6">
            <h3 className="text-2xl font-black text-amber-100">Yelapa Foundation</h3>
            <p className="mt-3 text-neutral-200">
              Proteger y honrar el planeta Tierra a traves de proyectos culturales y regenerativos dentro de comunidades indigenas.
            </p>
          </motion.article>
          <motion.article {...sectionAnim} className="rounded-2xl border border-lime-200/20 bg-lime-100/5 p-6">
            <h3 className="text-2xl font-black text-lime-200">Festival de Cine Consciente</h3>
            <p className="mt-3 text-neutral-200">
              Una plataforma cultural itinerante que une cine, sostenibilidad y comunidad. Su 8va edicion sera en noviembre en CDMX.
            </p>
          </motion.article>
        </div>
      </section>

      <footer id="tickets" className="border-t border-lime-200/10 bg-black/35">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-14 md:px-10">
          <div>
            <p className="text-4xl font-black tracking-tight">FLOW CDMX</p>
            <p className="mt-2 text-neutral-300">30 de Abril · Huerto Roma Verde · CDMX</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {partners.flatMap((partner) =>
              partner.links.map((link) => (
                <a
                  key={`${partner.name}-${link.label}-footer`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-lime-200/20 px-3 py-1 text-xs text-neutral-200 hover:bg-lime-200/10"
                >
                  {partner.name}: {link.label}
                </a>
              ))
            )}
          </div>
          <p className="text-sm text-neutral-500">© 2026 FlowNation · cdmx.flownation.world</p>
        </div>
      </footer>
    </main>
  );
}
