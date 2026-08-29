import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Nav from './components/Nav';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Certificates from './components/sections/Certificates';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

const sections = [Home, About, Skills, Certificates, Projects, Contact];
const sectionNames = ['Home', 'About', 'Skills', 'Certificates', 'Projects', 'Contact'];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
};

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState(0);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  const navigate = useCallback((index) => {
    if (index === currentSection) return;
    setDirection(index > currentSection ? 1 : -1);
    setCurrentSection(index);
  }, [currentSection]);

  const goNext = useCallback(() => {
    if (currentSection < sections.length - 1) {
      setDirection(1);
      setCurrentSection((prev) => prev + 1);
    }
  }, [currentSection]);

  const goPrev = useCallback(() => {
    if (currentSection > 0) {
      setDirection(-1);
      setCurrentSection((prev) => prev - 1);
    }
  }, [currentSection]);

  // Theme toggle
  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      if (next === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev]);

  // Touch/swipe support
  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      const dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
        if (dx < 0) goNext();
        else goPrev();
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [goNext, goPrev]);

  const CurrentComponent = sections[currentSection];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Left Arrow */}
      {currentSection > 0 && (
        <button
          onClick={goPrev}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-400/30 dark:border-gray-600/30 bg-white/10 dark:bg-white/5 backdrop-blur-sm flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/10 transition-all hover:scale-110 cursor-pointer"
          aria-label="Previous section"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {/* Right Arrow */}
      {currentSection < sections.length - 1 && (
        <button
          onClick={goNext}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-400/30 dark:border-gray-600/30 bg-white/10 dark:bg-white/5 backdrop-blur-sm flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/10 transition-all hover:scale-110 cursor-pointer"
          aria-label="Next section"
        >
          <ChevronRight size={20} />
        </button>
      )}

      {/* Section Content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSection}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <CurrentComponent navigate={navigate} />
        </motion.div>
      </AnimatePresence>

      {/* Bottom Nav */}
      <Nav
        currentSection={currentSection}
        sectionNames={sectionNames}
        navigate={navigate}
        theme={theme}
        toggleTheme={toggleTheme}
        totalSections={sections.length}
      />
    </div>
  );
}

export default App;
