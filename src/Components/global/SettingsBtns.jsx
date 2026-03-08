import { CirclePause, Moon, Sparkles, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAnimations } from "../../context/AnimationContext";

const SettingsBtns = () => {
  const { t } = useTranslation("navigation");
  const { i18n } = useTranslation();

  const [darkTheme, setDarkTheme] = useState(
    () => localStorage.getItem("theme") || "light",
  );

  const { animationsEnabled, setAnimationsEnabled } = useAnimations();

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", darkTheme);
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;

    if (animationsEnabled) {
      root.classList.remove("reduce-motion");
      localStorage.setItem("animations", "on");
    } else {
      root.classList.add("reduce-motion");
      localStorage.setItem("animations", "off");
    }
  }, [animationsEnabled]);

  const toggleDarkTheme = () => {
    setDarkTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";

      return newTheme;
    });
  };

  const toggleAnimations = () => {
    setAnimationsEnabled((prev) => !prev);
  };

  return (
    <div className="flex flex-row items-center">
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

      <button
        type="button"
        className="cursor-pointer mx-1 p-1 rounded-lg hover:bg-main-hover focus:bg-main-hover hover:dark:bg-dark-main-hover focus:dark:bg-dark-main-hover"
        onClick={toggleAnimations}
        lang={i18n.language}
        aria-label={
          animationsEnabled
            ? t("accessibility.pause")
            : t("accessibility.animate")
        }
      >
        {animationsEnabled ? (
          <Sparkles size={37} strokeWidth={1.5} />
        ) : (
          <CirclePause size={38} strokeWidth={2} />
        )}
      </button>
    </div>
  );
};

export default SettingsBtns;
