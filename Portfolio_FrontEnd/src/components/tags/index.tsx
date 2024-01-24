import "./styles.css";

interface TagProps {
  text: string;
}

const Tag = ({ text }: TagProps) => {
  return (
    <div className="tagContainer">
      <span className="tagText">{text}</span>
    </div>
  );
};

export default Tag;
