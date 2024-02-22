import LanguageCard from "../../components/LanguageCard";
import TitlePages from "../../components/titlePages";
import { usePersonContext } from "../../contexts/PersonContext";
import "./styles.css";

const SkillsPage: React.FC = () => {
  const { person, loading, error } = usePersonContext();
  if (loading) {
    return <h1>Loading...</h1>;
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
        O nível de avaliação apresentado em cada linguagem de programação é
        referente à nota atribuída em cada UFCD na{" "}
        <a href="https://www.atec.pt/" style={{ color: "#fff" }}>
          Atec
        </a>
        .
      </span>
    </div>
  );
};

export default SkillsPage;
