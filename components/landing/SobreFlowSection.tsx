"use client";

import { motion } from "framer-motion";
import { spanishObsidianSobre } from "@/lib/spanish-obsidian-copy";

const anim = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export function SobreFlowSection() {
  return (
    <section id="sobre" className="mx-auto w-full max-w-7xl px-5 py-14 md:px-10 md:py-16">
      <motion.div {...anim} className="max-w-3xl space-y-6">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-obsidian-gold">{spanishObsidianSobre.eyebrow}</p>
        <h2 className="text-3xl font-medium text-obsidian-ivory md:text-4xl">{spanishObsidianSobre.title}</h2>
        <div className="space-y-4 text-base font-normal leading-relaxed text-obsidian-text-muted">
          <p>{spanishObsidianSobre.lead}</p>
          <p>
            {spanishObsidianSobre.alliancePrefix}{" "}
            <strong className="font-medium text-obsidian-ivory">{spanishObsidianSobre.allianceOrgs[0]}</strong>
            {" y "}
            <strong className="font-medium text-obsidian-ivory">{spanishObsidianSobre.allianceOrgs[1]}</strong>.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
