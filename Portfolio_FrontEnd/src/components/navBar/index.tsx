import { Link } from "react-router-dom";
import BtnNavigation from "../btnNavigation";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navBar">
      <Link to="/" className="no-underline">
        <span className="first">
          Portfó<span className="second">lio</span>
        </span>
      </Link>
      <div className="navigation">
        <BtnNavigation text="Sobre mim" navigation="/about" />
        <BtnNavigation text="Projetos" navigation={"/projects"} />
        <BtnNavigation text="Habilidades" navigation="/skills" />
        <BtnNavigation text="Contacto" navigation="/contact" />
      </div>
    </nav>
  );
};

export default Navbar;
