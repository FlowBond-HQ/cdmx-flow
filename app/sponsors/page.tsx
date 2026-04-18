import type { Metadata } from "next";
import { SponsorsPageClient } from "@/lib/sponsors-page";
import { sponsorsCopyEs } from "@/lib/sponsors-content";

export const metadata: Metadata = {
  title: sponsorsCopyEs.metaTitle,
  description:
    "Patrocina Flow CDMX durante la semana de Sundance Film Festival CDMX — niveles internacionales, patrocinio nacional, revista y vendors.",
};

export default function SponsorsPage() {
  return <SponsorsPageClient copy={sponsorsCopyEs} />;
}
