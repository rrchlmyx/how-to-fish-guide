import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@/components/analytics";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: {
    google: "GcHdUjpDMNXHh259BUDUqo8uOewU6bmmEE9SL82oKOI",
  },
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
    default: "Hook & Haul — How to Fish Game Guides",
    template: "%s | Hook & Haul",
  },
  description:
    "Source-linked How to Fish game guides for islands, lures, fish, weapons, bosses, achievements, and fast progression.",
  keywords: [
    "How to Fish game",
    "How to Fish guide",
    "How to Fish islands",
    "How to Fish lures",
    "How to Fish fish list",
  ],
  openGraph: {
    title: "Hook & Haul — How to Fish Game Guides",
    description:
      "A practical, source-linked field guide for How to Fish on Steam.",
    type: "website",
    siteName: "Hook & Haul",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hook & Haul — How to Fish Game Guides",
    description:
      "A practical, source-linked field guide for How to Fish on Steam.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${plexMono.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
