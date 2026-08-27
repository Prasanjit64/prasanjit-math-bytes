import { Reveal, SectionHeading } from "./Reveal";

const skills = [
  { name: "Mathematics", stage: "Developing", note: "Core academic focus", level: "high" },
  { name: "Logical Thinking", stage: "Developing", note: "Built through mathematics", level: "high" },
  { name: "Problem Solving", stage: "Developing", note: "Practised daily", level: "high" },
  { name: "Web Technology", stage: "Learning", note: "Understanding how the web works", level: "mid" },
  { name: "Web Development", stage: "Exploring", note: "Building small projects", level: "low" },
  { name: "Communication", stage: "Developing", note: "Explaining ideas clearly", level: "mid" },
  { name: "Research & Learning", stage: "Exploring", note: "Reading, notes, curiosity", level: "mid" },
];

const bars: Record<string, string> = { low: "w-1/3", mid: "w-2/3", high: "w-11/12" };

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills & Learning"
          symbol="√"
          title="Skills I'm Building"
          subtitle="No expert claims here — just honest labels for where each skill currently stands."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 70}>
              <div className="hover-lift h-full rounded-2xl border border-border bg-surface p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold">{s.name}</h3>
                  <span className="shrink-0 rounded-full border border-primary/40 px-3 py-0.5 font-mono text-[10px] uppercase tracking-widest text-primary">
                    {s.stage}
                  </span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{s.note}</p>
                <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className={`h-full rounded-full bg-primary/70 transition-all duration-1000 ${bars[s.level]}`}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
