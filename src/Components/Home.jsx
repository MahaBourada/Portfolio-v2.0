import React from "react";
import { WideButton } from "./global/Buttons";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation("homeAbout");
  const lang = localStorage.getItem("i18nextLng");

  return (
    <div
      className="flex flex-row items-stretch justify-center max-lg:flex-col-reverse max-lg:justify-end"
      id="home-section"
    >
      <div className="relative w-3/4 flex items-center justify-center max-sm:w-full max-md:w-3/4 max-lg:w-7/12 max-lg:mx-auto">
        <img
          src="/assets/vectors/homeSquares.svg"
          alt=""
          className="p-8 object-contain max-lg:w-full"
        />

        <img
          src="/assets/images/Maha.png"
          alt={t("home.img_alt")}
          className="absolute w-5/6 p-8 object-contain"
        />
      </div>

      <div className="w-full h-[calc(100vh-60vh)] my-auto flex flex-col justify-between max-lg:h-[calc(100vh-57vh)]">
        <p className="p-2">
          <span>{t("home.1")} </span>

          <br />

          <span className="text-3xl max-lg:text-2xl font-medium">
            Maha Bourada
          </span>

          <br />

          <TypeAnimation
            key={i18n.language}
            sequence={[
              t("home.2"),
              1000, // 1 second
              t("home.3"),
              1000,
              t("home.4"),
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-4xl font-semibold max-lg:text-3xl"
            repeat={Infinity}
          />
        </p>

        <a
          href={`/assets/files/CV_${
            lang === "fr" ? "francais" : "english"
          }.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto mr-5 max-lg:mx-auto w-fit cursor-pointer mx-2 px-14 py-1 bg-accent text-white hover:bg-accent-hover focus:bg-accent-hover rounded-xl transition-colors duration-500 leading-normal tracking-widest text-3xl font-semibold max-lg:text-2xl max-lg:px-12 max-lg:py-1.5 max-lg:focus:bg-accent-hover"
        >
          CV
        </a>
      </div>
    </div>
  );
};

export default Home;
