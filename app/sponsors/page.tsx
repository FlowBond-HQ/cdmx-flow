"use client";

import { motion } from "framer-motion";
import { flowSteps, globalCities, sponsorTiers } from "@/lib/sponsors-content";

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

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-[#070909] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_15%,rgba(132,204,22,0.16),transparent_32%),radial-gradient(circle_at_90%_10%,rgba(56,189,248,0.12),transparent_28%),linear-gradient(180deg,#070909_0%,#0b1110_35%,#070909_100%)]" />

      <section className="mx-auto flex min-h-[82vh] max-w-7xl flex-col justify-center px-5 py-20 md:px-10">
        <motion.p {...sectionAnim} className="text-sm uppercase tracking-[0.24em] text-lime-300/80">
          FlowNation × FlowBond — Sponsors
        </motion.p>
        <motion.h1 {...sectionAnim} className="mt-3 max-w-5xl text-5xl font-black leading-[1.02] md:text-8xl">
          Enter the FlowNation Network
        </motion.h1>
        <motion.p {...sectionAnim} className="mt-6 max-w-3xl text-lg text-neutral-200 md:text-2xl">
          A multi-city ecosystem where culture, technology and community converge through live experiences powered by
          FlowBond
        </motion.p>
        <motion.p {...sectionAnim} className="mt-4 max-w-3xl text-neutral-400">
          Flow CDMX is part of FlowNation, a growing network of cultural events across global cities. Sponsors don’t
          just support an event — they activate presence across a living system.
        </motion.p>
        <motion.div {...sectionAnim} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#tiers"
            className="rounded-full bg-lime-300 px-7 py-3 text-sm font-bold uppercase tracking-wide text-zinc-950 transition hover:bg-lime-200"
          >
            Become a Sponsor
          </a>
          <a
            href="#contact"
            className="rounded-full border border-lime-300/45 px-7 py-3 text-sm font-bold uppercase tracking-wide text-lime-200 transition hover:bg-lime-300/10"
          >
            Contact
          </a>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10">
        <SectionHeader eyebrow="Concept" title="Not an Event. A Network." />
        <motion.div {...sectionAnim} className="max-w-4xl space-y-4 text-neutral-300">
          <p>
            FlowNation is a global network of cultural experiences happening across cities, connecting artists,
            creators, communities and brands through real-world interactions.
          </p>
          <p>FlowBond powers the infrastructure. DANZ activates participation.</p>
          <p>
            Brands integrate into a system where presence becomes measurable engagement through missions, content and
            community interaction.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10">
        <SectionHeader eyebrow="Flow System" title="How Flow Works" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {flowSteps.map((step, idx) => (
            <motion.article
              key={step.title}
              {...sectionAnim}
              transition={{ ...sectionAnim.transition, delay: idx * 0.06 }}
              className="rounded-2xl border border-lime-200/10 bg-zinc-900/70 p-6 transition hover:-translate-y-1 hover:border-lime-300/35"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-300/85">{`0${idx + 1}`}</p>
              <h3 className="mt-3 text-xl font-extrabold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">{step.description}</p>
            </motion.article>
          ))}
        </div>
        <motion.p {...sectionAnim} className="mt-8 text-center text-sm text-neutral-400">
          DANZ = interaction layer · FlowBond = infrastructure · FlowNation = global network
        </motion.p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10">
        <SectionHeader
          eyebrow="Global Flow"
          title="A Constant Global Flow"
          body="FlowNation is continuously activating experiences across cities, building local networks that keep the movement alive through different venues, formats and cultural moments."
        />
        <motion.div {...sectionAnim} className="flex flex-wrap gap-3">
          {globalCities.map((city) => (
            <span
              key={city}
              className="rounded-full border border-cyan-300/25 bg-cyan-200/10 px-4 py-2 text-sm font-medium text-cyan-100"
            >
              {city}
            </span>
          ))}
        </motion.div>
        <motion.p {...sectionAnim} className="mt-6 text-neutral-300">
          Flow CDMX is the next major activation. More details about the full tour will be announced soon.
        </motion.p>
      </section>

      <section id="tiers" className="mx-auto max-w-7xl px-5 py-20 md:px-10">
        <SectionHeader eyebrow="Sponsor Tiers" title="Flexible partner models for impact" />
        <div className="grid gap-5 md:grid-cols-2">
          {sponsorTiers.map((tier) => (
            <motion.article
              key={tier.name}
              {...sectionAnim}
              className={`rounded-2xl border p-7 ${
                tier.featured
                  ? "border-lime-300/40 bg-lime-300/5 shadow-[0_0_50px_-18px_rgba(132,204,22,0.35)]"
                  : "border-lime-200/10 bg-zinc-900/70"
              }`}
            >
              <h3 className="text-xl font-black text-white">{tier.name}</h3>
              <p className="mt-3 text-4xl font-black tracking-tight text-lime-200">{tier.price}</p>
              <ul className="mt-5 space-y-2 text-sm text-neutral-300">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-lime-300">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10">
        <SectionHeader
          eyebrow="Vendors"
          title="Vendors & Artists"
          body="Join FlowNation and showcase your products, art or experiences within the event. Fee: $1,000 MXN."
        />
        <motion.form
          {...sectionAnim}
          className="grid gap-3 rounded-2xl border border-lime-200/10 bg-zinc-900/70 p-6 md:grid-cols-2 md:p-8"
        >
          <input className="rounded-xl border border-lime-200/20 bg-black/25 px-4 py-3 text-sm" placeholder="Name" />
          <input className="rounded-xl border border-lime-200/20 bg-black/25 px-4 py-3 text-sm" placeholder="Brand" />
          <textarea
            className="min-h-24 rounded-xl border border-lime-200/20 bg-black/25 px-4 py-3 text-sm md:col-span-2"
            placeholder="Description"
          />
          <input
            className="rounded-xl border border-lime-200/20 bg-black/25 px-4 py-3 text-sm md:col-span-2"
            placeholder="What are you bringing?"
          />
          <input className="rounded-xl border border-lime-200/20 bg-black/25 px-4 py-3 text-sm" placeholder="Website" />
          <input
            className="rounded-xl border border-lime-200/20 bg-black/25 px-4 py-3 text-sm"
            placeholder="Social media links"
          />
          <input
            className="rounded-xl border border-lime-200/20 bg-black/25 px-4 py-3 text-sm md:col-span-2"
            placeholder="Contact"
          />
          <button
            type="button"
            className="mt-2 rounded-full bg-lime-300 px-7 py-3 text-sm font-bold uppercase tracking-wide text-zinc-950 hover:bg-lime-200 md:col-span-2"
          >
            Apply Now
          </button>
        </motion.form>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20 md:px-10">
        <motion.div
          {...sectionAnim}
          className="rounded-3xl border border-lime-300/25 bg-gradient-to-r from-lime-300/10 to-cyan-300/10 p-8 text-center md:p-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime-200/85">Final CTA</p>
          <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">Activate Your Brand in FlowNation</h2>
          <p className="mx-auto mt-4 max-w-3xl text-neutral-200">
            Be part of a global network where culture, technology and community converge.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#tiers"
              className="rounded-full bg-lime-300 px-7 py-3 text-sm font-bold uppercase tracking-wide text-zinc-950 hover:bg-lime-200"
            >
              Become a Sponsor
            </a>
            <a
              href="mailto:events@flownation.world?subject=FlowNation%20Sponsor%20Inquiry"
              className="rounded-full border border-lime-300/40 px-7 py-3 text-sm font-bold uppercase tracking-wide text-lime-100 hover:bg-lime-300/10"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
