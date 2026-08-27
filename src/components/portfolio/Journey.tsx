import { Reveal, SectionHeading } from "./Reveal";

const steps = [
  {
    step: "01",
    title: "School",
    place: "Dalkhola High School",
    meta: "Classes 5–8",
    extra: "Class 10 from Damdama High School",
  },
  {
    step: "02",
    title: "Higher Secondary",
    place: "Raiganj Debinagar Kailash Chandra Radha Rani Vidyapeeth",
    meta: "Class 12",
  },
  {
    step: "03",
    title: "College",
    place: "Surya Sen Mahavidyalaya",
    meta: "B.Sc. Mathematics — Second Year",
  },
  {
    step: "04",
    title: "Next Chapter",
    place: "Continue learning mathematics, technology and other areas while building useful projects.",
    meta: "In progress",
  },
];

export function Journey() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="My Journey" symbol="→" title="My Learning Journey" />

        <div className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 120}>
              <div className="hover-lift relative h-full rounded-2xl border border-border bg-surface p-6">
                <p className="font-mono text-xs tracking-[0.3em] text-primary">{s.step}</p>
                <h3 className="mt-3 font-display text-2xl tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">{s.place}</p>
                {s.extra ? (
                  <p className="mt-1 text-xs text-muted-foreground">{s.extra}</p>
                ) : null}
                <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {s.meta}
                </p>
                {i < steps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-primary/50 md:bottom-auto md:left-auto md:right-[-1.15rem] md:top-1/2 md:-translate-y-1/2 md:translate-x-0"
                  >
                    ↓<span className="hidden md:inline">→</span>
                  </span>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
