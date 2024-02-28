import "./styles.css";

const Loading = () => {
  return (
    <div className="loader_container">
      <span className="loader_text">A carregar os dados...</span>
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
