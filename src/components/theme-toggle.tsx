"use client";

import { Moon, Sun } from "./icons";

function currentTheme(): "light" | "dark" {
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "light" || attr === "dark") return attr;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function ThemeToggle() {
  function toggle() {
    const next = currentTheme() === "dark" ? "light" : "dark";
    const apply = () => document.documentElement.setAttribute("data-theme", next);
    // Sanfter Übergang über die View Transitions API, falls verfügbar
    if (document.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.startViewTransition(apply);
    } else {
      apply();
    }
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="grid size-10 place-items-center rounded-full border border-border text-fg-muted transition hover:border-border-strong hover:text-fg"
      aria-label="Farbschema wechseln"
      title="Hell / Dunkel"
    >
      {/* Icon per CSS (globals.css): zeigt jeweils das Ziel-Schema, ohne Hydration-Flackern */}
      <Sun className="theme-icon-sun size-[18px]" />
      <Moon className="theme-icon-moon size-[18px]" />
    </button>
  );
}
