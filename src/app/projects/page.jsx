"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "D&D App",
    desc: "I'm Building a Dungeons and Dragons app with Kotlin and Compose in Android Studio, My goal is to create a comprehensive roleplaying platform, complete with all features, a user-friendly interface, and all the tools you need as a player and game master.",
    img: "centaur-svgrepo-com.svg",
    link: "https://github.com/Nicktvdd/DnD-Api",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "TechTec Website",
    desc: "Created a website for a fast growing company called TechTec, a company that specializes in educating people in the field of HVAC. The website is responsible for most of the contact with the applicants for the courses. It has resulted in a substantial growth in interest. The website is build with Wordpress, PHP and Elementor. Catering to the needs of the client, I created a website that is easy to navigate, informative and visually appealing.",
    img: "/techtec.png",
    link: "https://techtec.nl/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "The Mocks Website",
    desc: "The Mocks is a Rock & Roll band from the Netherlands. I created a website for them using Wordpress, PHP and Elementor. The website is designed to be visually appealing, and has a Rock & Roll feeling. It includes a music player, custom tour plug-in, and a contact form.",
    img: "/themocks.png",
    link: "https://themocksofficial.com/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "MiniShell",
    desc: "MiniShell is a simple shell written in C. It is a project for the course at Hive Helsinki, a 42 school. The shell is capable of executing commands, piping, and redirecting input and output. It also has a history feature, and can run in the background.",
    img: "/bash-icon-svgrepo-com.svg",
    link: "https://github.com/Nicktvdd/MiniShell",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">Check it out!</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
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
              <textPath xlinkHref="#circlePath" className="text-xl">
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