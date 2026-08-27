import { Github, Globe, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
        <p className="text-xs text-muted-foreground">
          © 2026 Prasanjit Ghosh. Built with curiosity, mathematics and technology.
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Prasanjit64"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            <Github className="size-4" />
          </a>
          <a
            href="mailto:abhayghosh750@gmail.com"
            aria-label="Email"
            className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            <Mail className="size-4" />
          </a>
          <a
            href="https://prasanjitghosh.lovable.app"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Portfolio"
            className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            <Globe className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
