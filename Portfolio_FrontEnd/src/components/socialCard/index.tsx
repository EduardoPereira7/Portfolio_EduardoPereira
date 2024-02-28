import { SocialCardProps } from "../../types/components/SocialCardProps";
import "./styles.css";

const SocialCard = ({
  title,
  image,
  link,
  color,
  backColor,
}: SocialCardProps) => {
  return (
    <a
      className="socialCardContainer"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ backgroundColor: backColor }}
    >
      <img src={image} alt="image" className="logoLinks" />
      <span style={{ color: color }} className="linkTile">
        {title}
      </span>
    </a>
  );
};

export default SocialCard;
