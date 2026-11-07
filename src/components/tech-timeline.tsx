import { techTimeline, timelineRange } from "@/content/profile";

const span = timelineRange.to - timelineRange.from + 1;
const pct = (year: number) => ((year - timelineRange.from) / span) * 100;
const ticks = [2000, 2005, 2010, 2015, 2020, 2025];

export function TechTimeline() {
  return (
    <div className="rounded-3xl border border-border bg-surface p-5 sm:p-8">
      <ol className="space-y-1">
        {techTimeline.map((t) => {
          const ongoing = t.to === undefined;
          // Abgeschlossene Phasen enden mitten im letzten Jahr, laufende am rechten Rand
          const end = ongoing ? timelineRange.to + 1 : t.to! + 0.5;
          const left = pct(t.from);
          const width = ((end - t.from) / span) * 100;
          return (
            <li
              key={t.label}
              className="grid gap-1.5 py-2 sm:grid-cols-[260px_1fr] sm:items-center sm:gap-6"
            >
              <div className="flex items-baseline justify-between gap-3 sm:block">
                <p className="text-sm font-medium">{t.label}</p>
                <p className="font-mono text-[0.7rem] text-fg-subtle">
                  {t.from}
                  {t.to !== t.from && ` – ${t.to ?? "heute"}`}
                  {t.detail && <span className="hidden sm:inline"> · {t.detail}</span>}
                </p>
              </div>
              <div className="relative h-6" aria-hidden>
                {ticks.map((y) => (
                  <span
                    key={y}
                    className="absolute inset-y-0 w-px bg-border"
                    style={{ left: `${pct(y)}%` }}
                  />
                ))}
                <span
                  className={`absolute inset-y-1 rounded-full ${
                    t.kind === "role"
                      ? "border border-dashed border-accent/70 bg-accent-soft"
                      : ongoing
                        ? "bg-gradient-to-r from-accent to-accent-strong shadow-[0_0_16px_-2px_var(--glow)]"
                        : "bg-fg-subtle/60"
                  }`}
                  style={{ left: `${left}%`, width: `max(${width}%, 10px)` }}
                />
              </div>
            </li>
          );
        })}
      </ol>

      {/* Achse */}
      <div className="mt-3 grid border-t border-border pt-3 sm:grid-cols-[260px_1fr] sm:gap-6" aria-hidden>
        <span className="hidden sm:block" />
        <div className="relative h-4 font-mono text-[0.65rem] text-fg-subtle">
          {ticks.map((y) => (
            <span
              key={y}
              className={`absolute -translate-x-1/2 first:translate-x-0 ${y === 2025 ? "hidden sm:block" : ""}`}
              style={{ left: `${pct(y)}%` }}
            >
              {y}
            </span>
          ))}
          <span className="absolute right-0">heute</span>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-fg-muted">
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-6 rounded-full bg-gradient-to-r from-accent to-accent-strong" /> aktuell im Einsatz
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-6 rounded-full bg-fg-subtle/60" /> abgeschlossen
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-6 rounded-full border border-dashed border-accent/70 bg-accent-soft" /> Ausbildung &
          Rolle
        </span>
      </div>
    </div>
  );
}
