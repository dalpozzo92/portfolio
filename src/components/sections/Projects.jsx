import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  IconButton,
  Stack,
} from '@mui/material';
import { Launch, GitHub, Code, Construction, Public } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

const Projects = () => {
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
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const getProjectIcon = (project) => {
    if (project.status === 'in-development') {
      return <Construction />;
    } else if (project.liveUrl) {
      return <Public />;
    }
    return <Code />;
  };

  const getStatusInfo = (project) => {
    switch (project.status) {
      case 'in-development':
        return { label: 'In Sviluppo', color: '#FF9800' };
      case 'completed':
        return { label: 'Completato', color: '#4CAF50' };
      default:
        return { label: 'Progetto', color: '#00BCD4' };
    }
  };

  const handleLinkClick = (url, type, status) => {
    if (status === 'in-development') {
      alert('Progetto in fase di sviluppo! Contattami per maggiori informazioni o per una demo.');
      return;
    }
    
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      const message = type === 'github' 
        ? 'Repository non disponibile pubblicamente - Contattami per maggiori dettagli!'
        : 'Demo non disponibile - Contattami per una presentazione del progetto!';
      alert(message);
    }
  };

  return (
    <Box
      id="projects"
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
              Progetti
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {portfolioData.projects.map((project, index) => {
              const statusInfo = getStatusInfo(project);
              
              return (
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
                        display: 'flex',
                        flexDirection: 'column',
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(20px)',
                        border: `1px solid rgba(0, 188, 212, 0.2)`,
                        borderRadius: '25px',
                        overflow: 'hidden',
                        position: 'relative',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          border: `1px solid rgba(0, 188, 212, 0.4)`,
                          boxShadow: '0 20px 40px rgba(0, 188, 212, 0.1)',
                          background: 'rgba(255, 255, 255, 0.05)',
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '4px',
                          background: `linear-gradient(90deg, ${statusInfo.color}, ${statusInfo.color}80)`,
                        },
                      }}
                    >
                      <CardContent sx={{ flexGrow: 1, p: 4 }}>
                        {/* Header con icona e titolo */}
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                          <motion.div
                            whileHover={{ rotate: 30 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Box
                              sx={{
                                width: 48,
                                height: 48,
                                borderRadius: '25px',
                                background: `rgba(0, 188, 212, 0.15)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mr: 2,
                                border: `1px solid rgba(0, 188, 212, 0.3)`,
                                flexShrink: 0,
                              }}
                            >
                              <Box sx={{ color: 'primary.main', fontSize: '1.5rem' }}>
                                {getProjectIcon(project)}
                              </Box>
                            </Box>
                          </motion.div>
                          
                          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                            <Typography
                              variant="h6"
                              component="h3"
                              sx={{
                                fontWeight: 500,
                                color: 'primary.main',
                                mb: 1,
                                wordBreak: 'break-word',
                              }}
                            >
                              {project.title}
                            </Typography>
                            
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                              <Chip
                                label={statusInfo.label}
                                size="small"
                                sx={{
                                  backgroundColor: `${statusInfo.color}20`,
                                  color: statusInfo.color,
                                  fontSize: '0.7rem',
                                  height: '20px',
                                }}
                              />
                              
                              <Chip
                                label={project.type === 'professional' ? 'Professionale' : 'Personale'}
                                size="small"
                                sx={{
                                  backgroundColor: project.type === 'professional' 
                                    ? 'rgba(76, 175, 80, 0.2)' 
                                    : 'rgba(156, 39, 176, 0.2)',
                                  color: project.type === 'professional' 
                                    ? '#4CAF50' 
                                    : '#9C27B0',
                                  fontSize: '0.7rem',
                                  height: '20px',
                                }}
                              />
                            </Stack>
                          </Box>
                        </Box>

                        {/* Descrizione */}
                        <Typography
                          variant="body2"
                          sx={{
                            mb: 3,
                            lineHeight: 1.6,
                            color: 'text.secondary',
                          }}
                        >
                          {project.description}
                        </Typography>

                        {/* Tecnologie */}
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                          {project.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ scale: 0, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              transition={{ delay: techIndex * 0.05, duration: 0.3 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <Chip
                                label={tech}
                                size="small"
                                sx={{
                                  backgroundColor: 'rgba(0, 188, 212, 0.1)',
                                  color: 'text.primary',
                                  border: '1px solid rgba(0, 188, 212, 0.2)',
                                  fontSize: '0.75rem',
                                  '&:hover': {
                                    backgroundColor: 'rgba(0, 188, 212, 0.2)',
                                    borderColor: 'primary.main',
                                  },
                                  transition: 'all 0.2s ease',
                                }}
                              />
                            </motion.div>
                          ))}
                        </Box>

                        {/* Azioni */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          {/* Pulsante principale */}
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              variant="contained"
                              startIcon={
                                project.status === 'in-development' ? <Construction /> :
                                project.liveUrl ? <Launch /> : <Code />
                              }
                              onClick={() => handleLinkClick(project.liveUrl, 'live', project.status)}
                              sx={{
                                background: project.status === 'in-development'
                                  ? 'linear-gradient(135deg, #FF9800, #FFB74D)'
                                  : project.liveUrl 
                                    ? 'linear-gradient(135deg, #00BCD4, #4DD0E1)'
                                    : 'rgba(158, 158, 158, 0.3)',
                                borderRadius: '25px',
                                textTransform: 'none',
                                fontWeight: 500,
                                fontSize: '0.85rem',
                                px: 3,
                                py: 1,
                                '&:hover': {
                                  background: project.status === 'in-development'
                                    ? 'linear-gradient(135deg, #F57C00, #FF9800)'
                                    : project.liveUrl
                                      ? 'linear-gradient(135deg, #00838F, #00BCD4)'
                                      : 'rgba(158, 158, 158, 0.4)',
                                },
                              }}
                            >
                              {project.status === 'in-development' ? 'In Sviluppo' :
                               project.liveUrl ? 'Visualizza' : 'Demo'}
                            </Button>
                          </motion.div>

                          {/* Pulsante GitHub */}
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <IconButton
                              onClick={() => handleLinkClick(project.githubUrl, 'github', project.status)}
                              sx={{
                                color: project.githubUrl ? 'text.secondary' : 'rgba(158, 158, 158, 0.5)',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '25px',
                                '&:hover': {
                                  backgroundColor: project.githubUrl || project.status === 'in-development'
                                    ? 'rgba(0, 188, 212, 0.1)'
                                    : 'rgba(158, 158, 158, 0.1)',
                                  borderColor: project.githubUrl || project.status === 'in-development'
                                    ? 'rgba(0, 188, 212, 0.3)'
                                    : 'rgba(158, 158, 158, 0.2)',
                                  color: project.githubUrl || project.status === 'in-development' 
                                    ? 'primary.main' 
                                    : 'rgba(158, 158, 158, 0.7)',
                                },
                                transition: 'all 0.3s ease',
                              }}
                            >
                              <GitHub />
                            </IconButton>
                          </motion.div>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>

          {/* Call to Action */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mt: 10 }}>
              <Typography
                variant="h5"
                sx={{ mb: 3, color: 'text.secondary', fontWeight: 300 }}
              >
                Vuoi vedere altri progetti?
              </Typography>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<GitHub />}
                  component="a"
                  href={portfolioData.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'text.secondary',
                    borderRadius: '25px',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    textTransform: 'none',
                    fontWeight: 400,
                    '&:hover': {
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      backgroundColor: 'rgba(0, 188, 212, 0.05)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Visita il mio GitHub
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;