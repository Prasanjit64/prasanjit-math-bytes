import { GraduationCap, School, BookOpen } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const timeline = [
  {
    icon: GraduationCap,
    title: "B.Sc. Mathematics",
    place: "Surya Sen Mahavidyalaya",
    meta: "Second Year — Currently Pursuing",
    body: "Currently pursuing my B.Sc. in Mathematics and developing my analytical and problem-solving abilities.",
    active: true,
  },
  {
    icon: BookOpen,
    title: "Higher Secondary",
    place: "Debinagar Kailash Chandra Radha Rani Vidyapeeth",
    meta: "Class 12 — Completed",
    body: "Completed higher secondary education with a focus on building strong academic foundations.",
  },
  {
    icon: School,
    title: "Madhyamik (Class 10)",
    place: "Damdama High School",
    meta: "Class 10 — Completed",
    body: "Completed secondary education from Damdama High School, marking an important milestone in my academic journey.",
  },
  {
    icon: School,
    title: "School Education",
    place: "Dalkhola High School",
    meta: "Classes 5–8",
    body: "Early school years where my interest in mathematics and learning began to grow.",
  },

export function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Education"
          symbol="∫"
          title="My academic path so far"
          subtitle="A simple, honest record of where I have studied and what I am studying now."
        />

        <ol className="relative mt-16 space-y-8 pl-10 sm:pl-14">
          <span
            aria-hidden="true"
            className="absolute left-[13px] top-2 bottom-2 w-px sm:left-[21px]"
            style={{ backgroundImage: "var(--gradient-line)" }}
          />
          {timeline.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 130} className="relative">
              <span
                aria-hidden="true"
                className={
                  "absolute -left-10 top-6 flex size-7 items-center justify-center rounded-full border bg-background sm:-left-14 sm:size-11 " +
                  (item.active ? "border-primary text-primary" : "border-border text-muted-foreground")
                }
              >
                <item.icon className="size-3.5 sm:size-5" />
              </span>
              <div className="hover-lift rounded-2xl border border-border bg-surface p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-2xl tracking-tight">{item.title}</h3>
                  {item.active ? (
                    <span className="rounded-full border border-primary/40 px-3 py-0.5 font-mono text-[10px] uppercase tracking-widest text-primary">
                      Ongoing
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm text-foreground/80">{item.place}</p>
                <p className="mt-1 font-mono text-xs text-primary/80">{item.meta}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
