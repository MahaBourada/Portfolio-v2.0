import React from "react";

export const TallButton = ({ label, icon }) => {
  return (
    <button
      className={`${
        icon && "flex flex-row items-center"
      } cursor-pointer mx-2 px-14 py-1 bg-accent text-white hover:bg-[#481A66] rounded-xl transition-colors duration-500 leading-normal tracking-widest w-fit text-3xl font-semibold max-lg:text-2xl max-lg:px-12 max-lg:py-1.5 max-lg:focus:bg-[#481A66]`}
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
      } cursor-pointer mx-2 px-14 py-1 bg-accent text-white hover:bg-[#481A66] rounded-xl transition-colors duration-500 leading-normal tracking-widest w-fit text-3xl font-semibold max-lg:text-2xl max-lg:px-12 max-lg:py-1.5 max-lg:focus:bg-[#481A66]`}
    >
      {label} {icon && icon}
    </button>
  );
};
