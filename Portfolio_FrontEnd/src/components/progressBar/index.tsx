import "./styles.css";

interface ProgressBarProps {
  value: number;
  color: string;
}

const ProgressBar = ({ value, color }: ProgressBarProps) => {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar__value"
        style={{ width: `${value}%`, backgroundColor: color }}
      />
    </div>
  );
};

export default ProgressBar;
