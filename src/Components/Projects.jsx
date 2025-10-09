import { useState } from "react";
import Carousel from "./global/Carousel";
import { Github, Link } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation("projects");
  const projects = t("projects", { returnObjects: true });

  const [isMore, setIsMore] = useState(false);

  return (
    <div className="my-20" id="projects-section">
      <h1 className="text-5xl font-semibold max-lg:text-4xl">{t("title")}</h1>

      <div className="flex flex-col items-center">
        <Carousel projects={projects} />

        <button
          className="cursor-pointer mx-2 my-6 px-8 py-1 bg-accent dark:bg-dark-accent text-white hover:bg-accent-hover hover:dark:bg-dark-accent-hover rounded-xl transition-colors duration-500 leading-normal tracking-widest w-fit text-2xl font-semibold max-lg:text-xl max-lg:px-5 max-lg:py-1.5 focus:bg-accent-hover focus:dark:bg-dark-accent-hover"
          onClick={() => setIsMore(!isMore)}
        >
          {isMore ? t("seeLess") : t("seeMore")}
        </button>

        <AnimatePresence>
          {isMore && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mx-auto my-5 grid grid-cols-2 gap-12 max-lg:grid-cols-1 max-xl:gap-5 readerMode:grid-cols-1"
            >
              {projects.map((prjct, i) => (
                <div
                  key={i}
                  className="relative w-full h-[20rem] flex-shrink-0 mx-auto max-lg:w-11/12 readerMode:w-10/12"
                >
                  <img
                    src={getAssetUrl(`/assets/images/projects/${prjct.path}`)}
                    alt={prjct.alt}
                    className="w-full h-full object-cover object-top rounded-2xl bg-neutral-800 bg-gradient-to-b"
                  />

                  <div className="absolute bottom-0 mx-4 my-2 px-4 py-1 text-white bg-accent-hover dark:bg-dark-accent-hover rounded-xl w-[calc(100%-2rem)]">
                    <h2 className="text-2xl font-semibold line-clamp-1 max-sm:text-lg">
                      {prjct.name}
                    </h2>
                    <div className="flex flex-row items-center justify-between">
                      <p className="text-xl mx-2 my-1 line-clamp-1 max-sm:text-base max-sm:my-0">
                        {prjct.tech}
                      </p>

                      <a
                        href={prjct.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={t("git_label", { project: prjct.name })}
                      >
                        {prjct.link.includes("https://github") ? (
                          <Github size={31} className="max-sm:w-7 max-sm:h-7" />
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
