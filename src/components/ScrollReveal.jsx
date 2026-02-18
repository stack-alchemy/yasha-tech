import { useScrollReveal } from '../hooks/useScrollReveal';
import './ScrollReveal.css';

export default function ScrollReveal({ children, className = '' }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.08 });

  return (
    <div ref={ref} className={`scroll-reveal ${isVisible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
}
