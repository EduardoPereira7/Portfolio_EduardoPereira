import { usePersonContext } from "../../contexts/PersonContext";
import BtnNavigation from "../btnNavigation";
import Circle from "../circleImage";
import "./styles.css";

const Presentation = () => {
  const { person } = usePersonContext();
  const firstName = person?.name.split(" ")[0];
  return (
    <div className="presentation">
      <div className="left">
        <span className="title">Hello world !</span>
        <span className="subtitle">Eu sou o {firstName}</span>
        <div className="developerContainer">
          <span className="developer">{["< / ", person?.status, " >"]}</span>
        </div>
        <p className="textPresentation">{person?.summary}</p>
        <BtnNavigation
          text="Contacte-me"
          navigation="about"
          containerStyle={containerStyleBtn}
          textStyle={{ fontSize: "16.5px" }}
        />
      </div>
      <div className="imgProfile">
        <Circle />
      </div>
    </div>
  );
};

const containerStyleBtn = {
  marginTop: "25px",
  width: "160px",
  height: "55px",
  backgroundColor: "#5913aa",
  alignItems: "center",
  justifyContent: "center",
};

export default Presentation;
