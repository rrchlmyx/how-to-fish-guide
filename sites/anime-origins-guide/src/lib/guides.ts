export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: string;
};

export type CodeRow = {
  code: string;
  reward: string;
  note?: string;
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  category: "Start Here" | "Progression" | "Systems";
  updated: string;
  readTime: string;
  quickAnswer: string;
  sections: GuideSection[];
  sources: { label: string; url: string }[];
  codes?: CodeRow[];
};

export const guides: Guide[] = [
  {
    slug: "beginner-guide",
    title: "Anime Origins Beginner Guide",
    description:
      "First-hour Anime Origins path: Story to Level 10, redeem codes, summon one carry and one farm unit, then stop dumping Gems.",
    category: "Start Here",
    updated: "August 28, 2026",
    readTime: "7 min",
    quickAnswer:
      "Play Story until Level 10, redeem every working code on the orange Codes button, summon toward one damage carry and one farm unit (Bluma is the common farm pick), then stop spending Gems until those two roles exist.",
    sections: [
      {
        heading: "What Anime Origins is",
        paragraphs: [
          "Anime Origins is a Roblox tower-defense experience from Origins Project. You summon anime-inspired units, place them on lanes and hills, and clear Story waves, Challenges, Raids, and longer modes.",
          "Official page notes: free private servers, mobile/tablet/PC/console support, and a 22-player server cap. All characters are fan-made inspirations, not licensed anime IPs.",
        ],
      },
      {
        heading: "First-hour loop",
        bullets: [
          "Join the verified Origins Project experience and clear the lobby prompts.",
          "Enter Story Mode and push until character Level 10. Story is the fastest early XP and unlocks the Codes button for most players.",
          "Redeem every active code (see the Codes page). Expect Gems, Trait Rerolls, and Stat Prisms.",
          "Summon with a budget: aim for one usable Mythic/Secret damage carry and one farm unit.",
          "Stop the summon session once those two roles exist. The next session is evolution materials and a serious trait roll, not panic pulls.",
        ],
        note: "Several guides name Bluma as the launch Mythic farm unit and Vegita or Melio as accessible early carries. Banner pools change — trust the unit you actually own.",
      },
      {
        heading: "What not to do on day one",
        bullets: [
          "Do not empty every Gem on random banners after the first usable carry.",
          "Do not spend Perfect Stat Prisms on a temporary Epic you will bench.",
          "Do not chase Immortal traits before you know which unit stays on the bar.",
          "If Story feels hard, replay a clearable stage and upgrade the wave-clear unit instead of forcing a new chapter.",
        ],
      },
    ],
    sources: [
      {
        label: "Official Roblox experience page",
        url: "https://www.roblox.com/games/129932912185311/Anime-Origins",
      },
      {
        label: "Anime Origins wiki — Getting Started",
        url: "https://animeorigin.wiki/guides/getting-started/",
      },
      {
        label: "AllThings.How beginner route",
        url: "https://allthings.how/anime-origins-beginner-guide-the-fastest-early-game-route/",
      },
      {
        label: "LDPlayer beginner guide",
        url: "https://www.ldplayer.net/blog/roblox-anime-origins-beginner-guide.html",
      },
    ],
  },
  {
    slug: "codes",
    title: "Anime Origins Codes (September 2026)",
    description:
      "Working Anime Origins Roblox codes, listed rewards, and conflict notes when outlets disagree.",
    category: "Start Here",
    updated: "September 5, 2026",
    readTime: "4 min",
    quickAnswer:
      "Rechecked 5 September 2026: the same nine strings are still listed as active, with empty expired tables. Pocket Tactics (1 Sep) and MemuPlay (2 Sep) now agree on HappyPatch! and GAMESPEED piles. Redeem on the orange Codes button after Level 10. Copy punctuation exactly.",
    codes: [
      {
        code: "100K!",
        reward: "25 Trait Rerolls, 10 Perfect Stat Prisms, 10 Stat Prisms, 1,000 Gems",
        note: "GameRant (18 Aug) Discord 100k milestone code.",
      },
      {
        code: "HappyPatch!",
        reward: "10 Trait Rerolls, 5 Perfect Stat Prisms, 5 Stat Prisms, 850 Gems",
        note: "Pocket Tactics (1 Sep) and MemuPlay (2 Sep) match this pile. Earlier lists disagreed. Trust the popup.",
      },
      {
        code: "ChallengesFixed",
        reward: "10 Trait Rerolls, 750 Gems, 10 Azure / 5 Violet / 2 Radiant / 1 Prismatic Remnant",
        note: "Remnant mix from Pocket Tactics and MemuPlay. Older trackers were vaguer.",
      },
      {
        code: "GAMESPEED",
        reward: "750 Gems, 10 Trait Rerolls, 5 Stat Prisms",
        note: "September trackers agree. Some August tables omitted Gems.",
      },
      {
        code: "TYKaito!",
        reward: "1,000 Gems, 25 Trait Rerolls, 5 Stat Prisms",
      },
      {
        code: "THANKYOU!",
        reward: "10 Trait Rerolls, 10 Perfect Stat Prisms",
        note: "Some lists also add Gems; GameRant does not.",
      },
      {
        code: "Origins",
        reward: "20 Stat Prisms, 10 Perfect Stat Prisms",
      },
      {
        code: "AO",
        reward: "25 Trait Rerolls",
      },
      {
        code: "Release!",
        reward: "1,750 Gems",
      },
    ],
    sections: [
      {
        heading: "Still listed as active (5 September 2026)",
        paragraphs: [
          "September recache against Pocket Tactics (1 Sep), MemuPlay (2 Sep), PCGamesN (31 Aug), and Destructoid: same nine strings, empty expired lists. HappyPatch! and GAMESPEED now have a matching pile across the September tables; we still tell you to believe the reward popup.",
        ],
        note: "We do not invent a single flattened reward table when sources conflict. Copy-paste exactly, including punctuation, then believe the reward popup.",
      },
      {
        heading: "Where new codes appear first",
        paragraphs: [
          "Origins Project did not publish a Trello. The official Discord is the live desk for new strings. Independent sites confirm after they can match a reward popup.",
          "A Discord giveaway bot string is not automatically an orange-button code. If it is not accepted in the HUD, it is not a redeem code.",
        ],
      },
    ],
    sources: [
      {
        label: "GameRant codes list",
        url: "https://gamerant.com/anime-origins-codes-discord-server-roblox/",
      },
      {
        label: "Pocket Tactics codes (1 Sep 2026)",
        url: "https://www.pockettactics.com/anime-origins-codes",
      },
      {
        label: "MemuPlay codes (2 Sep 2026)",
        url: "https://www.memuplay.com/blog/roblox-anime-origins-codes.html",
      },
      {
        label: "Khelnow August codes roundup",
        url: "https://khelnow.com/gaming/latest-roblox-anime-origins-codes-august-202608",
      },
      {
        label: "Anime Origins wiki — How to redeem",
        url: "https://animeorigin.wiki/codes/how-to-redeem/",
      },
    ],
  },
  {
    slug: "how-to-redeem-codes",
    title: "How to Redeem Anime Origins Codes",
    description:
      "Click-by-click Anime Origins code redemption: Level 10 gate, orange Codes button, punctuation traps, and failure checks.",
    category: "Start Here",
    updated: "August 30, 2026",
    readTime: "3 min",
    quickAnswer:
      "Reach Level 10 in Story, tap the orange Codes button on the right side of the HUD, paste the code exactly (keep ! and capitals), and confirm. There is no website or Discord redeem for the same rewards.",
    sections: [
      {
        heading: "Steps",
        bullets: [
          "Launch Anime Origins on Roblox (mobile, tablet, PC, or console).",
          "Check your level. If you are under 10, keep playing Story. Most sources say the Codes button stays locked until Level 10.",
          "Find the orange Codes button on the right edge of the HUD. It is not inside Shop or Settings.",
          "Paste one code exactly. TYKaito!, THANKYOU!, Release!, 100K!, and HappyPatch! all keep their punctuation.",
          "Confirm and wait for the reward popup (Gems, Trait Rerolls, Stat Prisms, Remnants, or a mix).",
          "Repeat until every working code succeeds or the panel says you already claimed it.",
        ],
      },
      {
        heading: "If the button is missing or grey",
        bullets: [
          "Rejoin the experience — a stale session can show an old level.",
          "Confirm you are in the official place (ID 129932912185311), not a copycat experience.",
          "Private servers are free per the official page; use one if a crowded lobby hides the UI.",
        ],
        note: "Some trackers say a few release codes may work earlier than Level 10. If the button is available, try it; if not, finish the Story climb.",
      },
    ],
    sources: [
      {
        label: "Anime Origins wiki — How to redeem",
        url: "https://animeorigin.wiki/codes/how-to-redeem/",
      },
      {
        label: "GameRant redeem steps",
        url: "https://gamerant.com/anime-origins-codes-discord-server-roblox/",
      },
      {
        label: "Official Roblox experience page",
        url: "https://www.roblox.com/games/129932912185311/Anime-Origins",
      },
    ],
  },
  {
    slug: "story-mode",
    title: "Anime Origins Story Mode Guide",
    description:
      "Why Story Mode is the early XP engine, how Normal and Hard first-clears pay, and when to stop pushing chapters.",
    category: "Progression",
    updated: "August 28, 2026",
    readTime: "5 min",
    quickAnswer:
      "Clear Story on Normal, then Hard for separate first-clear rewards. Story is the main early XP path to Level 10 (codes) and the gem bank that funds summons. If a chapter stalls, replay a clearable stage and upgrade one AoE carry.",
    sections: [
      {
        heading: "Why Story comes first",
        paragraphs: [
          "Guides agree that Story Mode is the fastest legal early XP and the first material source. Level 10 unlocks the Codes button for most accounts and opens later systems.",
          "AllThings.How notes that every stage has separate first-clear rewards per difficulty, and Hard pays a large Gem pile per stage. Clear both difficulties before you treat Story as finished.",
        ],
      },
      {
        heading: "Practical Story loop",
        bullets: [
          "Push Normal until you hit Level 10, then redeem codes.",
          "Return for Hard first-clears while your Gem bank is still low.",
          "Concentrate in-run upgrades on one wave-clear unit instead of spreading coins across every unit.",
          "Add Hill coverage when flying or elevated enemies start winning.",
          "Only move to Legend Stages / Challenges / Raids when the current Story chapter is stable.",
        ],
      },
    ],
    sources: [
      {
        label: "AllThings.How beginner route",
        url: "https://allthings.how/anime-origins-beginner-guide-the-fastest-early-game-route/",
      },
      {
        label: "LDPlayer progression order",
        url: "https://www.ldplayer.net/blog/roblox-anime-origins-beginner-guide.html",
      },
      {
        label: "Anime Origins wiki — Getting Started",
        url: "https://animeorigin.wiki/guides/getting-started/",
      },
    ],
  },
  {
    slug: "summon-guide",
    title: "Anime Origins Summon Guide",
    description:
      "How to spend Gems on Anime Origins banners without emptying the wallet on filler units.",
    category: "Progression",
    updated: "August 28, 2026",
    readTime: "5 min",
    quickAnswer:
      "Summon until you have one damage carry and one farm unit, then stop. Prefer banners that can actually drop those roles. A second Secret flex is luxury; a missing farm slot is a failed run.",
    sections: [
      {
        heading: "Budget rules",
        bullets: [
          "Codes dump a large Gem pile early — do not treat the whole pile as one banner session.",
          "Stop when you can name your carry and your farm unit out loud.",
          "Keep a reserve for later banners, shop Fusion Cores, and evolution gaps.",
          "Filler Epics are temporary. Do not spend Trait Rerolls or Perfect Prisms on them.",
        ],
      },
      {
        heading: "Roles over names",
        paragraphs: [
          "Launch guides repeatedly name Vegita / Melio / Aneko for damage or Hill coverage and Bluma for farm income. Those names are launch meta snapshots, not forever rules.",
          "If your banner gives a different Mythic that clears Story, evolve that unit. The role (wave clear, Hill, farm, boss) matters more than copying someone else's unit list.",
        ],
      },
    ],
    sources: [
      {
        label: "Anime Origins wiki — Getting Started",
        url: "https://animeorigin.wiki/guides/getting-started/",
      },
      {
        label: "anime-origins.online beginner guide",
        url: "https://www.anime-origins.online/guides/beginner-guide/",
      },
      {
        label: "LDPlayer units & evolution notes",
        url: "https://www.ldplayer.net/blog/roblox-anime-origins-beginner-guide.html",
      },
    ],
  },
  {
    slug: "traits",
    title: "Anime Origins Traits Guide",
    description:
      "How Trait Rerolls work, why Immortal is a one-per-team carry stamp, and what to roll first.",
    category: "Systems",
    updated: "August 28, 2026",
    readTime: "6 min",
    quickAnswer:
      "Spend Trait Rerolls at the Trait Reroll NPC in the Evolve / Areas hub. Each unit stores two traits but only one is active. Immortal is the Secret jackpot with a placement limit of 1 — put it on a proven carry, never on a pure farm unit.",
    sections: [
      {
        heading: "How rerolls work",
        bullets: [
          "Open Areas → Trait Reroll (or walk to the Trait Reroll NPC in the Evolve hub).",
          "Select the unit, press Reroll, spend 1 Trait Reroll per attempt.",
          "Set the better result as the active trait. Keep a useful second trait as backup when the UI allows.",
          "Trait Rerolls drop from Story, Challenges, quests, and many codes.",
        ],
      },
      {
        heading: "Immortal and keep rules",
        paragraphs: [
          "Community trait tables place Immortal as the only Secret trait: large damage, cooldown, range, and income bonuses, plus a once-per-match base-save effect after wave 10. Placement limit is 1, and only one unit on the team can wear it.",
          "Because of that limit, Immortal belongs on the unit that already deletes waves. Farm units want income/range traits, not the one-per-team nuke slot.",
        ],
        note: "Exact percent tables and pity counters come from community trackers and can drift after patches. Confirm rare rolls in your own UI.",
      },
      {
        heading: "What to roll first",
        bullets: [
          "Proven carry first.",
          "Farm unit second (income traits).",
          "Skip bench fillers.",
          "Stop when the trait matches the job, not when the name looks flashy.",
        ],
      },
    ],
    sources: [
      {
        label: "Bloxodes traits guide",
        url: "https://bloxodes.com/articles/anime-origins-traits-guide",
      },
      {
        label: "Anime Origins wiki — How to reroll traits",
        url: "https://animeorigin.wiki/guides/how-to-reroll-traits/",
      },
      {
        label: "Anime Origins wiki — Trait planner",
        url: "https://animeorigin.wiki/tools/trait-planner/",
      },
    ],
  },
  {
    slug: "stat-prisms",
    title: "Anime Origins Stat Prisms Guide",
    description:
      "When to spend Stat Prisms and Perfect Stat Prisms — and why they are not Trait Rerolls.",
    category: "Systems",
    updated: "August 28, 2026",
    readTime: "4 min",
    quickAnswer:
      "Stat Prisms tune numeric rolls on a unit you already plan to keep. Perfect Stat Prisms are the scarce launch pile — hold them for a Mythic or Secret you will evolve and trait-roll. Sequence: summon → decide keeper → trait → then Prisms.",
    sections: [
      {
        heading: "What Prisms are not",
        bullets: [
          "Not summons.",
          "Not Trait Rerolls (Immortal still comes from Trait Rerolls).",
          "Not in-match cash printers.",
          "Not a fix for a unit you will bench after the next banner.",
        ],
      },
      {
        heading: "Spend order",
        paragraphs: [
          "Launch codes dump Gems, Trait Rerolls, and Prisms together. Most players understand Gems first and burn Perfect Prisms on junk. Do not.",
          "Confirm the unit stays on the bar. Land a keep-tier trait. Then use regular Prisms for shy numbers and Perfect Prisms on the long-term carry.",
        ],
      },
    ],
    sources: [
      {
        label: "Anime Origins wiki — Stat Prism guide",
        url: "https://animeorigin.wiki/tools/stat-prisms/",
      },
      {
        label: "anime-origins.online beginner guide",
        url: "https://www.anime-origins.online/guides/beginner-guide/",
      },
    ],
  },
  {
    slug: "best-starter-units",
    title: "Anime Origins Best Starter Units",
    description:
      "Launch-era starter roles for Anime Origins: carry, Hill, and farm — with the warning that banners and patches move the meta.",
    category: "Progression",
    updated: "August 28, 2026",
    readTime: "5 min",
    quickAnswer:
      "Build around roles, not a frozen tier letter: one wave/boss carry, Hill coverage when needed, and a farm unit (Bluma is the most-cited launch farm). Vegita and Melio appear often as early evolves — evolve the strong unit you actually summoned.",
    sections: [
      {
        heading: "Role checklist",
        bullets: [
          "Carry — deletes Story waves or bosses after upgrades/evolution.",
          "Hill — handles elevated / flying pressure (launch guides often cite Vegita and Aneko).",
          "Farm — funds long stages (Bluma / Data Analyst is the usual Mythic farm; Leorio is an early refund option).",
        ],
      },
      {
        heading: "Launch snapshots (not forever rankings)",
        paragraphs: [
          "LDPlayer and AllThings.How highlight Vegita as an accessible early Mythic Hill evolve, Melio as a strong pre-evolve carry, and Bluma as the economy engine. Those are mid-August 2026 launch notes.",
          "If your account pulled a different Mythic that already clears Hard Story, invest there. Copying a tier list you do not own wastes Gems and Remnants.",
        ],
        note: "We intentionally avoid publishing a fake permanent S–D table. Use roles + your roster.",
      },
    ],
    sources: [
      {
        label: "LDPlayer beginner / units guide",
        url: "https://www.ldplayer.net/blog/roblox-anime-origins-beginner-guide.html",
      },
      {
        label: "AllThings.How early-game route",
        url: "https://allthings.how/anime-origins-beginner-guide-the-fastest-early-game-route/",
      },
      {
        label: "Anime Origins wiki — Getting Started",
        url: "https://animeorigin.wiki/guides/getting-started/",
      },
    ],
  },
  {
    slug: "evolution",
    title: "Anime Origins Evolution Guide",
    description:
      "How to evolve one Anime Origins carry without splitting materials across every Mythic.",
    category: "Progression",
    updated: "August 28, 2026",
    readTime: "5 min",
    quickAnswer:
      "Open the evolution panel on your main carry, list every material, farm only those sources (often Legend Stages + Challenges for Remnants), and finish one evolve before starting a second. Partial investment across three Mythics stalls the account.",
    sections: [
      {
        heading: "One carry at a time",
        paragraphs: [
          "LDPlayer's progression order is clear: finish Story Normal/Hard, farm the Legend Stage tied to your main unit's evolve item, run Challenges for Remnants and Trait Rerolls, evolve one carry, then raise the core team toward the level cap.",
          "Evolution should solve a progression wall. If Story Hard is already free, evolve to unlock Legend / Raid readiness — not to collect names.",
        ],
      },
      {
        heading: "Checklist",
        bullets: [
          "Pick the unit that already performs in Story.",
          "Write down every evolve material and its source.",
          "Farm only those stages until the button unlocks.",
          "Pair synergies after the evolve (launch notes mention Vegita + Goki style pairings — verify in your UI).",
        ],
      },
    ],
    sources: [
      {
        label: "LDPlayer evolution progression",
        url: "https://www.ldplayer.net/blog/roblox-anime-origins-beginner-guide.html",
      },
      {
        label: "AllThings.How early priorities",
        url: "https://allthings.how/anime-origins-beginner-guide-the-fastest-early-game-route/",
      },
    ],
  },
  {
    slug: "challenges-and-raids",
    title: "Anime Origins Challenges and Raids",
    description:
      "When to leave Story for Challenges, Raids, and other endgame modes in Anime Origins.",
    category: "Progression",
    updated: "August 28, 2026",
    readTime: "4 min",
    quickAnswer:
      "Finish early Story and redeem codes first. Use Challenges for Remnants and Trait Rerolls once a core team exists. Enter Raids, Rifts, Infinite, and World Bosses only when damage and coverage requirements are met — not as a day-one shortcut.",
    sections: [
      {
        heading: "Suggested unlock order",
        bullets: [
          "Story Normal → Level 10 → Codes.",
          "Story Hard first-clears for Gems.",
          "Challenges for Remnants / Trait Rerolls.",
          "Legend Stages for evolution items.",
          "Raids / Rifts / Infinite / World Bosses after one evolved carry and stable coverage.",
        ],
      },
      {
        heading: "Why waiting matters",
        paragraphs: [
          "Guides that skip straight to Raids usually assume an already-built account. Underleveled teams burn time and invent the feeling that the game is broken.",
          "If a mode's shop sells Fusion Cores or evolve mats you need, treat that shop as the goal — not a prestige clear.",
        ],
      },
    ],
    sources: [
      {
        label: "LDPlayer progression order",
        url: "https://www.ldplayer.net/blog/roblox-anime-origins-beginner-guide.html",
      },
      {
        label: "AllThings.How daily loop notes",
        url: "https://allthings.how/anime-origins-beginner-guide-the-fastest-early-game-route/",
      },
    ],
  },
];

export const categories = ["Start Here", "Progression", "Systems"] as const;

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
