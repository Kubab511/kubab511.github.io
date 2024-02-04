import React from "react";
import NavLink from "./NavLink";
import LanguageSelector from "./LangSwitcher";
import { useTranslation } from "next-i18next";

const MenuOverlay = ({ links }) => {
  const { t } = useTranslation();
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={t(link.title)} />
        </li>
      ))}
      <li>
        <LanguageSelector />
      </li>
    </ul>
  );
};

export default MenuOverlay;
