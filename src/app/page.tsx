import Image from "next/image";
import Link from "next/link";
import AiSection from "@/components/AiSection";
import ClosingCta from "@/components/ClosingCta";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { ButtonLink, Container, SectionHeading, Serif, StatusPill } from "@/components/ui";
import { featured } from "@/content/projects";
import { site } from "@/content/site";

const inlineLink = "font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent";

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
              I build products <Serif><span className="text-accent">end to end.</span></Serif>
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
          <div className="relative mx-auto w-full max-w-[15rem] sm:max-w-sm lg:max-w-none">
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
