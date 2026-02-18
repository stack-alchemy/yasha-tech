import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './LanguageSelector.css';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
  { code: 'zh', label: '简体中文' },
];

export default function LanguageSelector() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const current = languages.find((l) => l.code === locale) || languages[0];

  return (
    <div className="lang-selector" ref={ref}>
      <button
        type="button"
        className="lang-selector-btn"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        {current.label}
      </button>
      {open && (
        <ul className="lang-selector-dropdown" role="listbox">
          {languages.map((lang) => (
            <li key={lang.code} role="option">
              <button
                type="button"
                className={`lang-selector-option ${locale === lang.code ? 'active' : ''}`}
                onClick={() => {
                  setLocale(lang.code);
                  setOpen(false);
                }}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
