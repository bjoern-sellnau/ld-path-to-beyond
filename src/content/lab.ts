/**
 * Lab – KI-Experimente.
 *
 * Quelle: Startseite & Portfolio von loona-designs.de (Stand 11/2026) sowie
 * das öffentliche Repository github.com/bjoern-sellnau/covert-operations.
 * Texte, die mit "TODO" markiert sind, bitte mit eigenen Learnings füllen.
 */

export type LabCategory = "game" | "tool" | "web";
export type LabStatus = "in-arbeit" | "spielbar" | "abgeschlossen";

export type LabTool = "Claude Code" | "Claude Design" | "Antigravity 2";

export interface LabExperiment {
  slug: string;
  title: string;
  subtitle: string;
  /** Monat im Format YYYY-MM */
  date: string;
  category: LabCategory;
  status: LabStatus;
  tools: LabTool[];
  models: string[];
  summary: string;
  description: string[];
  highlights?: string[];
  stack?: string[];
  playUrl?: string;
  repoUrl?: string;
  /** Farbton (0–360) für das generative Cover */
  hue: number;
  /** Optionaler Bezug zu einem älteren Projekt im Portfolio-Archiv */
  origin?: { year: number; title: string };
}

export const categoryLabels: Record<LabCategory, string> = {
  game: "Game",
  tool: "Tool",
  web: "Web",
};

export const statusLabels: Record<LabStatus, string> = {
  "in-arbeit": "In Arbeit",
  spielbar: "Spielbar",
  abgeschlossen: "Abgeschlossen",
};

export const experiments: LabExperiment[] = [
  {
    slug: "covert-operations-arena",
    title: "Covert Operations Arena",
    subtitle: "Arena-FPS",
    date: "2026-05",
    category: "game",
    status: "in-arbeit",
    tools: ["Claude Code"],
    models: ["Opus 4.8"],
    summary:
      "Ein Arena-Shooter aus der Ego-Perspektive – ein Ableger von Covert Operations, gebaut mit Opus 4.8.",
    description: [
      "Covert Operations Arena konzentriert sich auf eine Disziplin: Ego-Shooter-Gefechte in der Arena.",
      "TODO: Ziel des Experiments, Spielmodi und erste Learnings mit Opus 4.8 ergänzen.",
    ],
    hue: 352,
  },
  {
    slug: "ld-website-design-ideas",
    title: "LD Website Design Ideas",
    subtitle: "Redesign-Studien für loona-designs.de",
    date: "2026-05",
    category: "web",
    status: "in-arbeit",
    tools: ["Claude Code"],
    models: ["Opus 4.8"],
    summary:
      "Design-Studien für die neue Loona! Designs Website. Der Next.js-16-Entwurf, den du gerade ansiehst, ist eine davon.",
    description: [
      "Die alte Seite stammt im Kern aus 2007 bis 2016: tabellarisches Layout, jQuery 1.6 und ein Desktop-first-Raster. Höchste Zeit für einen Neustart.",
      "In diesem Experiment entstehen mehrere Richtungen für das Redesign – von der Informationsarchitektur über das Design-System bis zur Umsetzung mit Next.js 16, React 19 und Tailwind CSS 4.",
    ],
    highlights: [
      "Next.js 16 mit Cache Components – alle Seiten werden statisch vorgerendert",
      "Neuer Bereich „Lab“ für KI-Experimente",
      "Dark & Light Mode, responsive und barrierearm",
      "Weiterleitungen von den alten .htm-URLs",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4"],
    hue: 200,
  },
  {
    slug: "death-grid-3d",
    title: "Death Grid 3D",
    subtitle: "Retro-Shooter im Stil von Doom",
    date: "2026-05",
    category: "game",
    status: "in-arbeit",
    tools: ["Antigravity 2"],
    models: [],
    summary:
      "Ein Retro-Shooter im Stil von Doom – bisher das einzige Lab-Experiment mit Antigravity 2 statt Claude Code.",
    description: [
      "Death Grid 3D ist das Gegenexperiment zu den Claude-Code-Projekten: Wie fühlt sich ein anderer Agent-Workflow an, wenn das Ziel ein klassischer Retro-Shooter ist?",
      "TODO: Vergleich der Workflows (Antigravity 2 vs. Claude Code) ergänzen.",
    ],
    hue: 28,
  },
  {
    slug: "ld-workbench",
    title: "LD WorkBench",
    subtitle: "Timesheets & Notizen verwalten",
    date: "2026-05",
    category: "tool",
    status: "in-arbeit",
    tools: ["Claude Code"],
    models: ["Opus 4.7"],
    summary:
      "Ein persönliches Werkzeug, das Timesheets und Notizen an einem Ort zusammenführt.",
    description: [
      "LD WorkBench bündelt Timesheets und Notizen an einem Ort – ein Werkzeug für den eigenen Arbeitsalltag, gebaut mit Claude Code und Opus 4.7.",
      "TODO: Features, Stack und Screenshots ergänzen.",
    ],
    hue: 160,
  },
  {
    slug: "corefall",
    title: "Corefall",
    subtitle: "6D-Shooter à la Descent",
    date: "2026-05",
    category: "game",
    status: "spielbar",
    tools: ["Claude Code", "Claude Design"],
    models: ["Opus 4.7"],
    summary:
      "Schwerelos in alle Richtungen: ein Shooter in der Tradition von Descent – direkt im Browser spielbar.",
    description: [
      "Corefall greift das Gefühl von Descent auf: Es gibt kein Oben und Unten mehr, das Schiff bewegt und dreht sich frei in alle Richtungen.",
      "Gestaltet mit Claude Design, umgesetzt mit Claude Code und Opus 4.7. Die spielbare Version läuft auf GitHub Pages.",
    ],
    playUrl: "https://bjoern-sellnau.github.io/core-fall/",
    hue: 275,
  },
  {
    slug: "covert-operations",
    title: "Covert Operations",
    subtitle: "Top-Down, ISO, FPS & mehr",
    date: "2026-04",
    category: "game",
    status: "spielbar",
    tools: ["Claude Code", "Claude Design"],
    models: ["Opus 4.7"],
    summary:
      "Das Remake meines Flash-Spiels von 2003: ein 3D-Shooter mit mehreren Kameraperspektiven, Multiplayer und Level-Editor.",
    description: [
      "2003 entstand „Covert Operations Tournament“ als Flash-5-Spiel. 23 Jahre später baue ich es mit Claude Code neu – diesmal in 3D, im Browser, auf Desktop, iPad und iPhone.",
      "Das Spiel wechselt zwischen Top-Down-, ISO- und Ego-Perspektive, hat einen Shop, Mutatoren, frei definierbare Regeln und einen eigenen Level-Editor. Gearbeitet wird mit einer CLAUDE.md für die Leitplanken und einer TASKS.md als gemeinsamer Aufgabenliste für Mensch und Agent.",
    ],
    highlights: [
      "Multiplayer-Lobby mit Chat über Socket.io",
      "Level-Editor mit Skripten und Karten pro Spielmodus",
      "Mutatoren, Shop und Regeln – importier- und exportierbar als JSON",
      "Touch-Steuerung und angepasstes HUD für iPad & iPhone",
      "Boot-Sequenz, Partikeleffekte und über 30 Musik-Tracks",
    ],
    stack: ["React", "React Three Fiber", "three.js", "Zustand", "Socket.io", "Vite", "TypeScript"],
    playUrl: "https://bjoern-sellnau.github.io/Covert-Operations/",
    repoUrl: "https://github.com/bjoern-sellnau/covert-operations",
    hue: 12,
    origin: { year: 2003, title: "Covert Operations Tournament" },
  },
  {
    slug: "ld-buddy",
    title: "LD Buddy.",
    subtitle: "Finanzen, Bestellungen & mehr",
    date: "2026-03",
    category: "tool",
    status: "in-arbeit",
    tools: ["Claude Code"],
    models: ["Opus 4.5 – 4.7"],
    summary:
      "Ein persönlicher Helfer für Finanzen, Bestellungen & mehr – das älteste Projekt im Lab.",
    description: [
      "Mit LD Buddy hat das Lab angefangen: ein Tool, das Finanzen, Bestellungen und mehr zusammenführt. Das Projekt ist über mehrere Modellversionen gewachsen – von Opus 4.5 bis 4.7.",
      "TODO: Was hat sich zwischen den Modellversionen spürbar verändert?",
    ],
    hue: 120,
  },
];

export function getExperiment(slug: string) {
  return experiments.find((e) => e.slug === slug);
}

export function getAdjacentExperiments(slug: string) {
  const index = experiments.findIndex((e) => e.slug === slug);
  return {
    previous: index > 0 ? experiments[index - 1] : undefined,
    next: index < experiments.length - 1 ? experiments[index + 1] : undefined,
  };
}

const monthFormatter = new Intl.DateTimeFormat("de-DE", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function formatMonth(date: string) {
  const [year, month] = date.split("-").map(Number);
  return monthFormatter.format(Date.UTC(year, month - 1, 1));
}

export function formatMonthShort(date: string) {
  const [year, month] = date.split("-");
  return `${month}/${year}`;
}
