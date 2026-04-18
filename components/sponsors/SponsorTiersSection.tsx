"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PricingTier } from "@/components/ui/PricingTier";
import { sponsorTiers } from "@/lib/data/sponsors";

const fmtMxn = (n: number) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(n);

const anim = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

export function SponsorTiersSection() {
  return (
    <section id="tiers" className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-16">
      <motion.div {...anim} className="mb-10 max-w-2xl space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-obsidian-gold">— Niveles</p>
        <h2 className="text-2xl font-medium text-obsidian-ivory md:text-3xl">Patrocinio</h2>
      </motion.div>
      <div className="grid gap-4 lg:grid-cols-3">
        {sponsorTiers.map((tier) => (
          <motion.div key={tier.id} {...anim} className="flex flex-col">
            {tier.highlighted ? (
              <p className="mb-2 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-obsidian-gold">
                Más popular
              </p>
            ) : (
              <div className="mb-2 h-[14px]" aria-hidden />
            )}
            <PricingTier
              name={tier.name}
              priceLine={`$${tier.priceUSD.toLocaleString("en-US")} USD`}
              secondaryLine={`${fmtMxn(tier.priceMXN)} MXN`}
              description={tier.tagline}
              highlighted={!!tier.highlighted}
              className="h-full flex-1"
              footer={
                <Button href="/sponsors/aplicar" variant={tier.highlighted ? "primary" : "outline"} className="w-full">
                  {tier.cta}
                </Button>
              }
            />
            <ul className="mt-4 space-y-2 border-t-[0.5px] border-obsidian-gold-border-subtle pt-4 text-sm text-obsidian-text-muted">
              {tier.benefits.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-obsidian-gold">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
