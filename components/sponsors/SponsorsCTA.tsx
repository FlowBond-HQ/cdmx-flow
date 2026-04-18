"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const anim = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export function SponsorsCTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 md:px-10 md:pb-24">
      <motion.div
        {...anim}
        className="rounded-[2px] border-[0.5px] border-obsidian-gold-border-medium bg-obsidian-surface/50 px-6 py-12 text-center md:px-12 md:py-16"
      >
        <h2 className="text-2xl font-medium text-obsidian-ivory md:text-3xl">¿Tu marca encaja con el Flow?</h2>
        <p className="mx-auto mt-4 max-w-xl text-obsidian-text-muted">
          Agendemos una conversación de 20 minutos para diseñar tu presencia a la medida.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/sponsors/aplicar" variant="primary">
            Aplicar como sponsor
          </Button>
          <Button href="https://calendly.com/flow-cdmx" variant="secondary">
            {/* TODO: create Calendly */}
            Agendar llamada
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
