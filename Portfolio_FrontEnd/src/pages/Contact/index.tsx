import { useState } from "react";
import { sendMessage } from "../../api/postMessage";
import Error from "../../components/error";
import Loading from "../../components/loading";
import SocialCard from "../../components/socialCard";
import TitlePages from "../../components/titlePages";
import { usePersonContext } from "../../contexts/PersonContext";
import { usePlatforms } from "../../hooks/usePlatforms";
import "./styles.css";

const ContactPage = () => {
  const {
    person,
    loading: personLoading,
    error: personError,
  } = usePersonContext();
  const {
    platforms,
    loading: platformsLoading,
    error: platformsError,
  } = usePlatforms(person?.id || -1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [apiMessage, setApiMessage] = useState("");
  const [error, setError] = useState("");
  if (personLoading || platformsLoading) {
    return <Loading />;
  }
  if (personError || platformsError) {
    return <Error message={personError ? personError : platformsError} />;
  }
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError("");
    if (!name || !email || !subject || !message)
      return setError("Preencha todos os campos");
    try {
      const msg = await sendMessage(name, email, subject, message);
      setApiMessage(msg);
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error: string | any) {
      setError(error.message);
    }
  };

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
          <div className="separator" />
          <span className="sendMessageTitle">
            Perfis:
            <p className="directLinkText">Link direto</p>
          </span>
          <div className="ContactLinks">
            {platforms?.map((platform) => (
              <SocialCard
                key={platform.id}
                image={platform.icon}
                color={platform.color}
                backColor={platform.backColor}
                link={platform.link}
                title={platform.name}
              />
            ))}
          </div>
        </div>
        <div className="ContactForm">
          <span className="sendMessageTitle">Enviar Mensagem:</span>
          {apiMessage && <span className="apiMessage">{apiMessage}</span>}
          {error && <span className="errorMessage">{error}</span>}
          <form className="Form" onSubmit={handleSubmit}>
            <span className="formTitle">Nome:</span>
            <input
              type="text"
              className="shortInput"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="formTitle">Email:</span>
            <input
              type="email"
              className="shortInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="formTitle">Assunto:</span>
            <input
              type="text"
              className="shortInput"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <span className="formTitle">Mensagem:</span>
            <textarea
              className="longInput"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="sendMessageBtn">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
