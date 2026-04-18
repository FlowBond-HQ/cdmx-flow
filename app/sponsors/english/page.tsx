import type { Metadata } from "next";
import { SponsorsPageClient } from "@/lib/sponsors-page";
import { sponsorsCopyEn } from "@/lib/sponsors-content";

export const metadata: Metadata = {
  title: sponsorsCopyEn.metaTitle,
  description:
    "Sponsor Flow CDMX during Sundance Film Festival CDMX week — international tiers, national sponsorship, magazine, and vendors.",
};

export default function SponsorsEnglishPage() {
  return <SponsorsPageClient copy={sponsorsCopyEn} />;
}
