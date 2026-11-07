# loona-designs.de – Analyse & Redesign-Konzept

Stand: 07.11.2026 · Grundlage: Abruf aller erreichbaren Seiten von https://loona-designs.de/

| Seite | URL | Status |
| --- | --- | --- |
| Startseite | `/` | 200 |
| Portfolio | `/portfolio.htm` | 200 |
| Über mich | `/uebermich.htm` | 200 |
| Impressum & Datenschutz | `/impressum.htm` | 200 |
| Kontakt (aus dem Impressum verlinkt) | `/kontakt.htm` | 200, **leere Seite (0 Byte)** |
| robots.txt, sitemap.xml, favicon.ico | – | 404 |
| beliebige unbekannte URL (z. B. `/lab.htm`) | – | 200 mit Startseiten-Inhalt (**Soft 404**) |

---

## 1. Befunde

### Technik & Performance

- **Layout von 2007**: Die Stylesheets heißen `ld07_*.css`, dazu viele Inline-Styles. Der Inhalt sitzt in einer Spalte mit fester Breite (ca. 630 px).
- **Veraltete Bibliotheken**: jQuery 1.6.2 (2011) plus Colorbox auf der Portfolio-Seite. jQuery wird doppelt eingebunden (Google CDN und lokal).
- **Altlasten**: IE6-Countdown-Banner per Conditional Comment über unverschlüsseltes `http://`. Meta-Keywords nennen u. a. „Flash MX 2004“. Generator: „Coda2 for Mac“, Publisher „2001–2015“.
- **SEO-Grundlagen fehlen**: kein Favicon, keine `robots.txt`, keine `sitemap.xml`, kein Open Graph. Beim Teilen auf LinkedIn erscheint deshalb keine Vorschau.
- **Soft 404**: Unbekannte URLs liefern Status 200 mit der Startseite. Das erzeugt Duplicate Content.
- **Kaputter Kontakt**: `kontakt.htm?sel=info` aus dem Impressum liefert eine leere Seite.
- **HTML-Fehler**: In der Projektliste steht ein doppeltes `</li>`.
- **Server-Header** geben `X-Powered-By: PHP/8.5.12` und `PleskLin` preis (unnötige Information für Angreifer).

### Mobile & Barrierefreiheit

- Der Viewport ist mit `maximum-scale=1, user-scalable=no` gesetzt, Zoomen ist damit gesperrt (WCAG 1.4.4).
- Auf dem Smartphone (390 px) läuft die Navigation horizontal aus dem Bild: „über mich“ wird abgeschnitten, „impressum & datenschutz“ ist nicht sichtbar.
- Das Splash-Bild hat eine feste Breite von 640 px und wird beschnitten. Der Alt-Text lautet „splashImage“.
- Die `h1` ist versteckt, das Logo ist ein Rasterbild. Fließtext fällt auf eine Serifen-Schrift (Times) zurück, teils 12 px Weiß auf Blau.

### Inhalt

- **Tippfehler**: „Anthopic“ (2×) statt „Anthropic“, „Puclic Sector“ statt „Public Sector“.
- **Falsche Zuordnung**: Auf „Über mich“ ist 03/2019 als „Stripe Certified Associate Developer – IHK Berlin“ beschriftet. Gemeint ist die Ausbildereignung nach AEVO.
- **Veraltende Angaben**: „Ich bin 45 Jahre alt“ und „Seit mehr als 18 Jahren“ stimmen nach einem Jahr nicht mehr.
- **Die KI-Experimente gehen unter**: Sieben Projekte stehen als Einzeiler unter „aktuelle side projekte“, ohne Beschreibung, Bild oder Detailseite. Nur 2 von 7 sind verlinkt.
- **Lücke im Portfolio**: Zwischen 2016 und 2026 steht nur „Neue Webseite (coming soon)“.
- **Uneinheitliche E-Mail**: Im Impressum steht `info (at) loonadesigns.de`, in der Datenschutzerklärung `info (at) loona-designs.de`.
- Der Twitter-Link nutzt `http://`. Twitter heißt seit 2023 X.

### Rechtstexte (bitte anwaltlich prüfen lassen)

- **Impressum** verweist auf „§ 10 Absatz 3 MDStV“. Der Mediendienste-Staatsvertrag ist seit dem 1. März 2007 außer Kraft. Heute gelten **§ 5 DDG** (seit 14.05.2024 anstelle von § 5 TMG) und für journalistisch-redaktionelle Inhalte **§ 18 Abs. 2 MStV**. Veraltete Gesetzesverweise können abgemahnt werden.
- **Datenschutzerklärung** nennt als Garantie für US-Übermittlungen den „Privacy Shield“. Den hat der EuGH im Juli 2020 (Schrems II) für ungültig erklärt. Seit 10.07.2023 gilt das EU-US Data Privacy Framework. Der neue Entwurf überträgt keine Daten in die USA, der Passus entfällt deshalb ganz.
- Die Datenschutzerklärung nennt „Reichweitenmessung/Marketing“ als Zweck, obwohl kein entsprechendes Tool erkennbar ist.
- Für Cookies und lokale Speicherung gilt heute das **TDDDG** (bis Mai 2024: TTDSG).

**Quellen:**
[IHK Nürnberg – Impressumspflicht](https://www.ihk-nuernberg.de/ihr-unternehmen/rechtsinformationen-fuer-unternehmen/internetrecht-recht-des-e-commerce/impressumspflicht) ·
[datenschutz-generator.de – Ratgeber Impressum](https://datenschutz-generator.de/ratgeber-impressum/) ·
[Uni Bochum – Telemediengesetz (MDStV-Aufhebung 2007)](https://www.itsb.ruhr-uni-bochum.de/dokumente/telemediengesetz.pdf) ·
[Hunton – EU-US Data Privacy Framework](https://www.hunton.com/privacy-and-cybersecurity-law-blog/breaking-eu-commission-adopts-eu-u-s-data-privacy-framework-adequacy-decision) ·
[e-recht24 – TDDDG](https://www.e-recht24.de/datenschutz/12834-tdddg.html)

---

## 2. Was der Next.js-Entwurf besser macht

### Informationsarchitektur

| Alt | Neu |
| --- | --- |
| Startseite (Qualifikationen, Splash, Side-Projekte) | **Start**: Hero, aktuelle Position, Lab-Highlights, Story „Flash → KI-Remake“, Schwerpunkte, Zertifikate, CTA |
| – | **Lab** (neu): alle KI-Experimente mit Filter nach Typ und Tool, Status, Modell, Live-Links und Workflow |
| – | **Lab-Detailseiten** (`/lab/[slug]`): Beschreibung, Highlights, Stack, Modelle, Ursprung, Vor/Zurück |
| Portfolio (Liste nach Jahren) | **Portfolio**: ausgewählte Projekte und ein aufgeräumtes Archiv 2002–2016 |
| Über mich | **Über mich**: Intro, Werdegang als Timeline, Zertifikate, gruppierte Skills, Werkzeuge |
| kontakt.htm (kaputt) | **Kontakt**: E-Mail mit Kopier-Button, LinkedIn, GitHub, X |
| Impressum & Datenschutz (eine Seite) | getrennt: **Impressum** (§ 5 DDG) und **Datenschutz** (ohne Cookies, ohne Tracking) |

### Design

- **Marke behalten, Look erneuern**: Der blaue „Loona-Mond“ aus dem alten Logo ist jetzt eine Vektor-Bildmarke und das große Hero-Visual. Der alte Slogan „what the web can be.“ ist die Headline.
- **Dark-first** mit Light-Mode. Das Schema folgt dem System und lässt sich umschalten, die Wahl wird ohne Flackern gespeichert.
- **Typografie**: Unbounded (Display, angelehnt an das breite Logo), Geist (Text), Geist Mono (Meta-Angaben). next/font liefert alle Schriften selbst aus, es gibt keine Anfragen an Google.
- **Generative Lab-Cover**: Jedes Experiment bekommt aus seinem Slug ein eigenes SVG-Cover (Tunnel für Games, Dashboard für Tools, Wireframe für Web). Echte Screenshots können sie später ersetzen.
- **Bewegung mit Maß**: CSS-Scroll-Animationen (`animation-timeline: view()`) und ein Morph-Übergang von der Lab-Karte zur Detailseite (React `<ViewTransition>`). Bei `prefers-reduced-motion` ist alles abgeschaltet.

### Technik

- **Next.js 16.4** (App Router, Turbopack), **React 19.3**, **TypeScript**, **Tailwind CSS 4**.
- **Cache Components**: Alle Seiten werden beim Build statisch vorgerendert. Die Lab-Detailseiten entstehen über `generateStaticParams`.
- **SEO**: Metadata-API mit Titel-Template, Canonicals, Open-Graph-Bild (generiert), `sitemap.xml`, `robots.txt`, Web-Manifest, SVG-Favicon und JSON-LD (`Person`).
- **Echte 404**: Eine eigene Not-found-Seite. Unbekannte Lab-Slugs werden per `proxy.ts` vor dem Rendern abgefangen und liefern Status 404.
- **Alte URLs bleiben gültig**: Die `.htm`-Adressen werden per 308 dauerhaft auf die neuen Routen umgeleitet.
- **Security-Header**: `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options` und `Permissions-Policy`.
- **Barrierefreiheit**: Skip-Link, sichtbarer Fokus, `aria-current` in der Navigation, `aria-pressed` bei Filtern, Live-Region für Filterergebnisse, Zoom erlaubt. Alle Text-Tokens erreichen WCAG-AA-Kontrast (≥ 4,5 : 1).
- **Inhalte als typisierte Daten** in `src/content/*.ts`. Ein neues Experiment ist ein neuer Eintrag in einem Array.

---

## 3. Offen vor dem Livegang

- [ ] Aktuelles **Portraitfoto** einsetzen (Platzhalter auf „Über mich“).
- [ ] **Lab-Texte** vervollständigen: Alle mit `TODO` markierten Absätze werden im Entwurf gelb hervorgehoben.
- [ ] **Screenshots oder Videos** der Experimente ergänzen, mindestens für Corefall und Covert Operations.
- [ ] **E-Mail-Adresse** bestätigen (`info@loona-designs.de` vs. `info@loonadesigns.de`).
- [ ] **X-/Twitter-Account** prüfen: noch aktiv? Sonst Link entfernen.
- [ ] **Hosting** klären. Die alte Seite läuft auf Plesk/PHP. Für Next.js braucht es Node.js (Plesk-Node-Extension, Docker oder z. B. Vercel). `proxy.ts` setzt eine Server-Runtime voraus.
- [ ] **Datenschutz**: Hosting-Anbieter und Auftragsverarbeitungsvertrag ergänzen. Beide Rechtstexte prüfen lassen.
- [ ] Optional: Content-Security-Policy mit Nonce, Lab-Einträge als MDX, englische Version.
