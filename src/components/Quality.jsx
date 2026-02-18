import ScrollReveal from './ScrollReveal';
import { FiCheck, FiGitBranch, FiDatabase, FiBell, FiLock, FiZap } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Quality.css';

const itemKeys = [
  { titleKey: 'quality.items.0.title', descKey: 'quality.items.0.desc', icon: FiCheck },
  { titleKey: 'quality.items.1.title', descKey: 'quality.items.1.desc', icon: FiGitBranch },
  { titleKey: 'quality.items.2.title', descKey: 'quality.items.2.desc', icon: FiDatabase },
  { titleKey: 'quality.items.3.title', descKey: 'quality.items.3.desc', icon: FiBell },
  { titleKey: 'quality.items.4.title', descKey: 'quality.items.4.desc', icon: FiLock },
  { titleKey: 'quality.items.5.title', descKey: 'quality.items.5.desc', icon: FiZap },
];

export default function Quality() {
  const { t } = useLanguage();
  return (
    <section id="quality" className="section quality">
      <div className="quality-bg" aria-hidden="true" />
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">{t('quality.title')}</h2>
          <p className="quality-intro">{t('quality.intro')}</p>
          <div className="quality-grid">
            {itemKeys.slice(0, 4).map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="quality-card">
                  <div className="quality-card-icon" aria-hidden="true">
                    <Icon />
                  </div>
                  <h3>{t(item.titleKey)}</h3>
                  <p>{t(item.descKey)}</p>
                </div>
              );
            })}
            <div className="quality-grid-center">
              {itemKeys.slice(4, 6).map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="quality-card">
                    <div className="quality-card-icon" aria-hidden="true">
                      <Icon />
                    </div>
                    <h3>{t(item.titleKey)}</h3>
                    <p>{t(item.descKey)}</p>
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
