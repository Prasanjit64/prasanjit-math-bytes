import { Sigma, Code2, Newspaper, Globe2, Landmark } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const cards = [
  {
    icon: Sigma,
    title: "Mathematics",
    body: "Exploring mathematical concepts, equations, logical reasoning and problem-solving.",
  },
  {
    icon: Code2,
    title: "Web Technology",
    body: "Learning modern web technologies and exploring how websites and digital experiences are built.",
  },
  {
    icon: Newspaper,
    title: "Current Affairs",
    body: "Following important national and international events and understanding their wider impact.",
  },
  {
    icon: Globe2,
    title: "Geopolitics",
    body: "Interested in international relations, global affairs and the changing dynamics between countries.",
  },
  {
    icon: Landmark,
    title: "Indian Politics",
    body: "Interested in India's political system, governance, public affairs and national issues.",
  },
];

export function Interests() {
  return (
    <section id="interests" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Interests" symbol="θ" title="What I'm Interested In" />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <article className="hover-lift group h-full rounded-2xl border border-border bg-surface p-7">
                <span className="flex size-12 items-center justify-center rounded-xl border border-border text-primary transition-colors group-hover:border-primary/60 group-hover:bg-primary/10">
                  <c.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-2xl tracking-tight">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </article>
            </Reveal>
          ))}
          <Reveal delay={cards.length * 90}>
            <div className="grid-paper flex h-full min-h-40 items-center justify-center rounded-2xl border border-dashed border-border p-7 text-center">
              <p className="font-display text-3xl text-primary/50">∑ · π · ∫ · ∞</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
