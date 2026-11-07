import { LogoMark } from "@/components/logo";
import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <Container className="relative flex flex-col items-center py-28 text-center">
        <LogoMark size={88} className="opacity-80" />
        <p className="mt-8 font-mono text-sm text-accent">404 · Lost in Orbit</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
          Diese Seite gibt es nicht (mehr).
        </h1>
        <p className="mt-4 max-w-md text-fg-muted">
          Vielleicht ein alter Link aus der Flash-Ära? Die wichtigsten Seiten findest du hier:
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Startseite</ButtonLink>
          <ButtonLink href="/lab" variant="secondary">
            Zum Lab
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
