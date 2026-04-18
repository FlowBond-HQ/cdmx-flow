"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { SponsorsCopy, SponsorsTier } from "./sponsors-content";

const sectionAnim = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <motion.div {...sectionAnim} className="mb-10 space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime-300/80">{eyebrow}</p>
      <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">{title}</h2>
      {body ? <p className="max-w-4xl text-neutral-300">{body}</p> : null}
    </motion.div>
  );
}

function TierCard({ tier, includesLabel }: { tier: SponsorsTier; includesLabel: string }) {
  return (
    <motion.article
      {...sectionAnim}
      className={`rounded-2xl border p-7 ${
        tier.featured
          ? "border-lime-300/40 bg-lime-300/5 shadow-[0_0_50px_-18px_rgba(132,204,22,0.35)]"
          : "border-lime-200/10 bg-zinc-900/70"
      }`}
    >
      <h3 className="text-xl font-black text-white">{tier.name}</h3>
      <p className="mt-2 text-4xl font-black tracking-tight text-lime-200">{tier.price}</p>
      <p className="mt-4 text-sm leading-relaxed text-neutral-400">{tier.description}</p>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-lime-300/85">{includesLabel}</p>
      <ul className="mt-3 space-y-2 text-sm text-neutral-300">
        {tier.features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <span className="text-lime-300">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export function SponsorsPageClient({ copy }: { copy: SponsorsCopy }) {
  return (
    <main lang={copy.lang} className="min-h-screen bg-[#070909] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_15%,rgba(132,204,22,0.16),transparent_32%),radial-gradient(circle_at_90%_10%,rgba(56,189,248,0.12),transparent_28%),linear-gradient(180deg,#070909_0%,#0b1110_35%,#070909_100%)]" />

      <div className="mx-auto flex max-w-7xl justify-end px-5 pt-6 md:px-10">
        <Link
          href={copy.alternateHref}
          className="text-xs font-semibold uppercase tracking-[0.14em] text-lime-300/90 hover:text-lime-200"
        >
          {copy.alternateLabel}
        </Link>
      </div>

      <section className="mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-center px-5 py-16 md:px-10">
        <motion.p {...sectionAnim} className="text-sm uppercase tracking-[0.24em] text-lime-300/80">
          {copy.heroEyebrow}
        </motion.p>
        <motion.h1 {...sectionAnim} className="mt-4 max-w-5xl text-4xl font-black leading-[1.05] text-white md:text-6xl lg:text-7xl">
          {copy.heroTitle}
        </motion.h1>
        <motion.div {...sectionAnim} className="mt-8 max-w-4xl space-y-4 text-lg leading-relaxed text-neutral-300">
          {copy.introParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>
        <motion.p {...sectionAnim} className="mt-8 max-w-4xl text-lg leading-relaxed text-neutral-200">
          {copy.benefitsParagraph}
        </motion.p>
        <motion.div {...sectionAnim} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#tiers-internacional"
            className="rounded-full bg-lime-300 px-7 py-3 text-sm font-bold uppercase tracking-wide text-zinc-950 transition hover:bg-lime-200"
          >
            {copy.ctaTiers}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-lime-300/45 px-7 py-3 text-sm font-bold uppercase tracking-wide text-lime-200 transition hover:bg-lime-300/10"
          >
            {copy.ctaContact}
          </a>
        </motion.div>
      </section>

      <section id="tiers-internacional" className="mx-auto max-w-7xl px-5 py-20 md:px-10">
        <SectionHeader eyebrow="Flow CDMX" title={copy.internationalTitle} />
        <div className="grid gap-5 md:grid-cols-2">
          {copy.internationalTiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} includesLabel={copy.includesLabel} />
          ))}
        </div>
      </section>

      <section id="tiers-nacional" className="mx-auto max-w-7xl px-5 py-20 md:px-10">
        <SectionHeader eyebrow="Flow CDMX" title={copy.nationalTitle} />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {copy.nationalTiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} includesLabel={copy.includesLabel} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10">
        <SectionHeader eyebrow="Magazine" title={copy.magazineSectionTitle} body={copy.magazineIntro} />
        <motion.p {...sectionAnim} className="mb-10 max-w-4xl text-sm text-neutral-400">
          {copy.magazineAdsNote}
        </motion.p>
        <motion.div {...sectionAnim} className="mb-10">
          <h3 className="text-lg font-black text-white">{copy.adRatesTitle}</h3>
          <ul className="mt-4 space-y-2 text-neutral-300">
            {copy.adRates.map((row) => (
              <li key={row.label} className="flex flex-wrap justify-between gap-2 border-b border-lime-200/10 py-2 text-sm">
                <span>{row.label}</span>
                <span className="font-semibold text-lime-200">{row.price}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <h3 className="mb-6 text-lg font-black text-white">{copy.magazinePackagesTitle}</h3>
        <div className="grid gap-5 md:grid-cols-2">
          {copy.magazinePackages.map((pkg) => (
            <motion.article
              key={pkg.title}
              {...sectionAnim}
              className="rounded-2xl border border-lime-200/10 bg-zinc-900/70 p-6"
            >
              <h4 className="text-lg font-bold text-white">{pkg.title}</h4>
              <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                {pkg.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-lime-300">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
        <motion.article {...sectionAnim} className="mt-8 rounded-2xl border border-lime-300/25 bg-lime-300/5 p-7">
          <h4 className="text-lg font-black text-white">
            {copy.sponsoredFeatureTitle}{" "}
            <span className="text-lime-200">{copy.sponsoredFeaturePrice}</span>
          </h4>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-lime-300/85">{copy.includesLabel}</p>
          <ul className="mt-3 space-y-2 text-sm text-neutral-300">
            {copy.sponsoredFeatureBullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-lime-300">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10">
        <SectionHeader eyebrow={copy.vendorsEyebrow} title={copy.vendorsTitle} body={copy.vendorsIntro} />
        <motion.div {...sectionAnim} className="mb-8">
          <h3 className="text-lg font-black text-white">{copy.vendorRatesTitle}</h3>
          <ul className="mt-4 space-y-2 text-neutral-300">
            {copy.vendorRates.map((row) => (
              <li key={row.label} className="flex flex-wrap justify-between gap-2 border-b border-lime-200/10 py-2 text-sm">
                <span>{row.label}</span>
                <span className="font-semibold text-lime-200">{row.price}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div {...sectionAnim} className="mb-6 rounded-2xl border border-lime-200/10 bg-zinc-900/70 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-lime-300/85">{copy.vendorIncludesTitle}</h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-300">
            {copy.vendorIncludes.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-lime-300">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.p {...sectionAnim} className="mb-10 max-w-4xl text-sm text-neutral-400">
          {copy.vendorAddOnsNote}
        </motion.p>
        <h3 className="mb-4 text-xl font-bold text-white">{copy.formTitle}</h3>
        <motion.form
          {...sectionAnim}
          className="grid gap-3 rounded-2xl border border-lime-200/10 bg-zinc-900/70 p-6 md:grid-cols-2 md:p-8"
        >
          <input className="rounded-xl border border-lime-200/20 bg-black/25 px-4 py-3 text-sm" placeholder={copy.formLabels.name} />
          <input className="rounded-xl border border-lime-200/20 bg-black/25 px-4 py-3 text-sm" placeholder={copy.formLabels.brand} />
          <textarea
            className="min-h-24 rounded-xl border border-lime-200/20 bg-black/25 px-4 py-3 text-sm md:col-span-2"
            placeholder={copy.formLabels.description}
          />
          <input
            className="rounded-xl border border-lime-200/20 bg-black/25 px-4 py-3 text-sm md:col-span-2"
            placeholder={copy.formLabels.bringing}
          />
          <input className="rounded-xl border border-lime-200/20 bg-black/25 px-4 py-3 text-sm" placeholder={copy.formLabels.website} />
          <input
            className="rounded-xl border border-lime-200/20 bg-black/25 px-4 py-3 text-sm"
            placeholder={copy.formLabels.social}
          />
          <input
            className="rounded-xl border border-lime-200/20 bg-black/25 px-4 py-3 text-sm md:col-span-2"
            placeholder={copy.formLabels.contact}
          />
          <button
            type="button"
            className="mt-2 rounded-full bg-lime-300 px-7 py-3 text-sm font-bold uppercase tracking-wide text-zinc-950 hover:bg-lime-200 md:col-span-2"
          >
            {copy.formLabels.submit}
          </button>
        </motion.form>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10">
        <SectionHeader eyebrow="Flow CDMX" title={copy.closingTitle} body={copy.closingBody} />
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20 md:px-10">
        <motion.div
          {...sectionAnim}
          className="rounded-3xl border border-lime-300/25 bg-gradient-to-r from-lime-300/10 to-cyan-300/10 p-8 text-center md:p-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime-200/85">{copy.finalEyebrow}</p>
          <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">{copy.finalTitle}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-neutral-200">{copy.finalBody}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#tiers-internacional"
              className="rounded-full bg-lime-300 px-7 py-3 text-sm font-bold uppercase tracking-wide text-zinc-950 hover:bg-lime-200"
            >
              {copy.finalCtaSponsor}
            </a>
            <a
              href="mailto:events@flownation.world?subject=Flow%20CDMX%20Sponsorship"
              className="rounded-full border border-lime-300/40 px-7 py-3 text-sm font-bold uppercase tracking-wide text-lime-100 hover:bg-lime-300/10"
            >
              {copy.finalCtaEmail}
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
