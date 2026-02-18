import ScrollReveal from './ScrollReveal';
import { FiMonitor, FiServer, FiBox, FiDatabase, FiLink2, FiCloud, FiPackage, FiZap } from 'react-icons/fi';
import './TechStack.css';

const categories = [
  { title: 'Frontend', icon: FiMonitor, items: ['React', 'Next.js', 'Vue.js', 'Nuxt.js', 'Angular', 'Svelte', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'three.js'] },
  { title: 'Backend', icon: FiServer, items: ['Java', 'Spring Boot', 'Node.js', 'Golang', 'Rust', 'Kotlin', 'PHP', 'Laravel', 'Ruby on Rails', 'Python', 'Django', 'FastAPI', '.NET'] },
  { title: '3D, AR/VR & Interactive', icon: FiBox, items: ['Unity', 'WebXR', 'ARKit', 'ARCore', 'Virtual Try-On', 'Real-time 3D'] },
  { title: 'Databases', icon: FiDatabase, items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
  { title: 'Blockchain', icon: FiLink2, items: ['Solidity', 'Web3.js', 'Ethers.js', 'Smart Contracts', 'Tokenomics', 'Wallet Integrations', 'NFT (ERC-721, ERC-1155)'] },
  { title: 'Cloud & DevOps', icon: FiCloud, items: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'] },
  { title: 'CMS & Platforms', icon: FiPackage, items: ['WordPress', 'Shopify', 'Headless CMS'] },
  { title: 'Integrations', icon: FiZap, items: ['Payment gateways', 'Email systems', 'AI APIs', 'Third-party services'] },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="section tech-stack">
      <div className="tech-stack-bg" aria-hidden="true" />
      <div className="container tech-stack-container">
        <ScrollReveal>
          <h2 className="section-title">Technology Stack</h2>
          <p className="tech-stack-intro">We build with modern, proven technologies across the full stack.</p>
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
