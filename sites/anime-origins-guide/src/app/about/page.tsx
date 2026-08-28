import type { Metadata } from "next";
import { PageFrame } from "@/components/site-shell";
import { brandName } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `How ${brandName} researches Anime Origins Roblox guides.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageFrame>
      <section className="page-hero">
        <div className="shell article">
          <span className="eyebrow">About</span>
          <h1>Built to answer the search, not to invent the game.</h1>
          <p>
            {brandName} is an independent fan guide for the Roblox experience
            Anime Origins by Origins Project. It is not affiliated with Roblox
            Corporation or the developer.
          </p>
          <h2>Editorial rule</h2>
          <p>
            AI organizes verified writeups from the official Roblox page and
            cross-checked guides. If two sources disagree on a reward pile, the
            page says so and tells you to trust the in-game popup. Codes are
            dated because they expire.
          </p>
          <h2>What we will not do</h2>
          <p>
            No fake permanent tier tables, no invented KD numbers, and no claim
            that a Discord giveaway string works in the orange Codes button
            until it is confirmed in-game.
          </p>
        </div>
      </section>
    </PageFrame>
  );
}
