export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  desc: string;
  current?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    title: "Founder & Engineer",
    company: "Tiny Tarrasque",
    period: "2026 – now",
    current: true,
    desc: "Building an offline-first tabletop RPG companion app solo: product discovery, architecture, AI-assisted delivery, testing with real players and the path to a paid tier.",
  },
  {
    title: "Lead Software Engineer",
    company: "Soil Scout",
    period: "2024 – Jun 2026",
    desc: "Led end-to-end architecture for a global IoT telemetry platform. Scaled Django and React systems to ingest and index 6.5M+ records per hour in PostgreSQL/TimescaleDB on GCP, automated CI/CD with GitHub Actions and Ansible, and owned engineering hiring.",
  },
  {
    title: "Software Engineering Student & Peer Mentor",
    company: "Hive Helsinki",
    period: "2022 – 2024",
    desc: "Peer-to-peer curriculum in C/C++, Unix internals, algorithms and memory management. Evaluated 200+ peer code submissions; capstone was a real-time multiplayer 3D Pong.",
  },
  {
    title: "Full Stack Open",
    company: "University of Helsinki",
    period: "2023 – 2024",
    desc: "React, Node.js, Express, TypeScript, automated testing (Jest, Cypress) and containerised CI/CD.",
  },
  {
    title: "Bachelor of Sport Science",
    company: "HAN University",
    period: "2012 – 2016",
    desc: "Sports management: team dynamics, pedagogy, coaching large groups and running cross-functional projects.",
  },
];
