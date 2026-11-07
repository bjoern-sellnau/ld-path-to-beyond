import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import type { LabStatus } from "@/content/lab";
import { statusLabels } from "@/content/lab";
import { ArrowRight, ArrowUpRight } from "./icons";

export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-mono text-xs tracking-[0.2em] text-accent uppercase ${className}`}>
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          {title}
        </h2>
        {description && <p className="mt-3 text-fg-muted text-pretty">{description}</p>}
      </div>
      {action}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]"
        aria-hidden
      />
      <Container className="relative py-16 sm:py-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {children && <div className="mt-6 max-w-2xl text-lg text-fg-muted text-pretty">{children}</div>}
      </Container>
    </section>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost";

const buttonStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-fg shadow-[0_0_0_1px_var(--accent),0_8px_30px_-8px_var(--glow)] hover:bg-accent-strong",
  secondary: "border border-border-strong bg-surface/60 text-fg hover:bg-surface-2",
  ghost: "text-fg-muted hover:text-fg",
};

const buttonBase =
  "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition";

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
  ...rest
}: { href: string; variant?: ButtonVariant } & Omit<ComponentProps<typeof Link>, "href">) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const classes = `${buttonBase} ${buttonStyles[variant]} ${className}`;
  if (external) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        {href.startsWith("http") && (
          <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
      <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
    </Link>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface-2/60 px-2.5 py-0.5 font-mono text-[0.7rem] text-fg-muted">
      {children}
    </span>
  );
}

export function StatusBadge({ status }: { status: LabStatus }) {
  const color = status === "spielbar" ? "bg-ok" : status === "abgeschlossen" ? "bg-fg-subtle" : "bg-warn";
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg/70 px-2.5 py-1 font-mono text-[0.7rem] text-fg backdrop-blur">
      <span className="relative flex size-1.5">
        {status === "spielbar" && (
          <span className={`absolute inline-flex size-full animate-ping rounded-full ${color} opacity-60`} />
        )}
        <span className={`relative inline-flex size-1.5 rounded-full ${color}`} />
      </span>
      {statusLabels[status]}
    </span>
  );
}
