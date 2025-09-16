import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Chip } from '@mui/material';
import { School, EmojiEvents, DriveEta } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

const Education = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Box
      id="education"
      component="section"
      sx={{
        py: 12,
        borderTop: '1px solid',
        borderColor: 'divider',
        background: 'rgba(255, 255, 255, 0.01)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              component="h2"
              textAlign="center"
              sx={{ mb: 8 }}
            >
              Formazione & Qualifiche
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {/* Istruzione */}
            <Grid item xs={12} lg={6}>
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(0, 188, 212, 0.2)',
                    borderRadius: '25px',
                    '&:hover': {
                      border: '1px solid rgba(0, 188, 212, 0.4)',
                      boxShadow: '0 20px 40px rgba(0, 188, 212, 0.1)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: '25px',
                            background: 'rgba(0, 188, 212, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 2,
                            border: '1px solid rgba(0, 188, 212, 0.3)',
                          }}
                        >
                          <School sx={{ color: 'primary.main', fontSize: '1.5rem' }} />
                        </Box>
                      </motion.div>
                      
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{ fontWeight: 500, color: 'primary.main' }}
                      >
                        Istruzione
                      </Typography>
                    </Box>

                    {portfolioData.education.map((edu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <Box sx={{ mb: index < portfolioData.education.length - 1 ? 4 : 0 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Chip
                              label={edu.year}
                              size="small"
                              sx={{
                                backgroundColor: 'primary.main',
                                color: 'white',
                                fontWeight: 500,
                                mr: 2,
                              }}
                            />
                            {edu.grade && (
                              <Chip
                                label={edu.grade}
                                size="small"
                                variant="outlined"
                                sx={{
                                  borderColor: 'primary.main',
                                  color: 'primary.main',
                                }}
                              />
                            )}
                          </Box>

                          <Typography
                            variant="h6"
                            sx={{ fontWeight: 500, mb: 1, color: 'white' }}
                          >
                            {edu.title}
                          </Typography>

                          <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary' }}
                          >
                            {edu.institution}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Certificazioni e Info */}
            <Grid item xs={12} lg={6}>
              <Grid container spacing={3}>
                {/* Certificazioni */}
                <Grid item xs={12}>
                  <motion.div 
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <Card
                      sx={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(0, 188, 212, 0.2)',
                        borderRadius: '25px',
                        '&:hover': {
                          border: '1px solid rgba(0, 188, 212, 0.4)',
                          boxShadow: '0 20px 40px rgba(0, 188, 212, 0.1)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <CardContent sx={{ p: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Box
                              sx={{
                                width: 40,
                                height: 40,
                                borderRadius: '25px',
                                background: 'rgba(0, 188, 212, 0.15)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mr: 2,
                                border: '1px solid rgba(0, 188, 212, 0.3)',
                              }}
                            >
                              <EmojiEvents sx={{ color: 'primary.main', fontSize: '1.2rem' }} />
                            </Box>
                          </motion.div>
                          
                          <Typography
                            variant="h6"
                            component="h3"
                            sx={{ fontWeight: 500, color: 'primary.main' }}
                          >
                            Certificazioni
                          </Typography>
                        </Box>

                        {portfolioData.certifications.map((cert, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                            viewport={{ once: true }}
                          >
                            <Box sx={{ mb: index < portfolioData.certifications.length - 1 ? 3 : 0 }}>
                              <Chip
                                label={cert.year}
                                size="small"
                                sx={{
                                  backgroundColor: 'primary.main',
                                  color: 'white',
                                  fontWeight: 500,
                                  mb: 1,
                                }}
                              />
                              <Typography
                                variant="body1"
                                sx={{ color: 'white', fontWeight: 400 }}
                              >
                                {cert.title}
                              </Typography>
                            </Box>
                          </motion.div>
                        ))}
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>

                {/* Info aggiuntive */}
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <motion.div 
                        variants={itemVariants}
                        whileHover={{ y: -3, scale: 1.02 }}
                      >
                        <Card
                          sx={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(0, 188, 212, 0.2)',
                            borderRadius: '25px',
                            textAlign: 'center',
                            p: 3,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              border: '1px solid rgba(0, 188, 212, 0.4)',
                            },
                          }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <DriveEta sx={{ fontSize: '2rem', color: 'primary.main', mb: 1 }} />
                          </motion.div>
                          <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
                            Mobilità & Hobby
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                            {portfolioData.drivingLicense}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {portfolioData.hobbies}
                          </Typography>
                        </Card>
                      </motion.div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education;