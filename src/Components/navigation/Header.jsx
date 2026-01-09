import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import DarkModeButton from "../global/DarkModeButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const { t } = useTranslation("navigation");

  useEffect(() => {
    // Only lock the background page scroll while the menu is open.
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLangSwitch = () => {
    const newLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <header
      role="banner"
      className={`z-50 py-4 my-4 mx-5 text-2xl max-xl:text-xl fixed w-[97%] rounded-2xl bg-[#81A8DD] shadow-small dark:bg-[#384A64] max-lg:bg-background max-lg:m-0 max-lg:w-full max-lg:rounded-none ${
        isOpen ? "max-lg:h-screen" : "max-lg:h-fit"
      }`}
    >
      <div className="flex flex-row items-center justify-between lg:hidden">
        <div className="flex flex-row items-center ml-3">
          <DarkModeButton />

          <button
            className="cursor-pointer mx-1 px-2 py-1.5 
                    bg-accent dark:bg-dark-accent text-white
                    focus:bg-[#481A66] rounded-lg transition-colors duration-500"
            type="button"
            onClick={handleLangSwitch}
          >
            {i18n.language === "en" ? "Version Française" : "English Version"}
          </button>
        </div>

        <button
          type="button"
          className="w-fit mx-3 focus:bg-main-hover focus:dark:bg-dark-main-hover rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={t("header.mobile_btn")}
        >
          {isOpen ? (
            <X
              strokeWidth={3}
              size={40}
              className="text-black dark:text-white"
              aria-label={t("header.open_menu")}
            />
          ) : (
            <Menu
              strokeWidth={3}
              size={40}
              className="text-black dark:text-white"
              aria-label={t("header.close_menu")}
            />
          )}
        </button>
      </div>

      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } lg:flex flex-row justify-between items-center max-lg:flex-col`}
        style={
          isOpen
            ? {
                overflowY: "auto",
                maxHeight: "100vh",
                WebkitOverflowScrolling: "touch",
              }
            : undefined
        }
      >
        <div className="flex flex-row items-center justify-between my-1 mx-4 max-lg:hidden">
          <DarkModeButton />

          <button
            className="flex flex-row items-center
                      cursor-pointer mx-2 px-5 py-1.5 
                    bg-accent dark:bg-dark-accent text-white
                    hover:bg-accent-hover focus:bg-accent-hover hover:dark:bg-dark-accent-hover focus:dark:bg-dark-accent-hover rounded-lg transition-colors duration-500"
            type="button"
            lang={i18n.language === "en" ? "en" : "fr"}
            onClick={handleLangSwitch}
          >
            {i18n.language === "en" ? "Version Française" : "English Version"}
          </button>
        </div>

        <nav
          aria-label={
            i18n.language === "fr" ? "navigation principale" : "main navigation"
          }
          className="lg:mr-2.5 max-lg:w-full max-lg:text-center max-lg:mt-10 max-xl:text-2xl"
        >
          <ul className="flex font-medium max-lg:flex max-lg:flex-col text-nowrap">
            <li className="mx-2 px-2 py-1 rounded-lg transition-colors duration-500 hover:bg-main-hover max-lg:py-3.5 focus:bg-main-hover hover:dark:bg-dark-main-hover focus:dark:bg-dark-main-hover max-lg:rounded-none max-lg:mx-0">
              <a href="#home-section" onClick={() => setIsOpen(false)}>
                {t("header.home")}
              </a>
            </li>

            <li className="mx-2 px-2 py-1 rounded-lg transition-colors duration-500 hover:bg-main-hover max-lg:py-3 focus:bg-main-hover hover:dark:bg-dark-main-hover focus:dark:bg-dark-main-hover max-lg:rounded-none max-lg:mx-0">
              <a href="#about-section" onClick={() => setIsOpen(false)}>
                {t("header.about")}
              </a>
            </li>

            <li className="mx-2 px-2 py-1 rounded-lg transition-colors duration-500 hover:bg-main-hover max-lg:py-3 focus:bg-main-hover hover:dark:bg-dark-main-hover focus:dark:bg-dark-main-hover max-lg:rounded-none max-lg:mx-0">
              <a href="#skills-section" onClick={() => setIsOpen(false)}>
                {t("header.skills")}
              </a>
            </li>

            <li className="mx-2 px-2 py-1 rounded-lg transition-colors duration-500 hover:bg-main-hover max-lg:py-3 focus:bg-main-hover hover:dark:bg-dark-main-hover focus:dark:bg-dark-main-hover max-lg:rounded-none max-lg:mx-0">
              <a href="#projects-section" onClick={() => setIsOpen(false)}>
                {t("header.projects")}
              </a>
            </li>

            <li className="mx-2 px-2 py-1 rounded-lg transition-colors duration-500 hover:bg-main-hover max-lg:py-3 focus:bg-main-hover hover:dark:bg-dark-main-hover focus:dark:bg-dark-main-hover max-lg:rounded-none max-lg:mx-0">
              <a href="#contact-section" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
