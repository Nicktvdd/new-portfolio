import type { Metadata } from "next";
import AboutSVG from "@/components/AboutSVG";
import Reveal from "@/components/Reveal";
import { ButtonLink, Container, Eyebrow, Serif, Tag } from "@/components/ui";
import { experience } from "@/content/experience";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Nick van den Dungen: founder-minded full-stack engineer in Helsinki, founder of Tiny Tarrasque and former Lead Software Engineer at Soil Scout.",
  alternates: { canonical: "/about" },
};

const skillGroups = [
  {
    name: "Product engineering",
    items: ["TypeScript", "React", "React Native", "Expo", "Next.js", "Svelte", "Tailwind CSS", "Motion"],
  },
  {
    name: "Backend, data & cloud",
    items: ["Python", "Django", "FastAPI", "Node.js", "Kotlin", "PostgreSQL", "TimescaleDB", "Docker", "GCP", "AWS"],
  },
  {
    name: "AI-native workflow",
    items: ["Claude Code", "Agentic workflows", "Sub-agents & hand-offs", "Context engineering", "LLM integration", "Local LLMs"],
  },
  {
    name: "Quality & delivery",
    items: ["GitHub Actions", "Ansible", "CI/CD", "Jest", "Cypress", "ADRs"],
  },
  {
    name: "Foundations",
    items: ["C", "C++", "Unix / POSIX", "Linux", "Memory management", "Algorithms"],
  },
];

const approach = [
  "Technical leadership",
  "Hiring",
  "Mentoring & teaching",
  "Product ownership",
  "First-principles thinking",
  "Clear communication",
];

export default function AboutPage() {
  return (
    <Container className="grid gap-16 pt-12 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_380px]">
      <div className="flex flex-col gap-24">
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>About</Eyebrow>
            <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
              Hey there! <Serif>I&apos;m Nick.</Serif> 👋
            </h1>
          </div>
          <div className="flex max-w-2xl flex-col gap-5 text-lg leading-relaxed text-pretty">
            <p>
              I&apos;m a full-stack engineer in Helsinki who loves turning fuzzy ideas into products people actually use.
            </p>
            <p>
              For the last two years I was Lead Software Engineer at Soil Scout, where I got to own the platform end to
              end: re-architecting data pipelines to handle 6.5M+ telemetry records an hour with sub-second queries,
              automating our deployments, and helping hire and grow the team. In June the company moved on to a
              different product and my role ended, so I used the moment to build something of my own.
            </p>
            <p>
              That something is <strong>Tiny Tarrasque</strong>, a character sheet app for tabletop RPG groups who play
              around a real table. I&apos;m doing all of it: talking to players, designing a rules engine, building the
              app and running playtests with friends. It&apos;s also where I&apos;ve learned to build with AI agents
              properly, with guardrails, tests and small reviewable steps.
            </p>
            <p>
              Before software I studied Sport Science and spent years coaching and teaching, and I still teach
              programming to kids and entrepreneurs. That shows up in how I work: clear communication, patience, and a
              habit of making the people around me better.
            </p>
            <p>
              Now I&apos;m looking for my next team, ideally as a CTO or founding engineer, or as a senior full-stack
              engineer somewhere ambitious. If you&apos;re building something with great people, let&apos;s talk. ✨
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact">Get in touch</ButtonLink>
            <ButtonLink href="/projects" variant="secondary">
              See my work
            </ButtonLink>
          </div>
        </section>

        <section className="flex flex-col gap-10" aria-labelledby="skills">
          <Reveal className="flex flex-col gap-3">
            <Eyebrow>Skills</Eyebrow>
            <h2 id="skills" className="text-3xl font-semibold tracking-tight md:text-4xl">
              Language-agnostic, <Serif>fundamentals-first.</Serif>
            </h2>
          </Reveal>
          <div className="flex flex-col gap-7">
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
            <Reveal className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold">Approach & leadership</h3>
              <div className="flex flex-wrap gap-2">
                {approach.map((item) => (
                  <span key={item} className="rounded-full bg-ink px-3 py-1 text-xs font-medium text-paper">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="experience" className="flex flex-col gap-10" aria-labelledby="experience-title">
          <Reveal className="flex flex-col gap-3">
            <Eyebrow>Experience</Eyebrow>
            <h2 id="experience-title" className="text-3xl font-semibold tracking-tight md:text-4xl">
              Where I&apos;ve <Serif>learned by doing.</Serif>
            </h2>
          </Reveal>
          <ol className="relative flex flex-col gap-10 border-l border-line pl-8">
            {experience.map((item) => (
              <li key={`${item.company}-${item.title}`} className="relative">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[39px] top-1.5 size-3.5 rounded-full border-2 ${
                    item.current ? "border-accent bg-accent" : "border-ink bg-paper"
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
      </div>

      <aside className="hidden lg:block">
        <div className="sticky top-28 aspect-square w-full opacity-90">
          <AboutSVG />
        </div>
      </aside>
    </Container>
  );
}
