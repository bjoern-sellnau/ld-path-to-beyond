/**
 * Portfolio-Archiv. Quelle: loona-designs.de/portfolio.htm (Stand 11/2026).
 * Screenshots liegen auf der alten Seite unter /gallery/*.jpg und können bei
 * Bedarf über das Feld `images` ergänzt werden.
 */

export type ArchiveKind = "Website" | "Onlineshop" | "CMS" | "Game" | "Redesign";

export interface ArchiveEntry {
  title: string;
  kind: ArchiveKind;
  note?: string;
  images?: string[];
}

export interface ArchiveYear {
  year: number;
  entries: ArchiveEntry[];
}

export const archive: ArchiveYear[] = [
  {
    year: 2016,
    entries: [{ title: "Loona! Designs – Design-Update 2016", kind: "Redesign", note: "Online seit 12. März 2016" }],
  },
  {
    year: 2015,
    entries: [{ title: "Loona! Designs – Design-Update 2015", kind: "Redesign", note: "Online seit 26. April 2015" }],
  },
  {
    year: 2011,
    entries: [{ title: "Loona! Designs – Design-Update 2011", kind: "Redesign", note: "Online seit 19. August 2011" }],
  },
  {
    year: 2007,
    entries: [{ title: "Die Autowerkstatt", kind: "Website", note: "Online von August 2007 bis August 2012" }],
  },
  {
    year: 2006,
    entries: [
      { title: "CATT Shop", kind: "Onlineshop", note: "Entwurf" },
      { title: "CATT Shop CMS", kind: "CMS", note: "Entwurf" },
      { title: "Loona! Designs Website (ld2006)", kind: "Redesign" },
      { title: "Homepage einer fiktiven Fahrschule", kind: "Website", note: "Entwurf" },
    ],
  },
  {
    year: 2005,
    entries: [
      { title: "CATT", kind: "Website", note: "Nicht mehr online" },
      { title: "Hannoback – Homepage & MiniCMS", kind: "CMS", note: "Nicht mehr online" },
    ],
  },
  {
    year: 2004,
    entries: [{ title: "Computer Handel Yayci", kind: "Onlineshop", note: "Nicht mehr online" }],
  },
  {
    year: 2003,
    entries: [
      {
        title: "Covert Operations Tournament",
        kind: "Game",
        note: "Flash-5-Spiel – 2026 als KI-Remake im Lab neu aufgelegt",
      },
    ],
  },
  {
    year: 2002,
    entries: [{ title: "Rechtsanwalt Egermann", kind: "Website", note: "Nicht mehr online" }],
  },
];

export const featuredWork = [
  {
    title: "OpenBooking",
    role: "Lead Developer Frontend & Mobile Solutions",
    period: "2016 – 2020",
    description:
      "Hotel- und Unterkunfts-Metasuche von PIXELTEX und der OpenBooking AG. Verantwortung für das komplette Frontend und die mobilen Lösungen.",
    tags: ["Frontend", "Mobile", "Metasuche"],
  },
  {
    title: "Covert Operations",
    role: "Remake mit Claude Code",
    period: "2003 → 2026",
    description:
      "Vom Flash-5-Spiel zum 3D-Browser-Shooter mit Multiplayer und Level-Editor – entwickelt im Dialog mit einem KI-Agenten.",
    tags: ["React Three Fiber", "Socket.io", "KI"],
    href: "/lab/covert-operations",
  },
  {
    title: "Loona! Designs",
    role: "Eigene Plattform seit 2001",
    period: "2001 → heute",
    description:
      "Mein Spielplatz für neue Techniken: von Flash über mehrere Redesigns bis zu diesem Next.js-16-Entwurf.",
    tags: ["Next.js 16", "Design-System", "Experimente"],
    href: "/lab/ld-website-design-ideas",
  },
];
