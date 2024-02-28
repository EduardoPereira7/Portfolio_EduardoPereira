import { Link } from "react-router-dom";
import { useProjectContext } from "../../contexts/ProjectInspect";
import { ProjectCardProps } from "../../types/components/ProjectCardProps";
import Tag from "../tags";
import "./styles.css";

const ProjectCard = (props: ProjectCardProps) => {
  const { setProjectDetails } = useProjectContext();
  const truncatedDescription =
    props.description.length > 200
      ? props.description.slice(0, 160) + "..."
      : props.description;

  const saveProjectDetails = () => {
    setProjectDetails(props);
  };

  return (
    <div className="projectCardContainer">
      <img src={props.thumbnail} alt="" className="projectCardImg" />
      <span className="projectName">{props.name}</span>
      <div className="divider" />
      <span className="description">{truncatedDescription}</span>
      <div className="TagsContainer">
        {props.technologies.map((technology, index) => (
          <Tag key={index} text={`• ${technology}`} />
        ))}
      </div>
      <Link to={`/project-details/${props.id}`} className="link_verMaisProject">
        <button onClick={saveProjectDetails} className="btnOpenProject">
          Ver Projeto
        </button>
      </Link>
    </div>
  );
};

export default ProjectCard;
