import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { getAssetUrl } from "../utils/getAssetsUrl";

const About = () => {
  const { t } = useTranslation("homeAbout");
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const MIN_RATIO = 0.25;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= MIN_RATIO) {
            setVisible(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: MIN_RATIO, rootMargin: "0px 0px 0% 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative mt-20 z-0 scroll-mt-30 max-lg:scroll-mt-25"
      id="about-section"
    >
      <img
        src={getAssetUrl("/assets/vectors/smallCircles.svg")}
        alt=""
        className="absolute w-22 max-lg:w-20 max-md:w-20 max-sm:w-12 h-auto bottom-20 max-lg:bottom-16 max-md:bottom-18 -left-14 max-lg:-left-0 max-md:-left-3 rotate-75 block dark:hidden object-contain pointer-events-none"
      />

      <img
        src={getAssetUrl("/assets/vectors/smallCirclesDark.svg")}
        alt=""
        className="absolute w-22 max-lg:w-20 max-md:w-20 max-sm:w-12 h-auto bottom-20 max-lg:bottom-16 max-md:bottom-18 -left-14 max-lg:-left-0 max-md:-left-3 rotate-75 hidden dark:block object-contain pointer-events-none"
      />

      <img
        src="https://storage.googleapis.com/devwebmaha/portfolio/smallJelly.webp"
        alt=""
        className="absolute w-24 max-lg:w-22 max-sm:w-16 h-auto bottom-10 max-lg:bottom-4 max-md:bottom-6 left-0 max-lg:left-10 max-md:left-0 -rotate-11 z-0 object-contain pointer-events-none"
        aria-hidden="true"
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
            className="w-full h-auto block dark:hidden"
          />

          <img
            src={getAssetUrl("/assets/vectors/aboutCirclesDark.svg")}
            alt=""
            className="w-full h-auto hidden dark:block"
          />

          <img
            src="https://storage.googleapis.com/devwebmaha/portfolio/jellyfish.webp"
            alt=""
            className={`absolute left-2 top-4 w-[80%] h-auto max-md:w-[85%] transition-all duration-700 ease-out 
              ${
                visible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }`}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
