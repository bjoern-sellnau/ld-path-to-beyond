export const site = {
  name: "Loona! Designs",
  owner: "Bjoern Sellnau",
  tagline: "what the web can be.",
  url: "https://loona-designs.de",
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
