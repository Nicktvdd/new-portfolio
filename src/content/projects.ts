export type FeaturedProject = {
  slug: string;
  title: string;
  label: string;
  summary: string;
  outcome: string;
  tags: string[];
  href?: string;
  external?: boolean;
  cta?: string;
  image?: { src: string; alt: string; phone?: boolean };
  stat?: { value: string; caption: string };
  /** A short handwritten margin note. */
  note?: string;
};

export type ArchiveProject = {
  title: string;
  context: string;
  summary: string;
  stack: string;
  href: string;
};

export const featured: FeaturedProject[] = [
  {
    slug: "tiny-tarrasque",
    title: "Tiny Tarrasque",
    label: "Founder · Jun 2026 – now",
    summary:
      "An offline-first character sheet for tabletop RPG groups who play around a real table. I'm building it on my own, with AI agents.",
    outcome: "Friends alpha Oct 2026 · beta Dec 2026",
    tags: ["TypeScript", "React Native", "Expo", "AI agents"],
    href: "/projects/tiny-tarrasque",
    cta: "Read the case study",
    note: "85 test files before anything counts as done",
    image: { src: "/projects/tiny-tarrasque/sheet.webp", alt: "Tiny Tarrasque character sheet on a phone", phone: true },
  },
  {
    slug: "soil-scout",
    title: "Soil Scout",
    label: "Work · 2024–2026",
    summary:
      "I led development of The Hub, the dashboard for Soil Scout's buried soil sensors, and built our hiring pipeline from scratch.",
    outcome: "Full Stack Engineer, promoted to Lead Full Stack Engineer in 2025",
    tags: ["Django", "React", "TimescaleDB", "GCP"],
    href: "/projects/soil-scout",
    cta: "Read the story",
    note: "sensors in the ground, data on a screen",
    stat: { value: "6.5M+", caption: "sensor uploads an hour" },
  },
  {
    slug: "transcendence",
    title: "Transcendence",
    label: "Hive Helsinki · team project",
    summary:
      "Real-time 3D Pong in the browser, with accounts and tournaments. I led the front end and helped across the rest of the stack.",
    outcome: "Django REST, a socket.io game server, fully dockerised",
    tags: ["Three.js", "Django REST", "socket.io", "Docker"],
    href: "https://github.com/Nicktvdd/transcendence",
    external: true,
    cta: "View on GitHub",
    image: { src: "/projects/pong.webp", alt: "Transcendence: a 3D Pong table seen from above, two paddles and a ball" },
  },
];

export const archive: ArchiveProject[] = [
  {
    title: "MiniShell",
    context: "Hive Helsinki",
    summary: "A Bash-like shell from scratch: execution, pipes, redirections and signal handling.",
    stack: "C · POSIX",
    href: "https://github.com/Nicktvdd/MiniShell",
  },
  {
    title: "Procedural character API",
    context: "Side project",
    summary: "A type-safe REST API that procedurally generates tabletop RPG characters.",
    stack: "Kotlin",
    href: "https://github.com/Nicktvdd/DnD-Api",
  },
  {
    title: "TechTec",
    context: "Freelance",
    summary: "Marketing site for an HVAC education company that drives course applications.",
    stack: "WordPress · PHP",
    href: "https://techtec.nl/",
  },
  {
    title: "This portfolio",
    context: "Open source",
    summary: "Static-exported site with page transitions, dark mode and build-time OG images.",
    stack: "Next.js · TypeScript · Tailwind",
    href: "https://github.com/Nicktvdd/new-portfolio",
  },
];
