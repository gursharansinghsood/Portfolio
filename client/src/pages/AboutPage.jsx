import Titlebar from "../components/cards/Titlebar";
import Fade from "../components/motion/Fade";
import profile from "../assets/mine.jpg";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaCircle,
} from "react-icons/fa";

const contactInfo = [
  { icon: FaMapMarkerAlt, value: "Mohali, Punjab" },
  { icon: FaEnvelope, value: "gursharansinghsood@gmail.com" },
  { icon: FaPhoneAlt, value: "+91 7650076914" },
  { icon: FaGithub, value: "github.com/gursharansinghsood" },
];

const skills = [
  {
    title: "Frontend",
    items: "React.js • JavaScript • Tailwind CSS • HTML • CSS • Vite",
  },
  {
    title: "Backend",
    items: "Node.js • Express.js • MongoDB • JWT • REST APIs",
  },
];

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "3+", label: "Projects" },
  { value: "15+", label: "Technologies" },
];

const AboutPage = () => {
  return (
    <Fade className="flex flex-col h-screen">
      <Titlebar name="About Me" />

      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid gap-8 md:grid-cols-[220px_1fr]">
          {/* Left */}

          <div>
            <div className="bg-surface border border-border rounded-xl p-3 w-fit mx-auto">
              <img
                src={profile}
                alt="Profile"
                className="w-40 h-52 rounded-lg object-cover"
              />
            </div>

            <div className="flex justify-center items-center gap-2 mt-6 text-success font-semibold">
              <FaCircle size={10} />
              Available for Internship
            </div>

            <div className="space-y-4 mt-8 text-sm">
              {contactInfo.map(({ icon: Icon, value }) => (
                <div key={value} className="flex items-center gap-3">
                  <Icon className="text-active shrink-0" />
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}

          <div>
            <p className="text-2xl font-medium">Hi, I'm</p>

            <h1 className="text-3xl sm:text-5xl font-bold mt-1">
              Gursharan Singh
            </h1>

            <h2 className="text-2xl font-semibold text-active mt-3">
              MERN Stack Developer
            </h2>

            <p className="mt-8 leading-8 text-text-muted">
              I'm a Full Stack MERN Developer passionate about creating modern,
              scalable and user-friendly web applications. I specialize in
              React.js, Node.js, Express.js and MongoDB while following clean
              coding practices and responsive UI design. I enjoy solving
              real-world problems and continuously learning new technologies.
            </p>

            {/* Skills */}

            <div className="grid grid-cols-2 gap-5 mt-10">
              {skills.map(({ title, items }) => (
                <div
                  key={title}
                  className="bg-surface border border-border rounded-xl p-4"
                >
                  <h3 className="font-semibold text-active">{title}</h3>

                  <p className="text-sm text-text-muted mt-2 leading-6">
                    {items}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 mt-12 pt-8 border-t border-border">
              {stats.map(({ value, label }, index) => (
                <div
                  key={label}
                  className={
                    index !== stats.length - 1
                      ? "text-center border-r border-border"
                      : "text-center"
                  }
                >
                  <h2 className="text-4xl font-bold text-active">{value}</h2>

                  <p className="mt-2 text-text-muted">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default AboutPage;
