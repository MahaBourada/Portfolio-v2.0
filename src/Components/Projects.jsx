import { useState } from "react";
import Carousel from "./global/Carousel";
import { Github, Link } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { getAssetUrl } from "../utils/getAssetsUrl";

const Projects = () => {
  const { t } = useTranslation("projects");
  const projects = t("projects", { returnObjects: true });

  const [isMore, setIsMore] = useState(false);

  return (
    <div
      data-animate="stagger"
      data-animate-lifetime="once"
      className="relative my-20 scroll-mt-30 max-lg:scroll-mt-25 animate-stagger"
      id="projects-section"
    >
      <h1 className="text-5xl font-semibold max-lg:text-4xl animate-item">
        {t("title")}
      </h1>

      <div className="flex flex-col items-center animate-item">
        <Carousel projects={projects.filter((project) => project.priority)} />

        <button
          className="cursor-pointer mx-2 my-6 px-8 py-1 bg-accent dark:bg-dark-accent text-white hover:bg-accent-hover hover:dark:bg-dark-accent-hover rounded-xl transition-colors duration-500 leading-normal tracking-widest w-fit text-2xl font-semibold max-lg:text-xl max-lg:px-5 max-lg:py-1.5 focus:bg-accent-hover focus:dark:bg-dark-accent-hover pulse-on-hover animate-item"
          onClick={() => setIsMore(!isMore)}
        >
          {isMore ? t("seeLess") : t("seeMore")}
        </button>

        <img
          src={getAssetUrl("/assets/vectors/smallCircles.svg")}
          alt=""
          className="absolute w-28 max-lg:w-24 max-md:w-20 max-sm:w-16 h-auto bottom-23 max-lg:bottom-10 left-0 -rotate-70 block dark:hidden object-contain pointer-events-none"
        />

        <img
          src={getAssetUrl("/assets/vectors/smallCirclesDark.svg")}
          alt=""
          className="absolute w-28 max-lg:w-24 max-md:w-20 max-sm:w-16 h-auto bottom-23 max-lg:bottom-10 left-0 -rotate-70 hidden dark:block object-contain pointer-events-none"
        />

        <img
          src="https://storage.googleapis.com/devwebmaha/portfolio/smallJelly.webp"
          alt=""
          data-animate
          className="absolute w-30 max-lg:w-28 max-md:w-24 max-sm:w-16 h-auto bottom-1 max-lg:-bottom-5 left-4 max-lg:right-2 -rotate-12 z-0 object-contain pointer-events-none alive float animate-item slide-from-left"
        />

        <AnimatePresence>
          {isMore && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mx-auto my-5 grid grid-cols-2 gap-12 max-lg:grid-cols-1 max-xl:gap-5 readerMode:grid-cols-1"
            >
              {projects
                .filter((project) => !project.priority)
                .map((prjct, i) => (
                  <div
                    key={i}
                    className="relative w-full h-[20rem] flex-shrink-0 mx-auto max-md:h-auto max-lg:w-11/12"
                  >
                    <img
                      src={getAssetUrl(`/assets/images/${prjct.path}`)}
                      alt=""
                      className="w-full h-full object-cover object-top rounded-2xl bg-neutral-800 bg-gradient-to-b"
                    />

                    <div className="absolute bottom-0 mx-4 my-2 px-4 py-1 text-white bg-accent-hover dark:bg-dark-accent-hover rounded-xl w-[calc(100%-2rem)]">
                      <h2 className="text-xl font-semibold max-sm:text-lg">
                        {prjct.name}
                      </h2>
                      <div className="flex flex-row items-center justify-between">
                        <p className="text-lg mx-2 my-1 max-sm:text-base max-sm:my-0">
                          <span className="font-semibold">Technologies : </span>
                          {prjct.tech}
                        </p>

                        <a
                          href={prjct.link}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={
                            prjct.link.includes("github.com")
                              ? t("git_label")
                              : t("web_label")
                          }
                        >
                          {prjct.link.includes("github.com") ? (
                            <Github
                              size={31}
                              className="max-sm:w-7 max-sm:h-7"
                            />
                          ) : (
                            <Link
                              size={27}
                              strokeWidth={2.5}
                              className="max-sm:w-7 max-sm:h-7"
                            />
                          )}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
