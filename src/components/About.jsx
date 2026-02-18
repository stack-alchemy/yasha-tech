import ScrollReveal from './ScrollReveal';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about-bg" aria-hidden="true" />
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">About Us</h2>
          <div className="about-content">
            <p>
              Yasha Technology helps startups and established businesses design, build, and scale modern software platforms. We operate as a long‑term technology partner — not a code vendor. Our team handles the full lifecycle: product planning, UI/UX, backend architecture, cloud deployment, and AI integration.
            </p>
            <p>
              We specialize in complex systems such as SaaS platforms, real‑time applications, marketplaces, and AI‑powered services. Companies work with us when they need senior‑level execution without the risk, cost, and delay of hiring an internal engineering team.
            </p>
            <p className="about-mission">
              <strong>Our Mission:</strong> turn business ideas into stable, production‑ready software that customers depend on every day.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
