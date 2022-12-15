import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import axiosInstance from 'utils/axiosInstance';

const loadResources=async(locale)=> {
   return await axiosInstance.get(`/get-language/${locale}`)
     .then((response) => { return response.data })
     .catch((error) => { console.log(error); });
}

const backendOptions = {
 loadPath: '{{lng}}|{{ns}}', 
 request: (options, url, payload, callback) => {
   try {
     const [lng] = url.split('|');
     loadResources(lng).then((response) => {
       callback(null, {
         data: response,
         status: 200, 
       });
     });
   } catch (e) {
     console.error(e);
     callback(null, {
       status: 500,
     });
   }
 },
};

export default i18next
   .use(initReactI18next)
   .use(LanguageDetector)
   .use(Backend)
   .init({
      backend: backendOptions,
      fallbackLng: "en",
      debug: false,
      load:"languageOnly",
      ns: ["translations"],
      defaultNS: "translations",
      detection: {
         order: ['urlParams']
      },
      interpolation: {
         escapeValue: true,
      },
      keySeparator: false, 
      react: {
        wait: true
      },
      // debug: true,
   });
