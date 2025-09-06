import { MousePointerClick } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header
      className="flex flex-row justify-between items-center 
                pt-6 pb-2 text-2xl
                fixed w-full bg-background"
    >
      <div className="flex flex-row items-center justify-between mb-5 mx-4">
        <button
          type="button"
          className="cursor-pointer mx-1 p-1 
                                          rounded-lg hover:bg-hover"
        >
          <img
            src="public/vectors/accIcon.svg"
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
          <p className="mr-2">English version</p>
          <MousePointerClick
            className="text-white"
            size={28}
            strokeWidth={1.75}
          />
        </button>
      </div>

      <div className="mx-7">
        <nav className="mx-2 font-medium">
          <a
            className="mr-4 px-2 py-1 
                      rounded-lg transition-colors duration-500 hover:bg-hover
                  "
            href=""
            rel="noopener noreferrer"
          >
            Accueil
          </a>
          <a
            className="mx-4 px-2 py-1 rounded-lg t
                      ransition-colors duration-500 hover:bg-hover
                  "
            href=""
            rel="noopener noreferrer"
          >
            À propos
          </a>
          <a
            className="mx-4 px-2 py-1 rounded-lg t
                      ransition-colors duration-500 hover:bg-hover
                  "
            href=""
            rel="noopener noreferrer"
          >
            Compétences
          </a>
          <a
            className="mx-4 px-2 py-1 rounded-lg t
                      ransition-colors duration-500 hover:bg-hover
                  "
            href=""
            rel="noopener noreferrer"
          >
            Projets
          </a>
          <a
            className="ml-4 px-2 py-1 
                      rounded-lg transition-colors duration-500 hover:bg-hover
                  "
            href=""
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </nav>

        <div className="h-[0.5px] mt-5 bg-black"></div>
      </div>
    </header>
  );
};

export default Header;
