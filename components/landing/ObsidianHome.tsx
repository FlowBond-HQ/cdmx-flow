"use client";

import { BoletosObsidianSection } from "./BoletosObsidianSection";
import { HeroObsidian } from "./HeroObsidian";
import { ObsidianLayout } from "./ObsidianLayout";
import { PossibleArtists } from "./PossibleArtists";
import { SobreFlowSection } from "./SobreFlowSection";

export default function ObsidianHome() {
  return (
    <ObsidianLayout>
      <HeroObsidian />
      <SobreFlowSection />
      <PossibleArtists />
      <div id="equipo" className="scroll-mt-28" />
      <div id="programa" className="scroll-mt-28" />
      <BoletosObsidianSection />
    </ObsidianLayout>
  );
}
