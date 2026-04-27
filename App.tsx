
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import SpecialSection from './components/SpecialSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import SubsidiaryPage from './components/SubsidiaryPage';
import CategoryView from './components/CategoryView';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showSubsidiary, setShowSubsidiary] = useState(false);
  const [viewingCategory, setViewingCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPreloaderExiting, setIsPreloaderExiting] = useState(false);

  useEffect(() => {
    const startExit = window.setTimeout(() => {
      setIsPreloaderExiting(true);
    }, 1400);

    const removePreloader = window.setTimeout(() => {
      setIsLoading(false);
    }, 1900);

    return () => {
      window.clearTimeout(startExit);
      window.clearTimeout(removePreloader);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'special', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isOverlayOpen = showSubsidiary || !!viewingCategory;

  return (
    <>
      {isLoading && <Preloader isExiting={isPreloaderExiting} />}
      <div className={`relative min-h-screen ${isOverlayOpen ? 'overflow-hidden h-screen' : ''}`}>
        <Navbar activeSection={activeSection} />
        <main>
          <div id="home"><Hero /></div>
          <div id="about"><AboutUs /></div>
          <div id="services">
            <Services onViewAll={(category) => setViewingCategory(category)} />
          </div>
          <div id="special">
            <SpecialSection onEnterSubsidiary={() => setShowSubsidiary(true)} />
          </div>
          <div id="contact"><Contact /></div>
        </main>
        <Footer />

        {/* Subsidiary View Overlay */}
        {showSubsidiary && (
          <SubsidiaryPage onClose={() => setShowSubsidiary(false)} />
        )}

        {/* Category View Overlay */}
        {viewingCategory && (
          <CategoryView
            categoryKey={viewingCategory}
            onClose={() => setViewingCategory(null)}
          />
        )}
      </div>
    </>
  );
};

export default App;
