

const i18nOptions = {
    defaultNS: 'main',
    supportedLngs: ['en', 'de', 'fr','hi'],
    fallbackLng: 'en',
    debug: false,
    // Options for language detector
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
}


// i18next
//   .use(HttpApi)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .use(resourcesToBackend((language, namespace) => import (`/public/assets/locales/${language}/${namespace}.json`)))
//   .init({
//     // ns: ['header', 'main', 'footer'],
    
    
//     // react: { useSuspense: false },
    
//   })

  export default i18nOptions;