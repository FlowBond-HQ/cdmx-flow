"use client";

import { BoletosObsidianSection } from "./BoletosObsidianSection";
import { HeroObsidian } from "./HeroObsidian";
import { ObsidianLayout } from "./ObsidianLayout";
import { PossibleArtists } from "./PossibleArtists";
import { SobreFlowSection } from "./SobreFlowSection";
import { TeamGrid } from "./TeamGrid";

export default function ObsidianHome() {
  return (
    <ObsidianLayout>
      <HeroObsidian />
      <SobreFlowSection />
      <PossibleArtists />
      <TeamGrid />
      <div id="programa" className="scroll-mt-28" />
      <BoletosObsidianSection />
    </ObsidianLayout>
  );
}
