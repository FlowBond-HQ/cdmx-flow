"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { spanishObsidianFooter, spanishObsidianNav } from "@/lib/spanish-obsidian-copy";

export function ObsidianLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-obsidian-bg font-sans text-obsidian-ivory">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(201,169,94,0.08),transparent),linear-gradient(180deg,#0E0D0B_0%,#12100c_100%)]" />

      <header className="sticky top-0 z-50 border-b-[0.5px] border-obsidian-gold-border-subtle bg-obsidian-bg/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-10">
          <a href="#inicio" className="text-sm font-medium uppercase tracking-[0.12em] text-obsidian-ivory">
            FLOW CDMX
          </a>
          <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-[11px] font-medium uppercase tracking-[0.2em] text-obsidian-text-muted">
            <a href="#sobre" className="transition hover:text-obsidian-ivory">
              {spanishObsidianNav.sobre}
            </a>
            <a href="#posibles-artistas" className="transition hover:text-obsidian-ivory">
              {spanishObsidianNav.posibles}
            </a>
            <a href="#equipo" className="transition hover:text-obsidian-ivory">
              {spanishObsidianNav.equipo}
            </a>
            <a href="#programa" className="transition hover:text-obsidian-ivory">
              {spanishObsidianNav.programa}
            </a>
            <a href="#tickets" className="transition hover:text-obsidian-ivory">
              {spanishObsidianNav.boletos}
            </a>
            <span className="hidden h-3 w-px bg-obsidian-gold-border-subtle sm:inline" aria-hidden />
            <Link href="/sundance-mexico-city" className="text-obsidian-text-dim hover:text-obsidian-ivory">
              English
            </Link>
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t-[0.5px] border-obsidian-gold-border-subtle bg-obsidian-bg">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-14 md:px-10 md:py-16">
          <p className="text-lg font-medium tracking-tight text-obsidian-ivory">FLOW CDMX</p>
          <p className="text-sm text-obsidian-text-muted">{spanishObsidianFooter.line1}</p>
          <p className="text-xs text-obsidian-text-dim">{spanishObsidianFooter.rights}</p>
        </div>
      </footer>
    </div>
  );
}
