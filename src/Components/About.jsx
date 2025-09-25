import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("homeAbout");

  return (
    <div className="mt-20" id="about-section">
      <div className="flex flex-row items-stretch justify-center max-lg:flex-col">
        <div className="p-2 w-[65%] max-lg:w-full max-lg:mb-20">
          <h1 className="text-5xl font-semibold max-lg:text-4xl">
            {t("about.title")}
          </h1>
          <p className="my-6 p-2">{t("about.content")}</p>
        </div>

        <div className="relative bottom-24 w-3/4 flex items-center justify-center max-sm:w-full max-lg:mx-auto max-lg:mt-14">
          <img
            src="/vectors/aboutCircles.svg"
            alt=""
            className="w-full h-fit"
          />

          <img
            src="/images/jellyfish.png"
            alt={t("about.img_alt")}
            className="absolute left-2 top-4 w-[80%] h-fit max-md:w-[85%]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
