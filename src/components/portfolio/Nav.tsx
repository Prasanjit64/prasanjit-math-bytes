import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Education", id: "education" },
  { label: "Interests", id: "interests" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Vision", id: "vision" },
  { label: "Contact", id: "contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "home";
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (el && el.getBoundingClientRect().top <= 140) current = it.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass py-2" : "py-4",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#home" className="group flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-xl border border-border font-display text-lg text-primary transition-colors group-hover:border-primary/60">
            ∑
          </span>
          <span className="font-display text-lg tracking-tight">Prasanjit Ghosh</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {items.map((it) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                  active === it.id && "text-foreground",
                )}
              >
                {it.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-px bg-primary transition-transform duration-300",
                    active === it.id ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-11 items-center justify-center rounded-xl border border-border text-foreground transition-colors hover:border-primary/60 lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "glass overflow-hidden transition-[max-height,opacity] duration-500 ease-out lg:hidden",
          open ? "mt-2 max-h-[70vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {items.map((it, i) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: `${i * 25}ms` }}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {it.label}
                <span className="font-mono text-xs text-primary/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
