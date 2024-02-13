import { useParams } from "react-router-dom";
import Carousel from "../../components/carousel";
import { useProjectContext } from "../../contexts/ProjectInspect";
import { useProjectImages } from "../../hooks/useProjectImages";
import "./styles.css";

const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { projectImages } = useProjectImages(Number(id));
  const { projectDetails } = useProjectContext();

  return (
    <div className="projectDetailsContainer">
      <span className="projectTitle">{projectDetails?.name}</span>
      <div className="project-slide">
        <Carousel projectImages={projectImages} />
      </div>
      <span className="projectDescription">{projectDetails?.description}</span>
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
