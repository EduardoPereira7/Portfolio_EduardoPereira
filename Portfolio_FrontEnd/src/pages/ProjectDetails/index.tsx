import { useParams } from "react-router-dom";
import Carousel from "../../components/carousel";
import { useProjectImages } from "../../hooks/useProjectImages";
import "./styles.css";

const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams();
  console.log(id);
  const { projectImages } = useProjectImages(Number(id));

  return (
    <div className="project-details">
      <Carousel projectImages={projectImages} />
    </div>
  );
};

export default ProjectDetailsPage;
