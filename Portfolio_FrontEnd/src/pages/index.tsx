import LanguageCard from "../components/LanguageCard";
import BtnNavigation from "../components/btnNavigation";
import Divider from "../components/divider";
import Navbar from "../components/navBar";
import Presentation from "../components/presentation";
import ProjectCard from "../components/projectCard";
import { usePersonContext } from "../contexts/PersonContext";
import { useProjects } from "../hooks/useProjects";
import "../styles/index.css";

function App() {
  const { person, loading, error } = usePersonContext();
  const { projects } = useProjects(person?.id || -1);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <Navbar />
      <div className="bodyHome">
        <Presentation />
        <Divider text="Projetos" />
        <div className="row">
          {projects?.map(
            (project) =>
              project && (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  description={project.description}
                  thumbnail={project.thumbnail}
                  link={project.link}
                  technologies={project.technologies.map(
                    (technology) => technology.name
                  )}
                />
              )
          )}
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
        <br />
        <br />
        <Divider text="Habilidades" />
        <div className="row">
          {person?.technologies.map((technology) => (
            <LanguageCard
              key={technology.id}
              language={technology.name}
              level={technology.pivot.level}
              color={technology.color}
            />
          ))}
          <span className="languageNote">
            O nível de avaliação apresentado em cada linguagem de programação é
            referente à nota atribuída em cada UFCD na{" "}
            <a href="https://www.atec.pt/" style={{ color: "#fff" }}>
              Atec
            </a>
            .
          </span>
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
