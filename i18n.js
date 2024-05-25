import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';

const resources = {
  en: {
    translation: require('./src/resources/translations/en/en.json'),
  },
  si: {
    translation: require('./src/resources/translations/si/si.json'),
  },
  // Add more translations for other languages as needed
};

i18n.use(initReactI18next).init({
  lng: getLocales()[0].languageCode,
  resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
