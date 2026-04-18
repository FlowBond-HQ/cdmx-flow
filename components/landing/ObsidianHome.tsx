"use client";

import { BoletosObsidianSection } from "./BoletosObsidianSection";
import { HeroObsidian } from "./HeroObsidian";
import { ObsidianLayout } from "./ObsidianLayout";
import { SobreFlowSection } from "./SobreFlowSection";

/** Spanish landing — section order filled in across commits 5–9. */
export default function ObsidianHome() {
  return (
    <ObsidianLayout>
      <HeroObsidian />
      <SobreFlowSection />
      <div id="posibles-artistas" className="scroll-mt-28" />
      <div id="equipo" className="scroll-mt-28" />
      <div id="programa" className="scroll-mt-28" />
      <BoletosObsidianSection />
    </ObsidianLayout>
  );
}
