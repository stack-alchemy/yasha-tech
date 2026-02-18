import ScrollReveal from './ScrollReveal';
import { FiCheck, FiGitBranch, FiDatabase, FiBell, FiLock, FiZap } from 'react-icons/fi';
import './Quality.css';

const items = [
  { title: 'Code reviews', desc: 'Every feature undergoes peer review before merge.', icon: FiCheck },
  { title: 'Version control & rollback', desc: 'Full history tracking with one-click rollback capability.', icon: FiGitBranch },
  { title: 'Automated backups', desc: 'Continuous backups with point-in-time recovery.', icon: FiDatabase },
  { title: 'Monitoring & alerting', desc: 'Real-time observability and proactive incident response.', icon: FiBell },
  { title: 'Secure authentication', desc: '2FA, SSO, and role-based access controls.', icon: FiLock },
  { title: 'Performance optimization', desc: 'Load testing and optimization before launch.', icon: FiZap },
];

export default function Quality() {
  return (
    <section id="quality" className="section quality">
      <div className="quality-bg" aria-hidden="true" />
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Quality, Security & Reliability</h2>
          <p className="quality-intro">
            We build systems intended for production usage — not prototypes that fail under real users.
          </p>
          <div className="quality-grid">
            {items.slice(0, 4).map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="quality-card">
                  <div className="quality-card-icon" aria-hidden="true">
                    <Icon />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
            <div className="quality-grid-center">
              {items.slice(4, 6).map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="quality-card">
                    <div className="quality-card-icon" aria-hidden="true">
                      <Icon />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
