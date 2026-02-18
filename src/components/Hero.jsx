import logo from '../assets/logo.png';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="hero">
      {/* Background image */}
      <div className="hero-bg" aria-hidden="true" />
      {/* Animated mesh gradient background */}
      <div className="hero-mesh" />
      {/* Grid overlay */}
      <div className="hero-grid" />
      {/* Floating circuit nodes */}
      <div className="hero-float hero-float-1" aria-hidden="true" />
      <div className="hero-float hero-float-2" aria-hidden="true" />
      <div className="hero-float hero-float-3" aria-hidden="true" />
      <div className="hero-float hero-float-4" aria-hidden="true" />
      <div className="hero-float hero-float-5" aria-hidden="true" />
      {/* Code bracket decorations */}
      <div className="hero-code hero-code-left" aria-hidden="true">
        <span>{'<'}</span><span>/</span><span>{'>'}</span>
      </div>
      <div className="hero-code hero-code-right" aria-hidden="true">
        <span>{'{'}</span><span>{'}'}</span>
      </div>

      <div className="hero-content">
        <img src={logo} alt="Yasha Technology" className="hero-logo" />
        <p className="hero-tagline">{t('hero.tagline')}</p>
        <h1 className="hero-headline">{t('hero.headline')}</h1>
        <a href="#contact" className="hero-cta" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
          {t('hero.cta')}
        </a>
      </div>

    </section>
  );
}
