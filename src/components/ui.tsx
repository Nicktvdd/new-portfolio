import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-ink">{children}</p>;
}

export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: ReactNode }) {
  return (
    <div className="flex max-w-2xl flex-col gap-3">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">{title}</h2>
      {intro && <p className="text-lg text-muted text-pretty">{intro}</p>}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium text-muted">{children}</span>
  );
}

export function Serif({ children }: { children: ReactNode }) {
  return <span className="font-display font-normal italic">{children}</span>;
}

const variants = {
  primary: "bg-ink text-paper hover:bg-accent",
  secondary: "border border-ink/80 text-ink hover:bg-ink hover:text-paper",
  inverse: "bg-on-slab text-slab hover:bg-accent hover:text-on-slab",
  ghost:"text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent",
} as const;

type ButtonLinkProps = { variant?: keyof typeof variants; href: string; children: ReactNode } & Omit<
  ComponentProps<"a">,
  "href"
>;

export function ButtonLink({ variant = "primary", href, className = "", children, ...rest }: ButtonLinkProps) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${variants[variant]} ${className}`;
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
    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-card/80 px-3 py-1.5 text-xs font-medium text-muted">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:hidden" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
      </span>
      {children}
    </span>
  );
}
