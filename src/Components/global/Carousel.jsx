import { ChevronLeft, ChevronRight, Github } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Carousel = ({ projects }) => {
  const { t } = useTranslation("projects");
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-[70%] mx-auto my-10 max-sm:w-full max-xl:w-10/12">
      {/* Slides wrapper with overflow-hidden */}
      <div className="overflow-hidden rounded-2xl shadow-lg mx-10 max-sm:mt-10 max-sm:mx-0 max-lg:mx-4">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projects.map((prjct, idx) => (
            <div key={idx} className="relative w-full flex-shrink-0">
              <img
                src={`/assets/images/projects/${prjct.path}`}
                alt={prjct.alt}
                className="w-full h-full object-cover rounded-2xl bg-neutral-800 bg-gradient-to-b"
              />

              <div className="absolute bottom-0 mx-4 my-2 px-4 py-1 text-white bg-accent-hover/90 rounded-xl w-[calc(100%-2rem)]">
                <h2 className="text-2xl font-semibold max-sm:text-lg max-lg:line-clamp-1">
                  {prjct.name}
                </h2>
                <div className="flex flex-row items-center justify-between">
                  <p className="text-xl mx-2 my-1 max-sm:text-base max-lg:line-clamp-1">
                    {prjct.tech}
                  </p>

                  <a
                    href={prjct.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={t("git_label", { project: prjct.name })}
                  >
                    <Github size={32} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows OUTSIDE the clipped area */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-14 -translate-y-1/2 cursor-pointer border-black border-2 bg-black-hover p-3 rounded-full max-sm:top-0 max-sm:left-1/3 max-sm:p-2"
        aria-label={t("previous")}
      >
        <ChevronLeft
          size={32}
          strokeWidth={3}
          className="text-black pr-0.5 max-sm:w-7 max-sm:h-7"
        />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-14 -translate-y-1/2 cursor-pointer border-black border-2 bg-black-hover p-3 rounded-full max-sm:top-0 max-sm:right-1/3 max-sm:p-2"
        aria-label={t("next")}
      >
        <ChevronRight
          size={32}
          strokeWidth={3}
          className="text-black pl-0.5 max-sm:w-7 max-sm:h-7"
        />
      </button>

      {/* Dots */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2 bg-neutral-700/80 px-3 py-1.5 rounded-full">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`cursor-pointer w-3 h-3 rounded-full ${
              idx === current ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={idx + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
