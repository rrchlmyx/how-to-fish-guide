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

const keywordRows = [
  ["General need", "how to fish game", "Understand the game and find the main route", "Home"],
  ["General need", "how to fish beginner guide", "Plan the first hour and avoid costly mistakes", "Beginner guide"],
  ["General need", "how to fish controls", "Learn keyboard, fishing, combat, and hand-ins", "Controls guide"],
  ["Specific need", "how to fish islands", "Find the unlock order and required quest items", "Islands guide"],
  ["Specific need", "how to fish lures", "Match lure tiers and boss bait to locations", "Lures guide"],
  ["Specific need", "how to fish fish list", "Check species by island and collection progress", "Fish list"],
  ["Specific need", "how to fish best weapons", "Choose purchases and upgrades in the right order", "Weapons guide"],
  ["Specific need", "how to fish money guide", "Build a repeatable farming and selling loop", "Money guide"],
  ["Specific need", "how to fish bosses", "Trigger bosses and protect required trophies", "Boss guide"],
  ["Specific need", "how to fish radar", "Understand markers, routes, and boat upgrades", "Radar guide"],
  ["Specific need", "how to fish achievements", "Plan story achievements and cleanup", "Achievements guide"],
];

const sourceRows = [
  ["/", "Steam · store.steampowered.com/app/4001890", "Wiki · howtofishgame.wiki/guides/getting-started", "Release facts, premise, route entry points"],
  ["/guides/beginner-guide", "Wiki · howtofishgame.wiki/guides/getting-started", "GrindNStrat · /how-to-fish-game-islands-guide/", "First-hour priorities, quest safety, early loop"],
  ["/guides/controls", "GrindNStrat · /how-to-fish-game-islands-guide/", "Steam · store.steampowered.com/app/4001890", "Controls, fishing actions, combat context"],
  ["/guides/islands-progression", "AllThings.How · /full-island-and-boss-progression-walkthrough/", "AllThings.How · /how-to-unlock-every-island-forest-desert-rocks-volcano/", "Island order, hand-ins, boss gates"],
  ["/guides/lures-and-baits", "NerdsChalk · /how-to-fish-every-lure-bait-catch/", "TposeGaming · /how-to-fish-game-bait/", "Lure tiers, catch pools, boss bait"],
  ["/guides/fish-list", "Times of India · /list-of-all-fish-how-to-get-them/", "AllThings.How · /all-fish-species-by-island-and-how-to-catch-them/", "Species, islands, collection checks"],
  ["/guides/weapons-and-upgrades", "AllThings.How · /the-upgrades-and-weapons-worth-buying-first/", "GrindNStrat · /how-to-fish-game-islands-guide/", "Purchase order, weapons, upgrades"],
  ["/guides/money-guide", "NerdsChalk · /how-to-fish-every-lure-bait-catch/", "GrindNStrat · /how-to-fish-game-islands-guide/", "Catch values, cooking, repeatable farming loop"],
  ["/guides/bosses", "AllThings.How · /full-island-and-boss-progression-walkthrough/", "IndieBunny · /lure-guide-every-fish-boss-by-island-location", "Boss triggers, locations, trophies"],
  ["/guides/radar-and-navigation", "AllThings.How · /how-to-unlock-every-island-forest-desert-rocks-volcano/", "Wiki · howtofishgame.wiki/guides/getting-started", "Routes, markers, unlock context"],
  ["/guides/achievements", "Steam Community · /stats/4001890/achievements", "Wiki · howtofishgame.wiki/guides/getting-started", "Achievement list, story order, cleanup"],
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
        <div className="research-block" id="game-judgment">
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

        <div className="research-block" id="keyword-inventory">
          <div className="research-heading"><span>02</span><h2>Keyword inventory by user need</h2></div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th>Need type</th><th>Keyword</th><th>User question</th><th>Planned page</th></tr>
              </thead>
              <tbody>
                {keywordRows.map((row) => (
                  <tr key={row[1]}>
                    {row.map((cell, index) => <td key={cell}>{index === 1 ? <strong>{cell}</strong> : cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="research-block" id="page-matrix">
          <div className="research-heading"><span>03</span><h2>Keyword and page matrix</h2></div>
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

        <div className="research-block" id="source-record">
          <div className="research-heading"><span>04</span><h2>Page-by-page source record</h2></div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th>Planned page</th><th>Source 1</th><th>Source 2</th><th>What they support</th></tr>
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

        <div className="research-block" id="data-review">
          <div className="research-heading"><span>05</span><h2>Initial data review and supplement plan</h2></div>
          <div className="review-grid">
            <div><span>Website</span><strong>how-to-fish-guide-mu.vercel.app</strong></div>
            <div><span>GSC total impressions</span><strong>0 available</strong></div>
            <div><span>GSC total clicks</span><strong>0 available</strong></div>
            <div><span>GSC sitemap</span><strong>Success · 16 pages found</strong></div>
            <div><span>GA realtime</span><strong>1 active visitor observed</strong></div>
            <div><span>Current decision</span><strong>Technical check, then re-review</strong></div>
          </div>
          <h3>First three evidence-gated supplement pages</h3>
          <ol className="supplement-list">
            <li><strong>Co-op and multiplayer</strong><span>Publish after official and independent gameplay sources confirm the flow, prioritizing it if related queries appear.</span></li>
            <li><strong>Quest items and trophies</strong><span>Publish only after quantities and recipients are checked against current in-game quest text.</span></li>
            <li><strong>Fish prices and cooking</strong><span>Build from a tested price table, or split it out when price and cooking queries receive impressions.</span></li>
          </ol>
          <p className="method-note">
            GSC is still processing the new property, so zero available impressions and
            clicks are a baseline—not proof of failure. Next reviews: day 7 on September 1
            and day 14 on September 8. Page priorities will be revised only after the first
            valid query report is available.
          </p>
        </div>
      </section>
    </PageFrame>
  );
}

