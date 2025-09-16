import React from 'react';
import { Box, Typography, Container, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

const Experience = () => {
  return (
    <Box
      id="experience"
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
            sx={{ mb: 8 }}
          >
            Esperienza
          </Typography>

          <Box sx={{ position: 'relative' }}>
            {/* Linea verticale semplice */}
            <Box
              sx={{
                position: 'absolute',
                left: '20px',
                top: 0,
                bottom: 0,
                width: '1px',
                backgroundColor: 'divider',
                '@media (min-width: 600px)': {
                  left: '50%',
                  transform: 'translateX(-50%)',
                },
              }}
            />

            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                sx={{
                  mb: 6,
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    '@media (min-width: 600px)': {
                      justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                    },
                  }}
                >
                  {/* Dot */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: '16px',
                      top: '24px',
                      width: '8px',
                      height: '8px',
                      borderRadius: '25px',
                      backgroundColor: 'primary.main',
                      '@media (min-width: 600px)': {
                        left: '50%',
                        transform: 'translateX(-50%)',
                      },
                    }}
                  />

                  <Paper
                    sx={{
                      p: 4,
                      ml: { xs: 5, sm: 0 },
                      maxWidth: { xs: '100%', sm: '45%' },
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      },
                    }}
                  >
                    <Chip
                      label={exp.year}
                      size="small"
                      sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        mb: 2,
                        fontWeight: 500,
                      }}
                    />

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 500,
                        mb: 1,
                        color: 'primary.main',
                      }}
                    >
                      {exp.title}
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: 'text.secondary',
                        mb: 2,
                        fontSize: '0.9rem',
                      }}
                    >
                      {exp.company}
                    </Typography>

                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                      {exp.description.slice(0, 2).map((desc, descIndex) => (
                        <li key={descIndex}>
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'text.secondary',
                              lineHeight: 1.6,
                              mb: 0.5,
                            }}
                          >
                            {desc}
                          </Typography>
                        </li>
                      ))}
                    </Box>
                  </Paper>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;