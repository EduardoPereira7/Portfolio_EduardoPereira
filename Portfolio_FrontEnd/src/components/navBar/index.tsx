import BtnNavigation from "../btnNavigation";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navBar">
      <span className="first">
        Portfó<span className="second">lio</span>
      </span>
      <div className="navigation">
        <BtnNavigation text="Sobre mim" navigation="/sobremim" />
        <BtnNavigation text="Projetos" navigation="/sobremim" />
        <BtnNavigation text="Habilidades" navigation="/sobremim" />
        <BtnNavigation text="Contacto" navigation="/sobremim" />
      </div>
    </nav>
  );
};

export default Navbar;
