import LanguageCard from "../../components/LanguageCard";
import Loading from "../../components/loading";
import TitlePages from "../../components/titlePages";
import { usePersonContext } from "../../contexts/PersonContext";
import "./styles.css";

const SkillsPage: React.FC = () => {
  const { person, loading, error } = usePersonContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <h1>Error: {error}</h1>;
  }
  return (
    <div className="skills_container">
      <TitlePages title="Habilidades" />
      <div className="skillsCard_container">
        {person?.technologies.map((technology) => (
          <LanguageCard
            key={technology.id}
            language={technology.name}
            level={technology.pivot.level}
            color={technology.color}
          />
        ))}
      </div>
      <span className="languageNoteSkills">
        O nível de avaliação apresentado em cada linguagem de programação é uma
        representação subjetiva do meu conhecimento e habilidades.
      </span>
      <span className="languageNoteSkills" style={{ marginTop: 10 }}>
        {"Iniciante (0-30);"} {"Intermediário (31-60);"} {"Avançado (61-90);"}{" "}
        {"Especialista (91-100)."}
      </span>
    </div>
  );
};

export default SkillsPage;
