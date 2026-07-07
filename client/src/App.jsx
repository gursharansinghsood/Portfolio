import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";

import GlassCard from "./components/cards/GlassCard";
import LockPage from "./pages/LockPage";
import HomePage from "./pages/HomePage";
import TrackHirePage from "./pages/TrackHirePage";
import JobSeekerPage from "./pages/JobSeekerPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import GalleryPage from "./pages/GalleryPage";
import ResumePage from "./pages/ResumePage";
import SkillsPage from "./pages/SkillsPage";
import AboutPage from "./pages/AboutPage";
import SettingPage from "./pages/SettingPage";
import TerminalPage from "./pages/TerminalPage";
import ContactPage from "./pages/ContactPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  const location = useLocation();

  return (
    <div className="h-screen w-screen overflow-hidden bg-transparent ">
      <GlassCard className="h-full w-full border-none">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LockPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/track-hire" element={<TrackHirePage />} />
            <Route path="/job-seeker" element={<JobSeekerPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:id" element={<ProjectDetailsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/setting" element={<SettingPage />} />
            <Route path="/terminal" element={<TerminalPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Toaster position="top-center" />
        </AnimatePresence>
      </GlassCard>
    </div>
  );
};

export default App;
