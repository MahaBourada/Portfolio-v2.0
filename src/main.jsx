import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import i18n from "./i18n";
import "./utils/animateOnScroll";

// ensure the HTML `lang` attribute matches the current i18n language at startup
document.documentElement.lang =
  i18n?.language || localStorage.getItem("lang") || "fr";

// update the HTML `lang` attribute whenever the language changes at runtime
i18n.on?.("languageChanged", (lng) => {
  if (lng) document.documentElement.lang = lng;
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
