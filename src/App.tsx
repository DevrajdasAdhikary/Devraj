import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import CustomCursor from './components/ui/CustomCursor';
import Lenis from '@studio-freight/lenis';
import ParticlesBg from './components/ui/ParticlesBg';
import { MorphicBackground } from './components/ui/MorphicBackground';
import { useMouseContext } from './context/MouseContext';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Achievements from './components/sections/Achievements';
import Extracurricular from './components/sections/Extracurricular';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <ParticlesBg />
      <MorphicBackground ballColor="#0ea5e9" />
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <div key="content" className="min-h-screen">
            <Header />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Achievements />
              <Extracurricular />
              <Contact />
            </main>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;