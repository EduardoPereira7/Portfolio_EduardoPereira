import { useEffect, useState } from "react";
import "./styles.css";

interface ErrorProps {
  message?: string | null;
}

const Error = ({ message }: ErrorProps) => {
  const [messageError, setMessageError] = useState<string | null>(null);
  useEffect(() => {
    setMessageError(message || "Erro desconhecido");
  }, [messageError]);
  return (
    <div className="errorContainer">
      <p className="errorMessage">{messageError}</p>
    </div>
  );
};

export default Error;
