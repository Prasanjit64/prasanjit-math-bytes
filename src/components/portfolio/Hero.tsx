import { ArrowDown, Github, Mail, MoveRight } from "lucide-react";
import { MathBackground, Particles } from "./MathBackground";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      <MathBackground dense />
      <Particles />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p
            className="reveal font-mono text-xs uppercase tracking-[0.3em] text-primary"
            data-visible="true"
          >
            ∫ Exploring mathematics, technology and the world around me
          </p>

          <h1
            className="reveal mt-6 font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
            data-visible="true"
            style={{ transitionDelay: "120ms" }}
          >
            <span className="text-gradient">Prasanjit Ghosh</span>
          </h1>

          <p
            className="reveal mt-5 text-base text-foreground/80 sm:text-lg"
            data-visible="true"
            style={{ transitionDelay: "220ms" }}
          >
            B.Sc. Mathematics Student <span className="text-primary">•</span> Web Technology
            Enthusiast
          </p>

          <p
            className="reveal mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base"
            data-visible="true"
            style={{ transitionDelay: "320ms" }}
          >
            I&apos;m a second-year B.Sc. Mathematics student at Surya Sen Mahavidyalaya,
            passionate about mathematics, web technology, current affairs, geopolitics and
            Indian politics.
          </p>

          <div
            className="reveal mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            data-visible="true"
            style={{ transitionDelay: "420ms" }}
          >
            <a
              href="#about"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore My Journey
              <MoveRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-semibold text-foreground transition-colors duration-300 hover:border-primary/60 hover:bg-secondary"
            >
              Let&apos;s Connect
            </a>

            <div className="mt-2 flex items-center gap-2 sm:mt-0 sm:ml-3">
              <a
                href="https://github.com/Prasanjit64"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Github className="size-5" />
              </a>
              <a
                href="mailto:abhayghosh750@gmail.com"
                aria-label="Send an email"
                className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Mail className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="mt-16 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowDown className="size-4 animate-bounce" />
          Scroll
        </a>
      </div>
    </section>
  );
}
