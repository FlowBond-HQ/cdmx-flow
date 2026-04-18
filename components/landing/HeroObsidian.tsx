"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { spanishObsidianHero } from "@/lib/spanish-obsidian-copy";

const anim = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export function HeroObsidian() {
  return (
    <section id="inicio" className="mx-auto flex min-h-[85vh] w-full max-w-7xl flex-col px-5 py-14 md:px-10 md:py-16">
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col justify-center">
          <motion.div {...anim}>
            <h1 className="select-none">
              <span className="block text-[56px] font-medium leading-[0.95] tracking-[-0.04em] text-obsidian-ivory md:text-[88px]">
                {spanishObsidianHero.titlePrimary}
              </span>
              <span className="mt-1 block text-[56px] font-light italic leading-[0.95] tracking-[-0.04em] text-obsidian-gold md:text-[88px]">
                {spanishObsidianHero.titleSecondary}
              </span>
            </h1>
            <p className="mt-8 max-w-[380px] text-base font-normal leading-relaxed text-obsidian-text-muted">
              {spanishObsidianHero.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={spanishObsidianHero.ctaPrimaryHref} variant="primary">
                {spanishObsidianHero.ctaPrimary}
              </Button>
              <Button href={spanishObsidianHero.ctaSecondaryHref} variant="secondary">
                {spanishObsidianHero.ctaSecondaryLabel}
              </Button>
            </div>
          </motion.div>
        </div>
        <p className="mt-12 self-end text-right text-sm font-normal text-obsidian-text-muted md:mt-8">
          {spanishObsidianHero.dateBadge}
        </p>
      </div>
    </section>
  );
}
