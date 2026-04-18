import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import "./flow-cdmx.css";

const fontCormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-cormorant",
  display: "swap",
});

const fontInter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://cdmx.flownation.world";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FLOW CDMX | Flow Nation",
    template: "%s | FLOW CDMX",
  },
  description:
    "FLOW CDMX — encuentro cultural el 30 de abril en Huerto Roma Verde, Ciudad de México. Cine, música, bienestar y comunidad. Boletos en MXN.",
  keywords: [
    "FLOW CDMX",
    "Flow Nation",
    "Ciudad de México",
    "CDMX",
    "Huerto Roma Verde",
    "Sundance CDMX",
    "cine",
    "cultura consciente",
    "evento",
  ],
  alternates: {
    canonical: "/",
    languages: {
      es: "/",
      en: "/sundance-mexico-city",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: "Flow Nation",
    title: "FLOW CDMX | Flow Nation",
    description:
      "30 de abril · Huerto Roma Verde · Ciudad de México. Cine, música, bienestar y comunidad — público local, narrativa en español.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FLOW CDMX | Flow Nation",
    description:
      "30 de abril · Huerto Roma Verde · Ciudad de México. Boletos desde $333 MXN.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fontCormorant.variable} ${fontInter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
