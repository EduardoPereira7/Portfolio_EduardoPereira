import TitlePages from "../../components/titlePages";
import "./styles.css";

const ContactPage = () => {
  return (
    <div className="ContactPageContainer">
      <TitlePages title="Contact" />
      <div className="ContactPageContent">
        <div className="ContactsOptions">
          <h2>Contactos:</h2>
          <p>Phone: +55 11 9 9999-9999</p>
          <p>Email:</p>
          <h2>Plataformas:</h2>
          <p>Instagram: @instagram</p>
          <p>Facebook: @facebook</p>
          <p>Twitter: @twitter</p>
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
            <button className="sendMessageBtn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
