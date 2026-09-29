import type { ReactNode } from "react";
import RotatingBadge from "./RotatingBadge";
import { ButtonLink, Container } from "./ui";

type Action = { href: string; label: string };

export default function ClosingCta({
  title,
  body,
  primary,
  secondary,
  badge = false,
}: {
  title: ReactNode;
  body?: ReactNode;
  primary: Action;
  secondary?: Action;
  badge?: boolean;
}) {
  return (
    <section className="pt-16 md:pt-20">
      <Container>
        <div className="flex flex-col gap-8 rounded-3xl bg-slab px-8 py-12 text-on-slab ring-1 ring-line md:flex-row md:items-center md:justify-between md:gap-12 md:px-12">
          <div className="flex max-w-2xl flex-col gap-4">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">{title}</h2>
            {body && <p className="text-lg text-on-slab/70 text-pretty">{body}</p>}
            <div className="flex flex-wrap gap-3 pt-2">
              <ButtonLink href={primary.href} variant="inverse">
                {primary.label} <span aria-hidden="true">→</span>
              </ButtonLink>
              {secondary && (
                <ButtonLink
                  href={secondary.href}
                  className="border border-on-slab/40 text-on-slab hover:border-on-slab hover:bg-on-slab hover:text-slab"
                  variant="plain"
                >
                  {secondary.label}
                </ButtonLink>
              )}
            </div>
          </div>
          {badge && (
            <div className="hidden md:block">
              <RotatingBadge text="let's build something • founder-minded engineer • " label="Let's talk" href="/contact" />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
