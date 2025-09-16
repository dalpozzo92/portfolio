import React, { useState, useEffect } from 'react';
import { Fab, Zoom } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Zoom in={show}>
      <motion.div
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1000,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Fab
          color="primary"
          size="medium"
          onClick={scrollToTop}
          sx={{
            background: 'rgba(0, 188, 212, 0.9)',
            backdropFilter: 'blur(10px)',
            '&:hover': {
              background: 'rgba(0, 188, 212, 1)',
            },
          }}
        >
          <KeyboardArrowUp />
        </Fab>
      </motion.div>
    </Zoom>
  );
};

export default ScrollToTop;