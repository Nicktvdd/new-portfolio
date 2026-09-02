"use client"

import AboutSVG from "@/components/aboutsvg";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "Web & Mobile Interfaces",
    items: [
      "TypeScript",
      "React",
      "React Native",
      "Expo",
      "Next.js",
      "Svelte",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    category: "Backend, Data & Cloud",
    items: [
      "Python",
      "FastAPI",
      "Django",
      "Node.js",
      "Kotlin",
      "PostgreSQL",
      "TimescaleDB",
      "Docker",
      "GCP",
      "AWS",
      "Linux",
    ],
  },
  {
    category: "Systems & Low-Level Rigor",
    items: [
      "C",
      "C++",
      "Unix / POSIX",
      "Memory Management",
    ],
  },
  {
    category: "DevOps, Quality & AI Workflows",
    items: [
      "GitHub Actions",
      "Ansible",
      "Git",
      "Jest",
      "Cypress",
      "Claude Code",
      "Local LLMs",
      "AI-Assisted Dev",
    ],
  },
];

const softSkills = [
  "Technical Leadership",
  "Mentorship & Teaching",
  "Clear Technical Communication",
  "Cross-Functional Collaboration",
  "First-Principles Problem Solving",
  "Product Ownership",
  "Adaptability & Autonomy",
];

const experience = [
  {
    title: "Lead Software Engineer",
    company: "Soil Scout",
    period: "2024 - 2026",
    desc: "Led end-to-end full-stack architecture for a global IoT telemetry platform. Scaled Django and React systems to ingest and index 6.5M+ hourly records in PostgreSQL/TimescaleDB on GCP. Automated multi-environment CI/CD deployment pipelines using GitHub Actions and Ansible.",
  },
  {
    title: "Software Engineering Student & Peer Mentor",
    company: "Hive Helsinki",
    period: "2022 - 2024",
    desc: "Rigorous, peer-to-peer curriculum focused on C/C++, Unix internals, algorithms, and memory management. Evaluated 200+ peer code submissions. Built a real-time multiplayer 3D Pong system using Three.js and Django microservices as a capstone.",
  },
  {
    title: "Full Stack Open",
    company: "University of Helsinki",
    period: "2023 - 2024",
    desc: "Advanced deep-dive into modern web development: React, Node.js, Express, TypeScript, automated testing (Jest, Cypress), and containerized CI/CD workflows.",
  },
  {
    title: "Bachelor of Sport Science",
    company: "HAN University",
    period: "2012 - 2016",
    desc: "Specialization in Sports Management: focused on team dynamics, pedagogy, large-group coaching, and cross-functional project execution.",
  },
];

const ScrollArrow = () => (
  <motion.svg
    initial={{ opacity: 0.2, y: 0 }}
    animate={{ opacity: 1, y: "10px" }}
    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    aria-hidden="true"
  >
    <path
      d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
      stroke="#000000"
      strokeWidth="1"
    />
    <path d="M12 6V14" stroke="#000000" strokeWidth="1" />
    <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1" />
  </motion.svg>
);

const TimelineItem = ({ side, title, company, period, desc }) => {
  const card = (
    <div className="w-1/3">
      <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
        {title}
      </div>
      <div className="p-3 text-sm italic">{desc}</div>
      <div className="p-3 text-slate-700 text-sm font-semibold">{period}</div>
      <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
        {company}
      </div>
    </div>
  );

  const line = (
    <div className="w-1/6 flex justify-center">
      <div className="w-1 h-full bg-gray-600 rounded relative">
        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-500 bg-white -left-2" />
      </div>
    </div>
  );

  return (
    <div className="flex justify-between min-h-48">
      {side === "left" ? card : <div className="w-1/3" />}
      {line}
      {side === "right" ? card : <div className="w-1/3" />}
    </div>
  );
};

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              Hey there! 👋 I&apos;m a Full-Stack Software Engineer based in Helsinki with a background in high-scale data systems, modern web apps, and low-level developer education.<br /><br />

              A quick snapshot of what I bring to the table:<br />
              • <strong>Proven Scale:</strong> Former Lead Software Engineer at Soil Scout, re-architecting data pipelines to process 6.5M+ telemetry records/hour with sub-second query performance.<br />
              • <strong>Full-Stack Breadth:</strong> Deep production experience across TypeScript, React, Python (FastAPI/Django), PostgreSQL, Docker, and cloud deployments.<br />
              • <strong>Continuous Builder:</strong> Active with modern AI tooling (Antigravity, Claude Code, local LLMs) and currently shipping an independent offline-first mobile companion app.<br />
              • <strong>Educator&apos;s Mindset:</strong> Hive Helsinki alumnus with a degree in Sport Science and teaching background. Bringing empathy, clear technical communication, and mentorship to every team.<br /><br />

              Whether optimizing real-time data pipelines, polishing a mobile interaction, or mentoring teammates, I focus on first principles and clear communication. If you&apos;re building something ambitious with great people, let&apos;s talk. ✨
            </p>
            <ScrollArrow />
          </div>
          {/* SKILLS */}
          <div className="flex flex-col gap-10 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>

            {/* TECHNICAL SKILLS BY CATEGORY */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.25 }}
              className="flex flex-col gap-6"
            >
              {skillCategories.map((group) => (
                <div key={group.category} className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {group.category}
                  </span>
                  <div className="flex gap-3 flex-wrap">
                    {group.items.map((skill) => (
                      <div
                        key={skill}
                        className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black border border-black transition-colors"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* LEADERSHIP & APPROACH (SOFT SKILLS) */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-2"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Approach & Leadership
              </span>
              <div className="flex gap-3 flex-wrap">
                {softSkills.map((skill) => (
                  <div
                    key={skill}
                    className="rounded p-2 text-sm cursor-pointer bg-white text-black hover:bg-black hover:text-white border border-black transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>

            <ScrollArrow />
          </div>
          {/* EXPERIENCE */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className="flex flex-col gap-8"
            >
              {experience.map((item, i) => (
                <TimelineItem
                  key={`${item.company}-${item.title}`}
                  side={i % 2 === 0 ? "left" : "right"}
                  {...item}
                />
              ))}
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <AboutSVG scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
