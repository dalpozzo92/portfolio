import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Storage, Build, Language, Cloud, Devices } from '@mui/icons-material';
import { portfolioData } from '../../data/portfolioData';

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguaggi di Programmazione",
      skills: portfolioData.skills.languages,
      icon: <Language />,
      color: "#F0F0F0"
    },
    {
      title: "Frontend Development",
      skills: portfolioData.skills.frontend,
      icon: <Code />,
      color: "#F0F0F0"
    },
    {
      title: "Backend Development",
      skills: portfolioData.skills.backend,
      icon: <Storage />,
      color: "#F0F0F0"
    },
    {
      title: "Database",
      skills: portfolioData.skills.databases,
      icon: <Storage />,
      color: "#F0F0F0"
    },
    {
      title: "DevOps & Tools",
      skills: portfolioData.skills.devops,
      icon: <Cloud />,
      color: "#F0F0F0"
    },
    {
      title: "Sistemi & IoT",
      skills: portfolioData.skills.systems,
      icon: <Devices />,
      color: "#F0F0F0"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Box
      id="skills"
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
              Competenze Tecniche
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {skillCategories.map((category, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid rgba(0, 188, 212, 0.2)',
                      borderRadius: '25px',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        border: '1px solid rgba(0, 188, 212, 0.4)',
                        boxShadow: '0 20px 40px rgba(0, 188, 212, 0.1)',
                        background: 'rgba(255, 255, 255, 0.05)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
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
                            <Box sx={{ color: 'primary.main', fontSize: '1.5rem' }}>
                              {category.icon}
                            </Box>
                          </Box>
                        </motion.div>
                        
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{
                            fontWeight: 500,
                            color: 'text.primary',
                          }}
                        >
                          {category.title}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: skillIndex * 0.05 + index * 0.1, duration: 0.3 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Chip
                              label={skill}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(0, 188, 212, 0.1)',
                                color: 'text.primary',
                                border: '1px solid rgba(0, 188, 212, 0.2)',
                                fontSize: '0.75rem',
                                '&:hover': {
                                  backgroundColor: 'rgba(0, 188, 212, 0.2)',
                                  borderColor: 'primary.main',
                                  transform: 'translateY(-1px)',
                                },
                                transition: 'all 0.2s ease',
                              }}
                            />
                          </motion.div>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Competenze Personali */}
          <motion.div variants={itemVariants}>
            <Box sx={{ mt: 10, textAlign: 'center' }}>
              <Typography
                variant="h4"
                component="h3"
                sx={{ mb: 4, color: 'text.primary', fontWeight: 400 }}
              >
                Competenze Personali
              </Typography>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                {portfolioData.personalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <Chip
                      label={skill}
                      sx={{
                        backgroundColor: 'rgba(0, 188, 212, 0.1)',
                        color: 'primary.light',
                        border: '1px solid rgba(0, 188, 212, 0.3)',
                        fontSize: '0.9rem',
                        py: 2,
                        px: 3,
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: 'rgba(0, 188, 212, 0.2)',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.2s ease',
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;