import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-accent-ink">{children}</p>;
}

export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: ReactNode }) {
  return (
    <div className="flex max-w-2xl flex-col gap-3">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-4xl leading-[1.05] text-balance md:text-5xl">{title}</h2>
      {intro && <p className="text-lg text-muted text-pretty">{intro}</p>}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-olive-soft px-3 py-1 text-xs font-medium text-olive-ink">{children}</span>
  );
}

// Headings are set in the serif display face as a whole; this keeps older two-part headings reading as one line.
export function Serif({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

// Handwritten margin note, the "field notes" voice of the site. Keep these short and rare.
export function HandNote({
  tone = "amber",
  className = "",
  children,
}: {
  tone?: "amber" | "teal";
  className?: string;
  children: ReactNode;
}) {
  const color = tone === "teal" ? "text-teal-ink" : "text-accent-ink";
  return <p className={`font-hand leading-tight ${color} ${className}`}>{children}</p>;
}

const variants = {
  primary: "bg-teal text-on-teal hover:bg-accent hover:text-on-accent",
  secondary: "border border-ink/80 text-ink hover:bg-ink hover:text-paper",
  inverse: "bg-accent-on-slab text-on-accent hover:bg-on-slab hover:text-slab",
  plain: "",
  ghost:"text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-teal-ink",
} as const;

type ButtonLinkProps = { variant?: keyof typeof variants; href: string; children: ReactNode } & Omit<
  ComponentProps<"a">,
  "href"
>;

export function ButtonLink({ variant = "primary", href, className = "", children, ...rest }: ButtonLinkProps) {
  const cls = `inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors ${variants[variant]} ${className}`;
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  const external = href.startsWith("http");
  return (
    <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
      {children}
    </a>
  );
}

export function StatusPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-teal-ink">
      <span className="size-2 rounded-full bg-teal" aria-hidden="true" />
      <span>{children}</span>
    </span>
  );
}

export function FactList({ facts }: { facts: { label: string; value: string }[] }) {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line lg:grid-cols-4">
      {facts.map((f) => (
        <div key={f.label} className="flex flex-col gap-1 bg-card p-5">
          <dt className="font-mono text-xs uppercase tracking-[0.1em] text-muted">{f.label}</dt>
          <dd className="font-medium">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function BackLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="w-fit text-sm font-medium text-muted hover:text-ink">
      <span aria-hidden="true">←</span> {children}
    </Link>
  );
}
