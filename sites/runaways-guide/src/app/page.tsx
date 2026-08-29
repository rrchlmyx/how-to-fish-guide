import type { Metadata } from "next";
import Link from "next/link";
import { GuideCard } from "@/components/guide-card";
import { JsonLd } from "@/components/json-ld";
import { PageFrame } from "@/components/site-shell";
import { guides } from "@/lib/guides";
import { siteUrl } from "@/lib/site";

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
        name: "State Line",
        description: "Source-linked RUNAWAYS Roblox guides.",
        inLanguage: "en",
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "State Line",
        url: siteUrl,
      },
    ],
  };

  return (
    <PageFrame>
      <JsonLd data={siteSchema} />
      <section className="hero">
        <div className="shell">
          <span className="eyebrow">Independent notes · 30 Aug 2026</span>
          <h1>
            Rob. Pawn.
            <br />
            <em>Make the border.</em>
          </h1>
          <p>
            Practical RUNAWAYS Roblox guides for codes, classes, and the
            Kansas–Oklahoma–Texas–Mexico route. Sources linked. Conflicts flagged.
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
            <strong>01 · Codes first</strong>
            <p>Redeem SUPERCAT and RUN if they still work in Shop.</p>
          </div>
          <div>
            <strong>02 · Crowbar + bag</strong>
            <p>ATMs and inventory space beat a fancy gun on hour one.</p>
          </div>
          <div>
            <strong>03 · South only</strong>
            <p>Kansas, Oklahoma, Texas, then the Mexico gate.</p>
          </div>
        </div>
      </section>
      <section className="section shell">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Field notes</span>
            <h2>Four pages. Four search problems.</h2>
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
