import { useId } from "react";

/**
 * Bildmarke: der Loona!-„Mond“ aus dem alten Logo, neu als Vektor gezeichnet –
 * blauer Ring, weißer Mond, dunkle Sichel.
 */
export function LogoMark({ className, size = 32 }: { className?: string; size?: number }) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`${id}-ring`} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#8ad8ff" />
          <stop offset="45%" stopColor="#19a7ff" />
          <stop offset="100%" stopColor="#063a66" />
        </radialGradient>
        <linearGradient id={`${id}-shine`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill={`url(#${id}-ring)`} />
      <circle cx="32" cy="32" r="23" fill="#f4f8ff" />
      <circle cx="35.5" cy="35.5" r="18" fill="#05070c" />
      <ellipse cx="30" cy="17" rx="17" ry="9" fill={`url(#${id}-shine)`} />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark size={30} />
      <span className="font-display text-[0.95rem] font-semibold tracking-tight">
        Loona<span className="text-accent">!</span> Designs
      </span>
    </span>
  );
}
