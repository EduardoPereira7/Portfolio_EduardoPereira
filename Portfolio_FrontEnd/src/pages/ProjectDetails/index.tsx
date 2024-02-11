import { useParams } from "react-router-dom";

const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Project Details</h1>
    </div>
  );
};

export default ProjectDetailsPage;
