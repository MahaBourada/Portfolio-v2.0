import React from "react";
import { BlackBorderButton, ShortButton } from "./global/Buttons";
import { Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="my-20" id="contact-section">
      <h1 className="text-5xl font-semibold max-md:text-4xl">Contact</h1>

      <div className="flex flex-row items-start justify-between my-3 max-lg:flex-col">
        <div className="w-1/2 mx-5 my-3 max-lg:w-full max-md:mx-0">
          <p className="my-4">
            Si mon profile vous plaît, n'hésitez pas à me contacter via ce
            formulaire de contact. En plus de mes réseaux sociaux.
          </p>

          <div className="my-5">
            <div className="flex flex-row items-center justify-start my-2">
              <Linkedin size={32} className="mx-2" />
              <a
                target="_blank"
                href="https://linkedin.com/in/maha-marwa-bourada"
                className="px-2.5 underline hover:bg-main-hover focus:bg-main-hover rounded-xl transition-colors duration-500"
              >
                LinkedIn/Maha Bourada
              </a>
            </div>

            <div className="flex flex-row items-center justify-start my-2">
              <Github size={32} className="mx-2" />
              <a
                target="_blank"
                href="https://github.com/MahaBourada"
                className="px-2.5 underline hover:bg-main-hover focus:bg-main-hover rounded-xl transition-colors duration-500"
              >
                GitHub/Maha Bourada
              </a>
            </div>

            <div className="flex flex-row items-center justify-start my-2 max-md:items-start">
              <img
                src="vectors/behance.svg"
                alt=""
                className="w-8 h-8 mx-2 max-md:mt-1"
              />
              <a
                target="_blank"
                href="https://behance.net/mahamarwadesign"
                className="px-2.5 underline hover:bg-main-hover focus:bg-main-hover rounded-xl transition-colors duration-500 max-w-10/12 break-words whitespace-normal"
              >
                Behance/mahamarwadesign
              </a>
            </div>
          </div>
        </div>

        <form method="POST" className="w-1/2 mx-5 max-lg:w-full max-md:mx-0">
          <h2 className="text-4xl font-semibold my-5 max-md:text-3xl">
            Rester en contact
          </h2>
          <div className="flex flex-col mx-3 max-md:mr-0 max-lg:mr-10">
            <label htmlFor="name">
              Nom <span className="text-red-800">*</span>
            </label>
            <input
              required
              type="text"
              name="name"
              id="name"
              className="border-neutral-500 border-2 rounded-xl mx-1 px-3 py-0.5 mb-5 bg-white"
              placeholder="John DOE"
            />
          </div>

          <div className="flex flex-col mx-3 max-md:mr-0 max-lg:mr-10">
            <label htmlFor="email">
              E-mail <span className="text-red-800">*</span>
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              className="border-neutral-500 border-2 rounded-xl mx-1 px-3 py-0.5 mb-5 bg-white"
              placeholder="john.doe@exmaple.com"
            />
          </div>

          <div className="flex flex-col mx-3 max-md:mr-0 max-lg:mr-10">
            <label htmlFor="msg">
              Message <span className="text-red-800">*</span>
            </label>
            <textarea
              required
              name="msg"
              id="msg"
              rows="2"
              className="border-neutral-500 border-2 rounded-xl mx-1 px-3 py-0.5 mb-5 bg-white min-h-32 max-h-52"
              placeholder="Rédigez votre message..."
            />
          </div>

          <div className="flex flex-row items-center justify-end mx-3 max-md:mr-0 max-lg:mr-10">
            <button
              className="bg-transparent border-2 border-black cursor-pointer mr-2 px-4 py-2 text-black hover:bg-black-hover focus:bg-black-hover rounded-xl transition-colors duration-500 leading-normal tracking-widest w-fit font-medium text-nowrap max-md:px-4"
              type="reset"
            >
              Réinitialiser
            </button>

            <button
              className="bg-accent cursor-pointer ml-2 px-4 py-2.5 text-white hover:bg-accent-hover focus:bg-accent-hover rounded-xl transition-colors duration-500 leading-normal tracking-widest w-fit font-medium text-nowrap max-md:px-4"
              type="submit"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
