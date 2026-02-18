import ScrollReveal from './ScrollReveal';
import { FiAward, FiTarget, FiLayers, FiShield, FiZap } from 'react-icons/fi';
import './WhyChooseUs.css';

const reasons = [
  { title: 'Senior‑Level Execution', desc: 'Every project is built by experienced full‑stack engineers who have delivered real production platforms.', icon: FiAward },
  { title: 'Business‑Focused Development', desc: 'We design systems around business goals (revenue, scalability, retention), not just technical preferences.', icon: FiTarget },
  { title: 'Scalable Architecture First', desc: 'We plan infrastructure and database design early to prevent expensive rebuilds later.', icon: FiLayers },
  { title: 'End‑to‑End Ownership', desc: 'From idea validation to deployment and maintenance — one accountable partner.', icon: FiShield },
  { title: 'Faster Than Hiring', desc: 'Start development within days instead of months spent recruiting engineers.', icon: FiZap },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section why-us">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Why Companies Choose Us</h2>
          <div className="reasons-grid">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
            <div key={i} className="reason-card">
              <div className="reason-icon-wrap" aria-hidden="true">
                <Icon />
              </div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          );
          })}
            </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
