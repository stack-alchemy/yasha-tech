import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import { FiCompass, FiMonitor, FiSmartphone, FiUsers, FiServer, FiCloud, FiCpu, FiLink2, FiLayers, FiUsers as FiTeam } from 'react-icons/fi';
import './Services.css';

const serviceIcons = [FiCompass, FiMonitor, FiSmartphone, FiUsers, FiServer, FiCloud, FiCpu, FiLink2, FiLayers, FiTeam];

export default function Services() {
  const [expanded, setExpanded] = useState(null);
  const { t } = useLanguage();

  const services = Array.from({ length: 10 }, (_, i) => {
    const bestFor = t(`services.items.${i}.bestFor`);
    const outcome = t(`services.items.${i}.outcome`);
    const items = t(`services.items.${i}.items`);
    const isKey = (v, k) => typeof v === 'string' && v === k;
    return {
      id: i + 1,
      title: t(`services.items.${i}.title`),
      desc: t(`services.items.${i}.desc`),
      items: Array.isArray(items) ? items : [],
      bestFor: isKey(bestFor, `services.items.${i}.bestFor`) ? undefined : bestFor,
      outcome: isKey(outcome, `services.items.${i}.outcome`) ? undefined : outcome,
    };
  });

  return (
    <section id="services" className="section services">
      <div className="services-bg" aria-hidden="true" />
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">{t('services.title')}</h2>
          <div className="services-list">
          {services.map((s) => {
            const ServiceIcon = serviceIcons[s.id - 1];
            return (
            <div
              key={s.id}
              className={`service-card ${expanded === s.id ? 'expanded' : ''}`}
              onClick={() => setExpanded(expanded === s.id ? null : s.id)}
            >
              <div className="service-header">
                <span className="service-icon" aria-hidden="true"><ServiceIcon /></span>
                <span className="service-number">{String(s.id).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <span className="service-toggle">{expanded === s.id ? '−' : '+'}</span>
              </div>
              <div className="service-body">
                <p className="service-desc">{s.desc}</p>
                <ul>
                  {s.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {(s.bestFor || s.outcome) && (
                  <p className="service-footer">
                    {s.bestFor || s.outcome}
                  </p>
                )}
              </div>
            </div>
          );
          })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
