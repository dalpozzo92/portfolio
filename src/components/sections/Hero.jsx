

import React from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  Avatar,
  Stack,
  IconButton,
} from '@mui/material';
import {
  LinkedIn,
  GitHub,
  Email,
  Phone,
  LocationOn,
  Download,
  ArrowDownward,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Hero = () => {

    const getImagePath = (imageName) => {
    return `${import.meta.env.BASE_URL}${imageName}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

   const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = `${import.meta.env.BASE_URL}Dal-Pozzo-Nicola.pdf`; // Con BASE_URL
  link.download = 'Dal-Pozzo-Nicola.pdf';
  link.target = '_blank';
  
  fetch(`${import.meta.env.BASE_URL}Dal-Pozzo-Nicola.pdf`)
    .then(response => {
      if (response.ok) {
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        alert('CV non disponibile al momento. Contattami direttamente per riceverlo!');
      }
    })
    .catch(error => {
      console.error('Errore nel download del CV:', error);
      window.open(`${import.meta.env.BASE_URL}Dal-Pozzo-Nicola.pdf`, '_blank');
    });
};

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Box sx={{ textAlign: 'center' }}>
            <motion.div variants={itemVariants}>
              <Avatar
                sx={{
                  width: 150,
                  height: 150,
                  marginTop: 20,
                  mx: 'auto',
                  mb: 4,
                  border: '2px solid rgba(0, 188, 212, 0.3)',
                }}
                alt="Dal Pozzo Nicola"
                src={getImagePath('fotoprofilo.jpg')} // Usa la funzione helper
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
                Dal Pozzo Nicola
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h3"
                component="h2"
                sx={{ 
                  mb: 4,
                  color: 'primary.main',
                  fontWeight: 300,
                }}
              >
                Software Developer
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="body1"
                sx={{ 
                  mb: 6,
                  maxWidth: '600px',
                  mx: 'auto',
                  color: 'text.secondary',
                }}
              >
                Specializzato in JavaScript, React, Node.js. Ho maturato esperienza nella 
                  creazione di applicazioni web complete, da gestionali aziendali (ERP, CRM) 
                  a web app moderne e scalabili. Sono appassionato di tecnologia e mi dedico 
                  alla progettazione di soluzioni software efficienti e intuitive, curate 
                  per migliorare l'esperienza utente.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2} 
                justifyContent="center"
                sx={{ mb: 6 }}
              >
               <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    startIcon={<Download />}
                    onClick={handleDownloadCV}
                    sx={{
                      background: 'linear-gradient(135deg, #00BCD4, #4DD0E1)',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      borderRadius: '25px',
                      fontWeight: 500,
                      textTransform: 'none',
                      boxShadow: '0 4px 20px rgba(0, 188, 212, 0.3)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #00838F, #00BCD4)',
                        boxShadow: '0 6px 25px rgba(0, 188, 212, 0.4)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Scarica CV
                  </Button>
                </motion.div>
                
                <Button
                  variant="outlined"
                  onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                  sx={{
                    borderColor: 'primary.main',
                    borderRadius: '25px',
                    color: 'primary.main',
                    px: 4,
                    py: 1.5,
                    '&:hover': {
                      borderColor: 'primary.light',
                      backgroundColor: 'rgba(0, 188, 212, 0.05)',
                    },
                  }}
                >
                  Contattami
                </Button>
              </Stack>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Stack direction="row" spacing={3} justifyContent="center" sx={{ mb: 8 }}>
                <IconButton
                  component="a"
                  href="mailto:dalpozzo92@gmail.com"
                  sx={{ color: 'text.secondary' }}
                >
                  <Email />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/nicola-dal-pozzo-6746b3262/"
                  target="_blank"
                  sx={{ color: 'text.secondary' }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://github.com/dalpozzo92"
                  target="_blank"
                  sx={{ color: 'text.secondary' }}
                >
                  <GitHub />
                </IconButton>
              </Stack>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <IconButton
                onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
                sx={{ color: 'primary.main' }}
              >
                <ArrowDownward />
              </IconButton>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;