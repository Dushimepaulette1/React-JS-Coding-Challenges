import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserClicks from "./components/Button.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
