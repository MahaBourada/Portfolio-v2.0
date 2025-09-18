import { Menu, MousePointerClick, X } from "lucide-react";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`z-50 pt-6 max-lg:pt-4 pb-2 text-2xl max-xl:text-xl fixed w-full bg-background ${
        isOpen ? "max-lg:h-screen" : "max-lg:h-fit"
      }`}
    >
      <div className="flex flex-row items-center justify-between lg:hidden">
        <div className="flex flex-row items-center ml-3">
          <button
            type="button"
            className="cursor-pointer p-1 rounded-lg focus:bg-hover"
          >
            <img
              src="/vectors/accIcon.svg"
              alt="Menu d'accessibilité"
              width={40}
            />
          </button>

          <div className="w-[1px] h-12 mx-1.5 bg-black"></div>

          <button
            className="cursor-pointer mx-1 px-2 py-1.5 
                    bg-accent text-white
                    focus:bg-[#481A66] rounded-lg transition-colors duration-500"
            type="button"
          >
            English version
          </button>
        </div>

        <button
          type="button"
          className="w-fit mx-3 focus:bg-hover rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X strokeWidth={3} size={46} className="text-black" />
          ) : (
            <Menu strokeWidth={3} size={46} className="text-black" />
          )}
        </button>
      </div>

      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } lg:flex flex-row justify-between items-center max-lg:flex-col`}
      >
        <div className="flex flex-row items-center justify-between mb-5 mx-4 max-lg:hidden">
          <button
            type="button"
            className="cursor-pointer mx-1 p-1 rounded-lg hover:bg-hover"
          >
            <img
              src="/vectors/accIcon.svg"
              alt="Menu d'accessibilité"
              width={40}
            />
          </button>

          <div className="w-[1px] h-12 mx-2 bg-black"></div>

          <button
            className="flex flex-row items-center
                      cursor-pointer mx-2 px-5 py-1.5 
                    bg-accent text-white
                    hover:bg-[#481A66] rounded-lg transition-colors duration-500"
            type="button"
          >
            English version
          </button>
        </div>

        <div className="mx-7 max-lg:w-full max-lg:text-center max-lg:mt-10">
          <nav className="font-medium max-lg:flex max-lg:flex-col text-nowrap">
            <a
              className="mx-2 px-2 py-1 rounded-lg transition-colors duration-500 hover:bg-hover max-lg:py-3.5 max-lg:focus:bg-hover max-lg:rounded-none max-lg:mx-0"
              href="#home-section"
            >
              Accueil
            </a>
            <a
              className="mx-2 px-2 py-1 rounded-lg transition-colors duration-500 hover:bg-hover max-lg:py-3 max-lg:focus:bg-hover max-lg:rounded-none max-lg:mx-0"
              href="#about-section"
            >
              À propos
            </a>
            <a
              className="mx-2 px-2 py-1 rounded-lg transition-colors duration-500 hover:bg-hover max-lg:py-3 max-lg:focus:bg-hover max-lg:rounded-none max-lg:mx-0"
              href="#skills-section"
            >
              Compétences
            </a>
            <a
              className="mx-2 px-2 py-1 rounded-lg transition-colors duration-500 hover:bg-hover max-lg:py-3 max-lg:focus:bg-hover max-lg:rounded-none max-lg:mx-0"
              href="#projects-section"
            >
              Projets
            </a>
            <a
              className="mx-2 px-2 py-1 rounded-lg transition-colors duration-500 hover:bg-hover max-lg:py-3 max-lg:focus:bg-hover max-lg:rounded-none max-lg:mx-0"
              href="#contact-section"
            >
              Contact
            </a>
          </nav>

          <div className="h-[0.5px] mt-5 bg-black max-lg:hidden"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
