import React, { useState } from 'react';
import { sendEmail } from '../../services/emailService';
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  IconButton,
  Stack,
  TextField,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
  Send,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validazione base
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSnackbar({
        open: true,
        message: 'Per favore, compila tutti i campi.',
        severity: 'warning',
      });
      setIsLoading(false);
      return;
    }

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        setSnackbar({
          open: true,
          message: 'Messaggio inviato con successo! Ti risponderò al più presto.',
          severity: 'success',
        });
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error('Errore invio email:', error);
      setSnackbar({
        open: true,
        message: 'Errore nell\'invio. Riprova o contattami direttamente.',
        severity: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Email />,
      label: 'Email',
      value: portfolioData.personalInfo.email,
      href: `mailto:${portfolioData.personalInfo.email}`,
    },
    {
      icon: <LocationOn />,
      label: 'Ubicazione',
      value: portfolioData.personalInfo.location,
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedIn />,
      href: portfolioData.personalInfo.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: <GitHub />,
      href: portfolioData.personalInfo.github,
      label: 'GitHub',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      id="contact"
      component="section"
      sx={{
        py: 12,
        borderTop: '1px solid',
        borderColor: 'divider',
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
              Contatti
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {/* Informazioni di contatto */}
            <Grid item xs={12} lg={6}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{ mb: 3, color: 'primary.main', fontWeight: 400 }}
                >
                  Parliamo insieme
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.7, color: 'text.secondary' }}
                >
                  Sono sempre interessato a nuove opportunità e collaborazioni. 
                  Non esitare a contattarmi se hai un progetto in mente.
                </Typography>

                <Stack spacing={3} sx={{ mb: 6 }}>
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ x: 10, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Paper
                        component={info.href ? "a" : "div"}
                        href={info.href}
                        sx={{
                          p: 3,
                          display: 'flex',
                          alignItems: 'center',
                          textDecoration: 'none',
                          color: 'inherit',
                          cursor: info.href ? 'pointer' : 'default',
                          background: 'rgba(255, 255, 255, 0.03)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(0, 188, 212, 0.2)',
                          borderRadius: '25px',
                          transition: 'all 0.3s ease',
                          '&:hover': info.href ? {
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            borderColor: 'rgba(0, 188, 212, 0.4)',
                            boxShadow: '0 8px 32px rgba(0, 188, 212, 0.1)',
                          } : {},
                        }}
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
                            mr: 3,
                            border: '1px solid rgba(0, 188, 212, 0.3)',
                          }}
                        >
                          <Box sx={{ color: 'primary.main' }}>
                            {info.icon}
                          </Box>
                        </Box>
                        
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary', fontSize: '0.85rem', mb: 0.5 }}
                          >
                            {info.label}
                          </Typography>
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            {info.value}
                          </Typography>
                        </Box>
                      </Paper>
                    </motion.div>
                  ))}
                </Stack>

                {/* Social Links */}
                <motion.div variants={itemVariants}>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ mb: 3, color: 'text.secondary', fontWeight: 400 }}
                    >
                      Seguimi su:
                    </Typography>
                    
                    <Stack direction="row" spacing={2}>
                      {socialLinks.map((social, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.1, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <IconButton
                            component="a"
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              width: 56,
                              height: 56,
                              background: 'rgba(255, 255, 255, 0.05)',
                              backdropFilter: 'blur(10px)',
                              border: '1px solid rgba(0, 188, 212, 0.2)',
                              borderRadius: '25px',
                              color: 'text.secondary',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                backgroundColor: 'rgba(0, 188, 212, 0.1)',
                                borderColor: 'rgba(0, 188, 212, 0.4)',
                                color: 'primary.main',
                              },
                            }}
                          >
                            {social.icon}
                          </IconButton>
                        </motion.div>
                      ))}
                    </Stack>
                  </Box>
                </motion.div>
              </motion.div>
            </Grid>

            {/* Form di contatto */}
            <Grid item xs={12} lg={6}>
              <motion.div variants={itemVariants}>
                <Paper
                  sx={{
                    p: 4,
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(0, 188, 212, 0.2)',
                    borderRadius: '25px',
                    '&:hover': {
                      borderColor: 'rgba(0, 188, 212, 0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ mb: 4, color: 'primary.main', textAlign: 'center', fontWeight: 400 }}
                  >
                    Invia un messaggio
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <TextField
                        fullWidth
                        label="Nome"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isLoading}
                        sx={{ 
                          mb: 3,
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '25px',
                            background: 'rgba(255, 255, 255, 0.02)',
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.1)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(0, 188, 212, 0.3)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'text.secondary',
                          },
                        }}
                        variant="outlined"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isLoading}
                        sx={{ 
                          mb: 3,
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '25px',
                            background: 'rgba(255, 255, 255, 0.02)',
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.1)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(0, 188, 212, 0.3)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'text.secondary',
                          },
                        }}
                        variant="outlined"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <TextField
                        fullWidth
                        label="Messaggio"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        disabled={isLoading}
                        sx={{ 
                          mb: 4,
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '25px',
                            background: 'rgba(255, 255, 255, 0.02)',
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.1)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(0, 188, 212, 0.3)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'text.secondary',
                          },
                        }}
                        variant="outlined"
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: isLoading ? 1 : 1.02 }}
                      whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        disabled={isLoading}
                        startIcon={
                          isLoading ? (
                            <CircularProgress size={20} color="inherit" />
                          ) : (
                            <Send />
                          )
                        }
                        sx={{
                          background: 'linear-gradient(135deg, #00BCD4, #4DD0E1)',
                          borderRadius: '25px',
                          py: 1.5,
                          fontSize: '1.1rem',
                          fontWeight: 500,
                          textTransform: 'none',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #00838F, #00BCD4)',
                          },
                          '&:disabled': {
                            background: 'rgba(0, 188, 212, 0.3)',
                            color: 'rgba(255, 255, 255, 0.5)',
                          },
                        }}
                      >
                        {isLoading ? 'Invio in corso...' : 'Invia Messaggio'}
                      </Button>
                    </motion.div>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          textAlign: 'center',
          mt: 12,
          pt: 6,
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © 2025 Dal Pozzo Nicola.
          </Typography>
        </motion.div>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={8000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          variant="filled"
          sx={{ 
            width: '100%',
            borderRadius: '25px',
            '& .MuiAlert-message': {
              fontSize: '0.95rem',
            },
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;