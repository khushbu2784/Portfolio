import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const projectVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      bounce: 0.3,
    },
  },
};

const Projects = () => {
  return (
    <section className="px-6 py-20" id="work">
      {/* Section Title */}
      <div className="text-center group mb-14">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2">
          <span className="text-pink-400">Work</span> Showcase
        </h1>
        <div className="h-1.5 w-20 md:w-32 bg-white mx-auto transition-all duration-300 ease-out group-hover:w-56" />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="rounded-3xl overflow-hidden backdrop-blur-lg bg-white/5 border border-white/10 hover:shadow-pink-400/30 shadow-xl transition-transform duration-500 hover:scale-105 flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={projectVariants}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-52 md:h-64 object-cover"
            />

            {/* Content */}
            <div className="p-6 text-white flex flex-col justify-between flex-1">
              <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
              <p className="text-stone-300 text-base flex-grow">{project.description}</p>

              {/* Tags */}
              {project.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-purple-700/30 text-purple-200 text-xs px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* GitHub Button */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block bg-gradient-to-r from-purple-700/50 to-pink-500/50 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:scale-105 transition"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
