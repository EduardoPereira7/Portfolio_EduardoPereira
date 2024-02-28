import { Link } from "react-router-dom";
import BtnNavigationProps from "../../types/components/BtnNavigationProps";
import "./styles.css";

const BtnNavigation = ({
  text,
  navigation,
  containerStyle,
  textStyle,
}: BtnNavigationProps) => {
  const onClick = () => {
    console.log(`click ${navigation}`);
  };

  return (
    <Link to={navigation} style={{ textDecoration: "none" }}>
      <button
        className="btn-navigation"
        style={containerStyle}
        onClick={onClick}
      >
        <span className="navText" style={textStyle}>
          {text}
        </span>
      </button>
    </Link>
  );
};

export default BtnNavigation;
