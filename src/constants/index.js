import P4 from "../assets/P4.jpg";
import P2 from "../assets/P2.jpg";
import P3 from "../assets/P3.jpg";
import P1 from "../assets/P1.png";
import P5 from "../assets/P5.jpg";
import GIFT from "../assets/GIFT.jpg";
import AI from "../assets/AI.jpg";
import QR from "../assets/QR.png"
import { title } from "framer-motion/client";

export const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#project", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hello! 🖐️",
  introduction:
    "I’m Khushbu Parmar from Ahmedabad.",
  description:
    "I’m currently doing MSCIT at K.S School of Business Management",
  resumeLinkText: "Download Resume",
  resumeLink: "/Khushbu2025CV.pdf",
};

export const PROJECTS = [
  {
    name: "InstaClone",
    description:
      "Instagram-style full-stack social media app with real-time chat, stories, likes, and notifications.",
    image: P1,
    live: "https://insta-clone27.vercel.app/",
    github: "https://github.com/khushbu2784/InstaClone",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
  },
  {
    name: "Online Gift Store (Third Year - Group Project)",
    image: GIFT,
    description:
      "E-commerce website for personalized gifts built with PHP and MySQL, featuring product listings, shopping cart, and admin dashboard.",
    tags: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
  },
  {
    name: "Weather App",
    description: "Weather forecast app using OpenWeather API with real-time search.",
    image: P2,
    github: "https://github.com/khushbu2784/Weather-App",
    tags: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
  },
  {
    name: "QR Code Generator",
    image: QR,
    description: "Developed a QR code generator web app that creates downloadable QR codes for any input text or URL. Utilized an open-source QR library and styled with Tailwind CSS.",
    github: "https://github.com/khushbu2784/QR-Generator", // replace with actual link
    tags: ["HTML", "CSS", "JavaScript", "QR API"],
  },
  // {
  //   name: "To-Do App",
  //   description: "A clean to-do app with local storage support using vanilla JavaScript.",
  //   image: P3,
  //   link: "https://github.com/khushbu2784/To-do",
  //   tags: ["HTML", "CSS", "JavaScript"],
  // },
  {
    name: "Movie Finder",
    description: "A responsive React app to search movies, view details and posters using a public movie API (search, filter, and save favourites).",
    image: P5,
    github: "https://github.com/khushbu2784/movieFinder", // update if your repo name is different
    tags: ["React", "JavaScript", "CSS", "API", "Axios"]
  },
  {
    name: "Amazon UI Clone",
    description: "Static Amazon homepage clone built using HTML, CSS, and JavaScript.",
    image: P4,
    github: "https://github.com/khushbu2784/Amazon-UX-UI-clone",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  // {
  //   name: "AI-based Attendance System (Fourth Year - Group Project)",
  //   image:AI,
  //   description:
  //     "Face recognition-based attendance tracking system using Python and OpenCV with webcam integration and CSV export.",
  //   tags: ["Python", "OpenCV", "Face Recognition", "CSV"],
  // },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I’m Khushbu Parmar, a final-year M.Sc. (IT) student and dedicated MERN Stack Developer. I specialize in developing full-stack web applications using modern technologies including MongoDB, Express.js, React, Node.js, and Tailwind CSS.",
    "My focus is on building responsive, accessible, and user-friendly interfaces supported by secure and efficient backend systems. With a strong attention to detail and a passion for clean design, I strive to deliver applications that combine functionality with exceptional user experience."
  ],
};


export const EDUCATION = [
  {
    name: "Master of Science in Information Technology",
    title: "K.S. School of Business Management - Gujarat University",
    yearRange: "Ongoing"
  },
  {
    name: "Bachelor of Science in Information Technology",
    title: "K.S. School of Business Management - Gujarat University",
    yearRange: "2021-2024",
    grade: "4.02 GPA"
  },
  {
    name: "HSC - (Commerce Stream)",
    title: "Jay Somnath School",
    yearRange: "2019-2021",
    grade: "70%"
  },
  {
    name: "SSC",
    title: "Jay Somnath School",
    yearRange: "2018-2019",
    grade: "75%"
  }
]

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "khushbuparmar27804@gmail.com",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/khushbu2784",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/khushbu-parmar-a98606315/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} khushbu Parmar. All rights reserved.`,
};
