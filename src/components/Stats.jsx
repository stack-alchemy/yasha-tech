import { useScrollReveal } from '../hooks/useScrollReveal';
import { FiCalendar, FiFolder, FiClock, FiAward } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Stats.css';

const stats = [
  { value: '10+', labelKey: 'stats.years', icon: FiCalendar },
  { value: '100+', labelKey: 'stats.projects', icon: FiFolder },
  { value: '24/7', labelKey: 'stats.support', icon: FiClock },
  { value: 'Senior', labelKey: 'stats.engineers', icon: FiAward },
];

export default function Stats() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });
  const { t } = useLanguage();

  return (
    <section className="stats" ref={ref}>
      <div className={`stats-inner ${isVisible ? 'visible' : ''}`}>
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
          <div key={i} className="stat-item" style={{ animationDelay: `${i * 0.1}s` }}>
            <span className="stat-icon" aria-hidden="true"><Icon /></span>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{t(stat.labelKey)}</span>
          </div>
          );
        })}
      </div>
      <div className="stats-grid" aria-hidden="true" />
    </section>
  );
}
