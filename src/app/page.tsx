import Image from "next/image";
import Link from "next/link";
import AiSection from "@/components/AiSection";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import RotatingBadge from "@/components/RotatingBadge";
import { ButtonLink, Container, SectionHeading, Serif, StatusPill } from "@/components/ui";
import { featured } from "@/content/projects";
import { site } from "@/content/site";

const nowBefore = [
  {
    when: "Now",
    title: "Founding Tiny Tarrasque",
    body: "Taking a tabletop RPG app from idea to launch on my own: product, architecture, AI-assisted delivery and playtests. Friends alpha in October, public beta in December.",
    href: "/projects/tiny-tarrasque",
    link: "Case study",
  },
  {
    when: "Before",
    title: "Lead Software Engineer, Soil Scout",
    body: "Owned the platform end to end for two years: Django + React, 6.5M+ telemetry records an hour on TimescaleDB and GCP, automated CI/CD, and engineering hiring.",
    href: "/about#experience",
    link: "Experience",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="pb-16 pt-10 md:pb-24 md:pt-16">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col gap-7">
            <StatusPill>
              {site.availability} · {site.where}
            </StatusPill>
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl md:text-7xl">
              I build products <Serif><span className="text-accent">end to end.</span></Serif>
            </h1>
            <p className="max-w-xl text-lg text-muted text-pretty md:text-xl">
              I&apos;m Nick, a founder-minded full-stack engineer in Helsinki. Right now I&apos;m taking{" "}
              <Link href="/projects/tiny-tarrasque" className="font-medium text-ink underline decoration-accent decoration-2 underline-offset-4">
                Tiny Tarrasque
              </Link>{" "}
              from zero to launch. Before that I led engineering at Soil Scout, where our platform ingested 6.5M+
              telemetry records an hour. Deep fundamentals, an AI-native workflow, and a habit of shipping.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/projects/tiny-tarrasque">
                See Tiny Tarrasque <span aria-hidden="true">→</span>
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Get in touch
              </ButtonLink>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="absolute inset-x-6 bottom-0 top-12 -z-10 rounded-[3rem] bg-gradient-to-br from-accent-soft via-sky-100 to-orange-100 dark:via-sky-950/40 dark:to-orange-950/40" />
            <Image
              src="/hero.webp"
              alt="Portrait of Nick van den Dungen"
              width={1000}
              height={1333}
              priority
              sizes="(min-width: 1024px) 420px, 80vw"
              className="h-auto w-full"
            />
          </div>
        </Container>
      </section>

      <section className="pb-8">
        <Container className="grid gap-4 md:grid-cols-2">
          {nowBefore.map((item, i) => (
            <Reveal key={item.when} delay={i * 0.05}>
              <Link
                href={item.href}
                className="group flex h-full flex-col gap-3 rounded-3xl border border-line bg-card p-7 transition-colors hover:border-ink/40"
              >
                <span className="font-display text-2xl italic text-accent-ink">{item.when}</span>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-muted text-pretty">{item.body}</p>
                <span className="mt-auto pt-2 text-sm font-semibold">
                  {item.link} <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="flex flex-col gap-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected work"
              title={
                <>
                  From telemetry at scale
                  <br />
                  <Serif>to a product of my own.</Serif>
                </>
              }
            />
            <ButtonLink href="/projects" variant="ghost">
              All projects
            </ButtonLink>
          </div>
          <div className="flex flex-col gap-6">
            {featured.map((project, i) => (
              <Reveal key={project.slug}>
                <ProjectCard project={project} flip={i % 2 === 1} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <AiSection />

      <section className="py-20 md:py-28">
        <Container className="flex flex-col items-center gap-10 text-center">
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            Looking for a CTO, a founding engineer, <Serif>or someone to own the product end to end?</Serif>
          </h2>
          <p className="max-w-xl text-lg text-muted">
            I&apos;m open to roles in Helsinki or remote. Tell me what you&apos;re building.
          </p>
          <RotatingBadge text="founder-minded engineer • builds end to end • " label="Let's talk" href="/contact" />
        </Container>
      </section>
    </>
  );
}
