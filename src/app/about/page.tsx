import type { Metadata } from "next";
import ClosingCta from "@/components/ClosingCta";
import Reveal from "@/components/Reveal";
import { Container, Eyebrow, SectionHeading, Serif, Tag } from "@/components/ui";
import { experience } from "@/content/experience";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Nick van den Dungen: full-stack engineer in Helsinki, founder of Tiny Tarrasque and former Lead Full Stack Engineer at Soil Scout.",
  alternates: { canonical: "/about" },
};

const quickFacts = [
  { label: "Based in", value: "Helsinki, Finland" },
  { label: "Looking for", value: "CTO, founding-engineer & full-stack roles" },
  { label: "Available", value: "Right away · no visa needed" },
  { label: "Languages", value: "Dutch (native), English (fluent), Finnish (A2)" },
  { label: "Building", value: "Tiny Tarrasque (friends alpha, Oct 2026)" },
];

const skillGroups = [
  { name: "Product", items: ["TypeScript", "React", "React Native", "Expo", "Next.js", "Svelte", "Tailwind CSS", "Zustand"] },
  {
    name: "Backend & data",
    items: ["Python", "Django", "Django REST", "Node.js", "REST API design", "WebSockets / socket.io", "PostgreSQL", "TimescaleDB", "Supabase", "Kotlin"],
  },
  {
    name: "Infrastructure & quality",
    items: ["GCP", "Docker", "Terraform", "Linux", "GitHub Actions", "Ansible", "Jest", "Cypress", "Playwright"],
  },
  { name: "Working with AI", items: ["Claude Code", "Codex", "Cursor", "MCP servers", "Agentic workflows", "LLM evals", "Local LLMs"] },
  { name: "Foundations", items: ["C", "C++", "Unix / POSIX", "Memory management"] },
];

const howIWork = [
  { skill: "Leading", proof: "Promoted to lead at Soil Scout; earlier, head of internal relations on the Hive student board." },
  { skill: "Hiring", proof: "Built Soil Scout's technical hiring pipeline from scratch, with practical assignments." },
  { skill: "Communication", proof: "Turned product ideas into features, between in-house developers and external consultants." },
  { skill: "Teaching", proof: "Three years teaching Dutch to young kids, and the occasional workshop at Hive Helsinki." },
  { skill: "Product sense", proof: "With Tiny Tarrasque, every milestone ends with a real player test, not a feature list." },
];

export default function AboutPage() {
  return (
    <>
      <Container className="grid gap-12 pt-12 md:pt-16 lg:grid-cols-[1fr_20rem] lg:gap-16">
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>About</Eyebrow>
            <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
              Hey there! <span className="whitespace-nowrap"><Serif>I&apos;m Nick.</Serif> 👋</span>
            </h1>
          </div>
          <div className="flex max-w-2xl flex-col gap-5 text-lg leading-relaxed text-pretty">
            <p>
              I&apos;m a full-stack engineer in Helsinki who loves turning fuzzy ideas into products people actually use.
            </p>
            <p>
              At Soil Scout I went from Full Stack Engineer to Lead Full Stack Engineer, leading development of The Hub, the
              dashboard for our buried soil sensors. I stepped up to guide our engineering, looked after the
              infrastructure behind 6.5M+ sensor uploads an hour, and built our hiring pipeline from scratch. In June the
              company moved on to a different product and my role ended, so I used the moment to build something of my
              own.
            </p>
            <p>
              That something is <strong>Tiny Tarrasque</strong>, a character sheet app for tabletop RPG groups who play
              around a real table. I&apos;m doing all of it: talking to players, designing a rules engine, building the
              app and running playtests with friends. It&apos;s also where I&apos;ve learned to build with AI agents
              properly, with guardrails, tests and small reviewable steps.
            </p>
            <p>
              Before software I studied Sport Science, and during and after my degree I spent years coaching bootcamps
              in the Netherlands, guiding snowmobile tours in Lapland and teaching young kids. I still give the occasional programming workshop at
              Hive Helsinki. That shows up in how I work: clear communication, patience, and a
              real enjoyment of helping people get unstuck.
            </p>
            <p>
              Now I&apos;m looking for my next team, ideally as a CTO or founding engineer, or as a full-stack engineer
              somewhere ambitious. If you&apos;re building something with great people, let&apos;s talk. ✨
            </p>
          </div>
        </section>

        <aside className="lg:pt-24">
          <dl className="flex flex-col divide-y divide-line rounded-2xl border border-line bg-card lg:sticky lg:top-24">
            {quickFacts.map((f) => (
              <div key={f.label} className="flex flex-col gap-1 p-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{f.label}</dt>
                <dd className="font-medium">{f.value}</dd>
              </div>
            ))}
            <div className="flex flex-col gap-1 p-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Email & CV</dt>
              <dd className="flex flex-col gap-1">
                <a className="w-fit font-medium underline decoration-accent decoration-2 underline-offset-4 hover:text-teal-ink" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                <a className="w-fit font-medium underline decoration-accent decoration-2 underline-offset-4 hover:text-teal-ink" href={site.cv}>
                  Download CV (PDF)
                </a>
              </dd>
            </div>
          </dl>
        </aside>
      </Container>

      <Container className="flex flex-col gap-24 pt-24">
        <section className="grid gap-10 md:grid-cols-[1fr_2fr]" aria-labelledby="skills">
          <div id="skills">
            <SectionHeading eyebrow="Skills" title={<>What I <Serif>work with.</Serif></>} />
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <Reveal key={group.name} className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold">{group.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </Reveal>
            ))}
            <Reveal className="flex flex-col gap-3 sm:col-span-2">
              <h3 className="text-sm font-semibold">How I work</h3>
              <ul className="flex flex-col divide-y divide-line border-y border-line">
                {howIWork.map((h) => (
                  <li key={h.skill} className="grid gap-1 py-3 sm:grid-cols-[9rem_1fr] sm:gap-4">
                    <span className="font-medium">{h.skill}</span>
                    <span className="text-muted text-pretty">{h.proof}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section id="experience" className="grid gap-10 md:grid-cols-[1fr_2fr]" aria-labelledby="experience-title">
          <div id="experience-title" className="md:sticky md:top-24 md:self-start">
            <SectionHeading eyebrow="Experience" title={<>Where I&apos;ve <Serif>learned by doing.</Serif></>} />
          </div>
          <ol className="relative flex flex-col gap-10 border-l border-line pl-8">
            {experience.map((item) => (
              <li key={`${item.company}-${item.title}`} className="relative">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[39px] top-1.5 size-3.5 rounded-full border-2 ${
                    item.current ? "border-accent bg-accent" : "border-teal bg-paper"
                  }`}
                />
                <Reveal className="flex flex-col gap-2">
                  <p className="text-sm font-medium text-muted">
                    {item.period} · {item.company}
                  </p>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="max-w-2xl text-muted text-pretty">{item.desc}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>
      </Container>

      <ClosingCta
        title={
          <>
            Got a team I should meet? <Serif>Let&apos;s talk.</Serif>
          </>
        }
        primary={{ href: "/contact", label: "Get in touch" }}
        secondary={{ href: "/projects", label: "See my work" }}
      />
    </>
  );
}
