import type { Metadata } from "next";
import { IBM_Plex_Mono, Newsreader } from "next/font/google";
import { siteUrl } from "@/lib/site";
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
    default: "State Line — RUNAWAYS Roblox Guides",
    template: "%s | State Line",
  },
  description:
    "Source-linked RUNAWAYS Roblox guides for codes, classes, the Kansas-to-Mexico route, and the first-hour loop.",
  keywords: [
    "RUNAWAYS Roblox",
    "RUNAWAYS codes",
    "RUNAWAYS beginner guide",
    "RUNAWAYS classes",
    "how to reach Mexico RUNAWAYS",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${newsreader.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
