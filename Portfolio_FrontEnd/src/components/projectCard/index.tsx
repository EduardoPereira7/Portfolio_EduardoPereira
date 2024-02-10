import Tag from "../tags";
import "./styles.css";

interface ProjectCardProps {
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
        {props.technologies.map((technology) => (
          <Tag text={`• ${technology}`} />
        ))}
      </div>
      <button className="btnOpenProject">Ver Projeto</button>
    </div>
  );
};

export default ProjectCard;
