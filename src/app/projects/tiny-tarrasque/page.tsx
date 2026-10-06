import type { Metadata } from "next";
import ClosingCta from "@/components/ClosingCta";
import PhoneFrame from "@/components/PhoneFrame";
import Reveal from "@/components/Reveal";
import { BackLink, Container, Eyebrow, FactList, SectionHeading, Serif, StatusPill } from "@/components/ui";
import { alphaMailto } from "@/content/site";

export const metadata: Metadata = {
  title: "Tiny Tarrasque — case study",
  description:
    "How Nick van den Dungen is founding Tiny Tarrasque: an offline-first tabletop RPG character sheet app with a game-agnostic rules engine, rules stored as data, and an AI-native development workflow.",
  alternates: { canonical: "/projects/tiny-tarrasque" },
};

const facts = [
  { label: "Role", value: "Founder: product, design & engineering" },
  { label: "Platforms", value: "Android, iOS & web from one codebase" },
  { label: "Stack", value: "TypeScript, React Native, Expo, Zustand, Jest" },
  { label: "Status", value: "Friends alpha Oct 2026 · Public beta Dec 2026" },
];

const screens = [
  { src: "/projects/tiny-tarrasque/creator.webp", alt: "Character creator, step 1 of 7: choose your origin", caption: "A 7-step character creator" },
  { src: "/projects/tiny-tarrasque/sheet.webp", alt: "Live character sheet with combat stats and weapon attacks", caption: "The live sheet, built for the table" },
  { src: "/projects/tiny-tarrasque/roll.webp", alt: "Attack roll result with arithmetic breakdown", caption: "Tap any bonus to roll" },
  { src: "/projects/tiny-tarrasque/spells.webp", alt: "Spellcasting dashboard with spell slots and cantrips", caption: "Spells, slots and rests" },
];

const features = [
  { title: "Guided character creator", body: "Origin, class, background, abilities and gear in seven steps, with the rules explained where you need them." },
  { title: "A sheet that does the maths", body: "Change anything and every derived number updates instantly: armour class, attacks, saves, spell DCs." },
  { title: "Dice built in", body: "Tap a bonus to roll it, with advantage or disadvantage and a breakdown of exactly how the total was reached." },
  { title: "Spells, slots and rests", body: "Track slots and concentration, and let short and long rests restore the right things automatically." },
];

const pipeline = [
  { name: "Rule packs", note: "fifth-edition SRD 5.2.1 as validated JSON" },
  { name: "Rules engine", note: "character as a dependency graph" },
  { name: "Character store", note: "versioned format + migrations" },
  { name: "App UI", note: "React Native, offline-first" },
];

const decisions = [
  {
    title: "A rules engine that knows no game",
    body: "The engine evaluates a character as a directed acyclic graph of typed value expressions (constants, references, per-level tables, dice, sums and min/max). Game terms are banned from the engine package, with a grep check to catch any that slip in. That keeps the engine small and lets new rules arrive as data instead of code changes.",
  },
  {
    title: "Rules live in data files",
    body: "The fifth-edition SRD 5.2.1 lives in validated JSON rule packs. Adding a class means adding data, and homebrew will later drop in as one more pack you can switch off.",
  },
  {
    title: "Never lose a character",
    body: "Every save uses one versioned character format that passes through a migrations module, and old saves are protected by fixture tests. Imports are treated as untrusted: size caps, schema checks, and data that can never execute code.",
  },
  {
    title: "Designed for a phone on the table",
    body: "Offline by default, with keep-awake and big readable results. There are hard budgets too: a cold start under 2 s on a mid-range Android phone, a recompute under 16 ms, and three taps or fewer for any common action.",
  },
];

const aiPractices = [
  {
    title: "Context as code",
    body: "A root CLAUDE.md plus one per workspace encode the non-negotiables: no game terms in the engine, SRD-only content, and loading old saves must never break.",
  },
  {
    title: "Specialised sub-agents",
    body: "A rules-engine developer and a mobile developer agent, each scoped to its own package and conventions.",
  },
  {
    title: "Checks before anything ships",
    body: "A verify step (a TypeScript build plus 85 test files) must pass, CI runs on every PR, and a ship-check runs before any PR opens. One branch, one PR per task.",
  },
  {
    title: "Memory and planning",
    body: "Architecture decision records and a STATUS hand-off capped at 15 lines, so every session starts with the right context. Roadmaps and trade-offs get worked through with Claude in shared docs; the decisions, and the cut list, stay mine.",
  },
];

const stats = [
  { value: "6 weeks", label: "from first commit to a playable app" },
  { value: "110+", label: "commits" },
  { value: "85", label: "test files" },
  { value: "15 Dec", label: "public beta target" },
];

const roadmap = [
  { when: "Oct 2026", title: "Friends alpha", body: "Fighter and Wizard, over-the-air updates, and weekly releases driven by what testers struggle with." },
  { when: "Dec 2026", title: "Public beta", body: "All 12 classes, homebrew import v1, crash reporting, and builds in the app stores." },
  { when: "Mar 2027", title: "v1.0", body: "Accounts, cloud sync and automatic backup. Sync is the first reason to pay." },
  { when: "2027 →", title: "Grow", body: "Party and GM view, AI backstories inside the subscription, then a rule-pack SDK for publishers." },
];

export default function TinyTarrasquePage() {
  return (
    <>
      <Container className="flex flex-col gap-10 pb-16 pt-10 md:pt-14">
        <BackLink href="/projects">All projects</BackLink>
        <div className="flex max-w-3xl flex-col gap-5">
          <Eyebrow>Case study · Founder</Eyebrow>
          <h1 className="font-display text-5xl leading-[1.02] text-balance md:text-7xl">
            Tiny Tarrasque.
            <br />
            <Serif>A character sheet that keeps up with the table.</Serif>
          </h1>
          <StatusPill>Friends alpha: October 2026</StatusPill>
        </div>
        <FactList facts={facts} />
      </Container>

      <section className="overflow-hidden bg-gradient-to-b from-accent-soft/70 to-transparent py-14">
        <div
          role="region"
          aria-label="App screenshots"
          tabIndex={0}
          className="mx-auto flex max-w-6xl snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 [mask-image:linear-gradient(to_right,transparent,black_20px,black_calc(100%-20px),transparent)] sm:px-8 lg:justify-center lg:overflow-visible lg:[mask-image:none]"
        >
          {screens.map((s, i) => (
            <figure key={s.src} className="flex w-52 shrink-0 snap-center flex-col items-center gap-4 md:w-56">
              <PhoneFrame src={s.src} alt={s.alt} priority={i < 2} className={`w-full ${i % 2 ? "lg:translate-y-8" : ""}`} />
              <figcaption className={`text-center text-sm text-muted ${i % 2 ? "lg:translate-y-8" : ""}`}>
                {s.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        <p aria-hidden="true" className="mt-2 text-center text-xs font-medium text-muted lg:hidden">
          Swipe for more screens →
        </p>
      </section>

      <Container className="flex flex-col gap-24 pt-16">
        <section className="grid gap-10 md:grid-cols-[1fr_1.3fr]">
          <SectionHeading eyebrow="The problem" title={<>Built for the desk, <Serif>used at the table.</Serif></>} />
          <div className="flex flex-col gap-4 text-lg text-muted text-pretty">
            <p>
              Most character sheet apps are designed for someone at a desk. At a real table the phone lies next to your
              dice for four hours: it has to stay awake, work offline, show the number you need at a glance, and never,
              ever lose a character.
            </p>
            <p>
              And every group plays differently, with house rules, new books and homebrew. Hard-coding one rulebook
              into an app doesn&apos;t scale. So I built the rules as data and the engine to run them.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-10">
          <SectionHeading eyebrow="What it does" title={<>What it does <Serif>at the table.</Serif></>} />
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <Reveal key={f.title}>
                <div className="flex h-full flex-col gap-2 rounded-lg border border-line bg-card p-6">
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="text-muted text-pretty">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Architecture"
            title={<>Four decisions <Serif>that keep later features small.</Serif></>}
            intro="The engine doesn't know which game it's running. Everything specific to a game comes in as data."
          />
          <Reveal>
            <ol className="grid items-stretch gap-3 md:grid-cols-4" aria-label="Data flow">
              {pipeline.map((step, i) => (
                <li key={step.name} className="relative flex flex-col gap-1 rounded-lg border border-line bg-card p-5">
                  <span className="font-display text-xl italic text-teal-ink">0{i + 1}</span>
                  <span className="font-semibold">{step.name}</span>
                  <span className="text-sm text-muted">{step.note}</span>
                  {i < pipeline.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-3 left-1/2 z-10 flex size-6 -translate-x-1/2 items-center justify-center rounded-full bg-teal text-xs text-on-teal md:-right-3 md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0"
                    >
                      <span className="md:hidden">↓</span>
                      <span className="hidden md:inline">→</span>
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {decisions.map((d) => (
              <Reveal key={d.title}>
                <div className="flex h-full flex-col gap-2 rounded-lg bg-card p-6 ring-1 ring-line md:p-8">
                  <h3 className="text-lg font-semibold">{d.title}</h3>
                  <p className="text-muted text-pretty">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="-mx-5 flex flex-col gap-10 bg-slab px-5 py-16 text-on-slab sm:mx-0 sm:rounded-lg sm:ring-1 sm:ring-line sm:px-10 md:px-14">
          <div className="flex max-w-2xl flex-col gap-3">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-accent-on-slab">How it&apos;s built</p>
            <h2 className="font-display text-4xl leading-[1.05] text-balance md:text-5xl">
              One person, <Serif>a team of agents,</Serif> and the process that keeps them honest.
            </h2>
          </div>
          <dl className="grid grid-cols-2 gap-6 border-y border-on-slab/15 py-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <dt className="order-2 text-sm text-on-slab/60">{s.label}</dt>
                <dd className="order-1 text-3xl font-semibold tracking-tight md:text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>
          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
            {aiPractices.map((p) => (
              <div key={p.title} className="flex flex-col gap-2">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-on-slab/70 text-pretty">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Roadmap & business"
            title={<>Each phase ends with <Serif>a real player test.</Serif></>}
            intro="Each milestone has a usability gate tested with a real player. For the beta, a stranger installs the app from the store listing, builds a character and plays levels 1–5 without help. If a gate fails, the next phase starts by fixing it, and dates only move by cutting scope."
          />
          <ol className="grid gap-4 md:grid-cols-4">
            {roadmap.map((r, i) => (
              <li key={r.when} className="border-t-2 border-accent pt-4">
                <Reveal delay={i * 0.05} className="flex flex-col gap-2">
                  <span className="font-display text-2xl italic text-accent-ink">{r.when}</span>
                  <h3 className="font-semibold">{r.title}</h3>
                  <p className="text-sm text-muted text-pretty">{r.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-10 md:grid-cols-[1fr_1.3fr]">
          <SectionHeading eyebrow="What this shows" title={<>If you&apos;re hiring <Serif>a CTO or founding engineer.</Serif></>} />
          <div className="flex flex-col gap-5">
            <p className="text-lg text-muted text-pretty">
              Tiny Tarrasque is a small product with serious foundations. It&apos;s how I&apos;d approach a
              startup&apos;s first product: find the real problem, make the few decisions that keep everything else
              cheap, and ship in small steps that real people test.
            </p>
          </div>
        </section>
      </Container>

      <ClosingCta
        title={
          <>
            Want to test it <Serif>at your table?</Serif>
          </>
        }
        body="The friends alpha starts in October, Android first. Drop me a line and I'll send you a build."
        primary={{ href: alphaMailto, label: "Join the alpha" }}
        secondary={{ href: "/contact", label: "Other questions" }}
      />
    </>
  );
}
