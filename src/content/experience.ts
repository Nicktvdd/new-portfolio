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
    period: "Jun 2026 – now",
    current: true,
    desc: "Building an offline-first tabletop RPG companion app solo: product discovery, architecture, AI-assisted delivery, testing with real players and the path to a paid tier.",
  },
  {
    title: "Full Stack → Lead Full Stack Engineer",
    company: "Soil Scout",
    period: "Oct 2024 – Jun 2026",
    desc: "Joined as a Full Stack Engineer and was promoted to lead in October 2025. Led development of The Hub, Soil Scout's sensor dashboard (Django + React). Looked after the PostgreSQL/TimescaleDB infrastructure on GCP behind 6.5M+ sensor uploads an hour, kept deployments automated with GitHub Actions and Ansible, and built the hiring pipeline from scratch.",
  },
  {
    title: "Software Engineering Student & Peer Mentor",
    company: "Hive Helsinki",
    period: "2022 – 2024",
    desc: "Peer-to-peer curriculum in C/C++, Unix internals, algorithms and memory management. Evaluated 200+ peer code submissions; our team capstone was a real-time multiplayer 3D Pong, where I led the front end. Also on the student board (Hexagon ry) as head of internal relations, organising community events.",
  },
  {
    title: "Full Stack Open",
    company: "University of Helsinki",
    period: "2023 – 2024",
    desc: "React, Node.js, Express, TypeScript, automated testing (Jest, Cypress) and containerised CI/CD.",
  },
  {
    title: "Coach, guide & teacher",
    company: "Netherlands, Sweden & Finland",
    period: "2013 – 2024",
    desc: "Bootcamp instructor who trained other instructors (during my degree), snowboard instructor, activity instructor and wilderness guide in Finnish and Swedish Lapland, after-school instructor, and a part-time Dutch teacher for young kids. Years of keeping groups safe, engaged and learning.",
  },
  {
    title: "Bachelor of Sport Science",
    company: "HAN University of Applied Sciences",
    period: "2012 – 2016",
    desc: "Sport and leisure management: team dynamics, project coordination and leading groups.",
  },
];
