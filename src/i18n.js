import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// detection options (adapted from your snippet)
const detectionOptions = {
  // Order and from where user language should be detected
  order: ["localStorage", "navigator", "htmlTag"],

  // Where to store the language
  caches: ["localStorage"],

  // Optional: keys or params to lookup language from
  lookupLocalStorage: "lang",
  // normalize detected language before caching (e.g. "en-US" -> "en")
  convertDetectedLanguage: (lng) => {
    if (!lng) return lng;
    if (typeof lng !== "string") return lng;
    return lng.split("-")[0];
  },
};
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // use language-only codes like "en"
    load: "languageOnly",
    // plug detection options
    detection: detectionOptions,
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false, // react already does xss protection
    },
    backend: {
      loadPath: `${import.meta.env.BASE_URL}/locales/{{lng}}/{{ns}}.json`,
    },
    ns: ["homeAbout", "navigation", "projects", "skills", "contact"], // namespaces
    defaultNS: "homeAbout",
  });

export default i18n;
