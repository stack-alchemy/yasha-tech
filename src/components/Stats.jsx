import { useScrollReveal } from '../hooks/useScrollReveal';
import { FiCalendar, FiFolder, FiClock, FiAward } from 'react-icons/fi';
import './Stats.css';

const stats = [
  { value: '10+', label: 'Years of Expertise', icon: FiCalendar },
  { value: '100+', label: 'Projects Delivered', icon: FiFolder },
  { value: '24/7', label: 'Support & Collaboration', icon: FiClock },
  { value: 'Senior', label: 'Full-Stack Engineers', icon: FiAward },
];

export default function Stats() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="stats" ref={ref}>
      <div className={`stats-inner ${isVisible ? 'visible' : ''}`}>
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
          <div key={i} className="stat-item" style={{ animationDelay: `${i * 0.1}s` }}>
            <span className="stat-icon" aria-hidden="true"><Icon /></span>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
          );
        })}
      </div>
      <div className="stats-grid" aria-hidden="true" />
    </section>
  );
}
