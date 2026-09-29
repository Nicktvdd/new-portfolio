import Reveal from "./Reveal";
import { Container, SectionHeading, Serif } from "./ui";

const principles = [
  {
    title: "Agents with guardrails",
    body: "Written rules for every part of the codebase, and nothing is done until the types and tests pass.",
  },
  {
    title: "Small, reviewable steps",
    body: "One task, one pull request, CI on each. The agents write code; I own the design and the review.",
  },
  {
    title: "Six weeks, solo",
    body: "From first commit to a playable app, with 85 test files along the way.",
  },
  {
    title: "AI in the product, later",
    body: "An optional AI backstory for the paid tier, running through my own server.",
  },
];

export default function AiSection() {
  return (
    <section className="py-16 md:py-20">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Workflow"
          title={
            <>
              How I build <Serif>with AI agents.</Serif>
            </>
          }
          intro="The setup behind Tiny Tarrasque, and roughly what I'd bring to a team."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-card p-6 md:p-8">
                <span className="font-display text-2xl italic text-accent-ink">0{i + 1}</span>
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
