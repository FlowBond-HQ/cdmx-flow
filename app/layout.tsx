import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./flow-cdmx.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://cdmx.flownation.world";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FLOW CDMX | Flow Nation",
    template: "%s | FLOW CDMX",
  },
  description:
    "FLOW CDMX — 19 de junio en MUV Lab, Ciudad de México. Cine, música y tecnología regenerativa. Primer nodo de Flow Nation. Únete a la lista de espera.",
  keywords: [
    "FLOW CDMX",
    "Flow Nation",
    "Ciudad de México",
    "CDMX",
    "cine",
    "música",
    "tecnología regenerativa",
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
      "19 Junio · MUV Lab · CDMX. Cine, música y tecnología regenerativa — primer nodo de Flow Nation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FLOW CDMX | Flow Nation",
    description:
      "19 Junio · MUV Lab · CDMX. Cine, música y tecnología regenerativa. Boletos próximamente — únete a la lista de espera.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
