import React from "react";
import { useTranslation } from "react-i18next";
import { getAssetUrl } from "../utils/getAssetsUrl";

const About = () => {
  const { t } = useTranslation("homeAbout");

  return (
    <div className="mt-20" id="about-section">
      <div className="flex flex-row items-stretch justify-center max-lg:flex-col readerMode:flex-col">
        <div className="p-2 w-[65%] max-lg:w-full max-lg:mb-20 readerMode:w-full">
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
            src="https://storage.googleapis.com/publicasse/maha/jellyfish.webp"
            alt={t("about.img_alt")}
            className="absolute left-2 top-4 w-[80%] h-fit max-md:w-[85%]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
