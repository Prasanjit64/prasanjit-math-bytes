const glyphs = [
  { c: "∑", top: "12%", left: "8%", size: "5rem", delay: "0s", op: 0.08 },
  { c: "π", top: "68%", left: "6%", size: "4rem", delay: "2s", op: 0.07 },
  { c: "∫", top: "22%", left: "88%", size: "6rem", delay: "1s", op: 0.07 },
  { c: "∞", top: "78%", left: "84%", size: "4.5rem", delay: "3s", op: 0.08 },
  { c: "√", top: "45%", left: "72%", size: "3rem", delay: "4s", op: 0.06 },
  { c: "θ", top: "55%", left: "18%", size: "3.2rem", delay: "1.5s", op: 0.06 },
];

const equations = [
  { t: "e^{iπ} + 1 = 0", top: "34%", left: "4%" },
  { t: "a² + b² = c²", top: "16%", left: "60%" },
  { t: "lim x→∞", top: "86%", left: "42%" },
  { t: "f(x) = ∫ g(t) dt", top: "62%", left: "56%" },
];

export function MathBackground({ dense = false }: { dense?: boolean }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-paper opacity-60" />
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      />
      {glyphs.slice(0, dense ? glyphs.length : 4).map((g, i) => (
        <span
          key={i}
          className="absolute font-display float-slow text-primary"
          style={{
            top: g.top,
            left: g.left,
            fontSize: g.size,
            opacity: g.op,
            animationDelay: g.delay,
          }}
        >
          {g.c}
        </span>
      ))}
      {equations.slice(0, dense ? 4 : 2).map((e, i) => (
        <span
          key={e.t}
          className="absolute font-mono text-xs tracking-wider text-foreground/[0.07] drift sm:text-sm"
          style={{ top: e.top, left: e.left, animationDelay: `${i}s` }}
        >
          {e.t}
        </span>
      ))}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}

export function Particles() {
  const dots = Array.from({ length: 18 }, (_, i) => ({
    left: `${(i * 37) % 100}%`,
    top: `${(i * 53) % 100}%`,
    d: `${i * 0.6}s`,
    s: i % 3 === 0 ? 3 : 2,
  }));
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-primary/40 float-slow"
          style={{
            left: d.left,
            top: d.top,
            width: d.s,
            height: d.s,
            animationDelay: d.d,
            animationDuration: `${9 + (i % 5) * 2}s`,
          }}
        />
      ))}
    </div>
  );
}
