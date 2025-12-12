import { useState } from "react";
import { BlackBorderButton } from "./global/Buttons";
import { useTranslation } from "react-i18next";
import { getAssetUrl } from "../utils/getAssetsUrl";

const Skills = () => {
  const { t } = useTranslation("skills");
  const [isSelected, setIsSelected] = useState("all");

  const skillsIcons = t("skillsIcons", { returnObjects: true });

  return (
    <div className="relative mt-10 mb-20 readerMode:mb-32 scroll-mt-30 max-lg:scroll-mt-25" id="skills-section">
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
        className="absolute w-16 max-lg:w-14 max-md:w-12 max-sm:w-10 h-auto -top-5 max-lg:-top-6 max-md:-top-3 -right-10 max-lg:-right-0 max-md:-right-3 block dark:hidden object-contain pointer-events-none"
      />

      <img
        src={getAssetUrl("/assets/vectors/smallSquaresDark.svg")}
        alt=""
        className="absolute w-16 max-lg:w-14 max-md:w-12 max-sm:w-10 h-auto -top-5 max-lg:-top-6 max-md:-top-3 -right-10 max-lg:-right-0 max-md:-right-3 hidden dark:block object-contain pointer-events-none"
      />

      <img
        src="https://storage.googleapis.com/devwebmaha/portfolio/smallJelly.webp"
        alt=""
        className="absolute w-20 max-lg:w-18 max-md:w-16 max-sm:w-12 h-auto top-0 max-lg:-top-3 -right-6 max-lg:right-4 max-md:-right-2 rotate-12 z-0 object-contain pointer-events-none"
        aria-hidden="true"
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
