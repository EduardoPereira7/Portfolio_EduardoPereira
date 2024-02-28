import LanguageCard from "../components/LanguageCard";
import BtnNavigation from "../components/btnNavigation";
import Divider from "../components/divider";
import Error from "../components/error";
import Loading from "../components/loading";
import Presentation from "../components/presentation";
import ProjectCard from "../components/projectCard";
import { usePersonContext } from "../contexts/PersonContext";
import { useProjects } from "../hooks/useProjects";
import "../styles/index.css";

function App() {
  const {
    person,
    loading: personLoading,
    error: personError,
  } = usePersonContext();
  const {
    projects,
    loading: projectsLoading,
    error: projectsError,
  } = useProjects(person?.id || -1);

  if (personLoading || projectsLoading) {
    return <Loading />;
  }
  if (personError || projectsError) {
    return <Error message={personError ? personError : projectsError} />;
  }

  return (
    <div className="bodyHome">
      <Presentation />
      <Divider text="Projetos" />
      <div className="row">
        {projects
          ?.slice(0, 6)
          .map(
            (project) =>
              project && (
                <ProjectCard
                  key={project.id}
                  id={project.id}
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
        navigation={"/projects"}
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
        {person?.technologies.slice(0, 5).map((technology) => (
          <LanguageCard
            key={technology.id}
            language={technology.name}
            level={technology.pivot.level}
            color={technology.color}
          />
        ))}
      </div>
      <br />
      <span className="languageNote">
        O nível de avaliação apresentado em cada linguagem de programação é uma
        representação subjetiva do meu conhecimento e habilidades.
      </span>
      <span className="languageNote" style={{ marginTop: 10 }}>
        {"Iniciante (0-30);"} {"Intermediário (31-60);"} {"Avançado (61-90);"}{" "}
        {"Especialista (91-100)."}
      </span>
      <BtnNavigation
        text={"Ver todas as habilidades"}
        navigation={"/skills"}
        containerStyle={btnContainerStyle}
        textStyle={{
          color: "white",
          fontSize: "17px",
          letterSpacing: "0.5px",
        }}
      />
    </div>
  );
}

export default App;

const btnContainerStyle = {
  display: "flex",
  width: "auto",
  height: "45px",
  backgroundColor: "#5913aa",
  alignItems: "center",
  justifyContent: "center",
  paddingLeft: "20px",
  paddingRight: "20px",
  marginTop: "30px",
};
