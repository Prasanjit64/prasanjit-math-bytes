import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projects & Digital Work"
          symbol="∫"
          title="What I've built so far"
          subtitle="A small but growing collection — everything here is genuinely mine."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <article className="hover-lift relative h-full overflow-hidden rounded-3xl border border-border bg-surface p-7 sm:p-10">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-10 font-display text-[9rem] leading-none text-primary/10"
              >
                π
              </span>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
                Featured
              </p>
              <h3 className="mt-4 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                Personal Portfolio Website
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                My personal portfolio website showcasing my education, interests, learning journey
                and digital presence.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://prasanjitghosh.lovable.app"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Visit Portfolio <ExternalLink className="size-4" />
                </a>
                <a
                  href="https://github.com/Prasanjit64"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-semibold transition-colors hover:border-primary/60 hover:bg-secondary"
                >
                  <Github className="size-4" /> GitHub
                </a>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={120}>
              <div className="hover-lift rounded-3xl border border-border bg-surface p-7">
                <span className="flex size-11 items-center justify-center rounded-xl border border-border text-primary">
                  <Github className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-2xl tracking-tight">GitHub Profile 2</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A second profile where I keep additional experiments.
                </p>
                <a
                  href="https://github.com/abhayghosh750-code"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  github.com/abhayghosh750-code <ExternalLink className="size-3.5" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="grid-paper rounded-3xl border border-dashed border-border p-7">
                <span className="flex size-11 items-center justify-center rounded-xl border border-border text-primary">
                  <Sparkles className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-2xl tracking-tight">
                  More projects coming soon...
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  I&apos;m currently learning and building. More projects will be added as my
                  journey continues.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
