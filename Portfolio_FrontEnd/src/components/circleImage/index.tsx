import photo from "../../assets/images/fotoPerfil.jpeg";
import "./styles.css";

const Circle = () => (
  <div className="circle-around1">
    <div className="circle-around2">
      <div className="circle">
        <img src={photo} alt="Your face" />
      </div>
    </div>
  </div>
);

export default Circle;
