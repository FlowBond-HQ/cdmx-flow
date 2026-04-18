"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { spanishObsidianSponsorsTeaser } from "@/lib/spanish-obsidian-copy";

const anim = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

export function SponsorsTeaser() {
  return (
    <section id="sponsors-teaser" className="mx-auto w-full max-w-7xl px-5 py-14 md:px-10 md:py-16">
      <motion.div
        {...anim}
        className="rounded-[2px] border-[0.5px] border-obsidian-gold-border-subtle bg-obsidian-surface/40 px-6 py-12 text-center md:px-12 md:py-16"
      >
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-obsidian-gold">{spanishObsidianSponsorsTeaser.eyebrow}</p>
        <h2 className="mt-4 text-2xl font-medium text-obsidian-ivory md:text-3xl">{spanishObsidianSponsorsTeaser.title}</h2>
        <p className="mx-auto mt-3 max-w-lg text-obsidian-text-muted">{spanishObsidianSponsorsTeaser.body}</p>
        <div className="mt-8 flex justify-center">
          <Button href={spanishObsidianSponsorsTeaser.href} variant="outline">
            {spanishObsidianSponsorsTeaser.cta}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
