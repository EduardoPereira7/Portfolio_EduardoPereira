import BtnNavigation from "../btnNavigation";
import Circle from "../circleImage";
import "./styles.css";

const Presentation = () => {
  return (
    <div className="presentation">
      <div className="left">
        <span className="title">Hello world !</span>
        <span className="subtitle"> Eu sou o Eduardo</span>
        <div className="developerContainer">
          <span className="developer">{"< / Desenvolvedor Junior >"} </span>
        </div>
        <p className="textPresentation">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, voluptate, error quidem, quod voluptatibus quas doloremque
          doloribus quia aliquam fugit. Quisquam, voluptates. Natus, quae
          voluptates. Quisquam, voluptates. Natus, quae voluptates.
        </p>
        <BtnNavigation
          text="Contacte-me"
          navigation="about"
          containerStyle={containerStyleBtn}
          textStyle={{ fontSize: "16px" }}
        />
      </div>
      <div className="img">
        <Circle />
      </div>
    </div>
  );
};

const containerStyleBtn = {
  marginTop: "25px",
  width: "160px",
  height: "55px",
  backgroundColor: "#451e72",
  alignItems: "center",
  justifyContent: "center",
};

export default Presentation;
