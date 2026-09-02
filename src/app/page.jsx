"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

const Homepage = () => {
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }} >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="hidden md:block md:h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/hero.webp"
            alt="Portrait of Nick van den Dungen"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-full md:h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Full-Stack Software Engineer
          </h1>
          {/* DESCRIPTION*/}
          <p className="md:text-xl">
            Passionate full-stack engineer with a background in high-scale telemetry and a drive for shipping clean, intuitive products.
            Former Lead Engineer at Soil Scout. While experienced across TypeScript, React, and Python, I&apos;m fundamentally language-agnostic. Leveraging deep fundamentals and modern AI workflows to solve hard problems and build software end to end.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link
              href="/projects"
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
            >
              View my work
            </Link>
            <Link
              href="/contact"
              className="p-4 rounded-lg ring-1 ring-black"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Homepage
