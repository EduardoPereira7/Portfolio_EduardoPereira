import Error from "../../components/error";
import Loading from "../../components/loading";
import TitlePages from "../../components/titlePages";
import { usePersonContext } from "../../contexts/PersonContext";
import "./styles.css";

const AboutMe = () => {
  const { loading, error, person } = usePersonContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error message={error} />;
  }

  const paragraphs = person?.about
    .split("\n")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);

  return (
    <div className="container_about">
      <TitlePages title="Sobre mim" />
      <div className="about_me">
        <div className="about_me_text">{paragraphs}</div>
        <div className="about_me_photo">
          <img src={person?.photo} alt="person" className="about_photo" />
          <div className="about_me_photo_text">
            <span>{person?.name}</span>
            <span>{person?.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
