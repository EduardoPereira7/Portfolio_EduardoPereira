import AtecLogo from "../../assets/images/atec_logo.jpg";
import Tag from "../tags";
import "./styles.css";

const ProjectCard = () => {
  return (
    <div className="projectCardContainer">
      <img src={AtecLogo} alt="" className="projectCardImg" />
      <span className="projectName">Nome do projeto</span>
      <div className="divider" />
      <span className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iusto eum
        in neque doloribus
      </span>
      <div className="TagsContainer">
        <Tag text={"C++"} />
        <Tag text={"HTML"} />
        <Tag text={"CSS"} />
        <Tag text={"React Native"} />
        <Tag text={"C#"} />
      </div>
      <button className="btnOpenProject">Ver Projeto</button>
    </div>
  );
};

export default ProjectCard;
