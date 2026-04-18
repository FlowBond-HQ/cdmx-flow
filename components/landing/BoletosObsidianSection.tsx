"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PricingTier } from "@/components/ui/PricingTier";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ticketsEs } from "@/lib/flow-cdmx-content";
import { spanishObsidianTicketsSection } from "@/lib/spanish-obsidian-copy";

const anim = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

export function BoletosObsidianSection() {
  return (
    <section id="tickets" className="mx-auto w-full max-w-7xl px-5 py-14 md:px-10 md:py-16">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow={spanishObsidianTicketsSection.eyebrow}
          title={spanishObsidianTicketsSection.title}
        />
        <p className="text-right text-sm font-normal text-obsidian-text-muted md:max-w-sm">
          {spanishObsidianTicketsSection.subtitle}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {ticketsEs.map((t) => (
          <motion.div key={t.name} {...anim} className="flex flex-col">
            {t.featured && t.featuredBadge ? (
              <p className="mb-2 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-obsidian-gold">
                {t.featuredBadge}
              </p>
            ) : (
              <div className="mb-2 h-[14px]" aria-hidden />
            )}
            <PricingTier
              name={t.name}
              priceLine={t.priceLabel}
              secondaryLine={t.secondaryLine}
              description={t.description}
              highlighted={t.featured}
              className="h-full flex-1"
            />
          </motion.div>
        ))}
      </div>

      <motion.div {...anim} className="mt-12 flex justify-center">
        <Button href={spanishObsidianTicketsSection.ctaBelowHref} variant="primary">
          {spanishObsidianTicketsSection.ctaBelowGrid}
        </Button>
      </motion.div>

      <motion.div
        id="registro-boletos"
        {...anim}
        className="mt-6 rounded-[2px] border-[0.5px] border-obsidian-gold-border-subtle bg-obsidian-surface/60 p-6 md:p-8"
      >
        <h3 className="text-base font-medium text-obsidian-ivory">Link de boletos coming soon</h3>
        <p className="mt-2 text-sm text-obsidian-text-muted">
          Mientras activamos el checkout, deja tus datos para enviarte el enlace de compra en cuanto esté listo.
        </p>
      </motion.div>
    </section>
  );
}
