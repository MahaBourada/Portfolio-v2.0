import React from "react";
import { TallButton } from "./global/Buttons";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div
      className="flex flex-row items-stretch justify-center max-lg:flex-col-reverse max-lg:justify-end"
      id="home-section"
    >
      <div className="relative w-3/4 flex items-center justify-center max-sm:w-full max-md:w-3/4 max-lg:w-7/12 max-lg:mx-auto">
        <img
          src="/vectors/homeSquares.svg"
          alt=""
          className="p-8 object-contain max-lg:w-full"
        />

        <img
          src="/images/Maha.png"
          alt=""
          className="absolute w-5/6 p-8 object-contain"
        />
      </div>

      <div className="w-full h-[calc(100vh-60vh)] my-auto flex flex-col justify-between max-lg:h-[calc(100vh-57vh)]">
        <p className="p-2">
          <span>Salut, je suis, </span>

          <br />

          <span className="text-3xl max-lg:text-2xl font-medium">
            Maha Bourada
          </span>

          <br />

          <TypeAnimation
            sequence={[
              "Développeuse web full-stack",
              1000, // 1 second
              "Assistante auditrice en accessibilité numérique",
              1000,
              "Étudiante en Master 2 Technologies et handicaps",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-4xl font-semibold max-lg:text-3xl"
            repeat={Infinity}
          />
        </p>

        <div className="ml-auto mr-5 max-lg:mx-auto w-fit">
          <TallButton label="CV" />
        </div>
      </div>
    </div>
  );
};

export default Home;
