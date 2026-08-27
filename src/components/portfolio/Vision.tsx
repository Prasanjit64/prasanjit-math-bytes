import { MathBackground, Particles } from "./MathBackground";
import { Reveal } from "./Reveal";

export function Vision() {
  return (
    <section
      id="vision"
      className="relative flex min-h-[80vh] items-center overflow-hidden border-t border-border py-28 sm:py-36"
    >
      <MathBackground dense />
      <Particles />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">∞ My Vision</p>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
            <span className="text-gradient">
              &ldquo;I want to become a knowledgeable and capable person who can use what I learn to
              contribute positively to society.&rdquo;
            </span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Whether through mathematics, technology, knowledge, leadership or meaningful work, I
            want my learning to have a purpose beyond myself.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
