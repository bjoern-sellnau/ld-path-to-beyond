import Link from "next/link";
import { ArrowUpRight, Flask, Sparkles } from "@/components/icons";
import { LabCard } from "@/components/lab/lab-card";
import { LabCover } from "@/components/lab/lab-cover";
import { Orb } from "@/components/orb";
import { ButtonLink, Container, Eyebrow, SectionHeader } from "@/components/ui";
import { experiments, getExperiment } from "@/content/lab";
import { certifications, currentPosition, techMarquee } from "@/content/profile";
import { site } from "@/content/site";

const focusAreas = [
  {
    icon: "</>",
    title: "Frontend Engineering",
    text: "React, Next.js, TypeScript und React Native – Oberflächen, die schnell, zugänglich und wartbar sind. Seit 2007 im professionellen Einsatz.",
  },
  {
    icon: "✦",
    title: "KI-gestützte Entwicklung",
    text: "Claude Code, Agent Skills und Co. im echten Projektalltag: Was funktioniert, wo sind die Grenzen? Die Antworten landen im Lab.",
  },
  {
    icon: "↗",
    title: "Wissen weitergeben",
    text: "Ausbilder nach AEVO für Fachinformatiker Anwendungsentwicklung. Gute Software entsteht im Team – und mit der nächsten Generation.",
  },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.owner,
  url: site.url,
  jobTitle: "Senior Developer",
  worksFor: { "@type": "Organization", name: currentPosition.company, url: currentPosition.companyUrl },
  address: { "@type": "PostalAddress", addressLocality: "Berlin", addressCountry: "DE" },
  sameAs: site.social.map((s) => s.href),
  knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "React Native", "Claude Code"],
};

export default function HomePage() {
  const playable = experiments.filter((e) => e.status === "spielbar");
  const featured = [...playable, ...experiments.filter((e) => e.status !== "spielbar")].slice(0, 3);
  const remake = getExperiment("covert-operations");
  const aiCerts = certifications.filter((c) => c.group === "ki");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
        <Container className="relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_1fr] lg:py-28">
          <div>
            <Link
              href="/lab"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 py-1 pr-3 pl-1 text-xs text-fg-muted backdrop-blur transition hover:border-border-strong hover:text-fg"
            >
              <span className="rounded-full bg-accent px-2 py-0.5 font-mono text-[0.65rem] font-semibold text-accent-fg uppercase">
                Neu
              </span>
              Das Lab: {experiments.length} KI-Experimente seit 03/2026
              <ArrowUpRight className="size-3.5" />
            </Link>

            <h1 className="mt-6 font-display text-[2.6rem] leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
              <span className="text-gradient">What the web</span>
              <br />
              can be.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-fg-muted text-pretty">
              Ich bin <strong className="font-semibold text-fg">{site.owner}</strong>, Senior Developer aus
              Berlin. Seit 2007 baue ich Web- und App-Frontends mit React, Next.js und Node – und teste im Lab,
              wie weit man heute mit KI-Coding-Agenten kommt.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/lab">Zum Lab</ButtonLink>
              <ButtonLink href="/ueber-mich" variant="secondary">
                Über mich
              </ButtonLink>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
              <div>
                <dt className="font-mono text-[0.7rem] tracking-wider text-fg-subtle uppercase">Im Web seit</dt>
                <dd className="mt-1 font-display text-2xl font-semibold">{site.since}</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.7rem] tracking-wider text-fg-subtle uppercase">Experimente</dt>
                <dd className="mt-1 font-display text-2xl font-semibold">{experiments.length}</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.7rem] tracking-wider text-fg-subtle uppercase">Zertifikate</dt>
                <dd className="mt-1 font-display text-2xl font-semibold">{certifications.length}</dd>
              </div>
            </dl>
          </div>

          <Orb />
        </Container>
      </section>

      {/* Aktuelle Position */}
      <section aria-label="Aktuelle Position" className="border-y border-border bg-bg-elevated">
        <Container className="flex flex-col gap-2 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-3">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-ok opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-ok" />
            </span>
            <span className="text-fg-muted">Aktuell:</span>
            <span className="font-medium">
              {currentPosition.role} @{" "}
              <a
                href={currentPosition.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-border-strong underline-offset-4 transition hover:decoration-accent"
              >
                {currentPosition.company}
              </a>
            </span>
          </p>
          <p className="font-mono text-xs text-fg-subtle">{currentPosition.focus}</p>
        </Container>
      </section>

      {/* Lab-Highlights */}
      <section className="py-24">
        <Container>
          <SectionHeader
            eyebrow="Lab · KI-Experimente"
            title={
              <>
                Gebaut im Dialog mit <span className="text-accent">KI-Agenten</span>.
              </>
            }
            description="Spiele, Tools und Websites, entwickelt mit Claude Code, Claude Design und Antigravity. Mit Modell, Status und – wo möglich – zum direkten Ausprobieren."
            action={
              <ButtonLink href="/lab" variant="secondary">
                Alle Experimente
              </ButtonLink>
            }
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((e) => (
              <li key={e.slug} className="reveal">
                <LabCard experiment={e} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Story: 2003 → 2026 */}
      {remake && (
        <section className="py-12">
          <Container>
            <div className="reveal relative overflow-hidden rounded-3xl border border-border bg-surface">
              <div className="grid lg:grid-cols-2">
                <div className="relative p-8 sm:p-12">
                  <Eyebrow>Vom Flash-Spiel zum KI-Remake</Eyebrow>
                  <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                    23 Jahre später: Covert Operations ist zurück.
                  </h2>
                  <p className="mt-4 text-fg-muted text-pretty">{remake.description[0]}</p>
                  <ol className="mt-8 space-y-4 border-l border-border-strong pl-6">
                    <li className="relative">
                      <span className="absolute top-1.5 -left-[29px] size-2.5 rounded-full border-2 border-fg-subtle bg-surface" />
                      <p className="font-mono text-xs text-fg-subtle">2003</p>
                      <p className="font-medium">Covert Operations Tournament</p>
                      <p className="text-sm text-fg-muted">Flash 5 · ActionScript</p>
                    </li>
                    <li className="relative">
                      <span className="absolute top-1.5 -left-[29px] size-2.5 rounded-full bg-accent shadow-[0_0_12px_var(--glow)]" />
                      <p className="font-mono text-xs text-accent">2026</p>
                      <p className="font-medium">Covert Operations</p>
                      <p className="text-sm text-fg-muted">Claude Code · React Three Fiber · Multiplayer</p>
                    </li>
                  </ol>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {remake.playUrl && <ButtonLink href={remake.playUrl}>Jetzt spielen</ButtonLink>}
                    <ButtonLink href={`/lab/${remake.slug}`} variant="secondary">
                      Zum Experiment
                    </ButtonLink>
                  </div>
                </div>
                <div className="relative min-h-72 border-t border-border lg:border-t-0 lg:border-l">
                  <div className="absolute inset-0">
                    <LabCover experiment={remake} />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Schwerpunkte */}
      <section className="py-24">
        <Container>
          <SectionHeader eyebrow="Schwerpunkte" title="Woran ich arbeite." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {focusAreas.map((f) => (
              <div key={f.title} className="reveal rounded-2xl border border-border bg-surface p-6">
                <span
                  className="grid size-11 place-items-center rounded-xl bg-accent-soft font-mono text-accent"
                  aria-hidden
                >
                  {f.icon}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-fg-muted">{f.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tech-Laufband */}
      <section aria-label="Technologien" className="overflow-hidden border-y border-border py-6">
        <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
          {[...techMarquee, ...techMarquee].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="flex items-center gap-10 font-display text-xl whitespace-nowrap text-fg-subtle"
              aria-hidden={i >= techMarquee.length}
            >
              {t}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Weiterbildung KI */}
      <section className="py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <Eyebrow>Weiterbildung</Eyebrow>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Neugierig bleiben – seit über 20 Jahren.
            </h2>
            <p className="mt-4 text-fg-muted">
              Von ColdFusion und Node über Stripe bis zu Claude Code: Zertifizierungen sind für mich der
              strukturierte Teil des Lernens. Der Rest passiert im Lab.
            </p>
            <div className="mt-6">
              <ButtonLink href="/ueber-mich#zertifikate" variant="secondary">
                Alle Zertifikate
              </ButtonLink>
            </div>
          </div>
          <ul className="space-y-3">
            {aiCerts.map((c) => (
              <li
                key={c.title}
                className="reveal flex items-center gap-4 rounded-2xl border border-border bg-surface p-4"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Sparkles className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-medium">{c.title}</p>
                  <p className="text-sm text-fg-muted">{c.issuer}</p>
                </div>
                <span className="font-mono text-xs text-fg-subtle">{c.date}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-8">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-16 text-center sm:px-12">
            <div
              className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[100px]"
              aria-hidden
            />
            <Flask className="relative mx-auto size-8 text-accent" />
            <h2 className="relative mt-4 font-display text-2xl font-semibold tracking-tight text-balance sm:text-4xl">
              Lust auf Austausch?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-fg-muted">
              React, Next.js, KI-gestützte Entwicklung oder einfach alte Flash-Zeiten: Ich freue mich über
              Nachrichten.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/kontakt">Kontakt aufnehmen</ButtonLink>
              <ButtonLink href={site.social[0].href} variant="secondary">
                LinkedIn
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
