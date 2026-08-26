export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://how-to-fish-guide-mu.vercel.app"
).replace(/\/$/, "");

export const steamAppId = "4001890";
export const steamStoreUrl = `https://store.steampowered.com/app/${steamAppId}/How_to_Fish/`;
export const steamAchievementsUrl = `https://steamcommunity.com/stats/${steamAppId}/achievements`;

export function absoluteUrl(path = "/") {
  if (path === "/") return siteUrl;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export const staticIndexablePaths = [
  "/",
  "/guides",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
] as const;
