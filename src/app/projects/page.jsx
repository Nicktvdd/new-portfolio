"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

// TODO: swap placeholder images for real screenshots of Portfolio and Transcendence.
const items = [
  {
    id: 1,
    color: "from-teal-300 to-orange-300",
    title: "Portfolio Website",
    desc: "A fast, responsive portfolio site built with Next.js (App Router), Framer Motion, and Tailwind CSS. Optimized for load performance, clean asset handling, and SEO. Live at nickvandendungen.com.",
    img: "/portfolio.png",
    link: "https://github.com/Nicktvdd/new-portfolio",
  },
  {
    id: 2,
    color: "from-orange-300 to-pink-300",
    title: "Transcendence (Pong)",
    desc: "Hive Helsinki capstone. A real-time 3D multiplayer Pong (Three.js + Vanilla JS) with user authentication and back-end microservices in Django and PostgreSQL.",
    img: "/pong.png",
    link: "https://github.com/Nicktvdd/transcendence",
  },
  {
    id: 3,
    color: "from-pink-300 to-emerald-300",
    title: "DnD Procedural Generator",
    desc: "A type-safe REST API in Kotlin using custom algorithms for procedural Dungeons & Dragons character generation. Clean separation of data layer and business logic.",
    img: "/centaur-svgrepo-com.svg",
    link: "https://github.com/Nicktvdd/DnD-Api",
  },
  {
    id: 4,
    color: "from-emerald-300 to-cyan-300",
    title: "MiniShell",
    desc: "A Bash-like shell environment written from scratch in C. Implements command execution, pipes, redirections, and signal handling using system forks. Hive Helsinki project.",
    img: "/bash-icon-svgrepo-com.svg",
    link: "https://github.com/Nicktvdd/MiniShell",
  },
  {
    id: 5,
    color: "from-cyan-300 to-teal-300",
    title: "TechTec Website",
    desc: "A WordPress/PHP/Elementor site for TechTec, an HVAC education company. The site drives course applications and has resulted in substantial growth in interest.",
    img: "/techtec.png",
    link: "https://techtec.nl/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  // 5 project panels + 1 intro spacer = 6 panels of 100vw. Scroll (6-1)/6 = ~83.33%.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.33%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[700vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          Check out my projects 
          <motion.svg
          initial={{ opacity: 0.2, y: 0 }}
          animate={{ opacity: 1, y: "10px" }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
        >
          <path
            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
            stroke="#000000"
            strokeWidth="1"
          ></path>
          <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
          <path
            d="M15 11L12 14L9 11"
            stroke="#000000"
            strokeWidth="1"
          ></path>
        </motion.svg>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-emerald-300 to-teal-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px] p-4">
                    <Image
                      src={item.img}
                      alt={`${item.title} preview`}
                      fill
                      sizes="(min-width: 1280px) 600px, (min-width: 1024px) 500px, (min-width: 768px) 384px, 320px"
                      className="object-contain"
                    />
                  </div>
                  <p className="w-80 text-sm md:w-96 md:text-md lg:w-[500px] lg:text-lg xl:w-[600px] p-4">
                    {item.desc}
                  </p>
                  <div className="flex justify-end p-4">
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded"
                    >
                      Check it out!
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-4 md:gap-16 items-center justify-center text-center">
        <h1 className="text-4xl md:text-8xl">Let&apos;s collaborate!</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath href="#circlePath" className="text-xl">
                Full-Stack Developer & awesome guy &
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;