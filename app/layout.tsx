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
    "FLOW CDMX is a one-night gathering in Mexico City—film, live conversation, music, and wellness at Huerto Roma Verde. Partners, tickets, and RSVP.",
  keywords: [
    "FLOW CDMX",
    "Flow Nation",
    "Mexico City",
    "CDMX",
    "Huerto Roma Verde",
    "Roma Norte",
    "culture",
    "film",
    "wellness",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Flow Nation",
    title: "FLOW CDMX | Flow Nation",
    description:
      "A one-night Flow Nation experience in Mexico City—April 30 at Huerto Roma Verde. Tickets, partners, and RSVP.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FLOW CDMX | Flow Nation",
    description:
      "A one-night Flow Nation experience in Mexico City—April 30 at Huerto Roma Verde.",
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
