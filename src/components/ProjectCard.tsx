import Image from "next/image";
import type { FeaturedProject } from "@/content/projects";
import PhoneFrame from "./PhoneFrame";
import { ButtonLink, Tag } from "./ui";

function Visual({ project }: { project: FeaturedProject }) {
  if (project.image?.phone) {
    return <PhoneFrame src={project.image.src} alt={project.image.alt} className="w-44 md:w-52" />;
  }
  if (project.image) {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-xl shadow-black/10">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(min-width: 768px) 480px, 100vw"
          className="object-cover"
        />
      </div>
    );
  }
  if (project.stat) {
    return (
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="text-6xl font-semibold leading-none tracking-tight md:text-7xl">{project.stat.value}</span>
        <span className="max-w-[14rem] font-display text-xl italic text-muted">{project.stat.caption}</span>
      </div>
    );
  }
  return null;
}

export default function ProjectCard({
  project,
  flip = false,
  headingLevel = 3,
}: {
  project: FeaturedProject;
  flip?: boolean;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <article className="grid grid-cols-1 overflow-hidden rounded-3xl border border-line bg-card md:grid-cols-2">
      <div className={`flex min-w-0 flex-col gap-5 p-6 sm:p-7 md:p-10 ${flip ? "md:order-2" : ""}`}>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-ink">{project.label}</p>
        <Heading className="text-3xl font-semibold tracking-tight">{project.title}</Heading>
        <p className="text-muted text-pretty">{project.summary}</p>
        <p className="flex gap-2 text-sm font-medium">
          <span className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          {project.outcome}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        {project.href && (
          <div className="pt-2">
            <ButtonLink href={project.href} variant="secondary">
              {project.cta} <span aria-hidden="true">{project.external ? "↗" : "→"}</span>
            </ButtonLink>
          </div>
        )}
      </div>
      <div
        className={`flex min-h-56 min-w-0 items-center justify-center bg-gradient-to-br from-accent-soft to-paper p-6 sm:p-8 md:min-h-64 md:p-10 ${
          flip ? "md:order-1" : ""
        }`}
      >
        <Visual project={project} />
      </div>
    </article>
  );
}
