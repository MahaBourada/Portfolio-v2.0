import React from "react";

export const WideButton = ({ label, icon }) => {
  return (
    <button
      className={`${
        icon && "flex flex-row items-center"
      } cursor-pointer mx-2 px-14 py-1 bg-accent dark:bg-dark-accent text-white hover:bg-accent-hover focus:bg-accent-hover hover:dark:bg-dark-accent-hover focus:dark:bg-dark-accent-hover  rounded-xl transition-colors duration-500 leading-normal tracking-widest w-fit text-3xl font-semibold max-lg:text-2xl max-lg:px-12 max-lg:py-1.5 max-lg:focus:bg-accent-hover`}
    >
      {label} {icon && icon}
    </button>
  );
};

export const ShortButton = ({ label, icon }) => {
  return (
    <button
      className={`${
        icon && "flex flex-row items-center"
      } cursor-pointer mx-2 px-14 py-1 bg-accent dark:bg-dark-accent text-white hover:bg-accent-hover hover:dark:bg-dark-accent-hover rounded-xl transition-colors duration-500 leading-normal tracking-widest w-fit text-3xl max-lg:text-2xl
       font-semibold max-lg:px-12 max-lg:py-1.5 max-lg:focus:bg-accent-hover`}
    >
      {label} {icon && icon}
    </button>
  );
};

export const BlackBorderButton = ({ label, onClick, isSelected }) => {
  return (
    <button
      className={`${
        isSelected ? "bg-black-hover dark:bg-white/15" : "bg-transparent"
      } border-2 border-black dark:border-white cursor-pointer mx-2 px-8 py-2 text-black dark:text-white hover:bg-black-hover focus:bg-black-hover hover:dark:bg-white/15 focus:dark:bg-white/15 rounded-xl transition-colors duration-500 leading-normal tracking-widest w-fit text-2xl font-medium text-nowrap max-lg:text-lg max-lg:px-4`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
