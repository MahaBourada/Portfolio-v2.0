import React from "react";

const About = () => {
  return (
    <div className="mt-20" id="about-section">
      <div className="flex flex-row items-stretch justify-center max-lg:flex-col">
        <div className="p-2 w-[65%] max-lg:w-full max-lg:mb-20">
          <h1 className="text-5xl font-semibold max-lg:text-4xl">À propos</h1>
          <p className="my-6">
            Passionnée par les jeux vidéo et l'art, j'ai naturellement trouvé ma
            voie dans l'informatique. Je me suis spécialisée dans le
            développement de logiciels, où je peux exprimer ma créativité à
            travers le code et concevoir des solutions aussi fonctionnelles
            qu'esthétiques.
          </p>
        </div>

        <div className="relative bottom-24 w-3/4 flex items-center justify-center max-sm:w-full max-lg:mx-auto max-lg:mt-14">
          <img
            src="/vectors/aboutCircles.svg"
            alt=""
            className="w-full h-fit"
          />

          <img
            src="/images/jellyfish.png"
            alt="Dessin de méduse réalisé par Maha Bourada"
            className="absolute left-2 top-4 w-[80%] h-fit max-md:w-[85%]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
