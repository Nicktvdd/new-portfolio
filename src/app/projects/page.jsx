"use client"
import {motion} from "framer-motion"

const ProjectPage = () => {
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }} >
      Project
    </motion.div>
  );
}

export default ProjectPage;