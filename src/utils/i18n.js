import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "src/constants/translations";

i18n
  .use(initReactI18next)
  .init({
    resources: translations,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

const defaultValue = {
  value: "en",
  label: "English"
}

const i18nHelpers = {
  setLanguage: (selected = {}) => {
    localStorage.setItem("lang", JSON.stringify(selected));
    i18n.changeLanguage(selected?.value);
  },
  getLanguage: () => {
    const langObject = localStorage.getItem("lang");
    if (!langObject) {
      return defaultValue
    }
    return JSON.parse(langObject)
  },
  initialize: () => {
    const langObject = localStorage.getItem("lang");
    if (!langObject) {
      i18n.changeLanguage("en")
      localStorage.setItem("lang", JSON.stringify(defaultValue));
      return defaultValue
    } else {
      i18n.changeLanguage(JSON.parse(langObject)?.value);
    }
  }
}

export { i18nHelpers }
export default i18n;