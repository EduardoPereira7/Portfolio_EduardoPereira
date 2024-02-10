import React from "react";
import ReactDOM from "react-dom/client";
import { PersonProvider } from "./contexts/PersonContext.tsx";
import App from "./pages/index.tsx";
import "./styles/root.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PersonProvider loading={false} error={null}>
      <App />
    </PersonProvider>
  </React.StrictMode>
);
