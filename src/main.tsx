import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Get the root element
const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element not found");
}

// Create root and render app
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
