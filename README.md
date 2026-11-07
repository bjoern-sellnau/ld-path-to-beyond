# Loona! Designs – Redesign (Entwurf)

Neuer Entwurf für [loona-designs.de](https://loona-designs.de), das Online-Portfolio von Bjoern Sellnau, mit Next.js 16 und einem neuen Bereich **Lab** für KI-Experimente.

**Vorschau auf GitHub Pages:** https://bjoern-sellnau.github.io/ld-path-to-beyond/

Die Analyse der alten Seite mit allen Befunden und Quellen steht in [`docs/ANALYSE.md`](docs/ANALYSE.md).

![Startseite](docs/screenshots/start.png)
![Lab](docs/screenshots/lab.png)

## Stack

- Next.js 16.4 (App Router, Turbopack), alle Seiten statisch vorgerendert
- React 19.3 (`<ViewTransition>` für den Morph von der Lab-Karte zur Detailseite)
- TypeScript, Tailwind CSS 4, ESLint 9
- Keine weiteren Runtime-Abhängigkeiten: Icons, Logo und Lab-Cover sind eigenes SVG

## Starten

```bash
npm install
```

```bash
npm run dev
```

Die Seite läuft dann unter http://localhost:3000.

## Zwei Build-Ziele

| Ziel | Befehl | Ergebnis |
| --- | --- | --- |
| Node-Server | `npm run build && npm run start` | Mit 308-Redirects der alten URLs und Security-Headern |
| GitHub Pages | `npm run build:pages` | Statischer Export nach `out/`, Pfad-Präfix `/ld-path-to-beyond`, `noindex` |

Den Pages-Build kannst du lokal so ansehen, wie GitHub Pages ihn ausliefert:

```bash
npm run preview:pages
```

Danach unter http://localhost:4173/ld-path-to-beyond/ öffnen.

### Deployment auf GitHub Pages

Der Workflow `.github/workflows/deploy-pages.yml` läuft bei jedem Push auf `main` oder den Entwurfs-Branch. Er führt Lint und den statischen Export aus und pusht `out/` auf den Branch `gh-pages`, nach dem gleichen Muster wie bei Covert Operations.

Einmalig in den Repository-Einstellungen festlegen: **Settings → Pages → Build and deployment → Source: „Deploy from a branch“**, dann Branch `gh-pages`, Ordner `/ (root)`.

Stellschrauben (Umgebungsvariablen beim Build):

| Variable | Pages-Standard | Zweck |
| --- | --- | --- |
| `DEPLOY_TARGET` | `github-pages` | schaltet den statischen Export ein |
| `PAGES_BASE_PATH` | `/ld-path-to-beyond` | Pfad-Präfix; mit eigener Domain leer setzen (`""`) |
| `NEXT_PUBLIC_SITE_URL` | `https://bjoern-sellnau.github.io/ld-path-to-beyond` | absolute URLs für Canonical, Sitemap und Open Graph |
| `NEXT_PUBLIC_NOINDEX` | `true` | Vorschau nicht indexieren; für den Livegang entfernen |

Hinweis zu Cache Components: Mit `output: "export"` brauchen die Metadata-Routen (Sitemap, Robots, Manifest) `dynamic = "force-static"`. Genau diese Angabe verbietet Cache Components, deshalb ist es in diesem Projekt aus. Für eine rein statische Seite ohne Datenabrufe ändert das nichts.

## Struktur

```
src/
  app/
    page.tsx              Startseite
    lab/page.tsx          Lab – Übersicht mit Filter
    lab/[slug]/page.tsx   Lab – Detailseite je Experiment
    portfolio/            Ausgewählte Projekte + Archiv 2002–2016
    ueber-mich/           Tech-Zeitleiste, Werdegang, Zertifikate, Skills, Werkzeuge
    kontakt/              E-Mail & Profile
    impressum/            § 5 DDG
    datenschutz/          ohne Cookies & Tracking
    not-found.tsx         404-Seite
    sitemap.ts, robots.ts, manifest.ts, icon.svg
  components/             Header, Footer, UI-Bausteine, Lab-Komponenten, Tech-Zeitleiste
  content/                Inhalte als typisierte Daten
    lab.ts                KI-Experimente
    portfolio.ts          Archiv & ausgewählte Arbeiten
    profile.ts            Werdegang, Tech-Zeitleiste, Zertifikate, Skills
    site.ts               Name, URL, E-Mail, Navigation, Social Links
public/
  og.png                  Social-Preview-Bild
  *.htm                   Weiterleitungsseiten für die alten URLs (statisches Hosting)
scripts/
  serve-pages.mjs         lokale GitHub-Pages-Vorschau
```

## Neues Lab-Experiment hinzufügen

Einen Eintrag in `src/content/lab.ts` ergänzen:

```ts
{
  slug: "mein-experiment",
  title: "Mein Experiment",
  subtitle: "Kurzbeschreibung",
  date: "2026-11",
  category: "game",          // "game" | "tool" | "web"
  status: "in-arbeit",       // "in-arbeit" | "spielbar" | "abgeschlossen"
  tools: ["Claude Code"],
  models: ["Opus 4.8"],
  summary: "Ein Satz für Karte und Meta-Description.",
  description: ["Absatz 1", "Absatz 2"],
  playUrl: "https://…",      // optional
  hue: 200,                  // Farbton für das generative Cover
}
```

Detailseite, Sitemap-Eintrag, Filter und Zähler entstehen daraus automatisch.

## Weiterleitungen der alten URLs

| Alt | Neu |
| --- | --- |
| `/portfolio.htm` | `/portfolio` |
| `/uebermich.htm` | `/ueber-mich` |
| `/impressum.htm` | `/impressum` |
| `/kontakt.htm` | `/kontakt` |

Auf dem Node-Server sind das echte 308-Redirects aus `next.config.ts`. Beim statischen Hosting übernehmen die Seiten in `public/*.htm` per Meta-Refresh.
