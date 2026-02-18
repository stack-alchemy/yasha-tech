import ScrollReveal from './ScrollReveal';
import { FiSearch, FiLayers, FiCode, FiCheckCircle, FiSend, FiTrendingUp } from 'react-icons/fi';
import './Process.css';

const steps = [
  { num: 1, title: 'Discovery', desc: 'Understand business goals and users', icon: FiSearch },
  { num: 2, title: 'Architecture', desc: 'System design and planning', icon: FiLayers },
  { num: 3, title: 'Development', desc: 'Frontend + backend implementation', icon: FiCode },
  { num: 4, title: 'Testing', desc: 'QA, security, and performance checks', icon: FiCheckCircle },
  { num: 5, title: 'Launch', desc: 'Production deployment and monitoring', icon: FiSend },
  { num: 6, title: 'Scale', desc: 'Optimization and ongoing support', icon: FiTrendingUp },
];

export default function Process() {
  return (
    <section id="process" className="section process">
      <div className="process-bg" aria-hidden="true" />
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Our Development Process</h2>
        <p className="process-intro">
          You always receive progress updates and demos during development cycles.
        </p>
        <div className="process-steps">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
            <div key={step.num} className="process-step">
              <div className="process-num">
                <Icon />
              </div>
              <div className="process-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {i < steps.length - 1 && <div className="process-connector" />}
            </div>
          );
          })}
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
