import React from "react";

const Footer = () => {
  return (
    <footer
      className="flex mx-auto my-2 text-center text-lg max-lg:text-base max-lg:flex-col"
      role="contentinfo"
    >
      <button
        type="button"
        className="rounded-lg transition-colors duration-500 hover:bg-main-hover focus:bg-main-hover hover:dark:bg-dark-main-hover focus:dark:bg-dark-main-hover cursor-pointer underline py-1 px-2.5 mr-0.5"
      >
        Accessibilité : partiellement conforme
      </button>
      <p className="py-1">
        <span className="inline max-lg:hidden mr-2" aria-hidden="true">
          |
        </span>
        Maha Bourada @ Copyright 2026
      </p>
    </footer>
  );
};

export default Footer;
