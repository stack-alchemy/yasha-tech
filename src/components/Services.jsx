import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { FiCompass, FiMonitor, FiSmartphone, FiUsers, FiServer, FiCloud, FiCpu, FiLink2, FiLayers, FiUsers as FiTeam } from 'react-icons/fi';
import './Services.css';

const serviceIcons = [FiCompass, FiMonitor, FiSmartphone, FiUsers, FiServer, FiCloud, FiCpu, FiLink2, FiLayers, FiTeam];

const services = [
  {
    id: 1,
    title: 'Product Strategy & MVP Planning & Consulting',
    desc: 'We help you validate ideas and define a realistic implementation plan before development begins.',
    items: [
      'Requirements clarification & feature scoping',
      'Technical feasibility assessment',
      'System architecture design',
      'Database & infrastructure planning',
      'Cost and timeline estimation',
    ],
    bestFor: 'Best for: startups, new platforms, and companies planning a rebuild.',
  },
  {
    id: 2,
    title: 'Web & SaaS Platform Development',
    desc: 'Design and development of scalable web applications and subscription platforms.',
    items: [
      'Multi‑tenant SaaS systems',
      'Admin dashboards & internal tools',
      'Customer portals & self‑service platforms',
      'Billing and subscription integrations',
    ],
    outcome: 'Outcome: a production‑ready platform that can grow with your users and business.',
  },
  {
    id: 3,
    title: 'Mobile Application Development',
    desc: 'Development of mobile applications connected to your web platform and backend services.',
    items: [
      'Cross‑platform apps (Flutter / React Native)',
      'Native Android & iOS support when required',
      'API integration with existing systems',
      'Push notifications & real‑time updates',
      'App Store & Play Store deployment support',
    ],
    outcome: 'Outcome: a complete product ecosystem across web and mobile for your users.',
  },
  {
    id: 4,
    title: 'Marketplace & Real‑Time Systems',
    desc: 'Complex platforms with multiple user roles and live data processing.',
    items: [
      'Booking & ticketing platforms',
      'Service marketplaces & matching systems',
      'Real‑time notifications & activity feeds',
      'Live streaming & communication features',
      'In‑platform chat & messaging (1:1 and group chats)',
      'WebSocket / Real‑time messaging infrastructure',
      'File & image sharing, message history, and read receipts',
      'Moderation tools and spam protection',
    ],
    outcome: 'Outcome: stable performance under real traffic, transactions, and real‑time user communication.',
  },
  {
    id: 5,
    title: 'Backend, API & System Architecture',
    desc: 'High‑performance server and data systems built for reliability and security.',
    items: [
      'REST & GraphQL APIs',
      'Payment and third‑party integrations',
      'High‑traffic database optimization',
      'Microservices architecture',
    ],
    outcome: 'Outcome: scalable and maintainable backend infrastructure.',
  },
  {
    id: 6,
    title: 'Cloud Infrastructure & DevOps',
    desc: 'Deployment and operational reliability for production environments.',
    items: [
      'AWS / Azure / GCP architecture',
      'CI/CD pipelines & automated deployments',
      'Containerization (Docker, Kubernetes)',
      'Monitoring, logging & alerting',
      'Performance and cost optimization',
    ],
    outcome: 'Outcome: secure uptime and predictable operating costs.',
  },
  {
    id: 7,
    title: 'AI & Data‑Driven Features',
    desc: 'Practical AI features integrated directly into your product.',
    items: [
      'AI assistants & chat systems',
      'Document AI & OCR for invoices, forms, and KYC/ID processing',
      'Speech AI: real‑time transcription, summarization, and text‑to‑speech responses',
      'Predictive analytics & anomaly detection (demand, pricing, churn, fraud signals)',
      'Automated reporting & workflows',
      'Recommendation & prediction models',
    ],
    outcome: 'Outcome: measurable productivity gains, smarter user experiences, and automated operations without replacing your existing systems.',
  },
  {
    id: 8,
    title: 'Blockchain & Web3 Development',
    desc: 'Development of decentralized platforms and token‑based ecosystems.',
    items: [
      'DeFi applications & staking systems',
      'NFT platforms & marketplaces',
      'Swap/exchange marketplaces',
      'Smart contract development',
      'Wallet integrations & on‑chain dashboards',
    ],
    outcome: 'Outcome: secure blockchain platforms ready for real users.',
  },
  {
    id: 9,
    title: '3D, Interactive & AR Web Experiences',
    desc: 'Advanced web‑based visual and immersive features.',
    items: [
      'Three.js 3D web applications',
      'Virtual try‑on solutions',
      'Unity‑powered interactive experiences',
      'Product visualization tools',
    ],
    outcome: 'Outcome: engaging user experiences that increase conversion and retention.',
  },
  {
    id: 10,
    title: 'Dedicated Engineering Team & Ongoing Support',
    desc: 'Extend your internal team with experienced engineers.',
    items: [
      'Sprint‑based delivery',
      'Direct collaboration with product owners',
      'Maintenance, monitoring & feature expansion',
    ],
    outcome: 'Outcome: continuous development without recruitment overhead.',
  },
];

export default function Services() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="services" className="section services">
      <div className="services-bg" aria-hidden="true" />
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Our Services</h2>
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
