import ScrollReveal from './ScrollReveal';
import { FiMail, FiMessageCircle, FiCalendar } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact-bg" aria-hidden="true" />
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="contact-desc">
            We&apos;re happy to review your project and suggest the best technical approach — no commitment required.
          </p>
          <div className="contact-cards">
            <a href="mailto:contact@yasha.tech" className="contact-card contact-card-primary">
              <span className="contact-card-icon" aria-hidden="true"><FiMessageCircle /></span>
              <h3>Get in Touch</h3>
              <p>Discuss your project, timeline, and how we can help.</p>
              <span className="contact-card-cta">Contact us →</span>
            </a>
            <a href="mailto:contact@yasha.tech" className="contact-card">
              <span className="contact-card-icon" aria-hidden="true"><FiMail /></span>
              <h3>Email Us</h3>
              <p>Reach out directly for project inquiries.</p>
              <span className="contact-card-cta">Send email →</span>
            </a>
            <a href="mailto:contact@yasha.tech?subject=Schedule%20a%20Call" className="contact-card">
              <span className="contact-card-icon" aria-hidden="true"><FiCalendar /></span>
              <h3>Schedule a Call</h3>
              <p>Book a time to discuss your project in detail.</p>
              <span className="contact-card-cta">Request call →</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
