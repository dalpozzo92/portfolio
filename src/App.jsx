import React, { useEffect } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { motion } from 'framer-motion';
import theme from './styles/theme';
import AnimatedBackground from './components/common/AnimatedBackground';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import ScrollToTop from './components/common/ScrollToTop';
function App() {

   // Scroll automatico in cima ad ogni caricamento
  useEffect(() => {
    // Scroll immediato
    window.scrollTo(0, 0);
    
    // Backup con delay per essere sicuri
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    // Cleanup
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <AnimatedBackground />
        <Header />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </motion.main>
         <ScrollToTop />
      </Box>
    </ThemeProvider>
  );
}

export default App;