import { useParams } from "react-router-dom";
import Carousel from "../../components/carousel";
import { useProjectContext } from "../../contexts/ProjectInspect";
import { useProjectImages } from "../../hooks/useProjectImages";
import "./styles.css";

const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { projectImages } = useProjectImages(Number(id));
  const { projectDetails } = useProjectContext();
  const paragraphs = projectDetails?.description.split("\n");

  return (
    <div className="projectDetailsContainer">
      <div className="titleAndBtnContainer">
        <span className="projectTitle">{projectDetails?.name}</span>
        <a
          href={projectDetails?.link}
          target="_blank"
          rel="noreferrer"
          className="btnGithubLink"
        >
          <span className="projectLink">Abrir repositório - GitHub</span>
        </a>
      </div>
      <div className="project-slide">
        <Carousel projectImages={projectImages} />
      </div>
      <span className="projectDescription">{paragraphs}</span>
      <div className="projectTagsContainer">
        <span className="usedTech">Tecnologias usadas:</span>
        {projectDetails?.technologies.map((technology, index) => (
          <span key={index} className="projectTag">
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
