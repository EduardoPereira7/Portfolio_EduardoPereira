import SocialCard from "../../components/socialCard";
import TitlePages from "../../components/titlePages";
import { usePersonContext } from "../../contexts/PersonContext";
import "./styles.css";

const ContactPage = () => {
  const { person } = usePersonContext();
  return (
    <div className="ContactPageContainer">
      <TitlePages title="Contacto" />
      <div className="ContactPageContent">
        <div className="ContactsOptions">
          <div className="ContactOption">
            <span className="sendMessageTitle">Contactos:</span>
            <div className="pointInfoContainer">
              <div className="point" />
              <span className="infoContact" data-label="Telemovel: ">
                {" "}
                {person?.phone}{" "}
              </span>
            </div>
            <div className="pointInfoContainer">
              <div className="point" />
              <span className="infoContact" data-label="Email: ">
                {" "}
                {person?.email}
              </span>
            </div>
          </div>
          <span className="sendMessageTitle">
            Plataformas:
            <p className="directLinkText">Link direto</p>
          </span>
          <div className="ContactLinks">
            <SocialCard
              title={""}
              image={""}
              link={""}
              backColor={""}
              color={""}
            />
          </div>
        </div>
        <div className="ContactForm">
          <span className="sendMessageTitle">Enviar Mensagem:</span>
          <form className="Form">
            <span className="formTitle">Nome:</span>
            <input type="text" className="shortInput" />
            <span className="formTitle">Email:</span>
            <input type="email" className="shortInput" />
            <span className="formTitle">Mensagem:</span>
            <input type="text" className="longInput" />
            <button className="sendMessageBtn">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
