import ScrollReveal from './ScrollReveal';
import { FiSearch, FiLayers, FiCode, FiCheckCircle, FiSend, FiTrendingUp } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Process.css';

const steps = [
  { num: 1, titleKey: 'process.steps.0.title', descKey: 'process.steps.0.desc', icon: FiSearch },
  { num: 2, titleKey: 'process.steps.1.title', descKey: 'process.steps.1.desc', icon: FiLayers },
  { num: 3, titleKey: 'process.steps.2.title', descKey: 'process.steps.2.desc', icon: FiCode },
  { num: 4, titleKey: 'process.steps.3.title', descKey: 'process.steps.3.desc', icon: FiCheckCircle },
  { num: 5, titleKey: 'process.steps.4.title', descKey: 'process.steps.4.desc', icon: FiSend },
  { num: 6, titleKey: 'process.steps.5.title', descKey: 'process.steps.5.desc', icon: FiTrendingUp },
];

export default function Process() {
  const { t } = useLanguage();
  return (
    <section id="process" className="section process">
      <div className="process-bg" aria-hidden="true" />
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">{t('process.title')}</h2>
        <p className="process-intro">{t('process.intro')}</p>
        <div className="process-steps">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
            <div key={step.num} className="process-step">
              <div className="process-num">
                <Icon />
              </div>
              <div className="process-content">
                <h3>{t(step.titleKey)}</h3>
                <p>{t(step.descKey)}</p>
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
