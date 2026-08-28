import type { Metadata } from "next";
import { GuideCard } from "@/components/guide-card";
import { JsonLd } from "@/components/json-ld";
import { PageFrame } from "@/components/site-shell";
import { categories, guides } from "@/lib/guides";
import { absoluteUrl, brandName, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "All Anime Origins Guides",
  description:
    "Browse Summon Desk guides for Anime Origins codes, beginner path, traits, summons, and progression.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Anime Origins guides",
    itemListElement: guides.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/guides/${guide.slug}`),
      name: guide.title,
    })),
  };

  return (
    <PageFrame>
      <JsonLd data={itemList} />
      <section className="page-hero">
        <div className="shell">
          <span className="eyebrow">Guides</span>
          <h1>Every page answers one search.</h1>
          <p>
            {brandName} keeps codes, redeem steps, Story, summons, and systems
            on separate URLs so Google can match the query.
          </p>
        </div>
      </section>
      <section className="section shell">
        {categories.map((category) => {
          const items = guides.filter((guide) => guide.category === category);
          if (!items.length) return null;
          return (
            <div key={category} style={{ marginBottom: 40 }}>
              <h2 className="eyebrow" style={{ marginBottom: 16 }}>
                {category}
              </h2>
              <div className="guide-grid">
                {items.map((guide) => (
                  <GuideCard key={guide.slug} guide={guide} />
                ))}
              </div>
            </div>
          );
        })}
        <p className="note" style={{ marginTop: 8 }}>
          Site home: {siteUrl}
        </p>
      </section>
    </PageFrame>
  );
}
