import type { Metadata } from "next";
import { CopyEmail } from "@/components/copy-email";
import { ArrowUpRight, GitHub, LinkedIn, Mail, XLogo } from "@/components/icons";
import { Container, PageHeader } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt zu Bjoern Sellnau – per E-Mail, LinkedIn oder GitHub.",
  alternates: { canonical: "/kontakt" },
};

const channels = [
  {
    label: "LinkedIn",
    text: "Beruflicher Werdegang & Vernetzung",
    href: site.social[0].href,
    Icon: LinkedIn,
  },
  {
    label: "GitHub",
    text: "Code, Spiele & Experimente",
    href: site.social[1].href,
    Icon: GitHub,
  },
  {
    label: "X / Twitter",
    text: "@bjoern_sellnau",
    href: site.social[2].href,
    Icon: XLogo,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Kontakt" title="Lass uns reden.">
        <p>
          Fragen zu einem Experiment, Austausch über React, Next.js oder KI-gestützte Entwicklung – oder einfach
          Erinnerungen an die Flash-Zeit? Schreib mir.
        </p>
      </PageHeader>

      <section className="py-20">
        <Container className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 sm:p-10">
            <div
              className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-accent/25 blur-[90px]"
              aria-hidden
            />
            <span className="relative grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent">
              <Mail className="size-6" />
            </span>
            <h2 className="relative mt-6 font-display text-2xl font-semibold">Per E-Mail</h2>
            <p className="relative mt-2 text-fg-muted">Der direkteste Weg. Ich antworte in der Regel innerhalb weniger Tage.</p>
            <a
              href={`mailto:${site.email}`}
              className="relative mt-8 block font-display text-xl font-semibold break-all text-fg underline decoration-border-strong underline-offset-8 transition hover:decoration-accent sm:text-3xl"
            >
              {site.email}
            </a>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent("Hallo Bjoern")}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition hover:bg-accent-strong"
              >
                <Mail className="size-4" /> E-Mail schreiben
              </a>
              <CopyEmail email={site.email} />
            </div>
          </div>

          <ul className="grid gap-4">
            {channels.map(({ label, text, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition hover:border-border-strong"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-surface-2 text-fg">
                    <Icon className="size-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-medium">{label}</span>
                    <span className="block text-sm text-fg-muted">{text}</span>
                  </span>
                  <ArrowUpRight className="size-5 text-fg-subtle transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
