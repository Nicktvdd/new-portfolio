import Reveal from "./Reveal";
import { Container, SectionHeading, Serif } from "./ui";

const principles = [
  {
    title: "Agents with guardrails",
    body: "Every workspace carries its own CLAUDE.md and AGENTS.md with hard rules, specialised sub-agents own the rules engine and the mobile app, and a verify gate (typecheck plus the full test suite) has to pass before anything counts as done.",
  },
  {
    title: "Small, reviewable steps",
    body: "One branch and one PR per task, CI on every PR, decisions recorded as ADRs and a short hand-off note between sessions. AI writes a lot of the code; I own the architecture, the review and the merge.",
  },
  {
    title: "A team's pace, solo",
    body: "In six weeks: a game-agnostic rules engine, two rule systems shipped as data and a cross-platform app, in 110+ commits and 85 test files.",
  },
  {
    title: "AI in the product, responsibly",
    body: "The planned AI backstory feature runs through my own server so no API key ships in the app, sits behind a fair-use cap, and never replaces the offline generator that stays the default.",
  },
];

export default function AiSection() {
  return (
    <section className="py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="How I build with AI"
          title={
            <>
              AI multiplies output. <Serif>Judgment decides where it goes.</Serif>
            </>
          }
          intro="I use AI agents every day, as leverage, not as autopilot. This is the workflow behind Tiny Tarrasque, and it's the one I'd bring to your team."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-card p-6 md:p-8">
                <span className="font-display text-3xl italic text-accent-ink">0{i + 1}</span>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-muted text-pretty">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
