import { site } from "@/content/site";
import { Container } from "./ui";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <Container className="flex flex-col gap-4 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.location}
        </p>
        <p>Built with Next.js, Tailwind & Motion, pair-programmed with Claude Code.</p>
        <nav aria-label="Social links" className="flex gap-5">
          <a className="hover:text-ink" href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="hover:text-ink" href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="hover:text-ink" href={`mailto:${site.email}`}>
            Email
          </a>
        </nav>
      </Container>
    </footer>
  );
}
