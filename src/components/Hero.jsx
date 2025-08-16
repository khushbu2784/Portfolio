import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import khushbu from "../assets/khushbu1.jpeg";
import { FaFolderOpen, FaDownload } from "react-icons/fa";

// Animation variants
const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-28 pb-16 text-white relative"
    >
      {/* Text Content */}
      <motion.div
        className="w-full md:w-1/2 max-w-2xl text-center md:text-left"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6"
          variants={textVariants}
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Khushbu Parmar
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-stone-300 leading-relaxed mb-6"
          variants={textVariants}
        >
          Aspiring{" "}
          <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent font-semibold">
            Full-Stack Developer
          </span>{" "}
          passionate about building modern web experiences with the{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">
            MERN stack
          </span>
          .
        </motion.p>

        {/* Buttons Row */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6"
          variants={textVariants}
        >
          {/* View Projects Button */}
          <motion.a
            href="#project"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-lg font-medium 
               bg-white/10 text-white border border-white/20 
               hover:bg-white/20 hover:shadow-md transition-all duration-300"
          >
            <FaFolderOpen className="text-xl text-pink-400" />
            View Projects
          </motion.a>

          {/* Download Resume Button */}
          <motion.a
            href={HERO_CONTENT.resumeLink}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-lg font-medium 
               bg-white/10 text-white border border-white/20 
               hover:bg-white/20 hover:shadow-md transition-all duration-300"
          >
            <FaDownload className="text-xl text-blue-400" />
            {HERO_CONTENT.resumeLinkText}
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Image Content */}
      <motion.div
        className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="relative group rounded-[32px] p-1 bg-gradient-to-br from-pink-500/40 via-purple-700/30 to-blue-500/30 shadow-2xl overflow-hidden backdrop-blur-md border border-purple-800/20 hover:scale-105 transition-transform duration-500 ease-in-out">
          <div className="rounded-[28px] overflow-hidden backdrop-blur-lg bg-white/10 border border-white/10">
            <img
              src={khushbu}
              alt="Khushbu Parmar"
              className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-[28px] shadow-lg transition-all duration-300 ease-in-out group-hover:scale-[1.03] group-hover:shadow-pink-400/30"
            />
          </div>
          <div className="absolute -bottom-5 right-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs md:text-sm px-4 py-1 rounded-full shadow-lg tracking-wide animate-pulse">
            Full-Stack Developer
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
