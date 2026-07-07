export const terminalCommand = (command) => {
  switch (command.trim().toLowerCase()) {
    case "help":
      return `
Available commands:
about      - About me
skills     - List all skills
projects   - List all projects
resume     - Open resume
contact    - Contact information
education  - Education details
certs      - Certifications
clear      - Clear terminal
whoami     - Who am I
exit       - Exit terminal
`;

    case "whoami":
      return "I am Gursharan Singh (MERN STACK DEVELOPER)";

    case "about":
      return `
I'm Gursharan Singh, a MERN Stack Developer.
Full-stack MERN developer with formal training in building scalable web applications.
Skilled in React.js, Node.js, Express.js, MongoDB, REST APIs, JWT Authentication,
and writing clean, maintainable code.
`;

    case "skills":
      return `
Frontend:
• React.js
• JavaScript (ES6+)
• HTML5
• CSS3
• Tailwind CSS
• Vite

Backend:
• Node.js
• Express.js
• REST APIs
• Middleware

Database & Auth:
• MongoDB
• Mongoose
• JWT
• BcryptJS
• RBAC

Tools:
• Git
• GitHub
• Postman
• Vercel
• Render
• VS Code
• Axios
`;

    case "projects":
      return `
1. TrackHire - Job Application Tracker
   • JWT Authentication
   • Role Based Access Control
   • Axios Interceptors
   • MERN Stack

2. Job Seeker - Dual Portal Job Platform
   • Recruiter & Job Seeker Portal
   • CRUD Operations
   • Role Based Authentication
   • Custom React Hooks
`;

    case "contact":
      return `
Name     : Gursharan Singh
Email    : gursharansinghsood@gmail.com
Phone    : +91 76500 76914
Location : Mohali, Punjab
GitHub   : github.com/gursharansinghsood
`;

    case "education":
      return `
B.Tech - Computer Science Engineering
Himachal Pradesh Technical University
2022 - 2026 (Expected)
CGPA : 7.0 / 10
`;

    case "certs":
    case "certifications":
      return `
MERN Stack Development
Novem Control (2024)
`;

    case "resume":
      // Resume PDF ka path de dena
      window.open("/resume.pdf", "_blank");
      return "Opening resume...";

    default:
      return `Command not found: ${command}
Type "help" to see available commands.`;
  }
};
