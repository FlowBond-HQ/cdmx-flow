"use client";

import { motion } from "framer-motion";
import { impactMetrics } from "@/lib/data/impact";

const anim = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

export function ImpactBar() {
  return (
    <section className="border-y-[0.5px] border-obsidian-gold-border-subtle bg-obsidian-surface/30">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4 md:px-10 md:py-12">
        {impactMetrics.map((m, i) => (
          <motion.div key={m.label} {...anim} transition={{ ...anim.transition, delay: i * 0.05 }} className="text-right">
            <p className="text-2xl font-medium tabular-nums text-obsidian-ivory md:text-3xl">{m.value}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-obsidian-text-muted">{m.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
