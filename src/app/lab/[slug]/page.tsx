import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import { ArrowLeft, ArrowRight, GitHub } from "@/components/icons";
import { LabCover } from "@/components/lab/lab-cover";
import { ButtonLink, Container, StatusBadge, Tag } from "@/components/ui";
import {
  categoryLabels,
  experiments,
  formatMonth,
  getAdjacentExperiments,
  getExperiment,
} from "@/content/lab";

export async function generateStaticParams() {
  return experiments.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps<"/lab/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const e = getExperiment(slug);
  if (!e) return {};
  return {
    title: `${e.title} – Lab`,
    description: e.summary,
    alternates: { canonical: `/lab/${e.slug}` },
    openGraph: { title: `${e.title} · Loona! Designs Lab`, description: e.summary },
  };
}

export default async function ExperimentPage({ params }: PageProps<"/lab/[slug]">) {
  const { slug } = await params;
  const e = getExperiment(slug);
  if (!e) notFound();

  const { previous, next } = getAdjacentExperiments(slug);

  const facts = [
    { label: "Zeitraum", value: formatMonth(e.date) },
    { label: "Kategorie", value: `${categoryLabels[e.category]} · ${e.subtitle}` },
    { label: "KI-Tools", value: e.tools.join(", ") },
    { label: "Modelle", value: e.models.length ? e.models.join(", ") : "–" },
  ];

  return (
    <article>
      <Container className="pt-10">
        <Link
          href="/lab"
          className="inline-flex items-center gap-2 text-sm text-fg-muted transition hover:text-fg"
        >
          <ArrowLeft className="size-4" /> Zurück zum Lab
        </Link>
      </Container>

      <Container className="mt-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-border sm:aspect-[21/9]">
          <ViewTransition name={`lab-cover-${e.slug}`} share="morph" default="none">
            <div className="h-full w-full">
              <LabCover experiment={e} />
            </div>
          </ViewTransition>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute right-0 bottom-0 left-0 p-6 sm:p-10">
            <StatusBadge status={e.status} />
            <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {e.title}
            </h1>
            <p className="mt-2 text-lg text-white/75">{e.subtitle}</p>
          </div>
        </div>
      </Container>

      <Container className="mt-12 grid gap-12 lg:grid-cols-[1fr_320px]">
        <div>
          <p className="font-display text-xl leading-relaxed text-fg text-pretty">{e.summary}</p>

          <div className="prose-ld mt-8">
            <h2>Worum geht’s?</h2>
            {e.description.map((p, i) =>
              p.startsWith("TODO") ? (
                <p
                  key={i}
                  className="rounded-xl border border-dashed border-warn/50 bg-warn/5 px-4 py-3 font-mono text-sm text-warn"
                >
                  {p}
                </p>
              ) : (
                <p key={i}>{p}</p>
              ),
            )}

            {e.highlights && (
              <>
                <h2>Highlights</h2>
                <ul>
                  {e.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </>
            )}

            {e.origin && (
              <>
                <h2>Ursprung</h2>
                <p>
                  Dieses Experiment geht auf ein älteres Projekt aus dem{" "}
                  <Link href="/portfolio#archiv">Portfolio-Archiv</Link> zurück: „{e.origin.title}“ (
                  {e.origin.year}).
                </p>
              </>
            )}
          </div>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <dl className="space-y-4">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="font-mono text-[0.7rem] tracking-wider text-fg-subtle uppercase">{f.label}</dt>
                  <dd className="mt-1 text-sm">{f.value}</dd>
                </div>
              ))}
              {e.stack && (
                <div>
                  <dt className="font-mono text-[0.7rem] tracking-wider text-fg-subtle uppercase">Stack</dt>
                  <dd className="mt-2 flex flex-wrap gap-1.5">
                    {e.stack.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </dd>
                </div>
              )}
            </dl>

            {(e.playUrl || e.repoUrl) && (
              <div className="mt-6 flex flex-col gap-2 border-t border-border pt-6">
                {e.playUrl && <ButtonLink href={e.playUrl}>Jetzt spielen</ButtonLink>}
                {e.repoUrl && (
                  <a
                    href={e.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm transition hover:bg-surface-2"
                  >
                    <GitHub className="size-4" /> Quellcode
                  </a>
                )}
              </div>
            )}
          </div>
        </aside>
      </Container>

      <Container className="mt-20">
        <nav aria-label="Weitere Experimente" className="grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
          {previous ? (
            <Link
              href={`/lab/${previous.slug}`}
              className="group rounded-2xl border border-border p-5 transition hover:border-border-strong hover:bg-surface"
            >
              <span className="flex items-center gap-2 font-mono text-xs text-fg-subtle">
                <ArrowLeft className="size-3.5" /> Neuer
              </span>
              <span className="mt-2 block font-display font-semibold">{previous.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/lab/${next.slug}`}
              className="group rounded-2xl border border-border p-5 text-right transition hover:border-border-strong hover:bg-surface"
            >
              <span className="flex items-center justify-end gap-2 font-mono text-xs text-fg-subtle">
                Älter <ArrowRight className="size-3.5" />
              </span>
              <span className="mt-2 block font-display font-semibold">{next.title}</span>
            </Link>
          )}
        </nav>
      </Container>
    </article>
  );
}
