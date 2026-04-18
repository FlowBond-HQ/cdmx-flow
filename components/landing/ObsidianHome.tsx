"use client";

import { BoletosObsidianSection } from "./BoletosObsidianSection";
import { HeroObsidian } from "./HeroObsidian";
import { ObsidianLayout } from "./ObsidianLayout";
import { PossibleArtists } from "./PossibleArtists";
import { ProgramComingSoon } from "./ProgramComingSoon";
import { SobreFlowSection } from "./SobreFlowSection";
import { SponsorsTeaser } from "./SponsorsTeaser";
import { TeamGrid } from "./TeamGrid";

export default function ObsidianHome() {
  return (
    <ObsidianLayout>
      <HeroObsidian />
      <SobreFlowSection />
      <PossibleArtists />
      <TeamGrid />
      <ProgramComingSoon />
      <BoletosObsidianSection />
      <SponsorsTeaser />
    </ObsidianLayout>
  );
}
