import type { Metadata } from "next";
import { IBM_Plex_Mono, Newsreader } from "next/font/google";
import { brandName, siteUrl } from "@/lib/site";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  title: {
    default: `${brandName} — Anime Origins Roblox Guides`,
    template: `%s | ${brandName}`,
  },
  description:
    "Source-linked Anime Origins Roblox guides for codes, redeem steps, Story Mode, summons, traits, and Stat Prisms.",
  keywords: [
    "Anime Origins",
    "Anime Origins codes",
    "Anime Origins Roblox",
    "Anime Origins beginner guide",
    "Anime Origins traits",
    "how to redeem Anime Origins codes",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${newsreader.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
