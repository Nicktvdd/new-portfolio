import Image from "next/image";
import Link from "next/link";
import AiSection from "@/components/AiSection";
import ClosingCta from "@/components/ClosingCta";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { ButtonLink, Container, SectionHeading, Serif, StatusPill } from "@/components/ui";
import { featured } from "@/content/projects";
import { site } from "@/content/site";

const inlineLink = "font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-teal-ink";

export default function HomePage() {
  return (
    <>
      <section className="pb-12 pt-10 md:pb-16 md:pt-16">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col gap-6">
            <StatusPill>
              {site.availability}
              <span className="hidden sm:inline"> · {site.where}</span>
            </StatusPill>
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl md:text-7xl">
              I build products <Serif><span className="text-accent-display">end to end.</span></Serif>
            </h1>
            <p className="max-w-xl text-lg text-muted text-pretty md:text-xl">
              I&apos;m Nick, a full-stack engineer in Helsinki. I&apos;m building{" "}
              <Link href="/projects/tiny-tarrasque" className={inlineLink}>
                Tiny Tarrasque
              </Link>{" "}
              with AI agents; before that I led The Hub at{" "}
              <Link href="/projects/soil-scout" className={inlineLink}>
                Soil Scout
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/projects/tiny-tarrasque">
                See Tiny Tarrasque <span aria-hidden="true">→</span>
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Get in touch
              </ButtonLink>
              <a href={site.cv} className={`${inlineLink} hidden self-center text-sm sm:inline`}>
                CV (PDF)
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[15rem] sm:max-w-xs lg:max-w-[26rem]">
            {/* Arch and autumn gradient are CSS so they follow the theme; the portrait is a transparent cutout. */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-gradient-to-br from-hero-a to-hero-b">
              <Image
                src="/portrait.webp"
                alt="Portrait of Nick van den Dungen"
                width={900}
                height={1252}
                priority
                sizes="(min-width: 1024px) 440px, (min-width: 640px) 336px, 252px"
                className="absolute left-[-2.5%] top-[6%] h-auto w-[105%] max-w-none"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container className="flex flex-col gap-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected work"
              title={
                <>
                  What I&apos;m building now,
                  <br />
                  <Serif>and what got me here.</Serif>
                </>
              }
            />
            <Link href="/projects" className={`${inlineLink} text-sm`}>
              All projects
            </Link>
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

      <ClosingCta
        badge
        title={
          <>
            Hiring a CTO or founding engineer, <Serif>or someone to own a product end to end?</Serif>
          </>
        }
        body={`${site.logistics} Tell me what you're building.`}
        primary={{ href: "/contact", label: "Get in touch" }}
      />
    </>
  );
}
