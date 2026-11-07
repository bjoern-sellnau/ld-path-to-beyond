import Link from "next/link";
import { legalNavigation, navigation, site } from "@/content/site";
import { GitHub, LinkedIn, XLogo } from "./icons";
import { LogoMark } from "./logo";

const socialIcons = { LinkedIn, GitHub, "X / Twitter": XLogo } as const;

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-bg-elevated">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark size={40} />
            <div>
              <p className="font-display font-semibold">
                Loona<span className="text-accent">!</span> Designs
              </p>
              <p className="font-mono text-xs text-fg-subtle">{site.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm text-fg-muted">
            Online-Portfolio von {site.owner} – Senior Developer aus {site.location}. Seit {site.since} ein
            Spielplatz für neue Web-Technologien, heute mit eigenem KI-Lab.
          </p>
        </div>

        <nav aria-label="Seiten">
          <p className="font-mono text-xs tracking-widest text-fg-subtle uppercase">Seiten</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-fg-muted transition hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-xs tracking-widest text-fg-subtle uppercase">Profile</p>
          <ul className="mt-4 space-y-2 text-sm">
            {site.social.map((s) => {
              const Icon = socialIcons[s.label];
              return (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-fg-muted transition hover:text-fg"
                  >
                    <Icon className="size-4" />
                    {s.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {site.copyright} {site.name} · {site.owner}
          </p>
          <ul className="flex gap-5">
            {legalNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
