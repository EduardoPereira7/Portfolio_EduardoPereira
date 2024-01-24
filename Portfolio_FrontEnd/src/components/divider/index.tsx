import "./styles.css";

interface dividerProps {
  text: string;
}

const Divider = ({ text }: dividerProps) => {
  return (
    <div className="dividerContainer">
      <span className="key">{"["}</span>
      <span className="dividerText">{text}</span>
      <span className="key">{"]"}</span>
    </div>
  );
};

export default Divider;
