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

export type ClassRow = {
  name: string;
  cost: string;
  loadout: string;
  bonus: string;
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
  codes?: CodeRow[];
  classes?: ClassRow[];
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
    updated: "August 30, 2026",
    readTime: "3 min",
    quickAnswer:
      "Rechecked 30 August 2026: major outlets still list SUPERCAT for a Light Pistol and RUN for Credz. GameRant and AllThings.How say RUN is 1,000 Credz; Beebom and PCGamesN say 2k. Redeem in Shop → Codes. Trust the in-game grant.",
    codes: [
      {
        code: "SUPERCAT",
        reward: "Light Pistol",
        note: "Listed by GameRant, GamesRadar, Beebom, AllThings.How.",
      },
      {
        code: "RUN",
        reward: "Credz (amount disputed)",
        note: "1,000 Credz in GameRant / AllThings.How; 2k in Beebom / PCGamesN.",
      },
    ],
    sections: [
      {
        heading: "Codes still listed on 30 August 2026",
        paragraphs: [
          "No tracker we checked today had moved SUPERCAT or RUN into an expired table. That is not a promise they will still work tonight.",
        ],
        note: "Promo codes change quickly. If a code fails, it is probably expired, already claimed, or typed with the wrong case — not a site error.",
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
        label: "Beebom codes (24 Aug 2026)",
        url: "https://beebom.com/roblox-runaways-codes/",
      },
      {
        label: "AllThings.How class unlock guide (codes recap)",
        url: "https://allthings.how/how-to-unlock-every-runaways-class-full-list-and-costs/",
      },
    ],
  },
  {
    slug: "classes",
    title: "RUNAWAYS Classes: What to Buy First",
    description:
      "Every RUNAWAYS class cost, loadout, and bonus from the latest AllThings.How table, plus why older guides still disagree.",
    category: "Loadout",
    updated: "August 30, 2026",
    readTime: "6 min",
    quickAnswer:
      "Start as free Basic if it is in your lobby. The first paid pick most beginner guides still like is Smuggler (crowbar, small backpack, +20% run speed, 49 Robux). Confirm the price in Classes — this table follows AllThings.How from late August 2026.",
    classes: [
      { name: "Basic", cost: "Free", loadout: "None", bonus: "None" },
      { name: "Brawler", cost: "10,000 Credz", loadout: "Knuckle", bonus: "+5% Melee, -10% Run Speed" },
      { name: "Scout", cost: "18,000 Credz", loadout: "Small Backpack, Bat", bonus: "+10% Run Speed, -5% Melee, -20% Health" },
      { name: "Old CEO", cost: "33,000 Credz", loadout: "Gold Ruby Necklace, Diamond, Gold Tiara, Diamond Ring", bonus: "-5% Run Speed, -15% Health" },
      { name: "Smuggler", cost: "49 Robux", loadout: "Small Backpack, Crowbar", bonus: "+20% Run Speed, -10% Melee" },
      { name: "Contractor", cost: "45,000 Credz", loadout: "Mace, Light Bullet Pack, Pistol", bonus: "+10% Melee, +5% Health, -5% Run Speed" },
      { name: "Medic", cost: "60,000 Credz", loadout: "2 Medic Bags, Light Armor, Medic Pack", bonus: "+20% Health, -5% Run Speed" },
      { name: "Gang Member", cost: "85,000 Credz", loadout: "Blue Cow, Small Backpack, MAC, Light Bullet Pack", bonus: "+10% Run Speed, -5% Health" },
      { name: "Bounty Hunter", cost: "160,000 Credz", loadout: "Machete, Light Bullet Pack, Pistol", bonus: "+20% Run Speed, +10% Melee" },
      { name: "Breacher", cost: "280,000 Credz", loadout: "Medium Backpack, Shotgun, C4, Shotgun Bullet Pack", bonus: "+40% Melee" },
      { name: "Juggernaut", cost: "450,000 Credz", loadout: "Light Armor, Minigun, Medium Backpack, Light Bullet Box", bonus: "+100% Health, -20% Run Speed" },
      { name: "Ex-Military", cost: "559 Robux", loadout: "Heavy Armor, Heavy Bullet Pack, Sniper, Large Backpack", bonus: "+30% Melee, +15% Run Speed" },
    ],
    sections: [
      {
        heading: "What a class actually changes",
        paragraphs: [
          "Classes are lobby purchases. They set your starting loadout plus run speed, melee, and health before a run begins. AllThings.How says there are 12 classes, ownership is permanent, and you can switch between owned classes between runs.",
        ],
      },
      {
        heading: "What to buy first",
        bullets: [
          "Basic: free. Use it until you can afford an upgrade.",
          "Smuggler: still the common first paid pick because it starts with a crowbar and a large run-speed bonus. It is Robux-only in the AllThings.How table.",
          "Brawler / Scout: the cheapest Credz upgrades if you do not want to spend Robux.",
          "Bounty Hunter / Breacher / Juggernaut: later goals. Do not farm these before you can finish Kansas.",
        ],
      },
      {
        heading: "Why older tables still conflict",
        paragraphs: [
          "LDPlayer (24 Aug 2026) and Beebom listed different Credz and Robux costs for the same names. This page now follows the dedicated AllThings.How class article instead of inventing a blend. If the live Classes menu disagrees, the live menu wins.",
        ],
      },
    ],
    sources: [
      {
        label: "AllThings.How class costs (late Aug 2026)",
        url: "https://allthings.how/how-to-unlock-every-runaways-class-full-list-and-costs/",
      },
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
