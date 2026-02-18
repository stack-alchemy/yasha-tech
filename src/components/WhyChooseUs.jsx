import ScrollReveal from './ScrollReveal';
import { FiAward, FiTarget, FiLayers, FiShield, FiZap } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './WhyChooseUs.css';

const reasons = [
  { titleKey: 'whyUs.items.0.title', descKey: 'whyUs.items.0.desc', icon: FiAward },
  { titleKey: 'whyUs.items.1.title', descKey: 'whyUs.items.1.desc', icon: FiTarget },
  { titleKey: 'whyUs.items.2.title', descKey: 'whyUs.items.2.desc', icon: FiLayers },
  { titleKey: 'whyUs.items.3.title', descKey: 'whyUs.items.3.desc', icon: FiShield },
  { titleKey: 'whyUs.items.4.title', descKey: 'whyUs.items.4.desc', icon: FiZap },
];

export default function WhyChooseUs() {
  const { t } = useLanguage();
  return (
    <section id="why-us" className="section why-us">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">{t('whyUs.title')}</h2>
          <div className="reasons-grid">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
            <div key={i} className="reason-card">
              <div className="reason-icon-wrap" aria-hidden="true">
                <Icon />
              </div>
              <h3>{t(r.titleKey)}</h3>
              <p>{t(r.descKey)}</p>
            </div>
          );
          })}
            </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
