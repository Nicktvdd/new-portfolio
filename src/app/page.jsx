"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

const Homepage = () => {
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }} >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Well-rounded Full-Stack Development Teamplayer
          </h1>
          {/* DESCRIPTION*/}
          <p className="md:text-xl">
            My true passion lies in learning. I eagerly embrace new challenges and skills, adventuring into unfamiliar territory with enthusiasm.
            I'm a team player and always looking for ways to improve myself and my team.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/projects">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View my work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Homepage
