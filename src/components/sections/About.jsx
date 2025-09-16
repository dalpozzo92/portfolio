import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: 12,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h2"
            textAlign="center"
            sx={{ mb: 6 }}
          >
            Chi Sono
          </Typography>

          <Box sx={{ textAlign: 'center', maxWidth: '700px', mx: 'auto' }}>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: '1.1rem',
                lineHeight: 1.8,
              }}
            >
              Sono un <strong>Software Developer</strong> specializzato in JavaScript, React e Node.js. 
              La mia esperienza spazia dallo sviluppo di applicazioni web complete alla programmazione 
              di firmware per dispositivi medici.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: 'text.secondary',
              }}
            >
              Mi distinguo per la capacità di adattarmi rapidamente a nuove tecnologie e per 
              l'approccio orientato alla risoluzione efficace dei problemi, sempre con focus 
              sull'esperienza utente.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;