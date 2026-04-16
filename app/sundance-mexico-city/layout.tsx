import type { Metadata } from "next";
import type { ReactNode } from "react";

const siteUrl = "https://cdmx.flownation.world";

export const metadata: Metadata = {
  title: "Sundance Mexico City · FLOW CDMX (EN)",
  description:
    "FLOW CDMX — a curated cultural side experience during Sundance CDMX week. April 30 at Huerto Roma Verde. Film, music, wellness, and community.",
  alternates: {
    canonical: "/sundance-mexico-city",
    languages: {
      es: "/",
      en: "/sundance-mexico-city",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/sundance-mexico-city`,
    title: "FLOW CDMX · Sundance Mexico City",
    description:
      "A curated side experience during Sundance CDMX week — April 30 at Huerto Roma Verde, Mexico City.",
  },
};

export default function SundanceMexicoCityLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
