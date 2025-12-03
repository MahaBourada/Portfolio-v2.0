import { useState } from "react";
import { BlackBorderButton } from "./global/Buttons";
import { useTranslation } from "react-i18next";
import { getAssetUrl } from "../utils/getAssetsUrl";

const Skills = () => {
  const { t } = useTranslation("skills");
  const [isSelected, setIsSelected] = useState("all");

  const skillsIcons = t("skillsIcons", { returnObjects: true });

  return (
    <div className="relative mt-10 mb-20 readerMode:mb-32" id="skills-section">
      <h1 className="text-5xl font-semibold max-lg:text-4xl">{t("title")}</h1>

      <div className="flex flex-row items-center justify-center my-10 max-md:flex-col max-lg:gap-y-3">
        <BlackBorderButton
          label={t("menu.all")}
          onClick={() => setIsSelected("all")}
          isSelected={isSelected === "all"}
        />
        <BlackBorderButton
          label={t("menu.software")}
          onClick={() => setIsSelected("software")}
          isSelected={isSelected === "software"}
        />
        <BlackBorderButton
          label={t("menu.language")}
          onClick={() => setIsSelected("language")}
          isSelected={isSelected === "language"}
        />
        <BlackBorderButton
          label="Data"
          onClick={() => setIsSelected("data")}
          isSelected={isSelected === "data"}
        />
      </div>

      <img
        src={getAssetUrl("/assets/vectors/smallSquares.svg")}
        alt=""
        className="absolute w-16 h-fit -top-5 -right-10 rotate-12 block dark:hidden"
      />

      <img
        src={getAssetUrl("/assets/vectors/smallSquaresDark.svg")}
        alt=""
        className="absolute w-16 h-fit -top-5 -right-10 rotate-12 hidden dark:block"
      />

      <img
        src="https://storage.googleapis.com/devwebmaha/portfolio/smallJelly.webp"
        alt=""
        className="absolute w-20 h-fit top-0 -right-6 rotate-12 z-0"
      />

      <div className="mx-auto grid grid-cols-11 gap-7 justify-self-center place-items-center place-self-center max-lg:grid-cols-5 max-lg:gap-4 readerMode:grid-cols-8">
        {skillsIcons
          .filter((icon) => isSelected === "all" || icon.type === isSelected)
          .map((icon, index) => (
            <img
              key={index}
              src={getAssetUrl(`/assets/vectors/skillsIcons/${icon.path}`)}
              alt={icon.alt}
              className="w-fit h-16 object-contain max-md:h-12"
            />
          ))}
      </div>
    </div>
  );
};

export default Skills;
