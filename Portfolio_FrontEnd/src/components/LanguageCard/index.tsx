import { LanguageCardProps } from "../../types/components/LanguageCardProps";
import ProgressBar from "../progressBar";
import "./styles.css";

const LanguageCard = ({ language, level, color }: LanguageCardProps) => {
  return (
    <div className="language-card">
      <span className="language_text" style={{ color: color }}>
        {language}
      </span>
      <div className="language-card_classification">
        <span className="language-card__classification_text">
          Avaliado com:
        </span>
        <span className="language-card__classification_number">{level}</span>
        <ProgressBar value={level} color={color} />
      </div>
    </div>
  );
};

export default LanguageCard;
