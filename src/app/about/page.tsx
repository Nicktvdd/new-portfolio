import type { Metadata } from "next";
import Image from "next/image";
import AbilityScores, { type Score } from "@/components/AbilityScores";
import ClosingCta from "@/components/ClosingCta";
import D20 from "@/components/D20";
import Reveal from "@/components/Reveal";
import { Container, HandNote, SectionHeading, Tag } from "@/components/ui";
import { experience } from "@/content/experience";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Nick van den Dungen: full-stack engineer in Helsinki and former wilderness guide, founder of Tiny Tarrasque and former Lead Full Stack Engineer at Soil Scout.",
  alternates: { canonical: "/about" },
};

// The character sheet. Every label pairs the tabletop term with plain English, so it reads for non-players too.
const fields = [
  { label: "Class", plain: "what I do", value: "Full-stack engineer" },
  { label: "Background", plain: "what I did before", value: "Wilderness guide" },
  { label: "Home base", value: "Helsinki, or remote" },
  { label: "Languages", value: "Dutch, English, Finnish (A2)" },
  {
    label: "Alignment",
    plain: "moral compass",
    value: "Neutral good",
    note: "Does the right thing, pragmatically, without needing a rulebook.",
  },
  {
    label: "Status",
    value: "Open to new roles",
    note: "CTO, founding engineer or full-stack. Available right away, no visa needed.",
    highlight: true,
  },
];

const scores: Score[] = [
  { ability: "Strength", value: "6.5M+", note: "sensor uploads an hour, kept running" },
  { ability: "Dexterity", value: "Full", note: "stack: web, mobile, backend, infra" },
  { ability: "Constitution", value: "BSc", note: "sport science, and still training" },
  { ability: "Intelligence", value: "85", note: "test files guarding one solo app" },
  { ability: "Wisdom", value: "200+", note: "code reviews given at Hive" },
  { ability: "Charisma", value: "10+", note: "years teaching and guiding groups" },
];

const traits = [
  {
    name: "Ownership",
    proof: "Six months into Soil Scout I owned the whole software product, working with sales and support to find the pain points.",
  },
  { name: "Strategy", proof: "You set a goal, I take care of how we get there." },
  {
    name: "Communication",
    proof: "I wrote a company newsletter that explained the software side to everyone, technical or not.",
  },
  {
    name: "Leadership",
    proof: "Built Soil Scout's hiring pipeline from scratch, hired a junior developer and mentored him for six months.",
  },
  { name: "Transparency", proof: "You'll always know what's going on, in the code and with me." },
  { name: "Urgency", proof: "When a company is in a critical phase, I move fast." },
  { name: "Keeps his own stats up", proof: "Gym, healthy food, meditation, skateboarding." },
];

const skillGroups = [
  { name: "Product", items: ["TypeScript", "React", "React Native", "Expo", "Next.js", "Svelte", "Tailwind CSS", "Zustand"] },
  {
    name: "Backend & data",
    items: ["Python", "Django", "Django REST", "Node.js", "REST API design", "WebSockets", "PostgreSQL", "TimescaleDB", "Supabase", "Kotlin"],
  },
  {
    name: "Infrastructure & quality",
    items: ["GCP", "Docker", "Terraform", "Linux", "GitHub Actions", "Ansible", "Jest", "Cypress", "Playwright"],
  },
  { name: "Working with AI", items: ["Claude Code", "Codex", "Cursor", "MCP servers", "Agentic workflows", "LLM evals"] },
  { name: "Foundations", items: ["C", "C++", "Unix / POSIX"] },
];

const inventory = ["Reading: Dungeon Crawler Carl", "On repeat: Sunborn", "A skateboard, a gym bag, too many dice"];

const sheetLabel = "font-mono text-[0.7rem] uppercase tracking-[0.08em] text-muted";
const sheetHeading = "font-mono text-xs font-semibold uppercase tracking-[0.1em]";
const link = "w-fit font-medium underline decoration-accent decoration-2 underline-offset-4 hover:text-teal-ink";

export default function AboutPage() {
  return (
    <>
      <Container className="grid items-center gap-12 pt-10 md:pt-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
        <section className="flex flex-col gap-6">
          <h1 className="font-display text-6xl leading-none md:text-7xl">
            Hey there! <span aria-hidden="true">👋</span>
          </h1>
          <div className="flex max-w-2xl flex-col gap-4 text-lg leading-relaxed text-pretty">
            <p>
              I&apos;m Nick, a Dutch full-stack engineer living in Helsinki with my Finnish wife Sonja. We&apos;re here
              for the nature and the people, and we love going on adventures together.
            </p>
            <p>
              I took the scenic route into software. I studied sport science, booked bands for music venues, and spent
              years as a wilderness guide and instructor in Lapland. Then I learned to code at Hive Helsinki.
            </p>
            <p>
              At Soil Scout I went from Full Stack Engineer to Lead Full Stack Engineer, leading development of The Hub,
              the dashboard for our buried soil sensors. In June the company moved on to a different product and my role
              ended, so now I&apos;m building something of my own: Tiny Tarrasque, an app for people who play tabletop
              role-playing games together.
            </p>
            <p>
              Health still runs my day: gym, good food, meditation, and lately skateboarding again. Now I&apos;m looking
              for my next team, ideally as a CTO or founding engineer. If you&apos;re building something with great
              people, let&apos;s talk. ✨
            </p>
          </div>
        </section>

        <figure className="relative mx-auto w-64 rotate-[2.5deg] bg-card p-3 pb-12 shadow-lg shadow-black/15 sm:w-80">
          <Image
            src="/about/frozen-beard.webp"
            alt="Nick with a beard full of frost on a snowy fell in Lapland"
            width={800}
            height={1067}
            sizes="(min-width: 640px) 296px, 232px"
            className="aspect-[5/6] w-full object-cover"
          />
          <figcaption className="absolute inset-x-0 bottom-2.5 text-center font-hand text-2xl leading-tight">
            top of a fell in Lapland, after a ski hike
          </figcaption>
        </figure>
      </Container>

      <Container className="pt-14">
        <div className="flex max-w-3xl gap-4 rounded-lg bg-olive-soft p-5 md:p-6">
          <D20 className="mt-0.5 size-8 shrink-0 text-teal-ink" />
          <p className="text-pretty">
            <strong>Why does the rest of this page look like a game?</strong> It&apos;s styled like a character sheet
            from tabletop role-playing games such as Dungeons &amp; Dragons. Players use one to keep track of who their
            hero is and what they&apos;re good at. This one is mine, with real numbers and no dice rolling involved.
          </p>
        </div>
      </Container>

      <Container className="pt-8">
        <section
          aria-labelledby="sheet-name"
          className="flex flex-col gap-10 rounded-lg border-2 border-ink bg-card p-5 sm:p-8 md:p-10"
        >
          <div className="flex flex-wrap items-end justify-between gap-3 border-b-[1.5px] border-ink pb-3">
            <div className="flex flex-col gap-1">
              <h2 id="sheet-name" className="font-display text-4xl leading-none md:text-5xl">
                {site.name}
              </h2>
              <span className={sheetLabel}>Character name</span>
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-accent-ink">Character sheet · page 1</span>
          </div>

          <dl className="grid gap-x-7 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {fields.map((f) => (
              <div key={f.label} className="flex flex-col gap-1 border-b border-line pb-2">
                {/* Like a paper sheet: the value sits on the line, the label underneath it. */}
                <dt className={`${sheetLabel} order-2`}>
                  {f.label}
                  {f.plain && <> · {f.plain}</>}
                </dt>
                <dd className={`order-1 text-lg font-medium ${f.highlight ? "text-teal-ink" : ""}`}>{f.value}</dd>
                {f.note && <dd className="order-3 text-sm text-muted text-pretty">{f.note}</dd>}
              </div>
            ))}
          </dl>

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h3 className={sheetHeading}>Ability scores</h3>
              <HandNote className="text-xl">in the game you roll these with dice; mine are real numbers</HandNote>
            </div>
            <AbilityScores scores={scores} />
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div className="flex flex-col gap-3">
              <h3 className={sheetHeading}>Features &amp; traits · how I work</h3>
              <ul className="flex flex-col gap-2.5">
                {traits.map((t) => (
                  <li key={t.name} className="text-muted text-pretty">
                    <strong className="font-semibold text-ink">{t.name}.</strong> {t.proof}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h3 className={sheetHeading}>Proficiencies · skills</h3>
                {skillGroups.map((group) => (
                  <div key={group.name} className="flex flex-col gap-2">
                    <p className="text-sm font-semibold">{group.name}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className={sheetHeading}>Inventory · off the clock</h3>
                <ul className="flex flex-col gap-1 text-muted">
                  {inventory.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-5">
            <a className={link} href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className={link} href={site.cv}>
              Download CV (PDF)
            </a>
          </div>
        </section>
      </Container>

      <Container className="grid gap-6 pt-8 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="h-full">
          <div className="flex h-full flex-col items-center gap-5 rounded-lg border-2 border-ink bg-card p-6 text-center sm:flex-row sm:text-left">
            <Image
              src="/about/remo.webp"
              alt="Illustration of Remo, a smiling brown dog sitting in the grass"
              width={700}
              height={700}
              sizes="176px"
              className="size-44 shrink-0 rounded-lg bg-[#fffdf7] object-contain"
            />
            <div className="flex flex-col gap-1.5">
              <span className={sheetLabel}>Animal companion</span>
              <p className="font-display text-4xl leading-none">Remo</p>
              <p className="text-muted">Senior fur stack engineer. Reviews every walk, approves every snack.</p>
              <p className="text-xs text-muted">
                Illustration by{" "}
                <a className="underline underline-offset-2 hover:text-ink" href="https://www.lauraarroz.com/" target="_blank" rel="noopener noreferrer">
                  Laura Arroz
                </a>
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal className="h-full">
          <figure className="relative h-full min-h-64 overflow-hidden rounded-lg">
            <Image
              src="/about/glacier.webp"
              alt="Nick and his wife Sonja on a frozen landscape in front of a glacier"
              fill
              sizes="(min-width: 768px) 600px, 100vw"
              className="object-cover"
            />
            <figcaption className="absolute bottom-3 left-3 rounded bg-card/90 px-3 py-1 font-hand text-xl text-ink">
              adventuring with Sonja
            </figcaption>
          </figure>
        </Reveal>
      </Container>

      <Container className="pt-24">
        <section id="experience" className="grid gap-10 md:grid-cols-[1fr_2fr]" aria-labelledby="experience-title">
          <div id="experience-title" className="md:sticky md:top-24 md:self-start">
            <SectionHeading eyebrow="Experience · the campaign log" title="Where I've learned by doing." />
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
        title="Looking for someone to join your team?"
        body="Tell me what you're building. Grab a tea, roll some dice, build something good."
        primary={{ href: "/contact", label: "Get in touch" }}
        secondary={{ href: "/projects", label: "See my work" }}
      />
    </>
  );
}
