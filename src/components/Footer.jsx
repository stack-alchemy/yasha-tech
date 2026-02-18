import logo from '../assets/logo.png';
import { FiMail } from 'react-icons/fi';
import './Footer.css';

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <img src={logo} alt="Yasha Technology" className="footer-logo" />
          <p className="footer-tagline">Software Engineering & Product Development Partner</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Services</h4>
            <button onClick={() => scrollTo('services')}>Our Services</button>
            <button onClick={() => scrollTo('tech-stack')}>Technology</button>
            <button onClick={() => scrollTo('process')}>Process</button>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <button onClick={() => scrollTo('about')}>About Us</button>
            <button onClick={() => scrollTo('why-us')}>Why Choose Us</button>
            <button onClick={() => scrollTo('quality')}>Quality</button>
          </div>
          <div className="footer-col footer-contact-col">
            <h4>Contact</h4>
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
        <p>© {new Date().getFullYear()} Yasha Technology. All rights reserved.</p>
      </div>
    </footer>
  );
}
