import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";

const AccessibilityDialog = ({ onClose }) => {
  const { t } = useTranslation("navigation");
  const dialogRef = useRef(null);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    previouslyFocused.current = document.activeElement;
    const root = document.getElementById("root");
    if (root) root.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "hidden";

    // move focus into dialog (dialog must be focusable)
    setTimeout(() => dialogRef.current?.focus(), 0);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
      if (e.key === "Tab") {
        const focusable = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown, true);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
      if (root) root.removeAttribute("aria-hidden");
      document.body.style.overflow = "";
      try {
        previouslyFocused.current?.focus();
      } catch {}
    };
  }, [onClose]);

  const dialog = (
    <div className="text-2xl fixed inset-0 flex items-center justify-start bg-black/50 font-main leading-relaxed z-50">
      <div
        ref={dialogRef}
        role="dialog"
        aria-labelledby="accessibility-dialog-title"
        aria-modal="true"
        tabIndex={-1}
        className="bg-background rounded-3xl shadow-lg px-10 py-12 my-auto mx-16 max-lg:mx-5 w-full h-auto max-h-[80vh] overflow-y-auto animate-dialog"
      >
        <div className="p-2 z-50 my-4 max-lg:w-full animate-item">
          <h1
            id="accessibility-dialog-title"
            className="text-5xl text-center leading-tight font-semibold max-lg:text-4xl animate-item"
          >
            Déclaration d'accessibilité du site de portfolio de Maha Bourada
          </h1>

          <p className="mx-3">
            Cette déclaration d'accessibilité s'applique à{" "}
            <a
              href="https://mahabourada.github.io/Portfolio-v2.0/"
              className="px-2.5 py-1.5 underline hover:bg-main-hover focus:bg-main-hover hover:dark:bg-dark-main-hover focus:dark:bg-dark-main-hover rounded-xl transition-colors duration-500 max-w-11/12 break-words whitespace-normal readerMode:text-nowrap"
            >
              https://mahabourada.github.io/Portfolio-v2.0/
            </a>
            .
          </p>

          <section className="my-5">
            <h2 className="border-b-black border-b-2 text-4xl my-4 py-4 font-semibold max-lg:text-4xl animate-item">
              État de conformité
            </h2>

            <p className="mx-3">
              Le site{" "}
              <strong>
                <a
                  href="https://mahabourada.github.io/Portfolio-v2.0/"
                  className="px-2.5 py-1.5 underline hover:bg-main-hover focus:bg-main-hover hover:dark:bg-dark-main-hover focus:dark:bg-dark-main-hover rounded-xl transition-colors duration-500 max-w-11/12 break-words whitespace-normal readerMode:text-nowrap"
                >
                  Portfolio - Maha Bourada
                </a>
              </strong>{" "}
              est <strong>partiellement conforme</strong> avec le Référentiel
              Général d'Amélioration de l'Accessibilité (RGAA) version 4.1.2 en
              raison des non-conformités.
            </p>

            <h3 className="text-3xl my-4 leading-tight font-semibold max-lg:text-4xl animate-item">
              Résultats des tests
            </h3>

            <p className="mx-3">
              L'audit de conformité réalisé par <strong>Maha Bourada</strong>{" "}
              révèle que :
            </p>
            <ul className="mx-9 list-disc">
              <li>
                <strong>95%%</strong> des critères du RGAA version 4.1.2 sont
                respectés ;
              </li>
            </ul>
          </section>

          <section className="my-5">
            <h2 className="border-b-black border-b-2 text-4xl my-4 py-4 font-semibold max-lg:text-4xl animate-item">
              Contenus non accessibles
            </h2>
            <h3 className="text-3xl my-4 leading-tight font-semibold max-lg:text-4xl animate-item">
              Non-conformités
            </h3>
            <h4 className="text-2xl my-4 leading-tight font-semibold max-lg:text-4xl animate-item">
              Présentation de l'information
            </h4>
            <ul className="mx-9 list-disc">
              <li>
                10.11 Le contenu de certaines pages web devient difficilement
                consultable dans une fenêtre de 256 px de hauteur ou 320 px de
                largeur, nécessitant un défilement vertical ou horizontal et
                entraînant une perte d'information ou de fonctionnalité.
              </li>
            </ul>
            <h4 className="text-2xl my-4 leading-tight font-semibold max-lg:text-4xl animate-item">
              Consultation
            </h4>
            <ul className="mx-9 list-disc">
              <li>
                13.3 Des documents en téléchargement ne sont pas accessibles.
              </li>
            </ul>
            <h3 className="text-3xl my-4 leading-tight font-semibold max-lg:text-4xl animate-item">
              Dérogations pour charge disproportionnée
            </h3>
            <p className="mx-3">Aucune.</p>
            <h3 className="text-3xl my-4 leading-tight font-semibold max-lg:text-4xl animate-item">
              Contenus non soumis à l'obligation d'accessibilité
            </h3>
            Aucune.
          </section>

          <section className="my-5">
            <h2 className="border-b-black border-b-2 text-4xl my-4 py-4 font-semibold max-lg:text-4xl animate-item">
              Établissement de cette déclaration d'accessibilité
            </h2>

            <p className="mx-3">
              Cette déclaration a été établie le <strong>12/01/2026</strong>.
            </p>

            <h3 className="text-3xl my-4 leading-tight font-semibold max-lg:text-4xl animate-item">
              Technologies utilisées pour la réalisation du site
            </h3>
            <ul className="mx-9 list-disc">
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>

            <h3 className="text-3xl my-4 leading-tight font-semibold max-lg:text-4xl animate-item">
              Environnement de test
            </h3>
            <p className="mx-3">
              Les vérifications ont été réalisées avec les outils suivants :
            </p>
            <ul className="mx-9 list-disc">
              <li>NVDA (2025.3.2) et Chrome (143)</li>
            </ul>

            <h3 className="text-3xl my-4 leading-tight font-semibold max-lg:text-4xl animate-item">
              Outils utilisés pour évaluer l'accessibilité
            </h3>
            <ul className="mx-9 list-disc">
              <li>ARC Toolkit</li>
              <li>Colour Contrast Analyser</li>
              <li>NVDA</li>
              <li>Stylus</li>
              <li>Web Developer</li>
            </ul>

            <h3 className="text-3xl my-4 leading-tight font-semibold max-lg:text-4xl animate-item">
              La page du site ayant fait l'objet de la vérification de
              conformité
            </h3>
            <ul className="mx-9 list-disc">
              <li>
                Portfolio - Maha Bourada -{" "}
                <a
                  className="px-2.5 py-1.5 underline hover:bg-main-hover focus:bg-main-hover hover:dark:bg-dark-main-hover focus:dark:bg-dark-main-hover rounded-xl transition-colors duration-500 max-w-11/12 break-words whitespace-normal readerMode:text-nowrap"
                  href="https://mahabourada.github.io/Portfolio-v2.0/"
                >
                  https://mahabourada.github.io/Portfolio-v2.0/
                </a>
              </li>
            </ul>
          </section>

          <section className="my-5">
            <h2 className="border-b-black border-b-2 text-4xl my-4 py-4 font-semibold max-lg:text-4xl animate-item">
              Retour d'information et contact
            </h2>

            <p className="mx-3">
              Si vous n'arrivez pas à accéder à un contenu ou à un service, vous
              pouvez contacter le responsable du site internet pour être orienté
              vers une alternative accessible ou obtenir le contenu sous une
              autre forme.
            </p>
            <ul className="mx-9 list-disc">
              <li>
                Via notre formulaire en ligne :{" "}
                <a
                  className="px-2.5 py-1.5 underline hover:bg-main-hover focus:bg-main-hover hover:dark:bg-dark-main-hover focus:dark:bg-dark-main-hover rounded-xl transition-colors duration-500 max-w-11/12 break-words whitespace-normal readerMode:text-nowrap"
                  href="https://mahabourada.github.io/Portfolio-v2.0/#contact-section"
                >
                  https://mahabourada.github.io/Portfolio-v2.0/#contact-section
                </a>
              </li>
            </ul>
          </section>

          <section className="my-5">
            <h2 className="border-b-black border-b-2 text-4xl my-4 py-4 font-semibold max-lg:text-4xl animate-item">
              Voies de recours
            </h2>

            <p className="mx-3">
              Vous avez signalé au responsable du site internet un défaut
              d'accessibilité qui vous empêche d'accéder à un contenu ou à un
              des services du portail et vous n'avez pas obtenu de réponse
              satisfaisante.
            </p>

            <ul className="mx-9 list-disc">
              <li>
                Écrire un message au Défenseur des droits{" "}
                <a
                  className="px-2.5 py-1.5 underline hover:bg-main-hover focus:bg-main-hover hover:dark:bg-dark-main-hover focus:dark:bg-dark-main-hover rounded-xl transition-colors duration-500 max-w-11/12 break-words whitespace-normal readerMode:text-nowrap"
                  href="https://www.defenseurdesdroits.fr/nous-contacter-355"
                >
                  (https://www.defenseurdesdroits.fr/nous-contacter-355)
                </a>
              </li>

              <li>
                Contacter le délégué du Défenseur des droits dans votre région{" "}
                <a
                  className="px-2.5 py-1.5 underline hover:bg-main-hover focus:bg-main-hover hover:dark:bg-dark-main-hover focus:dark:bg-dark-main-hover rounded-xl transition-colors duration-500 max-w-11/12 break-words whitespace-normal readerMode:text-nowrap"
                  href="https://www.defenseurdesdroits.fr/carte-des-delegues"
                >
                  (https://www.defenseurdesdroits.fr/carte-des-delegues)
                </a>
              </li>

              <li>
                Envoyer un courrier postal (gratuit, ne pas mettre de timbre) :{" "}
                <br />
                <strong>Défenseur des droits</strong>
                <br />
                Libre réponse 71120
                <br />
                75342 Paris CEDEX 07
              </li>
            </ul>
          </section>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="float-right cursor-pointer px-8 py-2 bg-accent dark:bg-dark-accent text-white hover:bg-accent-hover hover:dark:bg-dark-accent-hover rounded-xl transition-colors duration-500 leading-normal tracking-widest text-2xl font-semibold max-lg:text-xl max-lg:px-5 max-lg:py-1.5 focus:bg-accent-hover focus:dark:bg-dark-accent-hover pulse-on-hover animate-item"
        >
          {t("accessibility.close_dialog")}
        </button>
      </div>
    </div>
  );

  return createPortal(dialog, document.body);
};

export default AccessibilityDialog;
