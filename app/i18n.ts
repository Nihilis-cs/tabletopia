'use client'
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import common_fr from '../translations/fr/common';
import common_en from '../translations/en/common';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    ns: [
        "common",
    ],
    resources: {
        fr: {
            common: common_fr,
        },
        en: {
            common: common_en,
        }
    }
  });


export default i18n;