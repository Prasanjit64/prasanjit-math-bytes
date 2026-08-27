import { useState } from "react";
import { ExternalLink, Github, Globe, Mail, Send } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "abhayghosh750@gmail.com",
    href: "mailto:abhayghosh750@gmail.com",
    external: false,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Prasanjit64",
    href: "https://github.com/Prasanjit64",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub — Second Profile",
    value: "github.com/abhayghosh750-code",
    href: "https://github.com/abhayghosh750-code",
    external: true,
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "prasanjitghosh.lovable.app",
    href: "https://prasanjitghosh.lovable.app",
    external: true,
  },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${name || "a visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:abhayghosh750@gmail.com?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <section id="contact" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          symbol="∑"
          title="Let's Connect"
          subtitle="Have an idea, question, or simply want to connect? Feel free to reach out."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {links.map((l, i) => (
              <Reveal key={l.label} delay={i * 90}>
                <a
                  href={l.href}
                  {...(l.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                  className="hover-lift group flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-6"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl border border-border text-primary transition-colors group-hover:border-primary/60">
                    <l.icon className="size-5" />
                  </span>
                  <span className="mt-5 block">
                    <span className="block text-sm font-semibold">{l.label}</span>
                    <span className="mt-1 flex items-center gap-1 break-all text-xs text-muted-foreground">
                      {l.value}
                      {l.external ? <ExternalLink className="size-3 shrink-0" /> : null}
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message..."
                    className={field}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                Send Message <Send className="size-4" />
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                This opens your email app with the message ready to send.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
