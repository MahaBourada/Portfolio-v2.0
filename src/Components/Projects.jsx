import { useState } from "react";
import projects from "../data/projects.json";
import Carousel from "./global/Carousel";
import { Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [isMore, setIsMore] = useState(false);

  return (
    <div className="my-20" id="projects-section">
      <h1 className="text-5xl font-semibold max-lg:text-4xl">Projets</h1>

      <div className="flex flex-col items-center">
        <Carousel projects={projects} />

        <button
          className="cursor-pointer mx-2 my-6 px-8 py-1 bg-accent text-white hover:bg-accent-hover rounded-xl transition-colors duration-500 leading-normal tracking-widest w-fit text-2xl font-semibold max-lg:text-xl max-lg:px-5 max-lg:py-1.5 max-lg:focus:bg-accent-hover"
          onClick={() => setIsMore(!isMore)}
        >
          {isMore ? "Voir moins" : "Voir plus"}
        </button>

        <AnimatePresence>
          {isMore && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mx-auto my-5 grid grid-cols-2 gap-12 max-lg:grid-cols-1 max-xl:gap-5"
            >
              {projects.map((prjct, i) => (
                <div key={i} className="relative w-full flex-shrink-0 mx-auto max-lg:w-11/12">
                  <img
                    src={prjct.path}
                    alt={prjct.alt}
                    className="w-full h-full object-cover rounded-2xl bg-neutral-800 bg-gradient-to-b"
                  />

                  <div className="absolute bottom-0 mx-4 my-2 px-4 py-1 text-white bg-accent-hover/90 rounded-xl w-[calc(100%-2rem)]">
                    <h2 className="text-2xl font-semibold line-clamp-1 max-sm:text-lg">
                      {prjct.name}
                    </h2>
                    <div className="flex flex-row items-center justify-between">
                      <p className="text-xl mx-2 my-1 line-clamp-1 max-sm:text-base max-sm:my-0">
                        {prjct.tech}
                      </p>

                      <a href={prjct.link} target="_blank" rel="noreferrer">
                        <Github size={32} className="max-sm:w-7 max-sm:h-7" />
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
