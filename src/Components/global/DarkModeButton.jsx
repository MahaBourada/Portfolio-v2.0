import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const DarkModeButton = () => {
  const { t } = useTranslation("navigation");
  const { i18n } = useTranslation();

  const [darkTheme, setDarkTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", darkTheme);
  }, [darkTheme]);

  const toggleDarkTheme = () => {
    setDarkTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";

      return newTheme;
    });
  };

  return (
    <button
      type="button"
      className="cursor-pointer mx-1 p-1 rounded-lg hover:bg-main-hover focus:bg-main-hover hover:dark:bg-dark-main-hover focus:dark:bg-dark-main-hover"
      onClick={toggleDarkTheme}
      lang={i18n.language}
      aria-label={
        darkTheme === "light"
          ? t("accessibility.dark")
          : t("accessibility.light")
      }
    >
      {darkTheme === "light" ? (
        <Moon size={38} strokeWidth={2} />
      ) : (
        <Sun size={38} strokeWidth={2} />
      )}
    </button>
  );
};

export default DarkModeButton;
