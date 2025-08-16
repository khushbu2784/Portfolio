import React from "react";
import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "../constants";
import Tabs from "./Tabs";
import khushbu from "../assets/khushbu2.png";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section id="about" className=" px-6 py-16 text-white">
      {/* Section Title */}
      <div className="text-center group mb-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-2">
          <span className="text-pink-400">About</span> Me
        </h1>
        <div className="h-1.5 w-20 md:w-32 lg:w-40 bg-white mx-auto transition-all duration-300 ease-out group-hover:w-56" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        {/* Image */}
        <motion.img
          src={khushbu} // Replace with your actual profile image path
          alt="Khushbu Parmar"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Text Content */}
        <div className="max-w-3xl text-center md:text-left">
          {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-lg md:text-xl text-stone-300 mb-6 leading-relaxed font-light tracking-wide"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariants}
            >
              {paragraph}
            </motion.p>
          ))}

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
            {["MongoDB","Express.js","React.js", "Node.js",].map((tech) => (
              <span
                key={tech}
                className="bg-purple-700/30 text-purple-300 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-12 max-w-4xl mx-auto bg-stone-900/40 backdrop-blur-md p-6 rounded-xl shadow-inner">
        <Tabs />
      </div>
    </section>
  );
};

export default About;
