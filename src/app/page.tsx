import Image from "next/image";
import Link from "next/link";
import AiSection from "@/components/AiSection";
import ClosingCta from "@/components/ClosingCta";
import Contours from "@/components/Contours";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import RouteMap from "@/components/RouteMap";
import { ButtonLink, Container, HandNote, SectionHeading } from "@/components/ui";
import { featured } from "@/content/projects";
import { route } from "@/content/route";
import { site } from "@/content/site";

const inlineLink = "font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-teal-ink";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pb-12 pt-8 md:pb-16 md:pt-14">
        <Contours />
        <Container className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          <div className="flex flex-col gap-6 lg:pb-6">
            <HandNote className="-rotate-2 text-3xl">hei, I&apos;m Nick</HandNote>
            <h1 className="font-display text-6xl leading-[0.98] text-balance sm:text-7xl lg:text-8xl">
              You set the goal, I find the route.
            </h1>
            <p className="max-w-xl text-lg text-muted text-pretty md:text-xl">
              I&apos;m a full-stack engineer in Helsinki. Before software, I was a wilderness guide in Finnish Lapland,
              leading snowmobile tours and northern-lights trips. I still do the same job: get a group from A to B, safely
              and in good spirits.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <ButtonLink href="/#route">Follow the route</ButtonLink>
              <ButtonLink href="/about" variant="secondary">
                Read my character sheet
              </ButtonLink>
              <a href={site.cv} className={`${inlineLink} text-sm sm:ml-2`}>
                CV (PDF)
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[15rem] sm:max-w-xs lg:max-w-[26rem]">
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
            <div aria-hidden="true" className="absolute -left-40 top-16 hidden w-40 -rotate-6 lg:block">
              <p className="font-hand text-2xl leading-tight text-teal-ink">me, minus the snowmobile suit</p>
              <svg viewBox="0 0 70 40" className="ml-24 mt-1 w-16 text-teal-ink">
                <path
                  d="M2 6 C 25 4, 45 14, 62 32 M62 32 l-12 -2 M62 32 l-1 -12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </Container>
      </section>

      <section id="route" className="py-12 md:py-16" aria-labelledby="route-title">
        <Container className="flex flex-col gap-10 border-t-[1.5px] border-dashed border-line pt-12 md:pt-14">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h2 id="route-title" className="font-display text-4xl md:text-5xl">
              The route so far
            </h2>
            <HandNote className="text-2xl">not a straight line, and that&apos;s the point</HandNote>
          </div>
          <RouteMap stops={route} />
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container className="flex flex-col gap-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Field notes" title="What I'm building now, and what got me here." />
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
        title="Grab a tea, roll some dice, build something good."
        body={`${site.availability}. ${site.logistics}`}
        primary={{ href: "/contact", label: "Get in touch" }}
      />
    </>
  );
}
