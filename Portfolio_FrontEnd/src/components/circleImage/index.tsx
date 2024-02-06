import { usePersonContext } from "../../contexts/PersonContext";
import "./styles.css";

const Circle = () => {
  return (
    <div className="circle-around1">
      <div className="circle-around2">
        <div className="circle">
          <img src={usePersonContext().person?.photo} alt="Person Face" />
        </div>
      </div>
    </div>
  );
};

export default Circle;
