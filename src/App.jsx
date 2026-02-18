import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Process from './components/Process';
import Quality from './components/Quality';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageSelector from './components/LanguageSelector';
import GoToTop from './components/GoToTop';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <WhyChooseUs />
        <Services />
        <TechStack />
        <Process />
        <Quality />
        <Contact />
        <Footer />
      </main>
      <GoToTop />
    </>
  );
}

export default App;
