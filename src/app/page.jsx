import Image from "next/image"

const Homepage = () => {
  return (
    <div className="h-full flex flex-col">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 relative">
        <Image src="/hero.png" alt="" fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-8 items-center justify-center">
      {/* TITLE */}
      <h1 className="text-4xl font-bold">Well-rounded developer with exceptional interpersonal skills.</h1>
      {/* DESCRIPTION*/}
      <p>My favorite thing is LEARNING</p>
      {/* BUTTONS */}
      <div className="flex gap-4">
        <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View my work</button>
        <button className="p-4 rounded-lg ring-1 ring-black">Contact me</button>
      </div>
    </div>
  </div>
  )
}

export default Homepage
