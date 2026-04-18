"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { PricingTier } from "@/components/ui/PricingTier";
import { cn } from "@/components/ui/utils";

export type VisualTheme = "forest" | "champagne";

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
  secondaryPriceLabel?: string;
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
  about: {
    kicker: string;
    title: string;
    paragraphs: string[];
    alliance?: { prefix: string; orgs: [string, string] };
    badges: string[];
  };
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
  visualTheme,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  visualTheme: VisualTheme;
}) {
  const ch = visualTheme === "champagne";
  return (
    <motion.div {...sectionAnim} className="mb-10 space-y-3">
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.24em]",
          ch ? "text-champagne-goldDark" : "text-lime-300/85",
        )}
      >
        {kicker}
      </p>
      <h2
        className={cn(
          "text-3xl font-black leading-tight md:text-5xl",
          ch ? "font-serif text-champagne-ink" : "text-neutral-100",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "max-w-4xl leading-relaxed",
            ch ? "text-champagne-ink/80" : "text-neutral-400",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}

function PersonCard({
  profile,
  locale,
  visualTheme,
}: {
  profile: ProfileEntry;
  locale: "es" | "en";
  visualTheme: VisualTheme;
}) {
  const [expanded, setExpanded] = useState(false);
  const previewCount = 1;
  const paragraphsToRender = expanded ? profile.paragraphs : profile.paragraphs.slice(0, previewCount);
  const showToggle = profile.paragraphs.length > previewCount;
  const isSteph = profile.name.toLowerCase().includes("steph ferrera");
  const ch = visualTheme === "champagne";

  return (
    <motion.article
      {...sectionAnim}
      className={cn(
        "group rounded-2xl border p-6 backdrop-blur-sm transition",
        ch
          ? "border-champagne-border bg-champagne-surface/90 hover:border-champagne-gold/45"
          : "border-lime-200/10 bg-zinc-900/65 hover:border-lime-300/35",
      )}
    >
      <motion.div
        className={cn(
          "mb-4 overflow-hidden rounded-full border",
          ch ? "border-champagne-border" : "border-lime-200/20",
        )}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={profile.image}
          alt={profile.name}
          width={220}
          height={220}
          className={`mx-auto aspect-square w-full max-w-[220px] object-cover transition duration-500 group-hover:scale-105 ${
            isSteph ? "object-[center_28%]" : ""
          }`}
        />
      </motion.div>
      <h3 className={cn("text-xl font-extrabold", ch ? "text-champagne-ink" : "text-white")}>{profile.name}</h3>
      <p className={cn("mt-1 text-sm font-medium", ch ? "text-champagne-goldDark" : "text-lime-300/90")}>
        {profile.role}
      </p>
      <div className={cn("mt-4 space-y-3 text-sm leading-relaxed", ch ? "text-champagne-ink/85" : "text-neutral-300")}>
        {paragraphsToRender.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      {showToggle ? (
        <button
          type="button"
          onClick={() => setExpanded((s) => !s)}
          className={cn(
            "mt-2 text-xs font-semibold uppercase tracking-[0.12em]",
            ch ? "text-champagne-goldDark hover:text-champagne-ink" : "text-lime-300 hover:text-lime-200",
          )}
        >
          {expanded ? (locale === "es" ? "Ver menos" : "Show less") : locale === "es" ? "Ver más" : "Read more"}
        </button>
      ) : null}
      <div className="mt-5 flex flex-wrap gap-2">
        {profile.links.map((link) => (
          <a
            key={`${profile.name}-${link.label}`}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-medium transition",
              ch
                ? "border-champagne-gold/40 text-champagne-goldDark hover:bg-champagne-surface"
                : "border-lime-300/30 text-lime-200 hover:bg-lime-300/10",
            )}
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
  visualTheme = "forest",
}: {
  locale: "es" | "en";
  copy: FlowSiteCopy;
  partners: PartnerEntry[];
  team: ProfileEntry[];
  artists: ProfileEntry[];
  causes: CauseEntry[];
  tickets: TicketTier[];
  visualTheme?: VisualTheme;
}) {
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [ticketForm, setTicketForm] = useState({ name: "", email: "", interest: "", notes: "" });
  const isChampagne = visualTheme === "champagne";

  const onTicketSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ticketForm.name || !ticketForm.email || !ticketForm.interest) return;
    setTicketSubmitted(true);
  };

  return (
    <main
      lang={locale === "en" ? "en" : "es"}
      className={cn("min-h-screen", isChampagne ? "bg-champagne-bg text-champagne-ink" : "bg-[#090b08] text-white")}
    >
      <div
        className={cn(
          "fixed inset-0 -z-10",
          isChampagne
            ? "bg-[radial-gradient(circle_at_20%_18%,rgba(201,169,94,0.14),transparent_38%),radial-gradient(circle_at_82%_12%,rgba(139,111,46,0.09),transparent_32%),linear-gradient(180deg,#FAF7F0_0%,#F5EBD0_42%,#FAF7F0_100%)]"
            : "bg-[radial-gradient(circle_at_20%_20%,rgba(132,204,22,0.16),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(217,119,6,0.12),transparent_28%),linear-gradient(180deg,#090b08_0%,#0c140d_35%,#090b08_100%)]",
        )}
      />

      <header
        className={cn(
          "sticky top-0 z-50 border-b backdrop-blur-md",
          isChampagne ? "border-champagne-border bg-champagne-bg/90" : "border-lime-200/10 bg-[#090b08]/85",
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-10">
          <a
            href="#inicio"
            className={cn("text-lg font-black tracking-tight", isChampagne ? "text-champagne-ink" : "text-white")}
          >
            FLOW CDMX
          </a>
          <nav
            className={cn(
              "flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em]",
              isChampagne ? "text-champagne-ink/65" : "text-neutral-400",
            )}
          >
            <a href="#evento" className={isChampagne ? "hover:text-champagne-goldDark" : "hover:text-lime-200"}>
              {copy.sections.about}
            </a>
            <a href="#aliados" className={isChampagne ? "hover:text-champagne-goldDark" : "hover:text-lime-200"}>
              {copy.sections.aliados}
            </a>
            <a href="#equipo" className={isChampagne ? "hover:text-champagne-goldDark" : "hover:text-lime-200"}>
              {copy.sections.equipo}
            </a>
            <a href="#artistas" className={isChampagne ? "hover:text-champagne-goldDark" : "hover:text-lime-200"}>
              {copy.sections.artistas}
            </a>
            <a href="#tickets" className={isChampagne ? "hover:text-champagne-goldDark" : "hover:text-lime-200"}>
              {copy.sections.tickets}
            </a>
            <span
              className={cn("hidden h-4 w-px sm:inline", isChampagne ? "bg-champagne-border" : "bg-lime-200/20")}
              aria-hidden
            />
            <Link
              href={copy.nav.hrefEs}
              className={
                locale === "es"
                  ? isChampagne
                    ? "text-champagne-goldDark"
                    : "text-lime-300"
                  : isChampagne
                    ? "hover:text-champagne-ink"
                    : "text-neutral-400 hover:text-white"
              }
            >
              {copy.nav.labelEs}
            </Link>
            <Link
              href={copy.nav.hrefEn}
              className={
                locale === "en"
                  ? isChampagne
                    ? "text-champagne-goldDark"
                    : "text-lime-300"
                  : isChampagne
                    ? "hover:text-champagne-ink"
                    : "text-neutral-400 hover:text-white"
              }
            >
              {copy.nav.labelEn}
            </Link>
          </nav>
        </div>
      </header>

      <section id="inicio" className="mx-auto flex min-h-[85vh] w-full max-w-7xl flex-col justify-center px-5 py-20 md:px-10">
        <motion.p
          {...sectionAnim}
          className={cn(
            "mb-4 text-sm uppercase tracking-[0.25em]",
            isChampagne ? "text-champagne-goldDark" : "text-lime-300/85",
          )}
        >
          {copy.hero.kicker}
        </motion.p>
        <motion.h1
          {...sectionAnim}
          className={cn(
            "max-w-4xl tracking-tight",
            isChampagne
              ? "font-serif text-5xl font-semibold text-champagne-ink sm:text-6xl md:text-7xl"
              : "text-5xl font-black text-white sm:text-6xl md:text-8xl",
          )}
        >
          {copy.hero.title}
        </motion.h1>
        <motion.p
          {...sectionAnim}
          className={cn(
            "mt-7 max-w-3xl text-lg leading-relaxed md:text-2xl",
            isChampagne ? "text-champagne-ink/90" : "text-neutral-200",
          )}
        >
          {copy.hero.lead}
        </motion.p>
        <motion.div {...sectionAnim} className="mt-10 flex flex-wrap gap-4">
          {isChampagne ? (
            <>
              <Button href="#tickets" theme="champagne" variant="primary">
                {copy.hero.cta}
              </Button>
              {copy.hero.ctaSecondary ? (
                <Button href={copy.hero.ctaSecondary.href} theme="champagne" variant="secondary">
                  {copy.hero.ctaSecondary.label}
                </Button>
              ) : null}
            </>
          ) : (
            <>
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
            </>
          )}
        </motion.div>
      </section>

      <section id="evento" className="mx-auto w-full max-w-7xl px-5 py-20 md:px-10">
        <SectionTitle kicker={copy.about.kicker} title={copy.about.title} visualTheme={visualTheme} />
        <motion.div
          {...sectionAnim}
          className={cn(
            "max-w-4xl space-y-4 text-base leading-relaxed",
            isChampagne ? "text-champagne-ink/90" : "text-neutral-300",
          )}
        >
          {copy.about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {copy.about.alliance ? (
            <p>
              {copy.about.alliance.prefix}{" "}
              <strong className={cn("font-semibold", isChampagne ? "text-champagne-ink" : "text-white")}>
                {copy.about.alliance.orgs[0]}
              </strong>
              {" y "}
              <strong className={cn("font-semibold", isChampagne ? "text-champagne-ink" : "text-white")}>
                {copy.about.alliance.orgs[1]}
              </strong>
              .
            </p>
          ) : null}
        </motion.div>
        <motion.div {...sectionAnim} className="mt-8 flex flex-wrap gap-3">
          {copy.about.badges.map((badge) => (
            <span
              key={badge}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide",
                isChampagne
                  ? "border-champagne-gold/45 bg-champagne-surface/80 text-champagne-goldDark"
                  : "border-amber-300/35 bg-amber-200/10 text-amber-100",
              )}
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </section>

      <section id="aliados" className="mx-auto w-full max-w-7xl px-5 py-20 md:px-10">
        <SectionTitle
          kicker={copy.sections.aliados}
          title={copy.partnersTitle}
          subtitle={copy.partnersSubtitle}
          visualTheme={visualTheme}
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {partners.map((partner) => (
            <motion.article
              key={partner.name}
              {...sectionAnim}
              whileHover={{ y: -6 }}
              className={cn(
                "rounded-2xl border p-5 transition",
                isChampagne
                  ? "border-champagne-border bg-champagne-surface/90"
                  : "border-lime-200/10 bg-zinc-900/65",
              )}
            >
              <div className="mb-4 flex h-28 items-center justify-center p-2">
                <Image src={partner.logo} alt={`Logo ${partner.name}`} width={320} height={130} className="h-24 w-auto object-contain" />
              </div>
              <h3 className={cn("text-lg font-bold", isChampagne ? "text-champagne-ink" : "text-white")}>{partner.name}</h3>
              <p className={cn("mt-2 text-sm leading-relaxed", isChampagne ? "text-champagne-ink/80" : "text-neutral-300")}>
                {partner.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {partner.links.length > 0 ? (
                  partner.links.map((link) => (
                    <a
                      key={`${partner.name}-${link.label}`}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "rounded-full border px-3 py-1 text-xs",
                        isChampagne
                          ? "border-champagne-gold/40 text-champagne-goldDark hover:bg-champagne-surface"
                          : "border-lime-300/30 text-lime-200 hover:bg-lime-300/10",
                      )}
                    >
                      {link.label}
                    </a>
                  ))
                ) : (
                  <span className={cn("text-xs", isChampagne ? "text-champagne-ink/45" : "text-neutral-500")}>—</span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="equipo" className="mx-auto w-full max-w-7xl px-5 py-20 md:px-10">
        <SectionTitle kicker={copy.sections.equipo} title={copy.teamTitle} visualTheme={visualTheme} />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
          {team.map((person) => (
            <PersonCard key={person.name} profile={person} locale={locale} visualTheme={visualTheme} />
          ))}
        </div>
      </section>

      <section id="artistas" className="mx-auto w-full max-w-7xl px-5 py-20 md:px-10">
        <SectionTitle kicker={copy.sections.artistas} title={copy.artistsTitle} visualTheme={visualTheme} />
        <div className="grid gap-6 md:grid-cols-2">
          {artists.map((person) => (
            <PersonCard key={person.name} profile={person} locale={locale} visualTheme={visualTheme} />
          ))}
        </div>
      </section>

      <section id="causa" className="mx-auto w-full max-w-7xl px-5 py-20 md:px-10">
        <SectionTitle
          kicker={copy.sections.causa}
          title={copy.causeTitle}
          subtitle={copy.causeSubtitle}
          visualTheme={visualTheme}
        />
        <div className="grid gap-5 md:grid-cols-2">
          {causes.map((c) => (
            <motion.article
              key={c.title}
              {...sectionAnim}
              className={cn(
                "rounded-2xl border p-6",
                isChampagne
                  ? "border-champagne-border bg-champagne-surface/70"
                  : "border-lime-200/15 bg-lime-100/[0.04]",
              )}
            >
              <h3
                className={cn(
                  "text-2xl font-black",
                  isChampagne ? "font-serif text-champagne-ink" : "text-lime-100",
                )}
              >
                {c.title}
              </h3>
              <p className={cn("mt-3 leading-relaxed", isChampagne ? "text-champagne-ink/85" : "text-neutral-300")}>
                {c.body}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <div id="programa" className="scroll-mt-28" />

      <section id="tickets" className="mx-auto w-full max-w-7xl px-5 py-20 md:px-10">
        <SectionTitle
          kicker={copy.sections.tickets}
          title={copy.ticketsTitle}
          subtitle={copy.ticketsLead}
          visualTheme={visualTheme}
        />
        {isChampagne ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {tickets.map((t) => (
              <motion.div key={t.name} {...sectionAnim} className="flex flex-col">
                {t.featured && t.featuredBadge ? (
                  <p className="mb-2 text-center text-xs font-bold uppercase tracking-[0.2em] text-champagne-goldDark">
                    {t.featuredBadge}
                  </p>
                ) : null}
                <PricingTier
                  theme="champagne"
                  name={t.name}
                  priceLine={t.priceLabel}
                  secondaryLine={t.secondaryPriceLabel}
                  description={t.description}
                  highlighted={t.featured}
                  className="h-full flex-1"
                  footer={
                    <Button
                      href={t.ctaHref}
                      theme="champagne"
                      variant={t.featured ? "primary" : "outline"}
                      className="w-full"
                    >
                      {t.ctaLabel}
                    </Button>
                  }
                />
              </motion.div>
            ))}
          </div>
        ) : (
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
                {t.secondaryPriceLabel ? (
                  <p className="mt-1 text-sm tabular-nums text-neutral-400">{t.secondaryPriceLabel}</p>
                ) : null}
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">{t.description}</p>
                <button
                  type="button"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide ${
                    t.featured ? "bg-lime-300 text-zinc-950 hover:bg-lime-200" : "border border-lime-300/40 text-lime-200 hover:bg-lime-300/10"
                  }`}
                  onClick={() => document.getElementById("registro-boletos")?.scrollIntoView({ behavior: "smooth" })}
                >
                  {t.ctaLabel}
                </button>
              </motion.article>
            ))}
          </div>
        )}
        <motion.div
          id="registro-boletos"
          {...sectionAnim}
          className={cn(
            "mt-10 rounded-2xl border p-6 md:p-8",
            isChampagne ? "border-champagne-border bg-champagne-surface/80" : "border-lime-200/10 bg-zinc-900/65",
          )}
        >
          <h3 className={cn("text-xl font-bold", isChampagne ? "text-champagne-ink" : "text-white")}>
            {locale === "es" ? "Link de boletos coming soon" : "Ticket link coming soon"}
          </h3>
          <p className={cn("mt-2 text-sm", isChampagne ? "text-champagne-ink/70" : "text-neutral-400")}>
            {locale === "es"
              ? "Mientras activamos el checkout, deja tus datos para enviarte el enlace de compra en cuanto esté listo."
              : "While checkout goes live, leave your details and we will send you the direct purchase link as soon as it is ready."}
          </p>

          {!ticketSubmitted ? (
            <form onSubmit={onTicketSubmit} className="mt-5 grid gap-3 md:grid-cols-2">
              <input
                type="text"
                placeholder={locale === "es" ? "Nombre completo" : "Full name"}
                value={ticketForm.name}
                onChange={(e) => setTicketForm((s) => ({ ...s, name: e.target.value }))}
                className={cn(
                  "rounded-xl border px-4 py-3 text-sm outline-none md:col-span-1",
                  isChampagne
                    ? "border-champagne-border bg-champagne-bg text-champagne-ink placeholder:text-champagne-ink/45 focus:border-champagne-gold"
                    : "border-lime-200/20 bg-black/30 text-white placeholder:text-neutral-500 focus:border-lime-300/60",
                )}
                required
              />
              <input
                type="email"
                placeholder={locale === "es" ? "Correo electrónico" : "Email"}
                value={ticketForm.email}
                onChange={(e) => setTicketForm((s) => ({ ...s, email: e.target.value }))}
                className={cn(
                  "rounded-xl border px-4 py-3 text-sm outline-none",
                  isChampagne
                    ? "border-champagne-border bg-champagne-bg text-champagne-ink placeholder:text-champagne-ink/45 focus:border-champagne-gold"
                    : "border-lime-200/20 bg-black/30 text-white placeholder:text-neutral-500 focus:border-lime-300/60",
                )}
                required
              />
              <select
                value={ticketForm.interest}
                onChange={(e) => setTicketForm((s) => ({ ...s, interest: e.target.value }))}
                className={cn(
                  "rounded-xl border px-4 py-3 text-sm outline-none md:col-span-2",
                  isChampagne
                    ? "border-champagne-border bg-champagne-bg text-champagne-ink focus:border-champagne-gold"
                    : "border-lime-200/20 bg-black/30 text-white focus:border-lime-300/60",
                )}
                required
              >
                <option value="">{locale === "es" ? "Me interesa..." : "I am interested in..."}</option>
                {tickets.map((t) => (
                  <option key={t.name} value={t.name}>
                    {t.name}
                  </option>
                ))}
              </select>
              <textarea
                placeholder={locale === "es" ? "Mensaje (opcional)" : "Message (optional)"}
                value={ticketForm.notes}
                onChange={(e) => setTicketForm((s) => ({ ...s, notes: e.target.value }))}
                className={cn(
                  "min-h-[90px] rounded-xl border px-4 py-3 text-sm outline-none md:col-span-2",
                  isChampagne
                    ? "border-champagne-border bg-champagne-bg text-champagne-ink placeholder:text-champagne-ink/45 focus:border-champagne-gold"
                    : "border-lime-200/20 bg-black/30 text-white placeholder:text-neutral-500 focus:border-lime-300/60",
                )}
              />
              {isChampagne ? (
                <Button type="submit" theme="champagne" variant="primary" className="md:col-span-2">
                  {locale === "es" ? "Registrarme para boletos" : "Join ticket waitlist"}
                </Button>
              ) : (
                <button
                  type="submit"
                  className="rounded-full bg-lime-300 px-6 py-3 text-sm font-bold uppercase tracking-wide text-zinc-950 hover:bg-lime-200 md:col-span-2"
                >
                  {locale === "es" ? "Registrarme para boletos" : "Join ticket waitlist"}
                </button>
              )}
            </form>
          ) : (
            <p className={cn("mt-4 text-sm", isChampagne ? "text-champagne-goldDark" : "text-lime-200")}>
              {locale === "es"
                ? "Gracias. Te contactaremos apenas esté activo el link de compra."
                : "Thank you. We will contact you as soon as the ticket link is live."}
            </p>
          )}
        </motion.div>
        {copy.ticketsFootnote ? (
          <motion.p
            {...sectionAnim}
            className={cn("mt-8 text-center text-sm", isChampagne ? "text-champagne-ink/55" : "text-neutral-500")}
          >
            {copy.ticketsFootnote}
          </motion.p>
        ) : null}
      </section>

      <footer
        className={cn("border-t", isChampagne ? "border-champagne-border bg-champagne-surface/40" : "border-lime-200/10 bg-black/35")}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-14 md:px-10">
          <div>
            <p className={cn("text-4xl font-black tracking-tight", isChampagne ? "font-serif text-champagne-ink" : "")}>
              FLOW CDMX
            </p>
            <p className={cn("mt-2", isChampagne ? "text-champagne-ink/70" : "text-neutral-400")}>{copy.footer.line1}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {partners.flatMap((partner) =>
              partner.links.map((link) => (
                <a
                  key={`${partner.name}-${link.label}-footer`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "rounded-full border px-3 py-1 text-xs",
                    isChampagne
                      ? "border-champagne-border text-champagne-ink/80 hover:bg-champagne-surface"
                      : "border-lime-200/20 text-neutral-300 hover:bg-lime-200/10",
                  )}
                >
                  {partner.name}: {link.label}
                </a>
              )),
            )}
          </div>
          <p className={cn("text-sm", isChampagne ? "text-champagne-ink/50" : "text-neutral-500")}>{copy.footer.rights}</p>
        </div>
      </footer>
    </main>
  );
}
