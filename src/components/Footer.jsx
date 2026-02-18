import logo from '../assets/logo.png';
import { FiMail } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <img src={logo} alt="Yasha Technology" className="footer-logo" />
          <p className="footer-tagline">{t('footer.tagline')}</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>{t('footer.services')}</h4>
            <button onClick={() => scrollTo('services')}>{t('footer.ourServices')}</button>
            <button onClick={() => scrollTo('tech-stack')}>{t('footer.technology')}</button>
            <button onClick={() => scrollTo('process')}>{t('footer.process')}</button>
          </div>
          <div className="footer-col">
            <h4>{t('footer.company')}</h4>
            <button onClick={() => scrollTo('about')}>{t('footer.aboutUs')}</button>
            <button onClick={() => scrollTo('why-us')}>{t('footer.whyChooseUs')}</button>
            <button onClick={() => scrollTo('quality')}>{t('footer.quality')}</button>
          </div>
          <div className="footer-col footer-contact-col">
            <h4>{t('footer.contact')}</h4>
            <div className="footer-contact-block">
              <a href="mailto:contact@yasha.tech" className="footer-contact-item">
                <FiMail size={16} />
                <span>contact@yasha.tech</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Yasha Technology. {t('footer.rights')}</p>
      </div>
    </footer>
  );
}
