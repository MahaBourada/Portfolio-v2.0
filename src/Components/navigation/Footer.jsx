import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import AccessibilityDialog from "../AccessibilityDialog";

const Footer = () => {
  const { t } = useTranslation("navigation");
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <footer
        className="flex mx-auto my-2 text-center text-lg max-lg:text-base max-lg:flex-col"
        role="contentinfo"
      >
        <button
          type="button"
          className="rounded-lg transition-colors duration-500 hover:bg-main-hover focus:bg-main-hover hover:dark:bg-dark-main-hover focus:dark:bg-dark-main-hover cursor-pointer underline py-1 px-2.5 mr-0.5"
          onClick={openDialog}
        >
          {t("accessibility.accessibility_rate")}
        </button>
        <p className="py-1">
          <span className="inline max-lg:hidden mr-2" aria-hidden="true">
            |
          </span>
          Maha Bourada @ Copyright 2026
        </p>
      </footer>
      {isDialogOpen && <AccessibilityDialog onClose={closeDialog} />}
    </>
  );
};

export default Footer;
