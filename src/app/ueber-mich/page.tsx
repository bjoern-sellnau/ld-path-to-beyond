import type { Metadata } from "next";
import { LogoMark } from "@/components/logo";
import { ButtonLink, Container, Eyebrow, PageHeader, SectionHeader } from "@/components/ui";
import { career, certifications, skills, tools } from "@/content/profile";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Bjoern Sellnau – Senior Developer aus Berlin, Ausbilder nach AEVO und seit 2001 im Web unterwegs. Werdegang, Zertifikate, Skills und Werkzeuge.",
  alternates: { canonical: "/ueber-mich" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="Über mich" title={`Hi, ich bin ${site.owner}.`}>
        <p>
          React-, Software-, App- und Web Engineer aus Berlin. Angefangen habe ich mit Flash und ActionScript,
          heute entwickle ich mit React, Next.js, TypeScript und Node – zunehmend im Team mit
          KI-Agenten.
        </p>
      </PageHeader>

      {/* Intro */}
      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="reveal">
            {/* TODO: Durch ein aktuelles Portraitfoto ersetzen (z. B. mit next/image, 800×1000 px). */}
            <div className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-3xl border border-border bg-surface">
              <div className="bg-grid absolute inset-0" aria-hidden />
              <div className="absolute inset-x-10 bottom-0 h-1/2 rounded-full bg-accent/25 blur-[80px]" aria-hidden />
              <LogoMark size={140} className="relative" />
              <p className="absolute bottom-5 font-mono text-xs text-fg-subtle">Platz für ein Portrait</p>
            </div>
          </div>
          <div className="space-y-5 text-lg text-fg-muted">
            <p>
              Mein Ziel war und ist es, mich immer weiterzuentwickeln. In den letzten Jahren kam ein zweites dazu:
              das Wissen, das ich mir erarbeitet habe, an die nächste Generation weiterzugeben. Deshalb bin ich seit
              März 2019 Ausbilder für Fachinformatiker Anwendungsentwicklung (AEVO, IHK Berlin).
            </p>
            <p>
              Die Leidenschaft fürs Web begann früh und wuchs während meiner Ausbildung zum Technischen Assistenten
              für Informatik. Zuerst habe ich Websites und Anwendungen mit Adobe Flash und ActionScript gestaltet,
              mit der Zeit wurden daraus Web-Anwendungen mit React, Next.js, GraphQL, TypeScript und
              unterschiedlichsten Datenbanken.
            </p>
            <p>
              <strong className="text-fg">Loona! Designs</strong> ist seit {site.since} meine Plattform, um neue
              Techniken und Konzepte auszuprobieren und eigene Ideen umzusetzen – und vielleicht den einen oder
              anderen zu inspirieren.
            </p>
            <div className="flex flex-wrap gap-3 pt-3">
              <ButtonLink href="/kontakt">Kontakt</ButtonLink>
              <ButtonLink href={site.social[0].href} variant="secondary">
                LinkedIn-Profil
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Werdegang */}
      <section className="py-20">
        <Container>
          <SectionHeader eyebrow="Werdegang" title="Stationen." />
          <ol className="relative mt-12 ml-3 border-l border-border-strong">
            {career.map((c, i) => (
              <li key={c.period + c.role} className="reveal relative pb-10 pl-8 last:pb-0">
                <span
                  className={`absolute top-1.5 -left-[7px] size-3.5 rounded-full border-2 ${
                    i === 0 ? "border-accent bg-accent shadow-[0_0_14px_var(--glow)]" : "border-border-strong bg-bg"
                  }`}
                  aria-hidden
                />
                <p className={`font-mono text-xs ${i === 0 ? "text-accent" : "text-fg-subtle"}`}>{c.period}</p>
                <h3 className="mt-1 font-display text-lg font-semibold">{c.role}</h3>
                <p className="text-sm text-fg-muted">{c.company}</p>
                <p className="mt-2 max-w-2xl text-fg-muted">{c.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Zertifikate */}
      <section id="zertifikate" className="scroll-mt-24 py-20">
        <Container>
          <SectionHeader eyebrow="Qualifikationen" title="Zertifikate & Abschlüsse." />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c) => (
              <li key={c.title} className="reveal flex flex-col rounded-2xl border border-border bg-surface p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs text-accent">{c.date}</span>
                  <span className="font-mono text-[0.7rem] tracking-wider text-fg-subtle uppercase">
                    {c.issuer}
                  </span>
                </div>
                <p className="mt-3 font-medium">{c.title}</p>
              </li>
            ))}
            <li className="reveal flex flex-col rounded-2xl border border-dashed border-border-strong p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs text-fg-subtle">06/2002</span>
                <span className="font-mono text-[0.7rem] tracking-wider text-fg-subtle uppercase">Ausbildung</span>
              </div>
              <p className="mt-3 font-medium">Staatlich geprüfter Technischer Assistent für Informatik (ITA)</p>
            </li>
          </ul>
        </Container>
      </section>

      {/* Skills */}
      <section className="py-20">
        <Container>
          <SectionHeader
            eyebrow="Skills"
            title="Ein Auszug meiner Fähigkeiten."
            description="Markierte Einträge (◦) beherrsche ich in Grundzügen."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((g) => (
              <div key={g.title} className="reveal rounded-2xl border border-border bg-surface p-5">
                <h3 className="font-mono text-xs tracking-wider text-fg-subtle uppercase">{g.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <li
                      key={s.name}
                      className={`rounded-full border px-2.5 py-1 text-sm ${
                        s.level === "basics"
                          ? "border-dashed border-border-strong text-fg-muted"
                          : "border-border bg-surface-2 text-fg"
                      }`}
                    >
                      {s.name}
                      {s.level === "basics" && <span className="sr-only"> (Grundkenntnisse)</span>}
                      {s.level === "basics" && <span aria-hidden> ◦</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Werkzeuge */}
      <section className="py-20">
        <Container>
          <div className="rounded-3xl border border-border bg-bg-elevated p-6 sm:p-10">
            <Eyebrow>Setup</Eyebrow>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight">Meine Werkzeuge.</h2>
            <ul className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((t) => (
                <li key={t.name} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <div>
                    <p className="font-medium">{t.name}</p>
                    <p className="text-sm text-fg-muted">{t.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
