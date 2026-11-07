import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHeader } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von loona-designs.de – Angaben gemäß § 5 DDG.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

/**
 * Hinweis: Die alte Seite verwies auf „§ 10 Absatz 3 MDStV“. Der Mediendienste-
 * Staatsvertrag gilt nicht mehr; maßgeblich sind heute § 5 DDG (Digitale-Dienste-
 * Gesetz, seit 14.05.2024 anstelle des TMG) und – für journalistisch-redaktionelle
 * Inhalte – § 18 Abs. 2 MStV. Vor Livegang bitte rechtlich prüfen lassen.
 */
export default function ImprintPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Impressum" />
      <section className="py-16">
        <Container>
          <div className="prose-ld max-w-2xl">
            <h2>Angaben gemäß § 5 DDG</h2>
            <p>
              {site.owner}
              <br />
              Loona! Designs – Online-Portfolio
              <br />
              Gardeschützenweg 59
              <br />
              12203 Berlin
              <br />
              Deutschland
            </p>

            <h2>Kontakt</h2>
            <p>
              E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>

            <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
              {site.owner}
              <br />
              Anschrift wie oben
            </p>

            <h2>Haftung für Links</h2>
            <p>
              Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
              Bei Bekanntwerden von Rechtsverletzungen werden derartige Links umgehend entfernt.
            </p>

            <h2>Werbewiderspruch</h2>
            <p>
              Der Nutzung der im Impressum veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich
              angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen.
            </p>

            <p className="mt-10 text-sm">
              Informationen zur Verarbeitung personenbezogener Daten findest du in der{" "}
              <Link href="/datenschutz">Datenschutzerklärung</Link>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
