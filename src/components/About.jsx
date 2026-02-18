import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="section about">
      <div className="about-bg" aria-hidden="true" />
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">{t('about.title')}</h2>
          <div className="about-content">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p className="about-mission">
              <strong>{t('about.mission')}</strong> {t('about.missionText')}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
