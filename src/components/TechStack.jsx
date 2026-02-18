import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import { FiMonitor, FiServer, FiBox, FiDatabase, FiLink2, FiCloud, FiPackage, FiZap } from 'react-icons/fi';
import './TechStack.css';

const categoryIcons = [FiMonitor, FiServer, FiBox, FiDatabase, FiLink2, FiCloud, FiPackage, FiZap];

export default function TechStack() {
  const { t } = useLanguage();
  const raw = t('techStack.categories');
  const categories = Array.isArray(raw)
    ? raw.map((cat, i) => ({
        title: cat?.title ?? '',
        items: Array.isArray(cat?.items) ? cat.items : [],
        icon: categoryIcons[i],
      }))
    : [];

  return (
    <section id="tech-stack" className="section tech-stack">
      <div className="tech-stack-bg" aria-hidden="true" />
      <div className="container tech-stack-container">
        <ScrollReveal>
          <h2 className="section-title">{t('techStack.title')}</h2>
          <p className="tech-stack-intro">{t('techStack.intro')}</p>
          <div className="tech-grid">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div key={i} className="tech-card">
                  <div className="tech-card-header">
                    <span className="tech-icon" aria-hidden="true"><Icon /></span>
                    <h3>{cat.title}</h3>
                  </div>
                  <div className="tech-pills">
                    {cat.items.map((item, j) => (
                      <span key={j} className="tech-pill">{item}</span>
                    ))}
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
