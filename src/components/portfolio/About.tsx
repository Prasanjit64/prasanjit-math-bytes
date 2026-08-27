import { Reveal, SectionHeading } from "./Reveal";

const stats = [
  { value: "02+", label: "Year of College", note: "Surya Sen Mahavidyalaya" },
  { value: "5–8", label: "School Classes", note: "Dalkhola High School" },
  { value: "∞", label: "Curiosity to Learn", note: "Always exploring" },
];

const paragraphs = [
  "I'm Prasanjit Ghosh, currently pursuing a B.Sc. in Mathematics at Surya Sen Mahavidyalaya, where I am in my second year.",
  "Mathematics has developed my interest in logical thinking, problem-solving and analytical reasoning. Alongside academics, I am exploring web technology and learning how digital tools can be used to create useful and meaningful experiences.",
  "Beyond academics, I enjoy following current affairs, geopolitics and Indian politics. These interests encourage me to understand society, technology, national issues and the wider world from different perspectives.",
  "My aim is to become a knowledgeable, capable and responsible person who can contribute positively to society in many ways.",
];

export function About() {
  return (
    <section id="about" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About Me"
          symbol="π"
          title="A student of numbers, curious about everything else"
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div className="space-y-5">
            {paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 120}>
                <div className="hover-lift relative overflow-hidden rounded-2xl border border-border bg-surface p-6">
                  <span className="pointer-events-none absolute -right-3 -top-6 font-display text-6xl text-primary/10">
                    ∑
                  </span>
                  <p className="font-display text-4xl text-primary">{s.value}</p>
                  <p className="mt-2 text-sm font-semibold">{s.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
