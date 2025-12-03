import React from "react";
import { useTranslation } from "react-i18next";
import { getAssetUrl } from "../utils/getAssetsUrl";

const About = () => {
  const { t } = useTranslation("homeAbout");

  return (
    <div className="relative mt-20 z-0" id="about-section">
      <img
        src={getAssetUrl("/assets/vectors/smallCircles.svg")}
        alt=""
        className="absolute w-22 h-fit bottom-20 -left-14 rotate-75 block dark:hidden"
      />

      <img
        src={getAssetUrl("/assets/vectors/smallCirclesDark.svg")}
        alt=""
        className="absolute w-22 h-fit bottom-20 -left-14 rotate-75 hidden dark:block"
      />

      <img
        src="https://storage.googleapis.com/devwebmaha/portfolio/smallJelly.webp"
        alt=""
        className="absolute w-24 h-fit bottom-10 left-0 -rotate-8 z-0"
      />

      <div className="flex flex-row items-stretch justify-center max-lg:flex-col readerMode:flex-col">
        <div className="p-2 w-[65%] z-50 max-lg:w-full max-lg:mb-20 readerMode:w-full">
          <h1 className="text-5xl font-semibold max-lg:text-4xl">
            {t("about.title")}
          </h1>
          <p className="my-6 p-2">{t("about.content")}</p>
        </div>

        <div className="relative bottom-24 w-3/4 flex items-center justify-center max-sm:w-full max-lg:mx-auto max-lg:mt-14 readerMode:mt-32 readerMode:mx-auto">
          <img
            src={getAssetUrl("/assets/vectors/aboutCircles.svg")}
            alt=""
            className="w-full h-fit block dark:hidden"
          />

          <img
            src={getAssetUrl("/assets/vectors/aboutCirclesDark.svg")}
            alt=""
            className="w-full h-fit hidden dark:block"
          />

          <img
            src="https://storage.googleapis.com/devwebmaha/portfolio/jellyfish.webp"
            alt={t("about.img_alt")}
            className="absolute left-2 top-4 w-[80%] h-fit max-md:w-[85%]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
