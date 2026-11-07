import Link from "next/link";
import { ViewTransition } from "react";
import { categoryLabels, formatMonthShort, type LabExperiment } from "@/content/lab";
import { ArrowRight, Play } from "../icons";
import { StatusBadge, Tag } from "../ui";
import { LabCover } from "./lab-cover";

export function LabCard({ experiment }: { experiment: LabExperiment }) {
  const e = experiment;
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_20px_60px_-20px_var(--glow)] has-[h3_a:focus-visible]:ring-2 has-[h3_a:focus-visible]:ring-accent">
      <div className="relative aspect-[5/3] overflow-hidden border-b border-border">
        <ViewTransition name={`lab-cover-${e.slug}`} share="morph" default="none">
          <div className="h-full w-full transition duration-500 group-hover:scale-[1.04]">
            <LabCover experiment={e} />
          </div>
        </ViewTransition>
        <div className="absolute top-3 left-3">
          <StatusBadge status={e.status} />
        </div>
        <span className="absolute top-3 right-3 rounded-full bg-bg/70 px-2.5 py-1 font-mono text-[0.7rem] text-fg-muted backdrop-blur">
          {formatMonthShort(e.date)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[0.7rem] tracking-widest text-fg-subtle uppercase">
          {categoryLabels[e.category]} · {e.subtitle}
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">
          <Link
            href={`/lab/${e.slug}`}
            className="after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:outline-none"
          >
            {e.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-fg-muted">{e.summary}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {e.tools.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
          {e.models.map((m) => (
            <Tag key={m}>{m}</Tag>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-5 text-sm">
          <span className="inline-flex items-center gap-1.5 text-fg-muted transition group-hover:text-fg">
            Details <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
          </span>
          {e.playUrl && (
            <a
              href={e.playUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1.5 text-xs font-medium text-accent transition hover:bg-accent hover:text-accent-fg"
            >
              <Play className="size-3.5" /> Jetzt spielen
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
