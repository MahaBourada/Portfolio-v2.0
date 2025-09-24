import React, { useState } from "react";
import { BlackBorderButton } from "./global/Buttons";
import skillsIcons from "../data/skills.json";

const Skills = () => {
  const [isSelected, setIsSelected] = useState("all");

  return (
    <div className="mt-10 mb-20" id="skills-section">
      <h1 className="text-5xl font-semibold max-lg:text-4xl">Compétences</h1>

      <div className="flex flex-row items-center justify-center my-10 max-md:flex-col max-lg:gap-y-3">
        <BlackBorderButton
          label="Tout"
          onClick={() => setIsSelected("all")}
          isSelected={isSelected === "all"}
        />
        <BlackBorderButton
          label="Logiciels & Outils"
          onClick={() => setIsSelected("software")}
          isSelected={isSelected === "software"}
        />
        <BlackBorderButton
          label="Langages & Frameworks"
          onClick={() => setIsSelected("language")}
          isSelected={isSelected === "language"}
        />
        <BlackBorderButton
          label="Data"
          onClick={() => setIsSelected("data")}
          isSelected={isSelected === "data"}
        />
      </div>

      <div className="mx-auto grid grid-cols-11 gap-7 justify-self-center place-items-center place-self-center max-lg:grid-cols-5 max-lg:gap-4">
        {skillsIcons
          .filter((icon) => isSelected === "all" || icon.type === isSelected)
          .map((icon, index) => (
            <img
              key={index}
              src={icon.path}
              alt={icon.alt}
              className="w-fit h-16 object-contain max-md:h-12"
            />
          ))}
      </div>
    </div>
  );
};

export default Skills;
