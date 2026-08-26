import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { absoluteUrl, staticIndexablePaths } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date();
  return [
    ...staticIndexablePaths.map((path, index) => ({
      url: absoluteUrl(path),
      lastModified: updated,
      changeFrequency: index < 2 ? ("daily" as const) : ("monthly" as const),
      priority: index === 0 ? 1 : 0.8,
    })),
    ...guides.map((guide) => ({
      url: absoluteUrl(`/guides/${guide.slug}`),
      lastModified: updated,
      changeFrequency: "daily" as const,
      priority: guide.slug === "codes" ? 0.95 : 0.8,
    })),
  ];
}
