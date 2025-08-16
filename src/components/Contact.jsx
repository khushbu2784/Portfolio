import { motion } from "framer-motion";
import { CONTACT_CONTENT } from "../constants";
import { RiTwitterXFill, RiGithubFill, RiLinkedinFill } from "@remixicon/react";
import { FaRegFilePdf } from "react-icons/fa"; // Resume icon

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

const Contact = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center px-4 md:px-10 py-20 relative z-10"
      id="contact"
    >
      {/* Heading */}
      <div className="text-center group mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-2">
          <span className="text-pink-400">Contact</span> Me
        </h1>
        <div className="h-1.5 w-20 md:w-32 lg:w-40 bg-white mx-auto transition-all duration-300 ease-out group-hover:w-56" />
      </div>

      {/* Card */}
      <motion.div
        className="max-w-3xl w-full bg-white/5 backdrop-blur-lg rounded-2xl p-10 text-center text-white border border-pink-500/20 shadow-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={textVariants}
      >
        <motion.h3
          className="text-3xl md:text-5xl font-bold"
          custom={0.4}
          variants={textVariants}
        >
          {CONTACT_CONTENT.headline}
        </motion.h3>

        <motion.p
          className="text-lg md:text-xl mt-6 text-stone-300"
          custom={0.6}
          variants={textVariants}
        >
          {CONTACT_CONTENT.description}
        </motion.p>

        <motion.a
          href={`mailto:${CONTACT_CONTENT.email}`}
          className="inline-block mt-6 text-base md:text-2xl font-semibold text-pink-400 hover:text-pink-300 transition"
          custom={0.8}
          variants={textVariants}
        >
          {CONTACT_CONTENT.email}
        </motion.a>

        {/* Social Icons + Resume in same row */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
          {CONTACT_CONTENT.socialLinks.map((link, index) => {
            const Icon =
              link.icon === "RiTwitterXFill"
                ? RiTwitterXFill
                : link.icon === "RiGithubFill"
                ? RiGithubFill
                : RiLinkedinFill;

            return (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="hover:text-pink-300 transition"
                custom={1.0 + index * 0.2}
                variants={iconVariants}
              >
                <Icon size={36} />
              </motion.a>
            );
          })}
          {/* Resume Icon */}
          <motion.a
            href={CONTACT_CONTENT.resumeLink || "/Khushbu2025CV.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume"
            className="hover:text-pink-300 transition"
            custom={1}
            variants={iconVariants}
          >
            <FaRegFilePdf size={30} />
          </motion.a>
        </div>
      </motion.div>

      {/* Footer */}
      <p className="text-sm text-stone-400 mt-16 text-center">
        {CONTACT_CONTENT.footerText}
      </p>
    </section>
  );
};

export default Contact;
