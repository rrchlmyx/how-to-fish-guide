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
  ["Official facts", "Steam store", "store.steampowered.com/app/3658370", "Release, developer, platform, premise"],
  ["Trend", "SteamDB / launch reporting", "steamdb.info + Gamemeca", "Launch date, concurrent-player trajectory"],
  ["Progression", "AllThings.How", "allthings.how", "Island order, hand-ins, bosses"],
  ["Progression", "GrindNStrat", "grindnstrat.com", "Controls, islands, weapons, cooking"],
  ["Lures", "NerdsChalk", "nerdschalk.com", "Lure tiers, catch pools, values"],
  ["Lures", "TposeGaming", "tposegaming.com", "Regular and boss bait structure"],
  ["Collection", "Times of India / IndieBunny", "timesofindia.com + indiebunny.com", "Fish list and collector checks"],
  ["Cross-check", "How to Fish Game Wiki", "howtofishgame.wiki", "Beginner priorities and quest safety"],
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
          <div className="research-heading"><span>06</span><h2>Initial data review and supplement plan</h2></div>
          <div className="review-grid">
            <div><span>Measurement window</span><strong>Pre-launch baseline</strong></div>
            <div><span>GSC impressions</span><strong>Pending deployment</strong></div>
            <div><span>Clicks / position</span><strong>No data yet</strong></div>
            <div><span>GA visitors</span><strong>No data yet</strong></div>
          </div>
          <h3>First three supplement pages after data arrives</h3>
          <ol className="supplement-list">
            <li><strong>All fish values and sell prices</strong><span>Build if fish/value queries receive impressions.</span></li>
            <li><strong>Boss lure locations</strong><span>Split from the lure guide if specific bait queries rank.</span></li>
            <li><strong>Volcano and whale walkthrough</strong><span>Build if endgame queries appear in GSC.</span></li>
          </ol>
          <p className="method-note">
            This is explicitly a pre-launch plan. Real figures will replace “pending” only
            after deployment, GSC verification, sitemap submission, and GA traffic.
          </p>
        </div>
      </section>
    </PageFrame>
  );
}

