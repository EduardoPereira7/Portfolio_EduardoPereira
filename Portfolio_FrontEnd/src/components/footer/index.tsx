import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "20px",
        left: "0",
        bottom: "0",
        width: "100%",
        color: "white",
        alignSelf: "flex-end",
      }}
    >
      <p>
        © {new Date().getFullYear()} Eduardo Pereira. Todos os direitos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
