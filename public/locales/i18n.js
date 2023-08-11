import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/en/translation.json'
import ru from './locales/ru/translation.json'
import kk from './locales/kk/translation.json'

// i18n.on('languageChanged', function (lng) {
//   // if the language we switched to is the default language we need to remove the /en from URL
//   if (lng === i18n.options.fallbackLng[0]) {
//     if (window.location.pathname.includes('/' + i18n.options.fallbackLng[0])) {
//       const newUrl = window.location.pathname.replace(
//         '/' + i18n.options.fallbackLng[0],
//         ''
//       )
//       window.location.replace(newUrl)
//     }
//   }
// })

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'kk',
    debug: true,
    saveMissing: true,
    resources: {
      kk: { translation: kk },
      en: { translation: en },
      ru: { translation: ru },
    },
    whitelist: ['kk', 'en', 'ru'],
    // backend: {
    //   loadPath: '/locales/{{lng}}/{{ns}}.json',
    //   addPath: '/locales/add/{{lng}}/{{ns}}',
    // },
    detection: {
      order: [
      'path',
      'cookie',
      'htmlTag',
      'querystring',
      'localStorage',
      'sessionStorage',
      'navigator',
      'subdomain'],
      lookupQuerystring: 'lng',
    },
    react: {
      useSuspense: true,
    },
    // detection: {
    //   order: ['path'],
    //   lookupFromPathIndex: 0,
    //   checkWhitelist: true,
    // },
    useSuspense: true,
    interpolation: {
      escapeValue: false,
      formatSeparator: '.',
    },
  })

export default i18n
