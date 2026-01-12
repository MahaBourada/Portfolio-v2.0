import { EMAILJS_CONFIG } from "../config/emailjs";

export const emailJSConfig = () => {
  const isConfigured =
    EMAILJS_CONFIG.SERVICE_ID !== "your_service_id" &&
    EMAILJS_CONFIG.TEMPLATE_ID !== "your_template_id" &&
    EMAILJS_CONFIG.PUBLIC_KEY !== "your_public_key" &&
    EMAILJS_CONFIG.SERVICE_ID !== "service_ntudb5o";
  if (!isConfigured) {
    console.error("Problème de configuration détecté!");
  }

  return isConfigured;
};
