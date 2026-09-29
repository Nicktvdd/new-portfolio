import type { Metadata } from "next";
import ClosingCta from "@/components/ClosingCta";
import Reveal from "@/components/Reveal";
import { BackLink, Container, Eyebrow, FactList, SectionHeading, Serif, Tag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Soil Scout — The Hub",
  description:
    "How Nick van den Dungen led development of The Hub at Soil Scout: a Django + React dashboard for buried soil sensors, backed by infrastructure handling 6.5M+ sensor uploads an hour.",
  alternates: { canonical: "/projects/soil-scout" },
};

const facts = [
  { label: "Role", value: "Full Stack → Lead Full Stack Engineer" },
  { label: "When", value: "Oct 2024 – Jun 2026" },
  { label: "Team", value: "In-house developers and external consultants" },
  { label: "Stack", value: "Django, React, PostgreSQL, TimescaleDB, GCP" },
];

const work = [
  {
    title: "Turning ideas into features",
    body: "I was the person between product and code: listening to what the business wanted, working out how to build it across the stack, and keeping in-house developers and external consultants pointed the same way.",
  },
  {
    title: "Building across the whole stack",
    body: "I designed and shipped features end to end in Python (Django) and React, mostly around making real-time sensor telemetry readable for the people using The Hub.",
  },
  {
    title: "Keeping it fast and stable",
    body: "Tracking down production bugs, tuning the PostgreSQL and TimescaleDB data pipelines on GCP, and keeping deployments boring with GitHub Actions and Ansible.",
  },
  {
    title: "Hiring the next developers",
    body: "I built our technical recruitment pipeline from scratch: practical coding assignments instead of puzzles, and interviews focused on how candidates think and collaborate.",
  },
];

const stack = ["Python", "Django", "React", "Tailwind CSS", "PostgreSQL", "TimescaleDB", "GCP", "GitHub Actions", "Ansible"];

export default function SoilScoutPage() {
  return (
    <>
      <Container className="flex flex-col gap-10 pb-16 pt-10 md:pt-14">
        <BackLink href="/projects">All projects</BackLink>
        <div className="flex max-w-3xl flex-col gap-5">
          <Eyebrow>Work · Lead Full Stack Engineer</Eyebrow>
          <h1 className="text-5xl font-semibold tracking-tight text-balance md:text-7xl">
            Soil Scout.
            <br />
            <Serif>Leading The Hub.</Serif>
          </h1>
        </div>
        <FactList facts={facts} />
      </Container>

      <section className="bg-gradient-to-b from-accent-soft/70 to-transparent py-14">
        <Container className="flex flex-col items-center gap-2 text-center">
          <span className="text-7xl font-semibold tracking-tight md:text-8xl">6.5M+</span>
          <span className="font-display text-2xl italic text-muted text-balance">sensor uploads an hour, into one dashboard</span>
        </Container>
      </section>

      <Container className="flex flex-col gap-24 pt-16">
        <section className="grid gap-10 md:grid-cols-[1fr_1.3fr]">
          <SectionHeading eyebrow="The product" title={<>Sensors in the ground, <Serif>data on a screen.</Serif></>} />
          <div className="flex flex-col gap-4 text-lg text-muted text-pretty">
            <p>
              Soil Scout makes wireless sensors, the scouts, that are buried in the soil and keep sending measurements.
              The Hub is the web app where customers see that data.
            </p>
            <p>
              I joined as a Full Stack Engineer in October 2024 and became the lead a year later. I led development
              of The Hub, stepped up to guide our engineering work and look after the
              core infrastructure behind it, which handled more than 6.5 million sensor uploads every hour.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-10">
          <SectionHeading eyebrow="What I did" title={<>Four parts <Serif>of one job.</Serif></>} />
          <div className="grid gap-4 sm:grid-cols-2">
            {work.map((w) => (
              <Reveal key={w.title}>
                <div className="flex h-full flex-col gap-2 rounded-2xl border border-line bg-card p-6 md:p-8">
                  <h3 className="text-lg font-semibold">{w.title}</h3>
                  <p className="text-muted text-pretty">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {stack.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </section>

        <section className="grid gap-10 md:grid-cols-[1fr_1.3fr]">
          <SectionHeading eyebrow="What it taught me" title={<>Leading is mostly <Serif>communication.</Serif></>} />
          <div className="flex flex-col gap-4 text-lg text-muted text-pretty">
            <p>
              Going from developer to lead changed what a good day looked like. It stopped being about how much code I
              wrote and started being about whether the right thing got built, whether production stayed stable, and
              whether the people around me could do their best work.
            </p>
            <p>
              That&apos;s the experience I&apos;m now putting into Tiny Tarrasque, and what I&apos;d bring to an early
              team.
            </p>
          </div>
        </section>

      </Container>

      <ClosingCta
        title={
          <>
            See what I&apos;m building now, <Serif>or just say hi.</Serif>
          </>
        }
        primary={{ href: "/projects/tiny-tarrasque", label: "Tiny Tarrasque" }}
        secondary={{ href: "/contact", label: "Get in touch" }}
      />
    </>
  );
}
