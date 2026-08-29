export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  category: "Start Here" | "Progression" | "Gear" | "Collection";
  updated: string;
  readTime: string;
  quickAnswer: string;
  sections: GuideSection[];
  sources: { label: string; url: string }[];
};

export const guides: Guide[] = [
  {
    slug: "beginner-guide",
    title: "How to Fish Beginner Guide",
    description:
      "Learn the first-hour loop, what to buy, how quests unlock islands, and which mistakes slow new players down.",
    category: "Start Here",
    updated: "August 25, 2026",
    readTime: "7 min",
    quickAnswer:
      "Talk to every NPC, learn the catch–fight–cook–sell loop on common creatures, buy the $10 radar early, and inspect unusual drops before selling or eating them. Story progress comes from handing the correct boss trophy to the quest giver.",
    sections: [
      {
        heading: "Your first ten minutes",
        paragraphs: [
          "Start at the Lighthouse and speak with every available character before you sail or spend money. Their requests turn random catches into clear objectives and prevent repeat trips.",
          "Practice casting and reeling on ordinary creatures. The rod brings a creature onto land; it does not finish most fights for you. Keep space, use terrain, and learn one reliable weapon before spending on broad upgrades.",
        ],
        bullets: [
          "Catch something manageable and pull it onto land.",
          "Defeat it safely instead of standing in its approach path.",
          "Cook normal catches when a grill is available.",
          "Sell ordinary catches and reserve unusual drops for quests.",
        ],
      },
      {
        heading: "What to buy first",
        paragraphs: [
          "The radar is the most useful early utility purchase because later objectives send you between islands. After navigation is solved, buy a weapon you can control. A cheaper weapon that lands every shot is better than an expensive one that leaves you exposed.",
        ],
        bullets: [
          "Radar: the first navigation upgrade to prioritize.",
          "A dependable firearm: solves slow and dangerous fights.",
          "Boat engine: useful once travel time becomes the bottleneck.",
          "Attachments: focus on one main weapon instead of spreading cash.",
        ],
      },
      {
        heading: "The mistake that breaks progression",
        paragraphs: [
          "Do not sell, cook, or eat a distinctive boss part until you have checked the active quest. Several islands unlock only after an NPC receives a specific trophy. Defeating the boss is not enough by itself.",
          "Use the inspect action on anything that looks like a head, fin, tail, skeleton, or other unique trophy. If progress seems stuck, revisit the quest giver before farming more money.",
        ],
      },
      {
        heading: "A practical first-session checklist",
        bullets: [
          "Speak to the Lighthouse NPCs.",
          "Learn the controls on common catches.",
          "Build a small cash buffer.",
          "Buy the radar and one controllable weapon.",
          "Complete the Spider Crab hand-in.",
          "Sail toward the Forest marker and repeat the same quest-first process.",
        ],
      },
    ],
    sources: [
      {
        label: "Official Steam store page",
        url: "https://store.steampowered.com/app/4001890/How_to_Fish/",
      },
      {
        label: "How to Fish Game Wiki — Getting Started",
        url: "https://howtofishgame.wiki/guides/getting-started",
      },
      {
        label: "GrindNStrat — Islands and progression guide",
        url: "https://grindnstrat.com/how-to-fish-game-islands-guide/",
      },
    ],
  },
  {
    slug: "controls",
    title: "How to Fish Controls",
    description:
      "A concise keyboard and mouse reference for fishing, combat, inspecting catches, inventory, and NPC hand-ins.",
    category: "Start Here",
    updated: "August 25, 2026",
    readTime: "4 min",
    quickAnswer:
      "Use right-click to cast, left-click to reel after a bite, and right-click again to drop the catch on land. E interacts, Q hands an item to an NPC, F inspects held items, Tab opens the collection, and X puts away the rod.",
    sections: [
      {
        heading: "Core controls",
        bullets: [
          "E — talk, interact, and buy from NPCs.",
          "Q — throw or hand the held item to an NPC.",
          "F — inspect the item in your hands.",
          "Tab — open the creature collection and encyclopedia.",
          "Right-click — cast the fishing rod.",
          "Left-click — reel after a creature bites.",
          "Right-click again — release the catch onto land.",
          "X — unequip the fishing rod.",
          "Left-click while holding food — eat it.",
        ],
      },
      {
        heading: "Fishing rhythm",
        paragraphs: [
          "Casting is only the start. Once a creature bites, reel it toward safe ground and avoid placing yourself directly in its path. Drop it where you have room to move and switch from the rod to the weapon that fits the encounter.",
          "Bosses are easier when the arena, escape route, and weapon are ready before the lure is consumed. Treat special bait as a one-use attempt until proven otherwise.",
        ],
      },
      {
        heading: "Hand-ins and selling",
        paragraphs: [
          "The Q action matters because quest items must be handed to the correct NPC. If an NPC does not react, inspect the item, re-read the quest, and confirm you brought the required trophy rather than an ordinary meat chunk.",
        ],
      },
    ],
    sources: [
      {
        label: "GrindNStrat — How to Fish islands guide",
        url: "https://grindnstrat.com/how-to-fish-game-islands-guide/",
      },
      {
        label: "Official Steam store page",
        url: "https://store.steampowered.com/app/4001890/How_to_Fish/",
      },
    ],
  },
  {
    slug: "co-op-multiplayer",
    title: "How to Fish Co-Op and Multiplayer",
    description:
      "How to host or join a How to Fish session with friends, what the Steam page still says about player count, and why some reports list eight-player lobbies.",
    category: "Start Here",
    updated: "August 30, 2026",
    readTime: "5 min",
    quickAnswer:
      "How to Fish is online co-op on Steam. The official store page still describes it as a 1–4 player game. Independent reporting says patch 1.0.4 raised lobby size to eight and later added private invite-only sessions. Invite through Steam Overlay or Join Game, and trust the number shown in your current lobby UI.",
    sections: [
      {
        heading: "What is official versus reported",
        paragraphs: [
          "The Steam store page, checked 30 August 2026, still calls How to Fish a 1–4 player physics-based fishing simulator. That is the public product description Google sees on the official listing.",
          "Player.one’s launch recap (checked the same day) says Dazed Games shipped patch 1.0.4 to expand lobbies to eight players and later added private invite-only sessions. Those patch notes are not reproduced on the store page, so this guide does not flatten the two claims into one number.",
        ],
        bullets: [
          "Steam store: 1–4 players.",
          "Patch reporting: up to 8 after 1.0.4.",
          "Later reporting: private / invite-only sessions exist.",
          "Final authority: the lobby cap in your installed build.",
        ],
      },
      {
        heading: "How to play with friends",
        paragraphs: [
          "Everyone needs the same Steam build. Update before you host. From the main menu, open the multiplayer / session flow in your current version, create a lobby, then invite from Steam rather than sharing an unverified third-party link.",
        ],
        bullets: [
          "Launch How to Fish through Steam and confirm the update finished.",
          "Host a session from the in-game multiplayer menu.",
          "Open Steam Overlay (Shift + Tab) and invite friends, or have them use Join Game on your Steam profile.",
          "If you only want your group, pick the private / friends option when the current build shows one.",
          "Start only after the lobby shows the people you expect.",
        ],
      },
      {
        heading: "What this page will not invent",
        paragraphs: [
          "There is no console edition on the Steam page, so this guide does not claim crossplay. Connection-failed writeups exist, but they disagree on file deletes and network tweaks; those steps are omitted until they can be checked in-game.",
          "Co-op does not change the island hand-in rule. Unique boss trophies still have to reach the correct NPC. Playing with friends makes it easier to lose a required drop in someone else’s inventory.",
        ],
      },
    ],
    sources: [
      {
        label: "Official Steam store page",
        url: "https://store.steampowered.com/app/4001890/How_to_Fish/",
      },
      {
        label: "Player.one — launch recap and patch 1.0.4 lobby note",
        url: "https://www.player.one/how-fish-steams-newest-viral-hit-why-are-chaotic-co-op-games-taking-over-163910",
      },
      {
        label: "How to Fish Game Wiki — Getting Started",
        url: "https://howtofishgame.wiki/guides/getting-started",
      },
    ],
  },
  {
    slug: "islands-progression",
    title: "All Islands and Progression Order",
    description:
      "Unlock the Forest, Desert, Rocks, and Volcano in order without losing a required boss trophy.",
    category: "Progression",
    updated: "August 25, 2026",
    readTime: "8 min",
    quickAnswer:
      "The reliable route is Lighthouse → Forest → Desert → Rocks → Volcano. Each move depends on completing the local NPC chain, defeating the required boss, and handing the unique trophy back to the quest giver.",
    sections: [
      {
        heading: "Progression overview",
        bullets: [
          "Lighthouse: complete the Spider Crab request to reveal the Forest route.",
          "Forest: finish the active leech request, defeat the Giant Piranha, and return its unique quest item.",
          "Desert: obtain the Carrot, defeat the Pufferfish, and hand in its fin or tail as requested.",
          "Rocks: use the required lure for the bird encounter and return the head.",
          "Volcano / military route: complete the whale experiment and final objectives.",
        ],
      },
      {
        heading: "Lighthouse to Forest",
        paragraphs: [
          "The Lighthouse teaches the game’s most important rule: a boss kill is only useful when the follow-up hand-in is completed. Speak to the keeper, prepare the required bait, and preserve the Spider Crab quest item.",
          "After the hand-in, use the radar instead of sailing at random. The Forest marker is the first proof that navigation upgrades save more time than another small damage purchase.",
        ],
      },
      {
        heading: "Forest to Desert",
        paragraphs: [
          "Complete the active leech request before expecting the Giant Piranha chain to advance. Community guides conflict on the required quantity, so follow the current in-game quest text. Use the modified bait only after your weapon and fighting space are ready, then return the unique quest item to the quest giver.",
        ],
      },
      {
        heading: "Desert to Rocks",
        paragraphs: [
          "The Desert chain involves the tourist and a Carrot used for the Pufferfish encounter. Keep moving when the boss rolls toward you, and do not consume the resulting quest part. The hand-in reveals the Rocks route.",
        ],
      },
      {
        heading: "Rocks to Volcano",
        paragraphs: [
          "At the Rocks, the Professional-tier equipment and boss lure become important. Finish the bird-related objective and return the trophy before leaving. The Volcano is the final major island and contains the Scientific-tier economy and endgame route.",
        ],
      },
    ],
    sources: [
      {
        label: "AllThings.How — full island progression",
        url: "https://allthings.how/how-to-fish-full-island-and-boss-progression-walkthrough/",
      },
      {
        label: "AllThings.How — island unlock guide",
        url: "https://allthings.how/how-to-fish-how-to-unlock-every-island-forest-desert-rocks-volcano/",
      },
      {
        label: "GrindNStrat — islands, NPCs, and bosses",
        url: "https://grindnstrat.com/how-to-fish-game-islands-guide/",
      },
    ],
  },
  {
    slug: "lures-and-baits",
    title: "All Lures and Baits",
    description:
      "Match each lure tier to its island, understand boss bait, and avoid wasting expensive attempts.",
    category: "Gear",
    updated: "August 25, 2026",
    readTime: "7 min",
    quickAnswer:
      "Use Beginner Lures in the Forest, Standard Lures in the Desert, Professional Lures at the Rocks, and Scientific Lures at the Volcano. Boss and story encounters use separate, specific bait and should be prepared before casting.",
    sections: [
      {
        heading: "The simple lure rule",
        bullets: [
          "Lighthouse: Crab Fishing Rod with free lure or Hot Dog.",
          "Forest: free lure and Beginner Lure.",
          "Desert: Standard Lure.",
          "Rocks: Professional Lure.",
          "Volcano: Scientific Lure.",
        ],
      },
      {
        heading: "Regular lure tiers",
        paragraphs: [
          "Regular lure tiers control the pool of ordinary creatures that can bite. Moving to a new island without buying its matching tier limits both collection progress and income.",
          "Lures can disappear, so carry a spare before a long trip. The Scientific tier is expensive but opens the highest-value regular catches at the Volcano.",
        ],
      },
      {
        heading: "Boss lures and quest bait",
        paragraphs: [
          "Boss lures are a separate ladder from regular lures. Story bosses can also require unusual one-off items supplied by NPC chains. Do not assume a higher regular lure will substitute for a named quest bait.",
          "Before using special bait, confirm the active quest, weapon, healing food, and inventory space. A failed setup can force another farming trip.",
        ],
      },
    ],
    sources: [
      {
        label: "NerdsChalk — lure, bait, and catch table",
        url: "https://nerdschalk.com/how-to-fish-every-lure-bait-catch/",
      },
      {
        label: "TposeGaming — every bait type",
        url: "https://tposegaming.com/how-to-fish-game-bait/",
      },
      {
        label: "IndieBunny — lure and island checklist",
        url: "https://indiebunny.com/news/how-to-fish-lure-guide-every-fish-boss-by-island-location",
      },
    ],
  },
  {
    slug: "fish-list",
    title: "Fish List by Island",
    description:
      "Build the collection efficiently by pairing the correct location, rod, and lure tier.",
    category: "Collection",
    updated: "August 25, 2026",
    readTime: "9 min",
    quickAnswer:
      "Collection progress is primarily gated by island and lure tier. Clear the Lighthouse shellfish pool, then use Beginner, Standard, Professional, and Scientific Lures as you advance through the four later islands.",
    sections: [
      {
        heading: "Lighthouse catches",
        paragraphs: [
          "The starting pool is tied to the Crab Fishing Rod. Free lure and Hot Dog catches teach the basic loop, while the Empty Beer Can is reserved for the Spider Crab story encounter.",
        ],
        bullets: [
          "Rock Crab — free lure or Hot Dog.",
          "Shrimp — free lure.",
          "Lobster — Hot Dog.",
          "Spider Crab — special story bait.",
        ],
      },
      {
        heading: "Forest catches",
        bullets: [
          "Free lure: Mackerel, Gar, Pike, and Goldfish.",
          "Beginner Lure: Cod, Pike, Goldfish, Perch, Triggerfish, and other starter-tier catches.",
          "Hot Dog with the Crab Fishing Rod: Piranha.",
          "Modified Leech: Giant Piranha story boss.",
        ],
      },
      {
        heading: "Desert, Rocks, and Volcano",
        paragraphs: [
          "The Desert has the cleanest ordinary pool because Standard Lure handles most catches. The Rocks move to Professional Lure, while the Volcano uses Scientific Lure for rare, high-value fish.",
          "When a collection entry is missing, check both the regular pool and the separate boss-lure pool. Catching one mini-boss does not mean every creature tied to that lure has been found.",
        ],
      },
      {
        heading: "Collector checklist method",
        bullets: [
          "Finish one island before changing lure tiers.",
          "Keep a spare lure to avoid an interrupted run.",
          "Record boss-lure catches separately from ordinary fish.",
          "Inspect the collection after every unusual catch.",
          "Do not sell a required story trophy before the hand-in.",
        ],
      },
    ],
    sources: [
      {
        label: "Times of India — fish and creature list",
        url: "https://timesofindia.indiatimes.com/sports/esports/news/how-to-fish-list-of-all-fish-how-to-get-them-and-more/articleshow/133438002.cms",
      },
      {
        label: "AllThings.How — species by island",
        url: "https://allthings.how/how-to-fish-all-fish-species-by-island-and-how-to-catch-them/",
      },
      {
        label: "IndieBunny — collector checklist",
        url: "https://indiebunny.com/news/how-to-fish-lure-guide-every-fish-boss-by-island-location",
      },
    ],
  },
  {
    slug: "weapons-and-upgrades",
    title: "Best Weapons and Upgrade Order",
    description:
      "Spend cash on upgrades that solve the current bottleneck instead of buying everything.",
    category: "Gear",
    updated: "August 25, 2026",
    readTime: "6 min",
    quickAnswer:
      "Buy the radar first, then a dependable early firearm such as the Shotgun. Invest in one main weapon, add boat speed only when travel becomes the bottleneck, and prepare the Assault Rifle and attachments for endgame fights.",
    sections: [
      {
        heading: "Recommended order",
        bullets: [
          "Radar — solves navigation immediately.",
          "Dynamite — optional fast bulk fishing with a value trade-off.",
          "Shotgun — affordable early power and forgiving handling.",
          "Main-weapon attachments — concentrated upgrades outperform scattered spending.",
          "Boat engine — buy when repeat travel dominates the run.",
          "Assault Rifle and modules — prepare before the whale encounter.",
        ],
      },
      {
        heading: "Choose upgrades by problem",
        paragraphs: [
          "If normal fights take too long, improve damage. If reload windows get you hit, choose reliability and fighting space. If quests are finished but sailing dominates the session, improve the boat.",
          "Do not farm cash to solve a missing quest trigger. When a boss does not appear, re-check the NPC chain and bait before buying another weapon.",
        ],
      },
      {
        heading: "Why focus one weapon",
        paragraphs: [
          "Spreading attachments across several guns delays a complete, dependable setup. Fully equipping one weapon also supports the related achievement and gives you a known baseline for later bosses.",
        ],
      },
    ],
    sources: [
      {
        label: "AllThings.How — upgrades worth buying first",
        url: "https://allthings.how/how-to-fish-the-upgrades-and-weapons-worth-buying-first/",
      },
      {
        label: "GrindNStrat — weapon progression",
        url: "https://grindnstrat.com/how-to-fish-game-islands-guide/",
      },
      {
        label: "How to Fish Game Wiki — beginner priorities",
        url: "https://howtofishgame.wiki/guides/getting-started",
      },
    ],
  },
  {
    slug: "money-guide",
    title: "How to Make Money Fast",
    description:
      "Improve cash per trip with better lure tiers, cooking, safer fights, and less wasted travel.",
    category: "Progression",
    updated: "August 25, 2026",
    readTime: "6 min",
    quickAnswer:
      "Advance to the highest lure tier you can use safely, cook ordinary fish before selling, reduce empty sailing with the radar, and avoid losing time to overambitious boss attempts. Scientific Lure catches become the late-game money engine.",
    sections: [
      {
        heading: "The real money loop",
        paragraphs: [
          "Profit is not only the sale value of one fish. It is sale value multiplied by how many safe catches you complete per trip. A slightly cheaper pool can outperform a dangerous tier if repeated deaths or travel waste most of the session.",
        ],
        bullets: [
          "Use the best regular lure supported by your current island.",
          "Cook ordinary catches when the value multiplier is available.",
          "Upgrade damage when fights are the bottleneck.",
          "Upgrade the boat when travel is the bottleneck.",
          "Sell in planned batches instead of after every catch.",
        ],
      },
      {
        heading: "Dynamite versus careful catches",
        paragraphs: [
          "Dynamite can gather fish quickly but may reduce individual value. It is useful when speed matters more than perfect sale price. Cooking can recover part of that trade-off.",
        ],
      },
      {
        heading: "Late-game farming",
        paragraphs: [
          "Scientific Lure catches at the Volcano have the strongest ordinary sale values reported by current guides. Keep spare lures and avoid turning a profitable trip into a failed story-boss attempt.",
        ],
      },
    ],
    sources: [
      {
        label: "NerdsChalk — lure values and catch pools",
        url: "https://nerdschalk.com/how-to-fish-every-lure-bait-catch/",
      },
      {
        label: "AllThings.How — weapon and economy priorities",
        url: "https://allthings.how/how-to-fish-the-upgrades-and-weapons-worth-buying-first/",
      },
      {
        label: "GrindNStrat — cooking and progression",
        url: "https://grindnstrat.com/how-to-fish-game-islands-guide/",
      },
    ],
  },
  {
    slug: "bosses",
    title: "Boss Progression Guide",
    description:
      "Trigger each story boss correctly, fight with enough space, and preserve every required hand-in.",
    category: "Progression",
    updated: "August 25, 2026",
    readTime: "8 min",
    quickAnswer:
      "Bosses are gated by NPC requests and specific bait, not only by island access. Prepare the arena and weapon before casting, then inspect and return the unique trophy instead of selling it.",
    sections: [
      {
        heading: "Before every boss attempt",
        bullets: [
          "Confirm the NPC objective is active.",
          "Carry the exact named bait or lure.",
          "Create room to move and identify useful terrain.",
          "Equip a weapon that fits the boss speed and range.",
          "Leave inventory space for the trophy.",
          "Return directly to the quest giver after the fight.",
        ],
      },
      {
        heading: "Early bosses",
        paragraphs: [
          "The Spider Crab introduces special bait and trophy hand-ins. The Giant Piranha follows the Forest leech chain and requires the modified bait. Neither encounter should be started as a random farming cast.",
        ],
      },
      {
        heading: "Mid-game bosses",
        paragraphs: [
          "The Pufferfish can close distance quickly, so fire and move rather than holding position. The Rocks bird chain uses later-tier equipment and another trophy hand-in to expose the Volcano route.",
        ],
      },
      {
        heading: "Whale and endgame",
        paragraphs: [
          "The Volcano and military objectives culminate in the whale experiment and final route. Current guides recommend preparing the Assault Rifle and its modules before this stretch. If the event does not advance, verify the scientist’s sequence before spending more cash.",
        ],
      },
    ],
    sources: [
      {
        label: "AllThings.How — boss progression walkthrough",
        url: "https://allthings.how/how-to-fish-full-island-and-boss-progression-walkthrough/",
      },
      {
        label: "GrindNStrat — all major bosses",
        url: "https://grindnstrat.com/how-to-fish-game-islands-guide/",
      },
      {
        label: "IndieBunny — boss bait by location",
        url: "https://indiebunny.com/news/how-to-fish-lure-guide-every-fish-boss-by-island-location",
      },
    ],
  },
  {
    slug: "radar-and-navigation",
    title: "Radar and Navigation Guide",
    description:
      "Stop sailing blind, read island markers, and decide when boat upgrades are worth the cash.",
    category: "Gear",
    updated: "August 25, 2026",
    readTime: "4 min",
    quickAnswer:
      "Buy the $10 radar early and use the colored markers revealed by quest hand-ins. Upgrade boat speed after a dependable weapon, when repeat island travel—not combat—is wasting the most time.",
    sections: [
      {
        heading: "Why the radar comes first",
        paragraphs: [
          "The radar removes uncertainty from every later journey. It pays back on each quest, supply run, and failed attempt, while a small damage upgrade only shortens individual fights.",
        ],
      },
      {
        heading: "Known route markers",
        bullets: [
          "Forest: green marker northwest of the Lighthouse.",
          "Desert: yellow marker west of the Forest.",
          "Rocks: red marker farther west.",
          "Volcano: pink marker north of the Rocks.",
        ],
      },
      {
        heading: "When to upgrade the boat",
        paragraphs: [
          "A boat engine is worth buying when your weapon already handles local creatures and the largest time cost is sailing. Do not buy speed to compensate for missing coordinates; complete the required hand-in first.",
        ],
      },
    ],
    sources: [
      {
        label: "AllThings.How — every island unlock",
        url: "https://allthings.how/how-to-fish-how-to-unlock-every-island-forest-desert-rocks-volcano/",
      },
      {
        label: "How to Fish Game Wiki — upgrade priorities",
        url: "https://howtofishgame.wiki/guides/getting-started",
      },
    ],
  },
  {
    slug: "achievements",
    title: "Achievement Roadmap",
    description:
      "Plan collection, equipment, speed, and story goals without creating extra grind.",
    category: "Collection",
    updated: "August 25, 2026",
    readTime: "6 min",
    quickAnswer:
      "Finish the story while preserving quest trophies, keep a lure-by-island collection checklist, fully upgrade one weapon instead of several, and save for the best boat engine after combat is stable.",
    sections: [
      {
        heading: "Story-first route",
        paragraphs: [
          "Complete island hand-ins in order and treat every unique boss part as a possible quest item. This naturally clears the progression goals while unlocking the equipment and lure tiers needed for cleanup.",
        ],
      },
      {
        heading: "Equipment goals",
        paragraphs: [
          "For the fully equipped goal, concentrate attachments on one weapon. For the speed-related goal, reserve an engine fund after your main combat setup is reliable. Buying random upgrades makes both goals take longer.",
        ],
      },
      {
        heading: "Collection cleanup",
        bullets: [
          "Check ordinary lure pools island by island.",
          "Track boss-lure creatures separately.",
          "Revisit the Lighthouse with both free lure and Hot Dog.",
          "Carry spare expensive lures before Volcano cleanup.",
          "Inspect the encyclopedia after every rare catch.",
        ],
      },
      {
        heading: "Verification note",
        paragraphs: [
          "Achievement names and requirements can change with updates. Use the live Steam achievement panel as the final authority when a guide and the game disagree.",
        ],
      },
    ],
    sources: [
      {
        label: "Steam Community — global achievements",
        url: "https://steamcommunity.com/stats/4001890/achievements",
      },
      {
        label: "How to Fish Game Wiki — achievement priorities",
        url: "https://howtofishgame.wiki/guides/getting-started",
      },
      {
        label: "IndieBunny — collector checklist",
        url: "https://indiebunny.com/news/how-to-fish-lure-guide-every-fish-boss-by-island-location",
      },
    ],
  },
];

export const categories = ["Start Here", "Progression", "Gear", "Collection"] as const;

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

