import { Link } from "react-router-dom";
import { useProjectContext } from "../../contexts/ProjectInspect";
import { Project } from "../../types/api/Project";
import Tag from "../tags";
import "./styles.css";

interface ProjectCardPageProps {
  project: Project;
}

const ProjectCardPage = (props: ProjectCardPageProps) => {
  const { setProjectDetails } = useProjectContext();
  const truncatedDescription =
    props.project.description.length > 150
      ? `${props.project.description.substring(0, 150)}...`
      : props.project.description;

  const saveProjectDetails = () => {
    const { id, name, description, thumbnail, link, technologies } =
      props.project;
    setProjectDetails({
      id,
      name,
      description,
      thumbnail,
      link,
      technologies: technologies.map((technology) => technology.name),
    });
  };

  return (
    <div className="projectCard_Container">
      <img
        src={props.project.thumbnail}
        alt="project"
        className="thumbnail_projectPage"
      />
      <span className="title_projectPage">{props.project.name}</span>
      <div className="projectPage_divider" />
      <p className="projectPage_description">{truncatedDescription}</p>
      <div className="TagsContainer">
        {props.project.technologies.map((technology, index) => (
          <Tag key={index} text={`• ${technology.name}`} />
        ))}
      </div>
      <Link
        to={`/project-details/${props.project.id}`}
        style={{ textDecoration: "none" }}
      >
        <button onClick={saveProjectDetails} className="btnSeeProject">
          Ver Projeto Completo com Imagens
        </button>
      </Link>
    </div>
  );
};

export default ProjectCardPage;
