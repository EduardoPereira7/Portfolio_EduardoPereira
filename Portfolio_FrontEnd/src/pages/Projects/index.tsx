import React from "react";
import Error from "../../components/error";
import Loading from "../../components/loading";
import ProjectCardPage from "../../components/projectCardPage";
import TitlePages from "../../components/titlePages";
import { usePersonContext } from "../../contexts/PersonContext";
import { useProjects } from "../../hooks/useProjects";
import "./styles.css";

const ProjectsPage: React.FC = () => {
  const {
    person,
    loading: personLoading,
    error: personError,
  } = usePersonContext();
  const {
    projects,
    loading: projectsLoading,
    error: projectsError,
  } = useProjects(person?.id || -1);

  if (personLoading || projectsLoading) {
    return <Loading />;
  }
  if (personError || projectsError) {
    return <Error message={personError ? personError : projectsError} />;
  }
  return (
    <div className="ProjectsPageContainer">
      <TitlePages title="Projetos" />
      <div className="projectPage_projects">
        {projects
          ?.sort((a, b) => b.id - a.id)
          .map((project) => (
            <ProjectCardPage project={project} key={project.id} />
          ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
