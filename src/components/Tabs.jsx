// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const Tabs = () => {
//   const [activeTab, setActiveTab] = useState('skills');

//   const opentab = (tabname) => setActiveTab(tabname);

//   const tabVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.3, ease: 'easeInOut' },
//     },
//   };

//   const tabVariants2 = {
//     hidden: { opacity: 0, y: 60 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: 'easeOut' },
//     },
//   };

//   return (
//     <div className="w-full h-[300px]">
//       {/* Tabs Header */}
//       <div className="flex flex-wrap justify-center gap-3 mb-6">
//         {['skills', 'experience', 'education', 'language', 'interest'].map((tab) => (
//           <motion.button
//             key={tab}
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//             variants={tabVariants}
//             onClick={() => opentab(tab)}
//             className={`px-4 py-2 rounded-full sm:rounded-none text-sm sm:text-base font-medium transition duration-300 ${
//               activeTab === tab
//                 ? 'text-purple-300 sm:text-xl font-semibold underline shadow-lg'
//                 : 'text-purple-300 hover:text-purple-400  '
//             }`}
//           >
//             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//           </motion.button>
//         ))}
//       </div>

//       {/* Tab Content */}
//       <motion.div
//         key={activeTab}
//         initial="hidden"
//         animate="visible"
//         exit="hidden"
//         variants={tabVariants2}
//         className="text-center text-stone-300 leading-relaxed space-y-3 text-base sm:text-lg mt-4"
//       >
//         {activeTab === 'skills' && (
//           <ul>
//             <li><span className="text-pink-400 font-semibold">UI/UX:</span> Designing web/app interfaces</li>
//             <li><span className="text-pink-400 font-semibold">Web Development:</span> MERN Stack Projects</li>
//             <li><span className="text-pink-400 font-semibold">Design Thinking:</span> Wireframing to deployment</li>
//           </ul>
//         )}

//         {activeTab === 'experience' && (
//           <ul>
//             <li><span className="text-pink-400 font-semibold">Project Training:</span> PHP project at Akash Technolab</li>
//           </ul>
//         )}

//         {activeTab === 'education' && (
//           <ul>
//             <li><span className="text-pink-400 font-semibold">MSCIT - Final Year:</span> K.S. School of Business Management – GPA: 4.02</li>
//           </ul>
//         )}

//         {activeTab === 'language' && (
//           <ul>
//             <li>English</li>
//             <li>Hindi</li>
//             <li>Gujarati</li>
//           </ul>
//         )}

//         {activeTab === 'interest' && (
//           <ul>
//             <li>Drawing</li>
//             <li>Cooking</li>
//             <li>Photography</li>
//             <li>Reading Books</li>
//             <li>Learning New Things</li>
//           </ul>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default Tabs;

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const opentab = (tabname) => setActiveTab(tabname);

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex flex-wrap justify-center sm:justify-between gap-3 sm:gap-6 mb-6">
        {['skills', 'experience', 'education', 'language', 'interest'].map((tab) => (
          <motion.button
            key={tab}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={tabVariants}
            onClick={() => opentab(tab)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition duration-300 ${
              activeTab === tab
                ? 'text-purple-300 underline underline-offset-4 decoration-2 font-semibold'
                : 'text-purple-400 hover:text-purple-200'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={contentVariants}
        className="text-center text-stone-300 space-y-3 leading-relaxed text-base sm:text-lg"
      >
        {activeTab === 'skills' && (
          <ul>
            <li><span className="text-pink-400 font-semibold">UI/UX:</span> Designing web/app interfaces</li>
            <li><span className="text-pink-400 font-semibold">Web Development:</span> MERN Stack Projects</li>
            <li><span className="text-pink-400 font-semibold">Design Thinking:</span> From wireframes to deployment</li>
          </ul>
        )}

        {activeTab === 'experience' && (
          <ul>
            <li><span className="text-pink-400 font-semibold">Project Training:</span> PHP project at Akash Technolab</li>
          </ul>
        )}

        {activeTab === 'education' && (
          <ul>
            <li><span className="text-pink-400 font-semibold">MSCIT – Final Year:</span> K.S. School of Business Management, GPA: 4.02/5.0</li>
          </ul>
        )}

        {activeTab === 'language' && (
          <ul>
            <li>English</li>
            <li>Hindi</li>
            <li>Gujarati</li>
          </ul>
        )}

        {activeTab === 'interest' && (
          <ul>
            <li>Drawing</li>
            <li>Cooking</li>
            <li>Photography</li>
            <li>Reading Books</li>
            <li>Learning New Things</li>
          </ul>
        )}
      </motion.div>
    </div>
  );
};

export default Tabs;
