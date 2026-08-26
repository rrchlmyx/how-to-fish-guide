import type { Metadata } from "next";
import { GuideCard } from "@/components/guide-card";
import { JsonLd } from "@/components/json-ld";
import { PageFrame } from "@/components/site-shell";
import { categories, guides } from "@/lib/guides";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "All How to Fish Guides",
  description:
    "Browse source-linked How to Fish guides covering beginner progression, islands, lures, fish, weapons, bosses, navigation, money, and achievements.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  const indexSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "How to Fish game guides",
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
          <span className="eyebrow">Field guide index</span>
          <h1>Every answer, sorted by the problem you are solving.</h1>
          <p>
            Ten focused pages built from current sources. No padded news, invented
            values, or copy-pasted game text.
          </p>
        </div>
      </section>
      <section className="section shell guide-index">
        {categories.map((category) => {
          const categoryGuides = guides.filter((guide) => guide.category === category);
          return (
            <div className="category-section" key={category}>
              <div className="category-heading">
                <span>{categoryGuides.length.toString().padStart(2, "0")}</span>
                <h2>{category}</h2>
              </div>
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

