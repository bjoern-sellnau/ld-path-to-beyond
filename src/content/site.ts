/** Pfad-Präfix für den statischen Export (GitHub Pages), sonst leer. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Hängt den basePath an Pfade, die nicht über next/link laufen (z. B. Manifest). */
export function withBasePath(path: string) {
  return `${basePath}${path}`;
}

/** Absolute URL einer Seite – im statischen Export mit abschließendem Slash. */
export function absoluteUrl(path: string) {
  const trailingSlash = process.env.NEXT_PUBLIC_TRAILING_SLASH === "true";
  return `${site.url}${path}${trailingSlash ? "/" : ""}`;
}

/** Vorschau-Builds (z. B. GitHub Pages) sollen nicht in Suchmaschinen landen. */
export const noIndex = process.env.NEXT_PUBLIC_NOINDEX === "true";

export const site = {
  name: "Loona! Designs",
  owner: "Bjoern Sellnau",
  tagline: "what the web can be.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://loona-designs.de",
  locale: "de_DE",
  description:
    "Online-Portfolio von Bjoern Sellnau, Senior Developer aus Berlin: React, Next.js, Node – und ein Lab voller KI-Experimente mit Claude Code & Co.",
  email: "info@loona-designs.de",
  location: "Berlin",
  since: 2001,
  copyright: "2001–2026",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bjoern-sellnau/" },
    { label: "GitHub", href: "https://github.com/bjoern-sellnau/" },
    // TODO: prüfen, ob der Account noch aktiv ist – sonst entfernen.
    { label: "X / Twitter", href: "https://x.com/bjoern_sellnau" },
  ],
} as const;

export const navigation = [
  { href: "/", label: "Start" },
  { href: "/lab", label: "Lab" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const legalNavigation = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
] as const;

/** Social-Preview-Bild (public/og.png), relativ zu metadataBase – klappt so auch mit basePath. */
export const ogImage = {
  url: "og.png",
  width: 1200,
  height: 630,
  alt: `${site.name} – ${site.owner}, Senior Developer aus Berlin`,
};
