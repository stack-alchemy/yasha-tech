import { useState } from 'react';
import logo from '../assets/logo.png';
import './Header.css';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'services', label: 'Services' },
  { id: 'tech-stack', label: 'Technology' },
  { id: 'process', label: 'Process' },
  { id: 'quality', label: 'Quality' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <a href="#" className="header-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
        <img src={logo} alt="Yasha Technology" />
      </a>
      <button className="header-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span className={menuOpen ? 'open' : ''} />
        <span className={menuOpen ? 'open' : ''} />
        <span className={menuOpen ? 'open' : ''} />
      </button>
      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <button key={link.id} className="header-nav-link" onClick={() => scrollTo(link.id)}>
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
