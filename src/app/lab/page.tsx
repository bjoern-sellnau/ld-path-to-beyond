import type { Metadata } from "next";
import { LabExplorer } from "@/components/lab/lab-explorer";
import { Container, PageHeader, SectionHeader } from "@/components/ui";
import { experiments } from "@/content/lab";

export const metadata: Metadata = {
  title: "Lab – KI-Experimente",
  description:
    "Spiele, Tools und Websites, entwickelt mit KI-Coding-Agenten wie Claude Code, Claude Design und Antigravity – mit Modell, Status und Live-Demos.",
  alternates: { canonical: "/lab" },
};

const workflow = [
  {
    step: "01",
    title: "Leitplanken",
    text: "Eine CLAUDE.md legt fest, wie der Agent arbeitet: erst denken, einfach halten, gezielt ändern, Ziele überprüfbar machen.",
  },
  {
    step: "02",
    title: "Gemeinsame Aufgabenliste",
    text: "TASKS.md und TODO.md sind die Schnittstelle zwischen Mensch und Agent: Bugs, Features, Status – abgehakt wird erst, was committed ist.",
  },
  {
    step: "03",
    title: "Iterieren",
    text: "Kleine Schritte, schnelles Feedback. Ich spiele, teste auf Desktop, iPad und iPhone und formuliere die nächste Aufgabe.",
  },
  {
    step: "04",
    title: "Veröffentlichen",
    text: "Spielbare Stände laufen auf GitHub Pages. So lässt sich jeder Fortschritt direkt im Browser ausprobieren.",
  },
];

export default function LabPage() {
  const tools = new Set(experiments.flatMap((e) => e.tools));
  const playable = experiments.filter((e) => e.playUrl).length;
  const inProgress = experiments.filter((e) => e.status === "in-arbeit").length;

  const stats = [
    { label: "Experimente", value: experiments.length },
    { label: "Spielbar", value: playable },
    { label: "In Arbeit", value: inProgress },
    { label: "KI-Tools", value: tools.size },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Lab · seit 03/2026"
        title={
          <>
            Experimente mit <span className="text-gradient whitespace-nowrap">KI-Coding-Agenten</span>.
          </>
        }
      >
        <p>
          Hier teste ich, wie weit man mit KI heute kommt: vom Retro-Shooter bis zum Zeiterfassungs-Tool. Jedes
          Experiment zeigt, mit welchem Tool und Modell es entstanden ist – und wo es gerade steht.
        </p>
        <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-surface/70 p-4 backdrop-blur">
              <dt className="font-mono text-[0.7rem] tracking-wider text-fg-subtle uppercase">{s.label}</dt>
              <dd className="mt-1 font-display text-3xl font-semibold text-fg">{s.value}</dd>
            </div>
          ))}
        </dl>
      </PageHeader>

      <section className="py-16">
        <Container>
          <LabExplorer experiments={experiments} />
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeader
            eyebrow="Workflow"
            title="So entstehen die Experimente."
            description="Kein Zauber, sondern ein Prozess. Am Beispiel von Covert Operations."
          />
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((w) => (
              <li key={w.step} className="reveal relative rounded-2xl border border-border bg-surface p-6">
                <span className="font-mono text-sm text-accent">{w.step}</span>
                <h3 className="mt-3 font-display font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-fg-muted">{w.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
