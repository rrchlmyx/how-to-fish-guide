import type { Metadata } from "next";
import Link from "next/link";
import { GuideCard } from "@/components/guide-card";
import { JsonLd } from "@/components/json-ld";
import { PageFrame } from "@/components/site-shell";
import { guides } from "@/lib/guides";
import { brandName, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const siteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: brandName,
        description: "Source-linked Anime Origins Roblox guides.",
        inLanguage: "en",
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: brandName,
        url: siteUrl,
      },
    ],
  };

  return (
    <PageFrame>
      <JsonLd data={siteSchema} />
      <section className="hero">
        <div className="shell">
          <span className="eyebrow">Independent notes · 5 Sep 2026</span>
          <h1>
            Level 10.
            <br />
            <em>Claim the codes.</em>
          </h1>
          <p>
            Practical Anime Origins Roblox guides for codes, Story Mode,
            summons, traits, and Stat Prisms. Sources linked. Reward conflicts
            flagged.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/guides/beginner-guide">
              Start the beginner loop
            </Link>
            <Link className="button button-ghost" href="/guides/codes">
              Working codes
            </Link>
          </div>
        </div>
      </section>
      <section className="quick-strip">
        <div className="shell quick-grid">
          <div>
            <strong>01 · Story to 10</strong>
            <p>Unlock the orange Codes button before you dump Gems.</p>
          </div>
          <div>
            <strong>02 · Codes first</strong>
            <p>Redeem 100K!, Release!, and the launch set while they last.</p>
          </div>
          <div>
            <strong>03 · Carry + farm</strong>
            <p>One damage unit and one income unit beat ten fillers.</p>
          </div>
        </div>
      </section>
      <section className="section shell">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Field notes</span>
            <h2>Ten pages. Real search problems.</h2>
          </div>
          <Link href="/guides">All guides →</Link>
        </div>
        <div className="guide-grid">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
