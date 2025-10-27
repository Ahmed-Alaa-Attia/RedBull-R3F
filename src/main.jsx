import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

if (import.meta.env.DEV) {
  (async () => {
    const studio = (await import("@theatre/studio")).default;
    const extension = (await import("@theatre/r3f")).extension;
    studio.initialize();
    studio.extend(extension);
  })();
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
