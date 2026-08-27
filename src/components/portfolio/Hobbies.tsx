import { Reveal } from "./Reveal";

const hobbies = [
  { symbol: "🏏", title: "Cricket", body: "Playing and following matches with friends." },
  { symbol: "⚽", title: "Football", body: "Weekend games and plenty of energy." },
  { symbol: "∑", title: "Solving Equations", body: "Unwinding with a good problem to solve." },
];

export function Hobbies() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid-paper opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">
              ∞ Beyond Academics
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Life outside the notebook
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              A few things that keep me balanced between lectures, problem sets and late-night
              reading.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3">
            {hobbies.map((h, i) => (
              <Reveal key={h.title} delay={i * 120}>
                <div className="hover-lift group h-full rounded-2xl border border-border bg-surface/70 p-6 text-center backdrop-blur-sm">
                  <span className="inline-flex size-14 items-center justify-center rounded-2xl border border-border text-2xl transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                    {h.symbol}
                  </span>
                  <h3 className="mt-4 font-display text-xl tracking-tight">{h.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{h.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
