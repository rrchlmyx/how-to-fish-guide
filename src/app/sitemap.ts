import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://how-to-fish-guide-mu.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-08-25T00:00:00.000Z");
  const staticRoutes = ["", "/guides", "/about", "/contact", "/privacy", "/terms"];

  return [
    ...staticRoutes.map((route, index) => ({
      url: `${baseUrl}${route}`,
      lastModified: updated,
      changeFrequency: index < 2 ? ("daily" as const) : ("monthly" as const),
      priority: index === 0 ? 1 : index === 1 ? 0.9 : 0.4,
    })),
    ...guides.map((guide) => ({
      url: `${baseUrl}/guides/${guide.slug}`,
      lastModified: updated,
      changeFrequency: "daily" as const,
      priority: guide.slug === "beginner-guide" ? 0.9 : 0.8,
    })),
  ];
}

