"use client";

import { useMemo, useState, type ReactNode } from "react";
import { categoryLabels, type LabCategory, type LabExperiment, type LabTool } from "@/content/lab";
import { LabCard } from "./lab-card";

type CategoryFilter = LabCategory | "alle";
type ToolFilter = LabTool | "alle";

function Chip({
  active,
  onClick,
  children,
  count,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
  count: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition ${
        active
          ? "border-accent bg-accent-soft text-fg"
          : "border-border text-fg-muted hover:border-border-strong hover:text-fg"
      }`}
    >
      {children}
      <span className="font-mono text-[0.7rem] text-fg-subtle">{count}</span>
    </button>
  );
}

export function LabExplorer({ experiments }: { experiments: LabExperiment[] }) {
  const [category, setCategory] = useState<CategoryFilter>("alle");
  const [tool, setTool] = useState<ToolFilter>("alle");

  const tools = useMemo(
    () => Array.from(new Set(experiments.flatMap((e) => e.tools))).sort(),
    [experiments],
  );
  const categories = Object.keys(categoryLabels) as LabCategory[];

  const filtered = experiments.filter(
    (e) => (category === "alle" || e.category === category) && (tool === "alle" || e.tools.includes(tool)),
  );

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface/60 p-4 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Nach Kategorie filtern" className="flex flex-wrap items-center gap-2">
          <span className="mr-1 font-mono text-xs text-fg-subtle uppercase">Typ</span>
          <Chip active={category === "alle"} onClick={() => setCategory("alle")} count={experiments.length}>
            Alle
          </Chip>
          {categories.map((c) => (
            <Chip
              key={c}
              active={category === c}
              onClick={() => setCategory(c)}
              count={experiments.filter((e) => e.category === c).length}
            >
              {categoryLabels[c]}
            </Chip>
          ))}
        </div>
        <div role="group" aria-label="Nach KI-Tool filtern" className="flex flex-wrap items-center gap-2">
          <span className="mr-1 font-mono text-xs text-fg-subtle uppercase">Tool</span>
          <Chip active={tool === "alle"} onClick={() => setTool("alle")} count={experiments.length}>
            Alle
          </Chip>
          {tools.map((t) => (
            <Chip
              key={t}
              active={tool === t}
              onClick={() => setTool(t)}
              count={experiments.filter((e) => e.tools.includes(t)).length}
            >
              {t}
            </Chip>
          ))}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {filtered.length} Experimente angezeigt
      </p>

      {filtered.length > 0 ? (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((e) => (
            <li key={e.slug}>
              <LabCard experiment={e} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-border-strong p-12 text-center text-fg-muted">
          Keine Experimente für diese Kombination.{" "}
          <button
            type="button"
            className="text-accent underline underline-offset-4"
            onClick={() => {
              setCategory("alle");
              setTool("alle");
            }}
          >
            Filter zurücksetzen
          </button>
        </div>
      )}
    </div>
  );
}
