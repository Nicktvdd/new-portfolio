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
    label: "Founder · 2026 – now",
    summary:
      "An offline-first character sheet app for in-person tabletop RPG groups. A game-agnostic rules engine, rule systems shipped as data, and a UI built for a phone lying on the table.",
    outcome: "Friends alpha Oct 2026 · Public beta Dec 2026",
    tags: ["TypeScript", "React Native", "Expo", "Zustand", "Jest", "AI-native workflow"],
    href: "/projects/tiny-tarrasque",
    cta: "Read the case study",
    image: { src: "/projects/tiny-tarrasque/sheet.webp", alt: "Tiny Tarrasque character sheet on a phone", phone: true },
  },
  {
    slug: "soil-scout",
    title: "Soil Scout",
    label: "Lead Software Engineer · 2024 – 2026",
    summary:
      "Led engineering for a global soil-sensing IoT platform. Scaled the Django + React stack to ingest and index telemetry on PostgreSQL/TimescaleDB and GCP, automated multi-environment CI/CD, and ran engineering hiring.",
    outcome: "Sub-second queries over high-volume time-series data",
    tags: ["Python", "Django", "React", "TimescaleDB", "GCP", "GitHub Actions", "Ansible"],
    stat: { value: "6.5M+", caption: "telemetry records ingested per hour" },
  },
  {
    slug: "transcendence",
    title: "Transcendence",
    label: "Hive Helsinki capstone",
    summary:
      "Real-time multiplayer 3D Pong in Three.js, with user authentication and Django + PostgreSQL microservices behind it.",
    outcome: "Real-time 3D multiplayer in the browser",
    tags: ["Three.js", "JavaScript", "Django", "PostgreSQL"],
    href: "https://github.com/Nicktvdd/transcendence",
    external: true,
    cta: "View on GitHub",
    image: { src: "/projects/pong.webp", alt: "Transcendence 3D Pong game screen" },
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
    stack: "Next.js 16 · TypeScript · Tailwind 4 · Motion",
    href: "https://github.com/Nicktvdd/new-portfolio",
  },
];
