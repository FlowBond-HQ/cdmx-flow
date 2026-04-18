"use client";

import { motion } from "framer-motion";

const anim = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export function Authority() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-16">
      <motion.div {...anim} className="max-w-3xl space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-obsidian-gold">— Equipo</p>
        <h2 className="text-2xl font-medium text-obsidian-ivory md:text-3xl">
          Producido por veteranos de la industria cultural global.
        </h2>
        <p className="text-base leading-relaxed text-obsidian-text-muted">
          Coachella. Super Bowl. SXSW. GRAMMYs. NYFW. Refinery29. Vogue. Dior. VICE. El equipo detrás de FLOW ha producido
          algunos de los momentos culturales más importantes del continente — y ahora traemos esa precisión a CDMX.
        </p>
      </motion.div>
    </section>
  );
}
