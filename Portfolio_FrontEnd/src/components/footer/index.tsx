import React from "react";
import "./styles.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Eduardo Pereira. Todos os direitos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
