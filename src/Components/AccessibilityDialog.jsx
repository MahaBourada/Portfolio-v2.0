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
    <div className="text-2xl fixed inset-0 flex items-center justify-start bg-black/50 font-main">
      <div
        ref={dialogRef}
        role="dialog"
        aria-labelledby="accessibility-dialog-title"
        aria-modal="true"
        tabIndex={-1}
        className="bg-background rounded-3xl shadow-lg px-10 py-12 mx-16 max-lg:mx-5 w-full"
      >
        <h1
          id="accessibility-dialog-title"
          className="text-5xl font-semibold max-lg:text-4xl animate-item"
        >
          Déclaration d'accessibilité
        </h1>

        <div className="p-2 z-50 my-4 max-lg:w-fullanimate-item">
          <p>This dialog provides information about accessibility features.</p>
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
