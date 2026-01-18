import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";
import { getAssetUrl } from "../utils/getAssetsUrl";
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

const Home = () => {
  const { t, i18n } = useTranslation("homeAbout");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      data-animate="stagger"
      data-animate-lifetime="once"
      className="relative flex flex-row items-stretch justify-center max-lg:flex-col-reverse max-lg:justify-end readerMode:flex-col-reverse scroll-mt-50 animate-stagger"
      id="home-section"
    >
      <img
        src={getAssetUrl("/assets/vectors/smallSquares.svg")}
        alt=""
        className="absolute w-28 max-lg:w-24 max-md:w-20 max-sm:w-16 h-auto top-10 max-lg:top-0 max-md:top-0 max-sm:top-0 right-0 max-lg:right-37 max-md:right-28 max-sm:right-8 block dark:hidden object-contain pointer-events-none transition-all duration-700 ease-out alive animate-item"
      />

      <img
        src={getAssetUrl("/assets/vectors/smallSquaresDark.svg")}
        alt=""
        className="absolute w-28 max-lg:w-24 max-md:w-20 max-sm:w-16 h-auto top-10 max-lg:top-0 max-md:top-0 max-sm:top-0 right-0 max-lg:right-37 max-md:right-28 max-sm:right-8 hidden dark:block object-contain pointer-events-none transition-all duration-700 ease-out alive animate-item"
      />

      <img
        src="https://storage.googleapis.com/devwebmaha/portfolio/smallJelly.webp"
        alt=""
        data-animate
        className="absolute w-32 max-lg:w-22 max-md:w-16 max-sm:w-16 h-auto top-18 max-lg:top-5 max-md:top-4 right-2 max-lg:right-40 max-md:right-32 max-sm:right-9 rotate-10 object-contain pointer-events-none transition-all duration-700 ease-out alive float animate-item slide-from-right"
        aria-hidden="true"
      />

      <div className="relative w-3/4 flex items-center justify-center max-sm:w-full max-md:w-3/4 max-lg:w-7/12 max-lg:mx-auto readerMode:mx-auto readerMode:mt-24 animate-item">
        <img
          src={getAssetUrl("/assets/vectors/homeSquares.svg")}
          alt=""
          className="p-8 object-contain max-lg:w-full block dark:hidden transition-all duration-700 ease-out alive animate-item float"
        />

        <img
          src={getAssetUrl("/assets/vectors/homeSquaresDark.svg")}
          alt=""
          className="p-8 object-contain max-lg:w-full hidden dark:block transition-all duration-700 ease-out alive animate-item float"
        />

        <img
          src="https://storage.googleapis.com/devwebmaha/portfolio/Maha.webp"
          alt=""
          data-animate
          className={`absolute w-[86%] p-8 object-contain transition-all duration-1000 ease-out alive rounded-[3rem]
            ${
              mounted
                ? "translate-x-0 opacity-100 scale-100"
                : "-translate-x-12 opacity-0 scale-95"
            }`}
        />
      </div>

      <div className="w-full h-[calc(100vh-60vh)] my-auto flex flex-col justify-between max-lg:h-[calc(100vh-57vh)] animate-item">
        <p className="p-2 readerMode:hidden">
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
            speed={30}
            className="text-4xl font-semibold max-lg:text-3xl"
            repeat={Infinity}
            aria-hidden="true"
          />

          <span className="sr-only">
            {t("home.2")} <br /> {t("home.3")} <br /> {t("home.4")}
          </span>
        </p>

        <div className="hidden readerMode:block my-10">
          <p>
            <span>{t("home.1")}</span>
            <br />
            <span> Je suis Maha Bourada</span>
          </p>
          <ul className="mx-10 list-disc">
            <li>{t("home.2")}</li>
            <li>{t("home.3")}</li>
            <li>{t("home.4")}</li>
          </ul>
        </div>

        <a
          href={getAssetUrl("/assets/files/CV_Maha_Bourada.pdf")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center ml-auto mr-5 max-lg:mx-auto w-fit cursor-pointer mx-2 px-14 py-1 bg-accent dark:bg-dark-accent text-white hover:bg-accent-hover focus:bg-accent-hover hover:dark:bg-dark-accent-hover focus:dark:bg-dark-accent-hover  rounded-xl transition-colors duration-500 leading-normal tracking-widest text-3xl font-semibold max-lg:text-2xl max-lg:px-12 max-lg:py-1.5 max-lg:focus:bg-accent-hover readerMode:mx-auto pulse-on-hover animate-item"
        >
          <span className="mr-2 mt-1">CV</span>
          <ExternalLink size={26} color="#DCDCDC" strokeWidth={2.25} />
        </a>
      </div>
    </div>
  );
};

export default Home;
