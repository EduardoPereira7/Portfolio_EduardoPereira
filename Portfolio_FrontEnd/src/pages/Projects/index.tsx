import React from "react";
import ProjectCardPage from "../../components/projectCardPage";
import { usePersonContext } from "../../contexts/PersonContext";
import { useProjects } from "../../hooks/useProjects";
import "./styles.css";

const ProjectsPage: React.FC = () => {
  const { person } = usePersonContext();
  const { projects, loading, error } = useProjects(person?.id || -1);
  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="ProjectsPageContainer">
      <span className="projectPage_title">Projetos</span>
      <div className="projectPage_projects">
        {projects?.map((project) => (
          <ProjectCardPage project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;