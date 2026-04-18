"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { possibleArtists } from "@/lib/data/artists";
import { spanishObsidianPossibleArtists } from "@/lib/spanish-obsidian-copy";

const anim = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

export function PossibleArtists() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="posibles-artistas" className="mx-auto w-full max-w-7xl px-5 py-14 md:px-10 md:py-16">
      <motion.div {...anim} className="mb-10 max-w-3xl space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-obsidian-gold">
          {spanishObsidianPossibleArtists.eyebrow}
        </p>
        <h2 className="text-3xl font-medium text-obsidian-ivory md:text-4xl">{spanishObsidianPossibleArtists.title}</h2>
        <p className="text-base leading-relaxed text-obsidian-text-muted">{spanishObsidianPossibleArtists.subtitle}</p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {possibleArtists.map((artist) => {
          const expanded = expandedId === artist.id;
          return (
            <motion.article
              key={artist.id}
              {...anim}
              className="flex flex-col rounded-[2px] border-[0.5px] border-obsidian-gold-border-subtle bg-obsidian-surface/50 p-5"
            >
              <h3 className="text-base font-medium text-obsidian-ivory">{artist.name}</h3>
              <p className="mt-1 text-xs text-obsidian-gold/80">{artist.tagline}</p>
              <div className="mt-3 flex-1">
                <p
                  className={`text-sm leading-relaxed text-obsidian-text-muted ${expanded ? "" : "line-clamp-2"}`}
                >
                  {artist.bio}
                </p>
                <button
                  type="button"
                  onClick={() => setExpandedId((id) => (id === artist.id ? null : artist.id))}
                  className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-obsidian-gold hover:text-obsidian-ivory"
                >
                  {expanded ? "Ver menos" : "Leer más"}
                </button>
              </div>
              {artist.instagramFollowers ? (
                <p className="mt-3 text-xs text-obsidian-text-dim">{artist.instagramFollowers}</p>
              ) : null}
              {artist.primaryLink ? (
                <a
                  href={artist.primaryLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-xs font-medium text-obsidian-gold underline decoration-obsidian-gold/50 underline-offset-2 hover:decoration-obsidian-gold"
                >
                  {artist.primaryLink.label}
                </a>
              ) : null}
            </motion.article>
          );
        })}
        <motion.article
          {...anim}
          className="flex min-h-[200px] flex-col items-center justify-center rounded-[2px] border border-dashed border-obsidian-gold-border-medium bg-transparent p-5 text-center"
        >
          <p className="text-sm font-medium text-obsidian-text-muted">{spanishObsidianPossibleArtists.placeholderTitle}</p>
        </motion.article>
      </div>

      <motion.div {...anim} className="mt-20 flex flex-col items-center gap-4 py-10 text-center md:py-16">
        <h3 className="text-[28px] font-medium text-obsidian-ivory">{spanishObsidianPossibleArtists.ctaHeading}</h3>
        <p className="max-w-md text-obsidian-text-muted">{spanishObsidianPossibleArtists.ctaSub}</p>
        <Button href={spanishObsidianPossibleArtists.ctaHref} variant="outline">
          {spanishObsidianPossibleArtists.ctaButton}
        </Button>
      </motion.div>
    </section>
  );
}
