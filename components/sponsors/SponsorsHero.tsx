"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const anim = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export function SponsorsHero() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-16">
      <motion.div {...anim} className="max-w-4xl space-y-6">
        <h1 className="text-3xl font-medium leading-tight tracking-tight text-obsidian-ivory md:text-5xl">
          Tu marca, al corazón del movimiento cultural más curado de CDMX.
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-obsidian-text-muted">
          FLOW no es un festival. Es donde arte, tecnología y comunidad consciente convergen — y tu marca vive una experiencia,
          no solo un logo en una lona.
        </p>
        <p className="max-w-3xl text-sm italic leading-relaxed text-obsidian-text-dim">
          Durante la temporada cultural que trae Sundance CDMX a la ciudad, FLOW reúne a la comunidad creativa que extiende y
          profundiza esa conversación.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Button href="/sponsors/aplicar" variant="primary">
            Aplicar como sponsor
          </Button>
          <Button href="/sponsor-deck.pdf" variant="outline">
            {/* TODO: upload PDF */}
            Descargar deck PDF
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
