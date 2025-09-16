import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useScrollParallax } from '../../hooks/useScrollParallax';

const AnimatedBackground = () => {
  const scrollY = useScrollParallax(0.2); // Ancora più lento il parallasse

  // Ridotte a 5 linee principali
  const paths = useMemo(() => [
    "M -300 180 Q 300 120 800 180 T 1600 180 T 2400 180",
    "M -300 320 Q 400 250 900 320 T 1700 320 T 2500 320", 
    "M -300 100 Q 250 50 700 100 T 1500 100 T 2300 100",
    "M -300 420 Q 350 350 850 420 T 1650 420 T 2450 420",
    "M -300 260 Q 200 200 600 260 T 1400 260 T 2200 260",
  ], []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          width: '300%',
          height: '120%',
          y: scrollY,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 2400 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {paths.map((path, index) => (
            <motion.path
              key={index}
              d={path}
              stroke={`url(#gradient${index})`}
              strokeWidth="1.2"
              fill="none"
              initial={{ 
                pathLength: 0, 
                opacity: 0,
                x: -200
              }}
              animate={{ 
                pathLength: [0, 1, 0.8, 1, 0.3, 1, 0], // Movimento più fluido del tratto
                opacity: [0, 0.3, 0.5, 0.2, 0.4, 0.1, 0.6, 0.2], // Respirazione dell'opacità
                x: [-200, 300, -100, 250, -150, 200, -200], // Movimento lentissimo avanti/indietro
              }}
              transition={{
                pathLength: { 
                  duration: 60 + index * 10, // 60-100 secondi per linea!
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 5
                },
                opacity: { 
                  duration: 45 + index * 8, // 45-77 secondi per respirazione opacità
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 3
                },
                x: {
                  duration: 80 + index * 12, // 80-128 secondi per movimento orizzontale
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 4
                }
              }}
            />
          ))}
          
          {/* Gradients più sottili */}
          <defs>
            {paths.map((_, index) => (
              <linearGradient
                key={index}
                id={`gradient${index}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#00BCD4" stopOpacity="0" />
                <stop offset="30%" stopColor="#00BCD4" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#00BCD4" stopOpacity="0.4" />
                <stop offset="70%" stopColor="#FF6B35" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
              </linearGradient>
            ))}
          </defs>

          {/* Solo 2 linee secondarie per non sovraccaricare */}
          {paths.slice(0, 2).map((path, index) => (
            <motion.path
              key={`secondary-${index}`}
              d={path}
              stroke={`url(#gradient${index})`}
              strokeWidth="0.6"
              fill="none"
              opacity="0.3"
              initial={{ 
                pathLength: 0, 
                x: 400
              }}
              animate={{ 
                pathLength: [0, 0.5, 1, 0.2, 0.8, 0],
                x: [400, -400, 200, -300, 400],
              }}
              transition={{
                pathLength: { 
                  duration: 90 + index * 15, // 90-105 secondi
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 8 + 20
                },
                x: {
                  duration: 100 + index * 20, // 100-120 secondi
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 6 + 15
                }
              }}
            />
          ))}
        </svg>
      </motion.div>
    </Box>
  );
};

export default AnimatedBackground;