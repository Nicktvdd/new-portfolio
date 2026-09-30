import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import CopyEmail from "@/components/CopyEmail";
import { Container, Eyebrow, Serif, StatusPill } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}: ${site.availability.toLowerCase()}, ${site.where.toLowerCase()}.`,
  alternates: { canonical: "/contact" },
};

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "LinkedIn", value: "nick-van-den-dungen", href: site.linkedin },
  { label: "GitHub", value: "Nicktvdd", href: site.github },
  { label: "CV", value: "Download PDF", href: site.cv },
];

export default function ContactPage() {
  return (
    <Container className="grid gap-12 pt-12 md:pt-16 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-8">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl">
          Grab a coffee, roll some dice, <Serif>build something good.</Serif>{" "}
          <span aria-hidden="true">☕️🎲</span>
        </h1>
        <StatusPill>
          {site.availability} · <span className="whitespace-nowrap">{site.where}</span>
        </StatusPill>
        <p className="max-w-md text-lg text-muted text-pretty">
          Hiring a CTO or founding engineer, building a team, or just want to talk products, tabletop games or teaching
          people to code? I&apos;d love to hear from you.
        </p>
        <p className="max-w-md text-sm text-muted">{site.logistics}</p>
        <ul className="flex flex-col divide-y divide-line border-y border-line">
          {channels.map((c) => (
            <li key={c.label} className="flex items-center gap-3">
              <a
                href={c.href}
                {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex flex-1 items-center justify-between gap-4 py-4"
              >
                <span className="text-sm text-muted">{c.label}</span>
                <span className="font-medium group-hover:text-teal-ink">
                  {c.value} <span aria-hidden="true">↗</span>
                </span>
              </a>
              {c.label === "Email" && <CopyEmail />}
            </li>
          ))}
        </ul>
      </div>
      <ContactForm />
    </Container>
  );
}
