import Image from "next/image"

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px48">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="" fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Well-rounded developer with exceptional interpersonal skills.
        </h1>
        {/* DESCRIPTION*/}
        <p className="md:text-xl">
          My favorite thing is learning and I love to share my knowledge with others.
          I am a team player and I am always looking for ways to improve myself and my team.
          
        </p>
        {/* BUTTONS */}
        <div className="w-full flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View my work</button>
          <button className="p-4 rounded-lg ring-1 ring-black">Contact me</button>
        </div>
      </div>
    </div>
  )
}

export default Homepage
