import { useState } from 'react';
import logo from '../assets/logo.png';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';
import './Header.css';

const navLinks = [
  { id: 'about', key: 'nav.about' },
  { id: 'why-us', key: 'nav.whyUs' },
  { id: 'services', key: 'nav.services' },
  { id: 'tech-stack', key: 'nav.technology' },
  { id: 'process', key: 'nav.process' },
  { id: 'quality', key: 'nav.quality' },
  { id: 'contact', key: 'nav.contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <a href="#" className="header-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
        <img src={logo} alt="Yasha Technology" />
      </a>
      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <button key={link.id} className="header-nav-link" onClick={() => scrollTo(link.id)}>
            {t(link.key)}
          </button>
        ))}
      </nav>
      <div className="header-right">
        <LanguageSelector />
        <button className="header-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
        </button>
      </div>
    </header>
  );
}
