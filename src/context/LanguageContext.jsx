import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext(null);

const LOCALE_KEY = 'yasha-locale';
const IP_API = 'https://ipapi.co/json/';

const countryToLocale = {
  RU: 'ru',
  BY: 'ru',
  KZ: 'ru',
  UA: 'ru',
  CN: 'zh',
  TW: 'zh',
  HK: 'zh',
  MO: 'zh',
  SG: 'en',
  US: 'en',
  GB: 'en',
  AU: 'en',
  CA: 'en',
};

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    return localStorage.getItem(LOCALE_KEY) || 'en';
  });
  const [detecting, setDetecting] = useState(!localStorage.getItem(LOCALE_KEY));

  useEffect(() => {
    if (localStorage.getItem(LOCALE_KEY)) return;
    fetch(IP_API)
      .then((r) => r.json())
      .then((data) => {
        const country = data.country_code || '';
        const detected = countryToLocale[country] || 'en';
        setLocaleState(detected);
        localStorage.setItem(LOCALE_KEY, detected);
      })
      .catch(() => setLocaleState('en'))
      .finally(() => setDetecting(false));
  }, []);

  const localeToLangTag = { en: 'en-US', ru: 'ru-RU', zh: 'zh-CN' };

  const setLocale = useCallback((lang) => {
    if (['en', 'ru', 'zh'].includes(lang)) {
      setLocaleState(lang);
      localStorage.setItem(LOCALE_KEY, lang);
      document.documentElement.lang = localeToLangTag[lang] || lang;
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = localeToLangTag[locale] || locale;
  }, [locale]);

  const t = useCallback(
    (key) => {
      const keys = key.split('.');
      let value = translations[locale] || translations.en;
      for (const k of keys) {
        value = value?.[k];
        if (value === undefined) {
          value = translations.en;
          for (const k2 of keys) value = value?.[k2];
          break;
        }
      }
      return value ?? key;
    },
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, detecting }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
