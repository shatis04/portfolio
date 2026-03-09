import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') !== 'light';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const location = useLocation();

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-gray-100">
        <Navbar isDark={isDark} onThemeToggle={toggleTheme} />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageTransition>
                    <Home />
                  </PageTransition>
                }
              />
              <Route
                path="/about"
                element={
                  <PageTransition>
                    <About />
                  </PageTransition>
                }
              />
              <Route
                path="/projects"
                element={
                  <PageTransition>
                    <Projects />
                  </PageTransition>
                }
              />
              <Route
                path="/services"
                element={
                  <PageTransition>
                    <Services />
                  </PageTransition>
                }
              />
              <Route
                path="/resume"
                element={
                  <PageTransition>
                    <Resume />
                  </PageTransition>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageTransition>
                    <Contact />
                  </PageTransition>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
