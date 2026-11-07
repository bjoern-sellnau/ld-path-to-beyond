"use client";

import { useState } from "react";
import { Check, Copy } from "./icons";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2.5 text-sm text-fg-muted transition hover:bg-surface-2 hover:text-fg"
    >
      {copied ? <Check className="size-4 text-ok" /> : <Copy className="size-4" />}
      <span aria-live="polite">{copied ? "Kopiert!" : "Adresse kopieren"}</span>
    </button>
  );
}
