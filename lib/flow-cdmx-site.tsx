"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export type SiteLink = { label: string; href: string };

export type PartnerEntry = {
  name: string;
  description: string;
  logo: string;
  links: SiteLink[];
};

export type ProfileEntry = {
  name: string;
  role: string;
  paragraphs: string[];
  image: string;
  links: SiteLink[];
};

export type CauseEntry = { title: string; body: string };

export type TicketTier = {
  name: string;
  priceLabel: string;
  description: string;
  featured?: boolean;
  featuredBadge?: string;
  ctaLabel: string;
  ctaHref: string;
};

export type FlowSiteCopy = {
  metaTitle: string;
  nav: { labelEs: string; labelEn: string; hrefEs: string; hrefEn: string };
  sections: {
    about: string;
    aliados: string;
    equipo: string;
    artistas: string;
    causa: string;
    tickets: string;
  };
  hero: {
    kicker: string;
    title: string;
    lead: string;
    cta: string;
    ctaSecondary?: { label: string; href: string };
  };
  about: { kicker: string; title: string; paragraphs: string[]; badges: string[] };
  partnersTitle: string;
  partnersSubtitle?: string;
  teamTitle: string;
  artistsTitle: string;
  causeTitle: string;
  causeSubtitle?: string;
  ticketsTitle: string;
  ticketsLead: string;
  ticketsFootnote?: string;
  footer: { line1: string; rights: string };
};

const sectionAnim = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.15 },
};

function SectionTitle({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div {...sectionAnim} className="mb-10 space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-lime-300/85">{kicker}</p>
      <h2 className="text-3xl font-black leading-tight text-neutral-100 md:text-5xl">{title}</h2>
      {subtitle ? <p className="max-w-4xl leading-relaxed text-neutral-400">{subtitle}</p> : null}
    </motion.div>
  );
}

function PersonCard({ profile }: { profile: ProfileEntry }) {
  return (
    <motion.article
      {...sectionAnim}
      className="group rounded-2xl border border-lime-200/10 bg-zinc-900/65 p-6 backdrop-blur-sm transition hover:border-lime-300/35"
    >
      <div className="mb-4 overflow-hidden rounded-full border border-lime-200/20">
        <Image
          src={profile.image}
          alt={profile.name}
          width={220}
          height={220}
          className="mx-auto aspect-square w-full max-w-[220px] object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-extrabold text-white">{profile.name}</h3>
      <p className="mt-1 text-sm font-medium text-lime-300/90">{profile.role}</p>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-300">
        {profile.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {profile.links.map((link) => (
          <a
            key={`${profile.name}-${link.label}`}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-lime-300/30 px-3 py-1.5 text-xs font-medium text-lime-200 transition hover:bg-lime-300/10"
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.article>
  );
}

export function FlowCdmxPage({
  locale,
  copy,
  partners,
  team,
  artists,
  causes,
  tickets,
}: {
  locale: "es" | "en";
  copy: FlowSiteCopy;
  partners: PartnerEntry[];
  team: ProfileEntry[];
  artists: ProfileEntry[];
  causes: CauseEntry[];
  tickets: TicketTier[];
}) {
  return (
    <main lang={locale === "en" ? "en" : "es"} className="min-h-screen bg-[#090b08] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(132,204,22,0.16),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(217,119,6,0.12),transparent_28%),linear-gradient(180deg,#090b08_0%,#0c140d_35%,#090b08_100%)]" />

      <header className="sticky top-0 z-50 border-b border-lime-200/10 bg-[#090b08]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-10">
          <a href="#inicio" className="text-lg font-black tracking-tight text-white">
            FLOW CDMX
          </a>
          <nav className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-400">
            <a href="#evento" className="hover:text-lime-200">
              {copy.sections.about}
            </a>
            <a href="#aliados" className="hover:text-lime-200">
              {copy.sections.aliados}
            </a>
            <a href="#equipo" className="hover:text-lime-200">
              {copy.sections.equipo}
            </a>
            <a href="#artistas" className="hover:text-lime-200">
              {copy.sections.artistas}
            </a>
            <a href="#tickets" className="hover:text-lime-200">
              {copy.sections.tickets}
            </a>
            <span className="hidden h-4 w-px bg-lime-200/20 sm:inline" aria-hidden />
            <Link
              href={copy.nav.hrefEs}
              className={locale === "es" ? "text-lime-300" : "text-neutral-400 hover:text-white"}
            >
              {copy.nav.labelEs}
            </Link>
            <Link
              href={copy.nav.hrefEn}
              className={locale === "en" ? "text-lime-300" : "text-neutral-400 hover:text-white"}
            >
              {copy.nav.labelEn}
            </Link>
          </nav>
        </div>
      </header>

      <section id="inicio" className="mx-auto flex min-h-[85vh] w-full max-w-7xl flex-col justify-center px-5 py-20 md:px-10">
        <motion.p {...sectionAnim} className="mb-4 text-sm uppercase tracking-[0.25em] text-lime-300/85">
          {copy.hero.kicker}
        </motion.p>
        <motion.h1 {...sectionAnim} className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl md:text-8xl">
          {copy.hero.title}
        </motion.h1>
        <motion.p {...sectionAnim} className="mt-7 max-w-3xl text-lg leading-relaxed text-neutral-200 md:text-2xl">
          {copy.hero.lead}
        </motion.p>
        <motion.div {...sectionAnim} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#tickets"
            className="inline-flex rounded-full bg-lime-300 px-7 py-3 text-sm font-bold uppercase tracking-wide text-zinc-950 transition hover:bg-lime-200"
          >
            {copy.hero.cta}
          </a>
          {copy.hero.ctaSecondary ? (
            <a
              href={copy.hero.ctaSecondary.href}
              className="inline-flex rounded-full border border-lime-300/40 px-7 py-3 text-sm font-bold uppercase tracking-wide text-lime-200 transition hover:bg-lime-300/10"
            >
              {copy.hero.ctaSecondary.label}
            </a>
          ) : null}
        </motion.div>
      </section>

      <section id="evento" className="mx-auto w-full max-w-7xl px-5 py-20 md:px-10">
        <SectionTitle kicker={copy.about.kicker} title={copy.about.title} />
        <motion.div {...sectionAnim} className="max-w-4xl space-y-4 text-base leading-relaxed text-neutral-300">
          {copy.about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>
        <motion.div {...sectionAnim} className="mt-8 flex flex-wrap gap-3">
          {copy.about.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-amber-300/35 bg-amber-200/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-amber-100"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </section>

      <section id="aliados" className="mx-auto w-full max-w-7xl px-5 py-20 md:px-10">
        <SectionTitle kicker={copy.sections.aliados} title={copy.partnersTitle} subtitle={copy.partnersSubtitle} />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {partners.map((partner) => (
            <motion.article key={partner.name} {...sectionAnim} className="rounded-2xl border border-lime-200/10 bg-zinc-900/65 p-5">
              <div className="mb-4 flex h-20 items-center justify-center rounded-xl bg-black/25 p-2">
                <Image src={partner.logo} alt={`Logo ${partner.name}`} width={210} height={100} className="h-16 w-auto object-contain" />
              </div>
              <h3 className="text-lg font-bold text-white">{partner.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">{partner.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {partner.links.length > 0 ? (
                  partner.links.map((link) => (
                    <a
                      key={`${partner.name}-${link.label}`}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-lime-300/30 px-3 py-1 text-xs text-lime-200 hover:bg-lime-300/10"
                    >
                      {link.label}
                    </a>
                  ))
                ) : (
                  <span className="text-xs text-neutral-500">—</span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="equipo" className="mx-auto w-full max-w-7xl px-5 py-20 md:px-10">
        <SectionTitle kicker={copy.sections.equipo} title={copy.teamTitle} />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
          {team.map((person) => (
            <PersonCard key={person.name} profile={person} />
          ))}
        </div>
      </section>

      <section id="artistas" className="mx-auto w-full max-w-7xl px-5 py-20 md:px-10">
        <SectionTitle kicker={copy.sections.artistas} title={copy.artistsTitle} />
        <div className="grid gap-6 md:grid-cols-2">
          {artists.map((person) => (
            <PersonCard key={person.name} profile={person} />
          ))}
        </div>
      </section>

      <section id="causa" className="mx-auto w-full max-w-7xl px-5 py-20 md:px-10">
        <SectionTitle kicker={copy.sections.causa} title={copy.causeTitle} subtitle={copy.causeSubtitle} />
        <div className="grid gap-5 md:grid-cols-2">
          {causes.map((c) => (
            <motion.article key={c.title} {...sectionAnim} className="rounded-2xl border border-lime-200/15 bg-lime-100/[0.04] p-6">
              <h3 className="text-2xl font-black text-lime-100">{c.title}</h3>
              <p className="mt-3 leading-relaxed text-neutral-300">{c.body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="tickets" className="mx-auto w-full max-w-7xl px-5 py-20 md:px-10">
        <SectionTitle kicker={copy.sections.tickets} title={copy.ticketsTitle} subtitle={copy.ticketsLead} />
        <div className="grid gap-5 md:grid-cols-2">
          {tickets.map((t) => (
            <motion.article
              key={t.name}
              {...sectionAnim}
              className={`rounded-2xl border p-8 ${
                t.featured ? "border-lime-400/50 bg-lime-300/5 shadow-[0_0_40px_-12px_rgba(190,242,100,0.35)]" : "border-lime-200/10 bg-zinc-900/65"
              }`}
            >
              {t.featured && t.featuredBadge ? (
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-lime-300">{t.featuredBadge}</p>
              ) : null}
              <h3 className="text-xl font-bold text-white">{t.name}</h3>
              <p className="mt-4 text-4xl font-black tracking-tight text-lime-200">{t.priceLabel}</p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-400">{t.description}</p>
              <a
                href={t.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide ${
                  t.featured ? "bg-lime-300 text-zinc-950 hover:bg-lime-200" : "border border-lime-300/40 text-lime-200 hover:bg-lime-300/10"
                }`}
              >
                {t.ctaLabel}
              </a>
            </motion.article>
          ))}
        </div>
        {copy.ticketsFootnote ? (
          <motion.p {...sectionAnim} className="mt-8 text-center text-sm text-neutral-500">
            {copy.ticketsFootnote}
          </motion.p>
        ) : null}
      </section>

      <footer className="border-t border-lime-200/10 bg-black/35">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-14 md:px-10">
          <div>
            <p className="text-4xl font-black tracking-tight">FLOW CDMX</p>
            <p className="mt-2 text-neutral-400">{copy.footer.line1}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {partners.flatMap((partner) =>
              partner.links.map((link) => (
                <a
                  key={`${partner.name}-${link.label}-footer`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-lime-200/20 px-3 py-1 text-xs text-neutral-300 hover:bg-lime-200/10"
                >
                  {partner.name}: {link.label}
                </a>
              )),
            )}
          </div>
          <p className="text-sm text-neutral-500">{copy.footer.rights}</p>
        </div>
      </footer>
    </main>
  );
}
