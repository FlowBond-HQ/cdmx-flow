"use client";

import { motion } from "framer-motion";

const anim = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

const items: { title: string; body: string }[] = [
  {
    title: "Escenario propio",
    body: "Presenta tu marca, producto o proyecto frente a la audiencia completa.",
  },
  {
    title: "Producción de contenido",
    body: "Captura profesional de foto y video para tus canales.",
  },
  {
    title: "Visibilidad física",
    body: "Logo en escenario, impresos y señalética del venue.",
  },
  {
    title: "Activación en sitio",
    body: "Stand o experiencia inmersiva dentro del evento.",
  },
  {
    title: "Amplificación digital",
    body: "Presencia en sitio, redes del colectivo y ediciones impresas.",
  },
  {
    title: "Acceso al roadmap",
    body: "Prioridad y descuento en las próximas 4 ciudades (NYC, LA, Bogotá, Miami).",
  },
];

function IconStroke() {
  return (
    <svg className="h-8 w-8 shrink-0 text-obsidian-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden>
      <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
    </svg>
  );
}

export function ValueProps() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-16">
      <motion.p {...anim} className="text-xs font-medium uppercase tracking-[0.25em] text-obsidian-gold">
        — Por qué FLOW CDMX
      </motion.p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <motion.article
            key={item.title}
            {...anim}
            transition={{ ...anim.transition, delay: i * 0.04 }}
            className="rounded-[2px] border-[0.5px] border-obsidian-gold-border-subtle bg-obsidian-surface/40 p-5"
          >
            <IconStroke />
            <h3 className="mt-3 text-base font-medium text-obsidian-ivory">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-obsidian-text-muted">{item.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
