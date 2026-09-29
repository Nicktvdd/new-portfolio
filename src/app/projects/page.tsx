import type { Metadata } from "next";
import ClosingCta from "@/components/ClosingCta";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { Container, Eyebrow, SectionHeading, Serif } from "@/components/ui";
import { archive, featured } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work by Nick van den Dungen: Tiny Tarrasque (founder), IoT telemetry at Soil Scout, a real-time 3D Pong, and more.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <Container className="flex flex-col gap-6 pb-12 pt-12 md:pt-16">
        <div className="flex max-w-3xl flex-col gap-4">
          <Eyebrow>Projects</Eyebrow>
          <h1 className="text-5xl font-semibold tracking-tight text-balance md:text-6xl">
            Things I&apos;ve built, <Serif>and what they taught me.</Serif>
          </h1>
          <p className="text-lg text-muted text-pretty">
            A product I&apos;m founding, a platform I led, and the projects that got me here.
          </p>
        </div>
      </Container>

      <Container className="flex flex-col gap-6">
        {featured.map((project, i) => (
          <Reveal key={project.slug}>
            <ProjectCard project={project} flip={i % 2 === 1} headingLevel={2} />
          </Reveal>
        ))}
      </Container>

      <section className="pt-24">
        <Container className="flex flex-col gap-8">
          <SectionHeading eyebrow="Archive" title={<>Earlier work, <Serif>still worth a look.</Serif></>} />
          <ul className="divide-y divide-line border-y border-line">
            {archive.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-1 py-5 md:grid-cols-[14rem_1fr_16rem] md:items-baseline md:gap-8"
                >
                  <span className="flex flex-col">
                    <span className="text-lg font-semibold group-hover:text-accent">{item.title}</span>
                    <span className="text-sm text-muted">{item.context}</span>
                  </span>
                  <span className="text-muted text-pretty">{item.summary}</span>
                  <span className="flex items-center gap-3 text-sm font-medium md:justify-end">
                    {item.stack}
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ClosingCta
        title={
          <>
            Want this kind of ownership <Serif>on your team?</Serif>
          </>
        }
        primary={{ href: "/contact", label: "Let's talk" }}
      />
    </>
  );
}
