import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const timelineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Education = () => {
  return (
    <section className="relative px-6 py-20 z-10" id="education">
      {/* Section Heading */}
      <div className="text-center group mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-2">
          <span className="text-pink-400">My</span> Education
        </h1>
        <div className="h-1.5 w-20 md:w-32 lg:w-40 bg-white mx-auto transition-all duration-300 ease-out group-hover:w-56" />
      </div>

      {/* Timeline Container */}
      <div className="relative border-l-4 border-pink-500/30 ml-4 pl-6 space-y-14 max-w-4xl mx-auto">
        {EDUCATION.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={timelineVariants}
            className="relative"
          >
            {/* Dot */}
            <div className="absolute -left-[1.05rem] top-1 w-4 h-4 rounded-full bg-pink-500 shadow-lg" />

            {/* Card */}
            <div className="bg-stone-900/40 border border-white/10 backdrop-blur-lg rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-stone-300 text-md mb-1">{item.name}</p>
              <p className="text-sm text-pink-400 font-semibold">
                {item.yearRange}
              </p>
              <p className="text-sm text-stone-400 mt-2">{item.grade}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
