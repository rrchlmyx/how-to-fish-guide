export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://runaways-guide.vercel.app"
).replace(/\/$/, "");

export function absoluteUrl(path = "/") {
  if (path === "/") return siteUrl;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export const robloxUrl = "https://www.roblox.com/games/118418618261207/RUNAWAYS";

export const staticIndexablePaths = [
  "/",
  "/guides",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
] as const;
