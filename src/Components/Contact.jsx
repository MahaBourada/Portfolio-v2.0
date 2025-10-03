import React, { useState, useRef, useEffect } from "react";
import { BlackBorderButton, ShortButton } from "./global/Buttons";
import { Github, Linkedin, CheckCircle, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs";
import { testEmailJSConfig } from "../utils/testEmailJS";

const Contact = () => {
  const { t } = useTranslation("contact");
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    testEmailJSConfig();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (
      EMAILJS_CONFIG.SERVICE_ID === "your_service_id" ||
      EMAILJS_CONFIG.TEMPLATE_ID === "your_template_id" ||
      EMAILJS_CONFIG.PUBLIC_KEY === "your_public_key" ||
      EMAILJS_CONFIG.SERVICE_ID === "service_ntudb5o"
    ) {
      console.error("❌ Clés EmailJS non configurées correctement");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    console.log("📧 Tentative d'envoi avec:", {
      serviceId: EMAILJS_CONFIG.SERVICE_ID,
      templateId: EMAILJS_CONFIG.TEMPLATE_ID,
      publicKey: EMAILJS_CONFIG.PUBLIC_KEY.substring(0, 10) + "...",
    });

    emailjs
      .sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitStatus("success");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSubmitStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  return (
    <div className="my-20" id="contact-section">
      <h1 className="text-5xl font-semibold max-md:text-4xl">Contact</h1>

      <div className="flex flex-row items-start justify-between my-3 max-lg:flex-col">
        <div className="w-1/2 mx-5 my-3 max-lg:w-full max-md:mx-0">
          <p className="my-4">{t("content")}</p>

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
                src="/assets/vectors/behance.svg"
                alt=""
                aria-hidden="true"
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

        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-1/2 mx-5 max-lg:w-full max-md:mx-0"
        >
          <h2 className="text-4xl font-semibold my-5 max-md:text-3xl">
            {t("form.title")}
          </h2>

          {/* Messages de statut */}
          {submitStatus === "success" && (
            <div className="flex items-center gap-2 p-3 mb-4 mx-3 bg-green-100 border border-green-400 text-green-700 rounded-xl">
              <CheckCircle size={20} />
              <span>Message envoyé avec succès !</span>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex items-center gap-2 p-3 mb-4 mx-3 bg-red-100 border border-red-400 text-red-700 rounded-xl">
              <AlertCircle size={20} />
              <span>Erreur lors de l'envoi. Veuillez réessayer.</span>
            </div>
          )}
          <div className="flex flex-col mx-3 max-md:mr-0 max-lg:mr-10">
            <label htmlFor="user_name">
              {t("form.name_field")} <span className="text-red-800">*</span>
            </label>
            <input
              required
              type="text"
              name="user_name"
              id="user_name"
              className="border-neutral-500 border-2 rounded-xl mx-1 px-3 py-0.5 mb-5 bg-white"
              placeholder="John DOE"
            />
          </div>

          <div className="flex flex-col mx-3 max-md:mr-0 max-lg:mr-10">
            <label htmlFor="user_email">
              E-mail <span className="text-red-800">*</span>
            </label>
            <input
              required
              type="email"
              name="user_email"
              id="user_email"
              className="border-neutral-500 border-2 rounded-xl mx-1 px-3 py-0.5 mb-5 bg-white"
              placeholder="john.doe@example.com"
            />
          </div>

          <div className="flex flex-col mx-3 max-md:mr-0 max-lg:mr-10">
            <label htmlFor="user_msg">
              Message <span className="text-red-800">*</span>
            </label>
            <textarea
              required
              name="user_msg"
              id="user_msg"
              rows="2"
              className="border-neutral-500 border-2 rounded-xl mx-1 px-3 py-0.5 mb-5 bg-white min-h-32 max-h-52"
              placeholder={t("form.msg_placeholder")}
            />
          </div>

          <div className="flex flex-row items-center justify-end mx-3 max-md:mr-0 max-lg:mr-10">
            <button
              className="bg-transparent border-2 border-black cursor-pointer mr-2 px-4 py-2 text-black hover:bg-black-hover focus:bg-black-hover rounded-xl transition-colors duration-500 leading-normal tracking-widest w-fit font-medium text-nowrap max-md:px-4 disabled:opacity-50 disabled:cursor-not-allowed"
              type="reset"
              disabled={isSubmitting}
            >
              {t("form.reset_btn")}
            </button>

            <button
              className="bg-accent cursor-pointer ml-2 px-4 py-2.5 text-white hover:bg-accent-hover focus:bg-accent-hover rounded-xl transition-colors duration-500 leading-normal tracking-widest w-fit font-medium text-nowrap max-md:px-4 disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi..." : t("form.submit_btn")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
