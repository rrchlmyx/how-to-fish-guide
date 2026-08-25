import type { Metadata } from "next";
import { PageFrame } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Research Workbook",
  robots: { index: false, follow: false },
};

const candidates = [
  {
    game: "How to Fish",
    trend: "Strong rise",
    kd: "21",
    volume: "480 / month",
    longTails: "20+",
    competition: "Medium",
    decision: "DO",
    evidence: "10K launch-day CCU → 268K+ by Aug 24; 1M copies in two days",
  },
  {
    game: "Anime Origins",
    trend: "Rise / early plateau",
    kd: "11",
    volume: "390 / month",
    longTails: "20+",
    competition: "Medium–high",
    decision: "BACKUP",
    evidence: "Launched Aug 14; established exact-match wikis already cover core intents",
  },
  {
    game: "RUNAWAYS Roblox",
    trend: "Strong rise",
    kd: "N/A (new term)",
    volume: "0 reported",
    longTails: "15+",
    competition: "Medium",
    decision: "BACKUP",
    evidence: "CCU up 218% over seven days; 36K concurrent on Aug 24",
  },
];

const matrix = [
  ["Home", "how to fish game", "/", "Game overview and route hub", "P0"],
  ["Start Here", "how to fish beginner guide", "/guides/beginner-guide", "First-hour plan", "P0"],
  ["Start Here", "how to fish controls", "/guides/controls", "Keyboard and fishing actions", "P0"],
  ["Progression", "how to fish islands", "/guides/islands-progression", "Unlock order and hand-ins", "P0"],
  ["Gear", "how to fish lures", "/guides/lures-and-baits", "Lure tiers and boss bait", "P0"],
  ["Collection", "how to fish fish list", "/guides/fish-list", "Species by island", "P0"],
  ["Gear", "how to fish best weapons", "/guides/weapons-and-upgrades", "Purchase and upgrade order", "P0"],
  ["Progression", "how to fish money guide", "/guides/money-guide", "Efficient farming loop", "P1"],
  ["Progression", "how to fish bosses", "/guides/bosses", "Boss triggers and trophies", "P1"],
  ["Gear", "how to fish radar", "/guides/radar-and-navigation", "Markers and boat upgrades", "P1"],
  ["Collection", "how to fish achievements", "/guides/achievements", "Story and cleanup roadmap", "P1"],
];

const sourceRows = [
  ["Official facts", "Steam store", "https://store.steampowered.com/app/3658370/How_to_Fish/", "Release, developer, platform, premise"],
  ["Progression", "AllThings.How", "https://allthings.how/how-to-fish-full-island-and-boss-progression-walkthrough/", "Island order, hand-ins, bosses"],
  ["Progression", "GrindNStrat", "https://grindnstrat.com/how-to-fish-game-islands-guide/", "Controls, islands, weapons, cooking"],
  ["Lures", "NerdsChalk", "https://nerdschalk.com/how-to-fish-every-lure-bait-catch/", "Lure tiers, catch pools, values"],
  ["Lures", "TposeGaming", "https://tposegaming.com/how-to-fish-game-bait/", "Regular and boss bait structure"],
  ["Collection", "Times of India", "https://timesofindia.indiatimes.com/sports/esports/news/how-to-fish-list-of-all-fish-how-to-get-them-and-more/articleshow/133438002.cms", "Fish list and collector checks"],
  ["Collection", "IndieBunny", "https://indiebunny.com/news/how-to-fish-lure-guide-every-fish-boss-by-island-location", "Fish and boss locations"],
  ["Cross-check", "How to Fish Game Wiki", "https://howtofishgame.wiki/guides/getting-started", "Beginner priorities and quest safety"],
];

export default function ResearchPage() {
  return (
    <PageFrame>
      <section className="page-hero research-hero">
        <div className="shell">
          <span className="eyebrow">Coursework evidence · August 25, 2026</span>
          <h1>How to Fish SEO Site — Research Workbook</h1>
          <p>
            Selection logic, keyword matrix, source record, and launch review prepared
            from the course handbook workflow.
          </p>
        </div>
      </section>
      <section className="shell research-sheet">
        <div className="research-block">
          <div className="research-heading"><span>01</span><h2>Three-game judgment table</h2></div>
          <p className="method-note">
            KD and monthly volume: Natiad US Google index, checked Aug 25. Trend labels
            combine current launch/player trajectory and search evidence; they are not
            invented Google Trends scores.
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Game</th><th>Trend</th><th>KD</th><th>US volume</th><th>Long tails</th>
                  <th>SERP</th><th>Decision</th>
                </tr>
              </thead>
              <tbody>
                {candidates.map((item) => (
                  <tr key={item.game}>
                    <td><strong>{item.game}</strong><small>{item.evidence}</small></td>
                    <td>{item.trend}</td><td>{item.kd}</td><td>{item.volume}</td>
                    <td>{item.longTails}</td><td>{item.competition}</td>
                    <td><span className={`decision ${item.decision === "DO" ? "go" : ""}`}>{item.decision}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="research-conclusion">
            <strong>Selected: How to Fish</strong>
            <p>
              It has the strongest immediate demand signal and a still-manageable KD.
              Competition exists, so the site targets specific problem pages and visible
              source quality instead of trying to win only the ambiguous exact game name.
            </p>
          </div>
        </div>

        <div className="research-block">
          <div className="research-heading"><span>02</span><h2>Keyword and page matrix</h2></div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th>Category</th><th>Target keyword</th><th>URL</th><th>Intent</th><th>Priority</th></tr>
              </thead>
              <tbody>
                {matrix.map((row) => (
                  <tr key={row[1]}>
                    {row.map((cell, index) => <td key={cell}>{index === 1 ? <strong>{cell}</strong> : cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="research-block">
          <div className="research-heading"><span>03</span><h2>Page source record</h2></div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th>Use</th><th>Source</th><th>Address</th><th>What was verified</th></tr>
              </thead>
              <tbody>
                {sourceRows.map((row) => (
                  <tr key={`${row[0]}-${row[1]}`}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="method-note">
            Editorial rule: AI organizes verified material; it does not invent creatures,
            values, codes, or quest steps. Each published guide lists its direct URLs.
          </p>
        </div>

        <div className="research-block">
          <div className="research-heading"><span>04</span><h2>Initial data review and supplement plan</h2></div>
          <div className="review-grid">
            <div><span>Measurement window</span><strong>First hour after launch</strong></div>
            <div><span>GSC sitemap</span><strong>Success · 16 pages found</strong></div>
            <div><span>Search performance</span><strong>Awaiting first query sample</strong></div>
            <div><span>GA realtime</span><strong>1 active visitor observed</strong></div>
          </div>
          <h3>First three evidence-gated supplement pages</h3>
          <ol className="supplement-list">
            <li><strong>Co-op and multiplayer</strong><span>Publish after official and independent gameplay sources confirm the flow, prioritizing it if related queries appear.</span></li>
            <li><strong>Quest items and trophies</strong><span>Publish only after quantities and recipients are checked against current in-game quest text.</span></li>
            <li><strong>Fish prices and cooking</strong><span>Build from a tested price table, or split it out when price and cooking queries receive impressions.</span></li>
          </ol>
          <p className="method-note">
            The first-hour sample proves deployment, Search Console, sitemap, and analytics
            collection are connected; it does not prove rankings or content performance.
            Page priorities will be revised when the first GSC query report is available.
          </p>
        </div>
      </section>
    </PageFrame>
  );
}

