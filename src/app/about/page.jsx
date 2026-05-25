"use client"

import AboutSVG from "@/components/aboutsvg";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const skills = [
  "Python", "Django", "JavaScript", "TypeScript", "React", "Next.js",
  "Tailwind CSS", "Node.js", "PostgreSQL", "TimescaleDB", "Docker", "GCP",
  "GitHub Actions", "Ansible", "Git", "C", "C++", "Kotlin", "Jest", "Cypress",
  "Framer Motion",
];

const softSkills = [
  "Active Learning", "Independence", "Communication", "Public speaking", "Teamwork",
  "Problem-solving", "Critical thinking", "Adaptability", "Time management",
  "Leadership", "Empathy", "Creativity",
];

const experience = [
  {
    title: "Lead Software Engineer",
    company: "Soil Scout",
    period: "2024 - Present",
    desc: "Leading end-to-end delivery on our IoT telemetry platform. Built and scaled Django/React systems handling 6.5M+ records hourly on PostgreSQL/TimescaleDB and GCP. Owning CI/CD with GitHub Actions and Ansible.",
  },
  {
    title: "Software Engineering",
    company: "Hive Helsinki",
    period: "2022 - 2024",
    desc: "Project-based curriculum in C/C++ and low-level systems. Peer-reviewed 200+ submissions. Capstone: a real-time 3D multiplayer Pong (Three.js + Django microservices).",
  },
  {
    title: "Full Stack Open",
    company: "University of Helsinki",
    period: "2023 - 2024",
    desc: "MERN-stack curriculum: React, Node, MongoDB, TypeScript, Jest, Cypress, and CI/CD pipelines.",
  },
  {
    title: "Bachelor of Sport Science",
    company: "HAN University",
    period: "2012 - 2016",
    desc: "Sport Leisure Management — team dynamics, project coordination, and people leadership.",
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
              Hey there! 👋 I&apos;m a Full-Stack Software Engineer based in Helsinki, currently leading engineering at Soil Scout where we ingest 6.5M+ telemetry records every hour.<br /><br />
              My day-to-day mixes Python (Django), React, PostgreSQL/TimescaleDB, GCP, GitHub Actions, and Ansible, building the systems and pipelines that turn raw IoT data into something useful. I love the full-stack span: shaping a product idea on a whiteboard, building it end-to-end, and shipping it through CI/CD.<br /><br />
              Outside of work I run community events, teach programming to kids and entrepreneurs, and dig into whatever new tech catches my attention. Sharing knowledge is half the fun.<br /><br />
              My bigger dream is to point my tech skills at problems that matter, environmental and health tech especially. I genuinely believe software can make the world a better place, and I want to be part of that.<br /><br />
              At the end of the day my approach to coding is pretty simple: start from first principles, team up with great people, and never stop learning. Let&apos;s build something. ✨
            </p>
            <ScrollArrow />
          </div>
          {/* SKILLS */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {softSkills.map((skill) => (
                <div
                  key={skill}
                  className="rounded p-2 text-sm cursor-pointer bg-white text-black hover:bg-black hover:text-white"
                >
                  {skill}
                </div>
              ))}
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
