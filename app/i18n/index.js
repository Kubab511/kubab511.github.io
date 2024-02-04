import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEN from '../../lang/en.json';
import translationsInPL from '../../lang/pl.json';
import translationsInUA from '../../lang/ua.json';
import translationsInNO from '../../lang/no.json';
import translationsInDE from '../../lang/de.json';

// the translations
const resources = {
  en: {
    translation: translationsInEN
  },
  pl: {
    translation: translationsInPL
  },
  de: {
    translation: translationsInDE
  },
  no: {
    translation: translationsInNO
  },
  ua: {
    translation: translationsInUA
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("lang"),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    ns: "translation",
    defaultNS: "translation"
  });

export default i18n;