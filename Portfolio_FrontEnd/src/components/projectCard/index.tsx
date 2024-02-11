import { Link } from "react-router-dom";
import Tag from "../tags";
import "./styles.css";

interface ProjectCardProps {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  link: string;
  technologies: string[];
}

const ProjectCard = (props: ProjectCardProps) => {
  const truncatedDescription =
    props.description.length > 200
      ? props.description.slice(0, 160) + "..."
      : props.description;

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
        <button className="btnOpenProject">Ver Projeto</button>
      </Link>
    </div>
  );
};

export default ProjectCard;
