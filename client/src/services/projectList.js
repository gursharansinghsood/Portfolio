import { FaBriefcase, FaChartLine } from "react-icons/fa";
import trackHire_01 from "../assets/projects/track-hire/1.png";
import jobSeeker_01 from "../assets/projects/job-seeker/1.png";

export const projectList = [
  {
    id: 1,
    name: "Track Hire",
    category: "Full Stack",
    description:
      "A secure job application tracking platform built with the MERN stack. It features JWT authentication, password encryption, protected routes, role-based access control, and seamless API communication using Axios interceptors.",

    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "BcryptJS",
      "Axios",
      "REST API",
      "RBAC",
    ],

    icon: FaChartLine,
    liveLink: "https://track-hire-prince.vercel.app/",
    gitLink: "https://github.com/gursharansinghsood/Track_Hire",
    image: trackHire_01,
  },

  {
    id: 2,
    name: "Job Seeker",
    category: "Full Stack",
    description:
      "A dual-portal job platform designed for recruiters and job seekers. It includes separate workflows, full CRUD operations for job management, secure JWT authentication, role-based authorization, and real-time notifications with custom React hooks.",

    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Custom Hooks",
      "REST API",
      "RBAC",
      "CRUD",
    ],

    icon: FaBriefcase,
    liveLink: "https://job-seeker-prince.vercel.app/",
    gitLink: "https://github.com/gursharansinghsood/Job_Seeker",
    image: jobSeeker_01,
  },
];
