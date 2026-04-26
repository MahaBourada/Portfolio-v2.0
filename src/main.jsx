import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import i18n from "./i18n";
import "./utils/animateOnScroll";
import { AnimationProvider } from "./context/AnimationContext.jsx";

// ensure the HTML `lang` attribute matches the current i18n language at startup
document.documentElement.lang =
  i18n?.language || localStorage.getItem("lang") || "fr";

// update the HTML `lang` attribute whenever the language changes at runtime
i18n.on?.("languageChanged", (lng) => {
  if (lng) document.documentElement.lang = lng;
});

const rootElement = document.getElementById("root");
const app = (
  <StrictMode>
    <AnimationProvider>
      <App />
    </AnimationProvider>
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
