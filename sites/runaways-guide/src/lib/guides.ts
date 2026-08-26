export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: string;
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  category: "Start Here" | "Progression" | "Loadout";
  updated: string;
  readTime: string;
  quickAnswer: string;
  sections: GuideSection[];
  sources: { label: string; url: string }[];
};

export const guides: Guide[] = [
  {
    slug: "beginner-guide",
    title: "RUNAWAYS Roblox Beginner Guide",
    description:
      "Learn the rob–pawn–refuel loop, first purchases, and how to leave town before the police timer closes.",
    category: "Start Here",
    updated: "August 26, 2026",
    readTime: "6 min",
    quickAnswer:
      "Follow the tutorial arrows from Hugh Dunnit, loot the first gas station, sell at a pawn shop, buy a crowbar and a bigger backpack, then keep moving south. Leave with most of the loot instead of fighting every cop.",
    sections: [
      {
        heading: "What this game is",
        paragraphs: [
          "RUNAWAYS is a Roblox action experience where you are already treated as guilty. The run is a southbound crime spree: steal, pawn, refuel, and cross state lines until you reach Mexico.",
          "The contact in the tutorial is named Hugh Dunnit. Green floor arrows walk you through the first robbery, pawn shop, and gas stop. That loop is the whole game.",
        ],
      },
      {
        heading: "Controls worth memorizing",
        bullets: [
          "Move with WASD. Sprint with Shift. Crouch with C.",
          "Interact / take items with E. Drop with X.",
          "Punch or shoot with left mouse. Reload with R. Inventory is F.",
          "Attach bulky loot to the car with Q.",
        ],
        note: "Keybinds summarized from the LDPlayer beginner guide (24 August 2026).",
      },
      {
        heading: "Your first thirty minutes",
        bullets: [
          "Loot the first gas station before backup arrives.",
          "Clear as much of the first town as the timer allows.",
          "Sell at TrashAmerica / Cash America pawn markers.",
          "Buy a crowbar and a larger backpack before fancy weapons.",
          "Fill the tank early. Fuel cost rises as you go south.",
        ],
      },
      {
        heading: "The mistake that ends runs",
        paragraphs: [
          "Greed. Several guides say leaving with most of the loot is better than getting arrested for the last painting. Combat draws more police. Shopkeepers turn hostile if you brandish a weapon in a store.",
          "Do not sell your backpack in the pawn menu by accident. Check the selected item before you confirm.",
        ],
      },
    ],
    sources: [
      {
        label: "Official Roblox experience page",
        url: "https://www.roblox.com/games/118418618261207/RUNAWAYS",
      },
      {
        label: "LDPlayer beginner guide",
        url: "https://www.ldplayer.net/blog/roblox-runaways-beginners-guide.html",
      },
      {
        label: "AllThings.How Mexico walkthrough",
        url: "https://allthings.how/runaways-full-walkthrough-reach-the-mexico-border-roblox/",
      },
      {
        label: "NerdsChalk resource guide",
        url: "https://nerdschalk.com/how-to-reach-mexico-in-runaways-resource-management-and-loot-strategy-guide/",
      },
    ],
  },
  {
    slug: "codes",
    title: "RUNAWAYS Codes (August 2026)",
    description:
      "Working RUNAWAYS Roblox codes, what they grant, and how to redeem them in the Shop menu.",
    category: "Start Here",
    updated: "August 26, 2026",
    readTime: "3 min",
    quickAnswer:
      "As of 26 August 2026, major outlets still list SUPERCAT for a Light Pistol and RUN for 1,000 Credz. Redeem in Shop → Codes. Codes expire without notice.",
    sections: [
      {
        heading: "Codes reported active on 26 August 2026",
        bullets: [
          "SUPERCAT — Light Pistol (listed by GameRant, GamesRadar, LDPlayer, Beebom).",
          "RUN — 1,000 Credz (GameRant, GamesRadar, LDPlayer). Beebom listed this as 2k cash; treat the in-game grant as the authority.",
        ],
        note: "Promo codes change quickly. If a code fails, it is probably expired, not a site error.",
      },
      {
        heading: "How to redeem",
        paragraphs: [
          "Open RUNAWAYS, wait for the session to load, then open Shop on the left. Scroll to the Codes field at the bottom of that menu, paste the code, and press Use.",
          "LDPlayer notes that some players reported the redeemer missing in some versions. If you cannot find Codes, check the official RUNAWAYS Discord instead of retrying broken codes.",
        ],
      },
    ],
    sources: [
      {
        label: "GameRant codes list",
        url: "https://gamerant.com/runaways-codes-roblox/",
      },
      {
        label: "GamesRadar codes (25 Aug 2026)",
        url: "https://www.gamesradar.com/games/action/runaways-codes/",
      },
      {
        label: "LDPlayer beginner guide",
        url: "https://www.ldplayer.net/blog/roblox-runaways-beginners-guide.html",
      },
    ],
  },
  {
    slug: "classes",
    title: "RUNAWAYS Classes: What to Buy First",
    description:
      "Which RUNAWAYS class to unlock first, and why published price tables currently disagree.",
    category: "Loadout",
    updated: "August 26, 2026",
    readTime: "5 min",
    quickAnswer:
      "Start as the free Basic class if it appears in your lobby. The first paid class most beginner guides recommend is Smuggler, because it starts with a crowbar, a small backpack, and a large run-speed bonus. Confirm prices in the Classes menu — published tables conflict.",
    sections: [
      {
        heading: "What a class actually changes",
        paragraphs: [
          "Classes are lobby purchases. They set your starting loadout plus run speed, melee, and health before a run begins. You can switch after buying more than one.",
        ],
      },
      {
        heading: "Names both major guides agree on",
        bullets: [
          "Smuggler: small backpack, crowbar, strong run-speed bonus. Common first recommendation.",
          "Bounty Hunter: machete plus pistol, positive speed and melee. Mid/late goal in several guides.",
          "Breacher: shotgun, C4, medium backpack. Vault specialist.",
          "Juggernaut: minigun and a large health bonus with a speed penalty. Often named for the final border fight.",
        ],
      },
      {
        heading: "Why this page has no full price table",
        paragraphs: [
          "LDPlayer (24 Aug 2026) and Beebom list different Credz and Robux costs for the same class names. Smuggler is 45,000 credits in one table and 49 Robux in the other. Publishing one table as fact would be inventing certainty.",
          "Open Classes in the lobby and use the price shown there. If two sources disagree, the live menu wins.",
        ],
      },
    ],
    sources: [
      {
        label: "LDPlayer class table",
        url: "https://www.ldplayer.net/blog/roblox-runaways-beginners-guide.html",
      },
      {
        label: "Beebom class unlock guide",
        url: "https://beebom.com/all-runaways-classes/",
      },
    ],
  },
  {
    slug: "mexico-route",
    title: "How to Reach Mexico in RUNAWAYS",
    description:
      "The fixed southbound route: Kansas, Oklahoma, Texas, then the Mexico gate.",
    category: "Progression",
    updated: "August 26, 2026",
    readTime: "5 min",
    quickAnswer:
      "The map is not open-ended. Drive Kansas → Oklahoma → Texas → Mexico. Each state line is a checkpoint that spawns police. Fill the tank and repair the car before you commit to a crossing.",
    sections: [
      {
        heading: "The four gates",
        bullets: [
          "Kansas checkpoint — first state line; police dispatch on the other side.",
          "Oklahoma checkpoint — next crossing; guides mention green houses and safes.",
          "Texas checkpoint — denser safes and stores.",
          "Mexico border — drive the gate; AllThings.How says the YOU ESCAPED screen plus the International Fugitive badge confirm the win.",
        ],
      },
      {
        heading: "Before each crossing",
        paragraphs: [
          "NerdsChalk and LDPlayer both treat fuel and vehicle health as the run-killer. Slow down, line up with the trigger, and drive through. Missing the checkpoint trigger is a commonly reported failed-run cause.",
          "The final gate is a short fight against police and border guards in several writeups. Bring medkits, ammo, and a working car. Do not invent extra mechanics beyond that.",
        ],
      },
    ],
    sources: [
      {
        label: "AllThings.How walkthrough",
        url: "https://allthings.how/runaways-full-walkthrough-reach-the-mexico-border-roblox/",
      },
      {
        label: "NerdsChalk Mexico guide",
        url: "https://nerdschalk.com/how-to-reach-mexico-in-runaways-resource-management-and-loot-strategy-guide/",
      },
    ],
  },
];

export const categories = ["Start Here", "Progression", "Loadout"] as const;

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
