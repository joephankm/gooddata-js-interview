import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translations from "../i18n/translations";
import { LANG } from "../constants/i18n";

const useConfigI18n = () => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        [LANG.ENGLISH]: {
          translation: translations[LANG.ENGLISH],
        }
      },
      lng: LANG.ENGLISH,
      fallbackLng: LANG.ENGLISH,

      interpolation: {
        escapeValue: false
      },
    });
}

export default useConfigI18n;
