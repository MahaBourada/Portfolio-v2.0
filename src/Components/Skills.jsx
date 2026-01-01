import { useState } from "react";
import { createPortal } from "react-dom";
import { BlackBorderButton } from "./global/Buttons";
import { useTranslation } from "react-i18next";
import { getAssetUrl } from "../utils/getAssetsUrl";

const Skills = () => {
  const { t } = useTranslation("skills");
  const [isSelected, setIsSelected] = useState("all");

  const skillsIcons = t("skillsIcons", { returnObjects: true });
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    left: 0,
    top: 0,
  });

  const showTooltip = (e, text) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({
      visible: true,
      text,
      left: rect.left + rect.width / 2,
      top: rect.top - 10,
    });
  };

  const hideTooltip = () => setTooltip({ ...tooltip, visible: false });

  return (
    <div
      data-animate="stagger"
      data-animate-lifetime="once"
      className="relative mt-10 mb-20 readerMode:mb-32 scroll-mt-30 max-lg:scroll-mt-25 animate-stagger"
      id="skills-section"
    >
      <h1 className="text-5xl font-semibold max-lg:text-4xl animate-item">
        {t("title")}
      </h1>

      <div className="flex flex-row items-center justify-center my-10 max-md:flex-col max-lg:gap-y-3 animate-item">
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
        data-animate
        className="absolute w-20 max-lg:w-18 max-md:w-16 max-sm:w-12 h-auto top-0 max-lg:-top-3 -right-6 max-lg:right-4 max-md:-right-2 rotate-12 z-0 object-contain pointer-events-none slide-from-right alive float animate-item"
        aria-hidden="true"
      />

      <div className="mx-auto grid grid-cols-11 gap-7 justify-self-center place-items-center place-self-center max-lg:grid-cols-5 max-lg:gap-4 readerMode:grid-cols-8 animate-stagger">
        {skillsIcons
          .filter((icon) => isSelected === "all" || icon.type === isSelected)
          .map((icon, index) => (
            <div
              key={index}
              tabIndex={0}
              className="relative group animate-item z-20"
              onMouseEnter={(e) => showTooltip(e, icon.name || icon.alt)}
              onMouseLeave={hideTooltip}
              onFocus={(e) => showTooltip(e, icon.name || icon.alt)}
              onBlur={hideTooltip}
            >
              <img
                src={getAssetUrl(`/assets/vectors/skillsIcons/${icon.path}`)}
                alt={icon.alt}
                data-animate=""
                className="w-fit h-16 object-contain max-md:h-12 pulse-on-hover z-10"
              />
            </div>
          ))}
      </div>
      {tooltip.visible &&
        createPortal(
          <div
            className="fixed pointer-events-none left-0 top-0 z-[9999]"
            style={{ left: tooltip.left, top: tooltip.top }}
          >
            <div className="absolute -translate-x-1/2 -translate-y-full whitespace-nowrap px-2 py-1 text-lg tracking-wider rounded bg-white font-main text-black shadow-lg dark:bg-[#384A64] dark:text-white">
              {tooltip.text}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Skills;
