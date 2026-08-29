export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://anime-origins-guide-ten.vercel.app"
).replace(/\/$/, "");

export function absoluteUrl(path = "/") {
  if (path === "/") return siteUrl;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export const robloxUrl =
  "https://www.roblox.com/games/129932912185311/Anime-Origins";

export const brandName = "Summon Desk";

export const staticIndexablePaths = [
  "/",
  "/guides",
  "/about",
  "/contact",
] as const;
