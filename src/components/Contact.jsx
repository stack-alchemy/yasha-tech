import ScrollReveal from './ScrollReveal';
import { FiMail, FiMessageCircle, FiCalendar } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="section contact">
      <div className="contact-bg" aria-hidden="true" />
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="contact-desc">{t('contact.desc')}</p>
          <div className="contact-cards">
            <a href="mailto:contact@yasha.tech" className="contact-card contact-card-primary">
              <span className="contact-card-icon" aria-hidden="true"><FiMessageCircle /></span>
              <h3>{t('contact.getInTouch')}</h3>
              <p>{t('contact.getInTouchDesc')}</p>
              <span className="contact-card-cta">{t('contact.contactUs')}</span>
            </a>
            <a href="mailto:contact@yasha.tech" className="contact-card">
              <span className="contact-card-icon" aria-hidden="true"><FiMail /></span>
              <h3>{t('contact.emailUs')}</h3>
              <p>{t('contact.emailUsDesc')}</p>
              <span className="contact-card-cta">{t('contact.sendEmail')}</span>
            </a>
            <a href="mailto:contact@yasha.tech?subject=Schedule%20a%20Call" className="contact-card">
              <span className="contact-card-icon" aria-hidden="true"><FiCalendar /></span>
              <h3>{t('contact.scheduleCall')}</h3>
              <p>{t('contact.scheduleCallDesc')}</p>
              <span className="contact-card-cta">{t('contact.requestCall')}</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
