import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { Container, PageHeader, SectionHeader, Tag } from "@/components/ui";
import { archive, featuredWork } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Ausgewählte Arbeiten und das Archiv von Loona! Designs – von der ersten Kanzlei-Website 2002 über Flash-Games bis zu aktuellen KI-Experimenten.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  const totalArchive = archive.reduce((n, y) => n + y.entries.length, 0);

  return (
    <>
      <PageHeader eyebrow="Portfolio · 2002 – heute" title="Über zwei Jahrzehnte Web – von Flash bis KI.">
        <p>
          Eine Auswahl dessen, was in den letzten Jahren entstanden ist – und ein ehrliches Archiv der Anfänge.
          Die aktuellen Projekte findest du im <Link href="/lab" className="text-accent underline underline-offset-4">Lab</Link>.
        </p>
      </PageHeader>

      <section className="py-20">
        <Container>
          <SectionHeader eyebrow="Ausgewählt" title="Projekte, die mich geprägt haben." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredWork.map((w) => {
              const content = (
                <>
                  <p className="font-mono text-xs text-accent">{w.period}</p>
                  <h3 className="mt-3 font-display text-xl font-semibold">{w.title}</h3>
                  <p className="mt-1 text-sm text-fg-subtle">{w.role}</p>
                  <p className="mt-4 text-sm text-fg-muted">{w.description}</p>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {w.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                  {w.href && (
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-fg-muted transition group-hover:text-fg">
                      Mehr erfahren <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                    </span>
                  )}
                </>
              );
              const cls =
                "reveal group flex flex-col rounded-2xl border border-border bg-surface p-6 transition hover:border-border-strong";
              return w.href ? (
                <Link key={w.title} href={w.href} className={cls}>
                  {content}
                </Link>
              ) : (
                <div key={w.title} className={cls}>
                  {content}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="archiv" className="scroll-mt-24 py-20">
        <Container>
          <SectionHeader
            eyebrow={`Archiv · ${totalArchive} Einträge`}
            title="Die Anfänge."
            description="Websites, Shops, ein Mini-CMS und ein Flash-Game: Viele Projekte sind längst offline, gehören aber zur Geschichte von Loona! Designs."
          />

          <ol className="mt-12 space-y-0">
            {archive.map((y) => (
              <li
                key={y.year}
                className="reveal grid gap-4 border-t border-border py-8 sm:grid-cols-[140px_1fr] sm:gap-8"
              >
                <p className="font-display text-3xl font-semibold text-fg-subtle">{y.year}</p>
                <ul className="space-y-3">
                  {y.entries.map((e) => (
                    <li
                      key={e.title}
                      className="flex flex-col gap-2 rounded-xl border border-border bg-surface/50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <span className="font-medium">{e.title}</span>
                      <span className="flex flex-wrap items-center gap-2">
                        {e.note && <span className="text-sm text-fg-muted">{e.note}</span>}
                        <Tag>{e.kind}</Tag>
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
