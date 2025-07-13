import P4 from "../assets/P4.jpg";
import P2 from "../assets/P2.jpg";
import P3 from "../assets/P3.jpg";
import P1 from "../assets/P1.png";
import GIFT from "../assets/GIFT.jpg";
import AI from "../assets/AI.jpg";
import QR from "../assets/QR.png"
import { title } from "framer-motion/client";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  // { href: "#experience", label: "Experience" },
  //{ href: "#testimonials", label: "Testimonials" },
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
  resumeLink: "/KhushbuParmar_Resume2025.pdf",
};

export const PROJECTS = [
  {
    name: "InstaClone",
    description:
      "Instagram-style full-stack social media app with real-time chat, stories, likes, and notifications.",
    image: P1,
    link: "https://github.com/khushbu2784/InstaClone",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
  },
  {
    name: "Weather App",
    description: "Weather forecast app using OpenWeather API with real-time search.",
    image: P2,
    link: "https://github.com/khushbu2784/Weather-App",
    tags: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
  },
  {
  name: "QR Code Generator",
  image:QR,
  description: "Developed a QR code generator web app that creates downloadable QR codes for any input text or URL. Utilized an open-source QR library and styled with Tailwind CSS.",
  link: "https://github.com/khushbu2784/QR-Generator", // replace with actual link
  tags: ["HTML", "CSS", "JavaScript", "QR API"],
  },
  {
    name: "Amazon UI Clone",
    description: "Static Amazon homepage clone built using HTML, CSS, and JavaScript.",
    image: P4,
    link: "https://github.com/khushbu2784/Amazon-UX-UI-clone",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  // {
  //   name: "To-Do App",
  //   description: "A clean to-do app with local storage support using vanilla JavaScript.",
  //   image: P3,
  //   link: "https://github.com/khushbu2784/To-do",
  //   tags: ["HTML", "CSS", "JavaScript"],
  // },
  {
    name: "Online Gift Store (Third Year - Group Project)",
    image:GIFT,
    description:
      "E-commerce website for personalized gifts built with PHP and MySQL, featuring product listings, shopping cart, and admin dashboard.",
    tags: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
  },
  {
    name: "AI-based Attendance System (Fourth Year - Group Project)",
    image:AI,
    description:
      "Face recognition-based attendance tracking system using Python and OpenCV with webcam integration and CSV export.",
    tags: ["Python", "OpenCV", "Face Recognition", "CSV"],
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I’m Khushbu Parmar, a final year MSc(IT) student passionate about full-stack web development with the MERN stack.",
    "I love building responsive, user-friendly interfaces and turning ideas into real-world applications. With a strong eye for design and a deep love for CSS, I aim to create experiences that are both functional and beautiful."
  ],
};

export const EDUCATION = [
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
