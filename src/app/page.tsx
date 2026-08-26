import type { Metadata } from "next";
import Link from "next/link";
import { GuideCard } from "@/components/guide-card";
import { JsonLd } from "@/components/json-ld";
import { FishMark, PageFrame } from "@/components/site-shell";
import { guides } from "@/lib/guides";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const featured = guides.slice(0, 6);

  const siteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Hook & Haul",
        description:
          "Source-linked How to Fish game guides for islands, lures, fish, weapons, bosses, and progression.",
        inLanguage: "en",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Hook & Haul",
        url: siteUrl,
        logo: `${siteUrl}/icon.svg`,
      },
    ],
  };

  return (
    <PageFrame>
      <JsonLd data={siteSchema} />
      <section className="hero">
        <div className="hero-watermark" aria-hidden="true">
          <span>LAT 57° 42&apos; N</span>
          <span>DEPTH 124 M</span>
        </div>
        <div className="shell hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Independent field guide · Updated Aug 26, 2026</span>
            <h1>
              Catch smarter.
              <br />
              <em>Survive longer.</em>
            </h1>
            <p>
              Straight-to-the-point guides for every island, lure, fish, weapon, and
              boss in <strong>How to Fish</strong>.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/guides/beginner-guide">
                Start the beginner route <span aria-hidden="true">→</span>
              </Link>
              <Link className="button button-ghost" href="/guides">
                Browse all guides
              </Link>
            </div>
            <div className="signal-row" aria-label="Guide status">
              <span><i className="signal-dot" />10 focused guides</span>
              <span>Source-linked</span>
              <span>No invented codes</span>
            </div>
          </div>
          <div className="sonar-card" aria-label="Progression sonar illustration">
            <div className="sonar">
              <div className="sonar-ring ring-one" />
              <div className="sonar-ring ring-two" />
              <div className="sonar-ring ring-three" />
              <div className="sonar-line" />
              <span className="ping ping-one" />
              <span className="ping ping-two" />
              <span className="ping ping-three" />
              <FishMark />
            </div>
            <div className="sonar-meta">
              <div>
                <span>Current route</span>
                <strong>Lighthouse → Volcano</strong>
              </div>
              <div>
                <span>Core rule</span>
                <strong>Keep boss trophies</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-strip">
        <div className="shell quick-grid">
          <div>
            <span className="strip-number">01</span>
            <p><strong>Talk first.</strong> NPC chains control progress.</p>
          </div>
          <div>
            <span className="strip-number">02</span>
            <p><strong>Match the lure.</strong> Each island has a tier.</p>
          </div>
          <div>
            <span className="strip-number">03</span>
            <p><strong>Inspect trophies.</strong> Do not sell the key item.</p>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div>
            <span className="eyebrow dark">Field notes</span>
            <h2>Get unstuck fast</h2>
          </div>
          <Link href="/guides">View all 10 guides <span aria-hidden="true">→</span></Link>
        </div>
        <div className="guide-grid">
          {featured.map((guide, index) => (
            <GuideCard key={guide.slug} guide={guide} featured={index === 0} />
          ))}
        </div>
      </section>

      <section className="route-section">
        <div className="shell route-grid">
          <div>
            <span className="eyebrow">The source-linked route</span>
            <h2>Five stops. Follow each quest hand-in.</h2>
            <p>
              Follow the quest chain instead of sailing at random. Every route note links
              back to the current sources used to verify it.
            </p>
            <Link className="button button-primary" href="/guides/islands-progression">
              Open island walkthrough
            </Link>
          </div>
          <ol className="route-map">
            {[
              ["Lighthouse", "Spider Crab"],
              ["Forest", "Giant Piranha"],
              ["Desert", "Pufferfish"],
              ["Rocks", "Terrorizing Bird"],
              ["Volcano", "Whale experiment"],
            ].map(([place, objective], index) => (
              <li key={place}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{place}</strong>
                  <small>{objective}</small>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </PageFrame>
  );
}
