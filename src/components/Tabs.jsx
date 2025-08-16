import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaCode,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiPostman,
  SiVercel,
  SiTailwindcss,
  SiRender,
  SiNetlify,
  SiXampp,
  SiMysql,
  SiPhp
} from "react-icons/si";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const tabs = [
    { key: "skills", label: "Skills" },
    { key: "language", label: "Language" },
    { key: "tools", label: "Tools" },
    { key: "softskills", label: "Soft Skills" },
    { key: "hobbies", label: "Hobbies" },
  ];

  const opentab = (tab) => setActiveTab(tab);

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-300" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "PHP", icon: <SiPhp className="text-indigo-500" /> },
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-purple-500" /> },
    { name: "VS Code", icon: <FaCode className="text-blue-500" /> },
    { name: "XAMPP", icon: <SiXampp className="text-orange-600" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Vercel", icon: <SiVercel className="text-gray-200" /> },
    { name: "Render", icon: <SiRender className="text-blue-600" /> },
    { name: "Netlify", icon: <SiNetlify className="text-green-400" /> },
  ];

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex flex-wrap justify-center sm:justify-between gap-3 sm:gap-3 mb-6">
        {tabs.map((tab) => (
          <motion.button
            key={tab.key}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={tabVariants}
            onClick={() => opentab(tab.key)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition duration-300 ${
              activeTab === tab.key
                ? "text-purple-300 underline underline-offset-4 decoration-2 font-semibold"
                : "text-purple-400 hover:text-purple-200"
            }`}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={contentVariants}
          className="text-center text-stone-300 space-y-3 leading-relaxed text-base sm:text-lg"
        >
          {/* Skills */}
          {activeTab === "skills" && (
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6 justify-center">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center bg-pink-400/30 hover:bg-pink-300/40 transition duration-300 rounded-lg py-2 px-2 shadow-md cursor-pointer"
                >
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <div className="text-white text-sm sm:text-base font-medium">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Language */}
          {activeTab === "language" && (
            <ul className="space-y-1">
              <li>English – Fluent</li>
              <li>Hindi – Native</li>
              <li>Gujarati – Fluent</li>
            </ul>
          )}

          {/* Tools */}
          {activeTab === "tools" && (
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6 justify-center">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center justify-center bg-pink-400/30 hover:bg-pink-300/40 transition duration-300 rounded-lg py-2 px-2 shadow-md cursor-pointer"
                >
                  <div className="text-4xl mb-2">{tool.icon}</div>
                  <div className="text-white text-sm sm:text-base font-medium">
                    {tool.name}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Soft Skills */}
          {activeTab === "softskills" && (
            <ul className="space-y-1 max-w-md mx-auto text-center">
              <li>Problem Solving</li>
              <li>Team Collaboration</li>
              <li>Adaptability</li>
              <li>Quick Learner</li>
              <li>Time Management</li>
            </ul>
          )}

          {/* Hobbies */}
          {activeTab === "hobbies" && (
            <ul className="space-y-1 max-w-md mx-auto text-center">
              <li>Drawing</li>
              <li>Cooking</li>
              <li>Photography</li>
              <li>Exploring new Design Ideas</li>
              <li>Learning New Things</li>
            </ul>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Tabs;
