import type { Metadata } from "next";
import { GuideCard } from "@/components/guide-card";
import { JsonLd } from "@/components/json-ld";
import { PageFrame } from "@/components/site-shell";
import { categories, guides } from "@/lib/guides";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "All RUNAWAYS Roblox Guides",
  description:
    "Browse RUNAWAYS guides for beginners, codes, classes, and the Mexico escape route.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  const indexSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "RUNAWAYS Roblox guides",
    itemListElement: guides.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/guides/${guide.slug}`),
      name: guide.title,
    })),
  };

  return (
    <PageFrame>
      <JsonLd data={indexSchema} />
      <section className="page-hero">
        <div className="shell">
          <span className="eyebrow">Index</span>
          <h1>Every note, sorted by the problem.</h1>
          <p>Codes, classes, and the southbound route. No invented prices.</p>
        </div>
      </section>
      <section className="section shell">
        {categories.map((category) => {
          const categoryGuides = guides.filter((guide) => guide.category === category);
          return (
            <div key={category}>
              <h2>{category}</h2>
              <div className="guide-grid">
                {categoryGuides.map((guide) => (
                  <GuideCard key={guide.slug} guide={guide} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </PageFrame>
  );
}
