import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von loona-designs.de.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

/**
 * Entwurf, abgestimmt auf den technischen Stand DIESER Next.js-Version:
 * keine Cookies, kein Tracking, keine eingebundenen Drittanbieter, Schriften
 * selbst gehostet (next/font). Der veraltete Hinweis auf den „Privacy Shield“
 * (vom EuGH 2020 für ungültig erklärt) entfällt, da keine Daten in die USA
 * übermittelt werden. Hosting-Anbieter ergänzen und rechtlich prüfen lassen.
 */
export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Datenschutzerklärung">
        <p>Kurz gesagt: keine Cookies, kein Tracking, keine Analyse-Tools. Hier steht, was trotzdem passiert.</p>
      </PageHeader>
      <section className="py-16">
        <Container>
          <div className="prose-ld max-w-2xl">
            <h2>1. Verantwortlicher</h2>
            <p>
              {site.owner}
              <br />
              Gardeschützenweg 59, 12203 Berlin, Deutschland
              <br />
              E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>

            <h2>2. Hosting und Server-Logfiles</h2>
            <p>
              Beim Aufruf dieser Website verarbeitet der Hosting-Anbieter technisch notwendige Daten (Server-Logfiles):
              IP-Adresse, Datum und Uhrzeit, abgerufene Seite bzw. Datei, übertragene Datenmenge, Statusmeldung,
              Browsertyp und -version, Betriebssystem sowie die Referrer-URL. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
              DSGVO; das berechtigte Interesse liegt in der sicheren und stabilen Bereitstellung der Website. Die
              Logfiles werden nach spätestens 7 Tagen gelöscht, sofern sie nicht zur Aufklärung eines konkreten
              Sicherheitsvorfalls benötigt werden.
            </p>
            <p className="rounded-xl border border-dashed border-warn/50 bg-warn/5 px-4 py-3 font-mono text-sm text-warn">
              TODO: Hosting-Anbieter (Name, Sitz) und Auftragsverarbeitungsvertrag nach Art. 28 DSGVO ergänzen.
            </p>

            <h2>3. Cookies und lokale Speicherung</h2>
            <p>
              Diese Website setzt keine Cookies. Wenn du zwischen hellem und dunklem Farbschema wechselst, wird diese
              Einstellung ausschließlich lokal in deinem Browser (localStorage) gespeichert und nicht an mich
              übertragen. Rechtsgrundlage ist § 25 Abs. 2 Nr. 2 TDDDG, da die Speicherung für die von dir
              ausdrücklich gewünschte Funktion erforderlich ist.
            </p>

            <h2>4. Schriftarten</h2>
            <p>
              Die verwendeten Schriftarten werden lokal von diesem Server ausgeliefert. Beim Besuch der Website
              findet keine Verbindung zu Servern von Google oder anderen Font-Anbietern statt.
            </p>

            <h2>5. Kontakt per E-Mail</h2>
            <p>
              Wenn du mir eine E-Mail schreibst, verarbeite ich deine Angaben zur Bearbeitung der Anfrage (Art. 6 Abs.
              1 lit. b bzw. f DSGVO). Die Daten werden gelöscht, sobald sie nicht mehr erforderlich sind und keine
              gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>

            <h2>6. Externe Links</h2>
            <p>
              Diese Website verlinkt auf externe Angebote, z. B. GitHub, GitHub Pages (spielbare Lab-Experimente),
              LinkedIn und X. Erst wenn du einen solchen Link anklickst, werden Daten an den jeweiligen Anbieter
              übertragen; dort gelten dessen Datenschutzbestimmungen.
            </p>

            <h2>7. Deine Rechte</h2>
            <p>Du hast nach der DSGVO jederzeit das Recht auf:</p>
            <ul>
              <li>Auskunft über deine gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO) bzw. Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
              <li>Beschwerde bei einer Datenschutz-Aufsichtsbehörde (Art. 77 DSGVO)</li>
            </ul>

            <p className="mt-10 text-sm">Stand: November 2026</p>
          </div>
        </Container>
      </section>
    </>
  );
}
