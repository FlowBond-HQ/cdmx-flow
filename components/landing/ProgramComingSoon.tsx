"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { spanishObsidianPrograma } from "@/lib/spanish-obsidian-copy";

const anim = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

export function ProgramComingSoon() {
  return (
    <section id="programa" className="mx-auto w-full max-w-7xl px-5 py-14 md:px-10 md:py-16">
      <motion.div {...anim}>
        <SectionHeading eyebrow={spanishObsidianPrograma.eyebrow} title={spanishObsidianPrograma.title} />
        <p className="mt-6 max-w-2xl text-right text-base text-obsidian-text-muted md:ml-auto">
          {spanishObsidianPrograma.body}
        </p>
      </motion.div>
    </section>
  );
}
