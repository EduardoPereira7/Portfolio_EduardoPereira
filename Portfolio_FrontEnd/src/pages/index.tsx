import LanguageCard from "../components/LanguageCard";
import BtnNavigation from "../components/btnNavigation";
import Divider from "../components/divider";
import Navbar from "../components/navBar";
import Presentation from "../components/presentation";
import ProjectCard from "../components/projectCard";
import "../styles/index.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="bodyHome">
        <Presentation />
        <Divider text="Projetos" />
        <div className="row">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <BtnNavigation
          text={"Ver mais"}
          navigation={""}
          containerStyle={btnContainerStyle}
          textStyle={{
            color: "white",
            fontSize: "17px",
            letterSpacing: "0.5px",
          }}
        />
        <Divider text="Habilidades" />
        <div className="row">
          <LanguageCard language="JAVASCRYPT" level={50} color={"yellow"} />
          <LanguageCard language="TYPESCRIPT" level={50} color={"blue"} />
          <LanguageCard language="C++" level={50} color={"pink"} />
        </div>
      </div>
    </>
  );
}

export default App;

const btnContainerStyle = {
  position: "relative",
  top: "50px",
  width: "150px",
  height: "45px",
  backgroundColor: "#5913aa",
  alignItems: "center",
  justifyContent: "center",
};
