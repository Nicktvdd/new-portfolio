import type { ReactNode } from "react";
import D20 from "./D20";
import { ButtonLink, Container } from "./ui";

type Action = { href: string; label: string };

export default function ClosingCta({
  title,
  body,
  primary,
  secondary,
}: {
  title: ReactNode;
  body?: ReactNode;
  primary: Action;
  secondary?: Action;
}) {
  return (
    <section className="pt-16 md:pt-20">
      <Container>
        <div className="flex flex-col gap-8 rounded-lg bg-slab px-6 py-10 text-on-slab ring-1 ring-line sm:px-8 md:flex-row md:items-center md:justify-between md:gap-12 md:px-12 md:py-12">
          <div className="flex max-w-2xl flex-col gap-4">
            <h2 className="font-display text-4xl leading-[1.05] text-balance md:text-5xl">{title}</h2>
            {body && <p className="text-lg text-on-slab/75 text-pretty">{body}</p>}
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <ButtonLink href={primary.href} variant="inverse" className="group">
              <D20 className="size-5" />
              {primary.label}
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
      </Container>
    </section>
  );
}
