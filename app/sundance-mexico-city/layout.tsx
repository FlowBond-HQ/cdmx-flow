import type { Metadata } from "next";
import type { ReactNode } from "react";

const siteUrl = "https://cdmx.flownation.world";

export const metadata: Metadata = {
  title: "FLOW CDMX · June (EN)",
  description:
    "FLOW CDMX — a multi-city cultural experience at the intersection of film, music, and regenerative technology. June in Mexico City. Venue TBA.",
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
    title: "FLOW CDMX · June · Mexico City",
    description:
      "A multi-city cultural experience — film, music, and regenerative technology. June in Mexico City, venue TBA.",
  },
};

export default function SundanceMexicoCityLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
