"use client";

import Link from "next/link";
import { Authority } from "@/components/sponsors/Authority";
import { ImpactBar } from "@/components/sponsors/ImpactBar";
import { SponsorTiersSection } from "@/components/sponsors/SponsorTiersSection";
import { SponsorsCTA } from "@/components/sponsors/SponsorsCTA";
import { SponsorsHero } from "@/components/sponsors/SponsorsHero";
import { ValueProps } from "@/components/sponsors/ValueProps";

export default function SponsorsPage() {
  return (
    <main>
      <header className="sticky top-0 z-50 border-b-[0.5px] border-obsidian-gold-border-subtle bg-obsidian-bg/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <Link href="/" className="text-xs font-medium uppercase tracking-[0.2em] text-obsidian-ivory">
            FLOW CDMX
          </Link>
          <Link href="/" className="text-[11px] font-medium uppercase tracking-[0.2em] text-obsidian-text-muted hover:text-obsidian-ivory">
            Evento
          </Link>
        </div>
      </header>
      <SponsorsHero />
      <ImpactBar />
      <Authority />
      <ValueProps />
      <SponsorTiersSection />
      <SponsorsCTA />
    </main>
  );
}
