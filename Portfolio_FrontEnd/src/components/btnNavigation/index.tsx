import BtnNavigationProps from "../../types/BtnNavigationProps";
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
    <button className="btn-navigation" style={containerStyle} onClick={onClick}>
      <span className="navText" style={textStyle}>
        {text}
      </span>
    </button>
  );
};

export default BtnNavigation;
