import { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './GoToTop.css';

export default function GoToTop() {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      className="go-to-top"
      onClick={scrollToTop}
      aria-label={t('goToTop')}
    >
      <FiChevronUp size={24} />
    </button>
  );
}
