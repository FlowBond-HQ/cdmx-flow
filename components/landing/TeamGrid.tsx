"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { team } from "@/lib/data/team";
import { spanishObsidianEquipo } from "@/lib/spanish-obsidian-copy";

const anim = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

export function TeamGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="equipo" className="mx-auto w-full max-w-7xl px-5 py-14 md:px-10 md:py-16">
      <motion.div {...anim} className="mb-10 space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-obsidian-gold">{spanishObsidianEquipo.eyebrow}</p>
        <h2 className="text-3xl font-medium text-obsidian-ivory md:text-4xl">{spanishObsidianEquipo.title}</h2>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => {
          const expanded = expandedId === member.id;
          return (
            <motion.article
              key={member.id}
              {...anim}
              className="flex flex-col rounded-[2px] border-[0.5px] border-obsidian-gold-border-subtle bg-obsidian-surface/50 p-5"
            >
              <h3 className="text-base font-medium text-obsidian-ivory">{member.name}</h3>
              <p className="mt-1 text-sm text-obsidian-gold">{member.role}</p>
              <div className="mt-3 flex-1">
                <p className={`text-sm leading-relaxed text-obsidian-text-muted ${expanded ? "" : "line-clamp-3"}`}>
                  {member.bio}
                </p>
                <button
                  type="button"
                  onClick={() => setExpandedId((id) => (id === member.id ? null : member.id))}
                  className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-obsidian-gold hover:text-obsidian-ivory"
                >
                  {expanded ? "Ver menos" : "Leer más"}
                </button>
              </div>
              {member.instagramFollowers ? (
                <p className="mt-3 text-xs text-obsidian-text-dim">{member.instagramFollowers}</p>
              ) : null}
              {member.secondaryFollowers ? (
                <p className="mt-1 text-xs text-obsidian-text-dim">{member.secondaryFollowers}</p>
              ) : null}
              {member.primaryLink ? (
                <a
                  href={member.primaryLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-xs font-medium text-obsidian-gold underline decoration-obsidian-gold/50 underline-offset-2"
                >
                  {member.primaryLink.label}
                </a>
              ) : null}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
