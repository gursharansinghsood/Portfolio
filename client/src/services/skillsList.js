import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiVite,
  SiPostman,
  SiAxios,
  SiJsonwebtokens,
  SiRender,
  SiVercel,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { LuShieldCheck } from "react-icons/lu";
import { VscVscode } from "react-icons/vsc";

export const skillsList = [
  // Frontend
  {
    name: "React.js",
    icon: FaReact,
    level: 95,
    delay: 0.1,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    level: 92,
    delay: 0.15,
    category: "Frontend",
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    level: 95,
    delay: 0.2,
    category: "Frontend",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    level: 92,
    delay: 0.25,
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: 95,
    delay: 0.3,
    category: "Frontend",
  },
  {
    name: "Vite",
    icon: SiVite,
    level: 90,
    delay: 0.35,
    category: "Frontend",
  },

  // Backend
  {
    name: "Node.js",
    icon: FaNodeJs,
    level: 90,
    delay: 0.4,
    category: "Backend",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    level: 88,
    delay: 0.45,
    category: "Backend",
  },
  {
    name: "REST API",
    icon: TbApi,
    level: 90,
    delay: 0.5,
    category: "Backend",
  },
  {
    name: "Axios",
    icon: SiAxios,
    level: 88,
    delay: 0.55,
    category: "Backend",
  },

  // Database & Authentication
  {
    name: "MongoDB",
    icon: SiMongodb,
    level: 90,
    delay: 0.6,
    category: "Database",
  },
  {
    name: "JWT",
    icon: SiJsonwebtokens,
    level: 90,
    delay: 0.65,
    category: "Authentication",
  },
  {
    name: "RBAC",
    icon: LuShieldCheck,
    level: 85,
    delay: 0.7,
    category: "Authentication",
  },

  // Tools & Deployment
  {
    name: "Git",
    icon: FaGitAlt,
    level: 90,
    delay: 0.75,
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    level: 92,
    delay: 0.8,
    category: "Tools",
  },
  {
    name: "Postman",
    icon: SiPostman,
    level: 88,
    delay: 0.85,
    category: "Tools",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    level: 85,
    delay: 0.9,
    category: "Deployment",
  },
  {
    name: "Render",
    icon: SiRender,
    level: 82,
    delay: 0.95,
    category: "Deployment",
  },
  {
    name: "VS Code",
    icon: VscVscode,
    level: 95,
    delay: 1.0,
    category: "Tools",
  },
];
