import { useParams } from "react-router-dom";
import Carousel from "../../components/carousel";
import Loading from "../../components/loading";
import { useProjectContext } from "../../contexts/ProjectInspect";
import { useProjectImages } from "../../hooks/useProjectImages";
import "./styles.css";

const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { projectImages, loading, error } = useProjectImages(Number(id));
  const { projectDetails } = useProjectContext();
  const paragraphs = projectDetails?.description
    .split("\n")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="projectDetailsContainer">
      <div className="titleAndBtnContainer">
        <span className="projectTitle">{projectDetails?.name}</span>
        {projectDetails?.link === "" ? null : (
          <a
            href={projectDetails?.link}
            target="_blank"
            rel="noreferrer"
            className="btnGithubLink"
          >
            <span className="projectLink">Abrir repositório - GitHub</span>
          </a>
        )}
      </div>
      <div className="project-slide">
        {error && <h3> Erro ao carregar imagens do projeto</h3>}
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
