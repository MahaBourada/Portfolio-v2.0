import React from "react";

const About = () => {
  return (
    <div className="my-20" id="about-section">
      <h1 className="text-5xl font-semibold max-lg:text-4xl">À propos</h1>

      <div className="flex flex-row justify-between max-lg:flex-col">
        <p className="p-2 my-6 w-1/2 max-lg:w-full">
          Passionnée par les jeux vidéo et l'art, j'ai naturellement trouvé ma
          voie dans l'informatique. Je me suis spécialisée dans le développement
          de logiciels, où je peux exprimer ma créativité à travers le code et
          concevoir des solutions aussi fonctionnelles qu'esthétiques.
        </p>

        <div className="w-2/5">
          <img
            src="/images/jellyfish.png"
            alt=""
            className="w-full h-fit max-lg:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
