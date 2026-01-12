import { useState, useRef, useEffect } from "react";
import { Github, Linkedin, CheckCircle, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs";
import { emailJSConfig } from "../utils/testEmailJS";
import { getAssetUrl } from "../utils/getAssetsUrl";

const Contact = () => {
  const { t } = useTranslation("contact");
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    emailJSConfig();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const name = form.current?.user_name?.value?.trim();
    const email = form.current?.user_email?.value?.trim();
    const message = form.current?.user_msg?.value?.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const newErrors = {};

    if (!name) newErrors.user_name = t("form.name_required");
    if (!email) newErrors.user_email = t("form.email_required");
    else if (!emailRegex.test(email))
      newErrors.user_email = t("form.email_invalid");
    if (!message) newErrors.user_msg = t("form.msg_required");

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);

      const first = Object.keys(newErrors)[0];
      form.current?.[first]?.focus?.();

      setSubmitStatus("missing");
      setIsSubmitting(false);
      return;
    }

    setErrors({});

    emailjs
      .sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      .then(() => {
        setSubmitStatus("success");
        form.current.reset();
      })
      .catch(() => {
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  return (
    <div
      data-animate="stagger"
      data-animate-lifetime="once"
      className="my-20 scroll-mt-30 max-lg:scroll-mt-25 animate-stagger"
      id="contact-section"
    >
      <h1 className="text-5xl font-semibold max-lg:text-4xl animate-item">
        Contact
      </h1>

      <div className="flex flex-row items-start justify-between my-3 max-lg:flex-col readerMode:flex-col">
        <div className="relative w-1/2 mx-5 my-3 max-lg:w-full max-md:mx-0 readerMode:w-full animate-item">
          <p className="my-4">{t("content")}</p>

          <ul className="w-fit my-5 readerMode:mx-auto">
            <li className="flex flex-row items-center justify-start my-2">
              <Linkedin size={32} className="mx-2" />
              <a
                target="_blank"
                href="https://linkedin.com/in/maha-bourada"
                className="px-2.5 underline hover:bg-main-hover focus:bg-main-hover hover:dark:bg-dark-main-hover focus:dark:bg-dark-main-hover rounded-xl transition-colors duration-500 max-w-11/12 break-words whitespace-normal readerMode:text-nowrap"
              >
                LinkedIn/Maha Bourada
              </a>
            </li>

            <li className="flex flex-row items-center justify-start my-2">
              <Github size={32} className="mx-2" />
              <a
                target="_blank"
                href="https://github.com/MahaBourada"
                className="px-2.5 underline hover:bg-main-hover focus:bg-main-hover hover:dark:bg-dark-main-hover focus:dark:bg-dark-main-hover rounded-xl transition-colors duration-500 max-w-11/12 break-words whitespace-normal readerMode:text-nowrap"
              >
                GitHub/Maha Bourada
              </a>
            </li>

            <li className="flex flex-row items-center justify-start my-2 max-md:items-start">
              <img
                src={getAssetUrl("/assets/vectors/behance.svg")}
                alt=""
                aria-hidden="true"
                className="w-8 h-8 mx-2 max-md:mt-1 dark:hidden"
              />
              <img
                src={getAssetUrl("/assets/vectors/behanceDark.svg")}
                alt=""
                aria-hidden="true"
                className="w-8 h-8 mx-2 max-md:mt-1 dark:block hidden"
              />
              <a
                target="_blank"
                href="https://behance.net/mahamarwadesign"
                className="px-2.5 underline hover:bg-main-hover focus:bg-main-hover hover:dark:bg-dark-main-hover focus:dark:bg-dark-main-hover rounded-xl transition-colors duration-500 max-w-11/12 break-words whitespace-normal readerMode:text-nowrap"
              >
                Behance/mahamarwadesign
              </a>
            </li>
          </ul>

          <div>
            <img
              src={getAssetUrl("/assets/vectors/smallSquares.svg")}
              alt=""
              className="absolute w-30 max-lg:w-28 max-md:w-24 max-sm:w-16 h-auto -bottom-24 max-lg:-bottom-10 max-md:-bottom-8 -left-10 max-lg:left-10/12 max-md:left-10/12 rotate-180 block dark:hidden object-contain pointer-events-none"
            />

            <img
              src={getAssetUrl("/assets/vectors/smallSquaresDark.svg")}
              alt=""
              className="absolute w-30 max-lg:w-28 max-md:w-24 max-sm:w-16 h-auto -bottom-24 max-lg:-bottom-10 max-md:-bottom-8 -left-10 max-lg:left-10/12 max-md:left-10/12 rotate-180 hidden dark:block object-contain pointer-events-none"
            />

            <img
              src="https://storage.googleapis.com/devwebmaha/portfolio/smallJelly.webp"
              alt=""
              data-animate
              aria-hidden="true"
              className="absolute w-30 max-lg:w-24 max-md:w-24 max-sm:w-16 h-auto -bottom-44 max-lg:-bottom-20 -left-2 max-lg:left-4/5 max-md:left-4/5 -rotate-12 max-lg:rotate-12 z-0 object-contain pointer-events-none alive float animate-item slide-from-left"
            />
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-1/2 mx-5 max-lg:w-full max-md:mx-0 readerMode:w-full animate-item"
        >
          <h2 className="text-4xl font-semibold my-5 max-md:text-3xl">
            {t("form.title")}
          </h2>

          {/* Messages de statut */}
          {submitStatus === "success" && (
            <div className="flex items-center gap-2 p-3 mb-4 mx-3 bg-green-100 border border-green-400 text-green-700 rounded-xl">
              <CheckCircle size={20} />
              <span>{t("form.success")}</span>
            </div>
          )}

          {(submitStatus === "error" || submitStatus === "missing") && (
            <div
              id="error_msg"
              role="alert"
              className="flex items-center gap-2 p-3 mb-4 mx-3 bg-red-100 border border-red-400 text-red-700 rounded-xl"
            >
              <AlertCircle size={20} />
              <span>
                {submitStatus === "missing"
                  ? errors.user_name
                    ? t("form.name_required")
                    : errors.user_email === t("form.email_required")
                    ? t("form.email_required")
                    : errors.user_email === t("form.email_invalid")
                    ? t("form.email_invalid")
                    : errors.user_msg
                    ? t("form.msg_required")
                    : null
                  : t("form.error")}
              </span>
            </div>
          )}

          <div className="flex flex-col mx-3 max-md:mr-0 max-lg:mr-10">
            <label htmlFor="user_name">
              {t("form.name_field")}{" "}
              <span className="text-red-800 dark:text-red-400">*</span>
            </label>
            <input
              //required
              type="text"
              name="user_name"
              id="user_name"
              className="border-neutral-500 border-2 rounded-xl mx-1 px-3 py-0.5 mb-5 bg-white text-black"
              placeholder="John DOE"
              autoComplete="name"
            />
          </div>

          <div className="flex flex-col mx-3 max-md:mr-0 max-lg:mr-10">
            <label htmlFor="user_email">
              E-mail <span className="text-red-800 dark:text-red-400">*</span>
            </label>
            <input
              //required
              type="text" //"email"
              name="user_email"
              id="user_email"
              className="border-neutral-500 border-2 rounded-xl mx-1 px-3 py-0.5 mb-5 bg-white text-black"
              placeholder="john.doe@example.com"
              autoComplete="email"
            />
          </div>

          <div className="flex flex-col mx-3 max-md:mr-0 max-lg:mr-10">
            <label htmlFor="user_msg">
              Message <span className="text-red-800 dark:text-red-400">*</span>
            </label>
            <textarea
              //required
              name="user_msg"
              id="user_msg"
              rows="2"
              className="border-neutral-500 border-2 rounded-xl mx-1 px-3 py-0.5 mb-5 bg-white min-h-32 max-h-52 text-black"
              placeholder={t("form.msg_placeholder")}
            />
          </div>

          <div className="flex flex-row items-center justify-end mx-3 max-md:mr-0 max-lg:mr-10">
            <button
              className="bg-transparent border-2 border-black dark:border-white cursor-pointer mr-2 px-4 py-2 text-black dark:text-white hover:bg-black-hover focus:bg-black-hover hover:dark:bg-white/15 focus:dark:bg-white/15 rounded-xl transition-colors duration-500 leading-normal tracking-widest w-fit font-medium text-nowrap max-md:px-4 disabled:opacity-50 disabled:cursor-not-allowed"
              type="reset"
              disabled={isSubmitting}
            >
              {t("form.reset_btn")}
            </button>

            <button
              className="bg-accent dark:bg-dark-accent cursor-pointer ml-2 px-4 py-2.5 text-white hover:bg-accent-hover focus:bg-accent-hover hover:dark:bg-dark-accent-hover focus:dark:bg-dark-accent-hover  rounded-xl transition-colors duration-500 leading-normal tracking-widest w-fit font-medium text-nowrap max-md:px-4 disabled:opacity-50 disabled:cursor-not-allowed pulse-on-hover"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("form.sending") : t("form.submit_btn")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
