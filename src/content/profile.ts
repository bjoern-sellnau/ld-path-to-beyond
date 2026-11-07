/**
 * Profil-Daten. Quelle: loona-designs.de/uebermich.htm und Startseite (Stand 11/2026).
 * Korrigiert: Tippfehler „Anthopic“ → „Anthropic“, „Puclic“ → „Public“ und die
 * AEVO-Qualifikation (03/2019), die auf der alten Seite als „Stripe Certified
 * Associate Developer“ beschriftet war.
 */

export const currentPosition = {
  role: "Senior Developer",
  company: "Materna",
  companyUrl: "https://www.materna.de",
  focus: "Public Sector · E-Government · Zoll",
  since: "2026-05",
};

export interface CareerStation {
  period: string;
  role: string;
  company: string;
  description: string;
}

export const career: CareerStation[] = [
  {
    period: "seit 05/2026",
    role: "Senior Developer",
    company: "Materna",
    description:
      "Public Sector und E-Government, im Projektumfeld Zoll. Ich bin gespannt, wohin die Reise geht.",
  },
  {
    period: "05/2020 – 01/2026",
    role: "Software Engineer – React",
    company: "Code-b Agile Websolutions",
    description: "Software Engineering mit Schwerpunkt React."
  },
  {
    period: "09/2019 – 03/2020",
    role: "Ausbilder Fachinformatiker Anwendungsentwicklung",
    company: "PIXELTEX GmbH",
    description:
      "Ausbildung eines unserer Auszubildenden – Wissen an die nächste Generation weitergeben.",
  },
  {
    period: "09/2016 – 2020",
    role: "Lead Developer OpenBooking (Frontend) & Mobile Solutions",
    company: "PIXELTEX GmbH · OpenBooking AG",
    description:
      "Verantwortlich für das Frontend von OpenBooking, der Hotel- und Unterkunfts-Metasuche von PIXELTEX und der OpenBooking AG.",
  },
  {
    period: "09/2007 – 2020",
    role: "Web Engineer",
    company: "PIXELTEX GmbH",
    description:
      "Mehr als 12 Jahre in einer Webagentur, gegründet in Hannover, seit Ende 2011 in Berlin.",
  },
  {
    period: "06/2002",
    role: "Staatlich geprüfter Technischer Assistent für Informatik",
    company: "Ausbildung (ITA)",
    description:
      "Der Startpunkt: erst Websites mit Flash und ActionScript, später Web-Apps mit modernen Technologien.",
  },
];

export interface Certification {
  date: string;
  title: string;
  issuer: string;
  group: "ki" | "payments" | "ausbildung" | "backend";
}

export const certifications: Certification[] = [
  { date: "03/2026", title: "Introduction to Agent Skills", issuer: "Anthropic", group: "ki" },
  { date: "03/2026", title: "Claude Code in Action", issuer: "Anthropic", group: "ki" },
  { date: "11/2025", title: "KI-Spezialist im Unternehmen", issuer: "Scaly Academy", group: "ki" },
  { date: "12/2024", title: "Stripe Certified Professional Developer", issuer: "Stripe", group: "payments" },
  { date: "12/2024", title: "Stripe Certified Billing Developer", issuer: "Stripe", group: "payments" },
  { date: "12/2024", title: "Stripe Certified Associate Developer", issuer: "Stripe", group: "payments" },
  { date: "03/2019", title: "Ausbilder nach AEVO – Fachinformatiker Anwendungsentwicklung", issuer: "IHK Berlin", group: "ausbildung" },
  { date: "08/2015", title: "StrongLoop Certified Node Developer (SCND)", issuer: "StrongLoop by IBM", group: "backend" },
  { date: "06/2010", title: "Adobe Certified Expert – Advanced ColdFusion 8", issuer: "Adobe", group: "backend" },
];

export interface SkillGroup {
  title: string;
  items: { name: string; level?: "basics" }[];
}

export const skills: SkillGroup[] = [
  {
    title: "KI & Agentic Coding",
    items: [{ name: "Claude Code" }, { name: "Agent Skills" }, { name: "Claude Design" }, { name: "Antigravity" }],
  },
  {
    title: "Frontend",
    items: [
      { name: "React" },
      { name: "React Hooks" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Redux" },
      { name: "Styled-Components" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Webpack" },
    ],
  },
  {
    title: "Mobile & 3D",
    items: [{ name: "React Native" }, { name: "three.js" }, { name: "React Three Fiber" }],
  },
  {
    title: "Testing",
    items: [{ name: "Jest", level: "basics" }, { name: "React Testing Library", level: "basics" }],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js" },
      { name: "GraphQL", level: "basics" },
      { name: "Lucee / Railo / ColdFusion / OpenBD" },
      { name: "PHP" },
      { name: "Stripe" },
    ],
  },
  {
    title: "Datenbanken",
    items: [{ name: "MongoDB" }, { name: "MySQL" }, { name: "PostgreSQL", level: "basics" }, { name: "CouchDB" }],
  },
  {
    title: "Konzepte",
    items: [{ name: "Responsive / Adaptive Design" }, { name: "Mobile First" }, { name: "JSON" }, { name: "XML" }],
  },
  {
    title: "Wurzeln",
    items: [{ name: "Adobe Flash" }, { name: "ActionScript 2" }],
  },
];

export const tools = [
  { name: "Claude Code", description: "KI-Coding-Agent im Terminal" },
  { name: "Visual Studio Code", description: "Code-Editor" },
  { name: "TablePlus", description: "Datenbank-Manager für Postgres, MySQL und mehr" },
  { name: "Jira & Confluence", description: "Planung & Dokumentation" },
  { name: "GitLab & GitHub", description: "Versionierung & CI" },
  { name: "Slack", description: "Kommunikation" },
  { name: "iTerm2 + Oh My Zsh", description: "Terminal & Shell-Setup" },
  { name: "Chrome DevTools", description: "Debugging & Performance" },
  { name: "Testgeräte", description: "Verschiedene Geräte und Browser zum Testen" },
];

/** Technologien für das Laufband auf der Startseite */
export const techMarquee = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "React Native",
  "Claude Code",
  "three.js",
  "GraphQL",
  "Stripe",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
];
