import { usePersonContext } from "../../contexts/PersonContext";
import BtnNavigation from "../btnNavigation";
import Circle from "../circleImage";
import Loading from "../loading";
import "./styles.css";

const Presentation = () => {
  const { person, loading, error } = usePersonContext();
  const firstName = person?.name.split(" ")[0];
  const paragraphs = person?.summary
    .split("\n")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }
  return (
    <div className="presentation">
      <div className="left">
        <span className="title">Hello world !</span>
        <span className="subtitle">Eu sou o {firstName}</span>
        <div className="developerContainer">
          <span className="developer">{["< / ", person?.status, " >"]}</span>
        </div>
        <p className="textPresentation">{paragraphs}</p>
        <BtnNavigation
          text="Contacte-me"
          navigation="/contact"
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
