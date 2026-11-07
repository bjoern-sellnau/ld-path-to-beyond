"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/content/site";
import { Close, Menu } from "./icons";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Menü bei Navigation schließen
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/75 backdrop-blur-xl supports-[backdrop-filter]:bg-bg/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="rounded-lg" aria-label="Loona! Designs – Startseite">
          <Logo />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-border bg-surface/60 p-1">
            {navigation.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm transition ${
                      active
                        ? "bg-surface-2 text-fg shadow-[inset_0_0_0_1px_var(--border-strong)]"
                        : "text-fg-muted hover:text-fg"
                    }`}
                  >
                    {item.href === "/lab" && (
                      <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--glow)]" aria-hidden />
                    )}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-border text-fg-muted md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile Navigation"
        className={`border-t border-border bg-bg md:hidden ${open ? "block" : "hidden"}`}
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3">
          {navigation.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center justify-between rounded-xl px-3 py-3 text-base ${
                    active ? "bg-surface-2 text-fg" : "text-fg-muted"
                  }`}
                >
                  {item.label}
                  {/* Immer rendern, nur ausblenden: Die statische 404-Seite kennt den echten Pfad
                      erst im Browser – so bleibt die DOM-Struktur beim Hydrieren gleich. */}
                  <span className={`size-1.5 rounded-full bg-accent ${active ? "" : "invisible"}`} aria-hidden />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
