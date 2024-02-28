import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/footer/index.tsx";
import Navbar from "./components/navBar/index.tsx";
import { PersonProvider } from "./contexts/PersonContext.tsx";
import { ProjectProvider } from "./contexts/ProjectInspect.tsx";
import AboutMe from "./pages/AboutMe/index.tsx";
import ContactPage from "./pages/Contact/index.tsx";
import ProjectDetailsPage from "./pages/ProjectDetails/index.tsx";
import ProjectsPage from "./pages/Projects/index.tsx";
import SkillsPage from "./pages/Skills/index.tsx";
import App from "./pages/index.tsx";
import "./styles/root.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <React.StrictMode>
      <PersonProvider loading={false} error={null}>
        <ProjectProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<App />} />
            <Route
              path="/project-details/:id"
              element={<ProjectDetailsPage />}
            />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </ProjectProvider>
      </PersonProvider>
    </React.StrictMode>
  </Router>
);
