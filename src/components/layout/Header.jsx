import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { label: 'Chi sono', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Esperienza', href: '#experience' },
    { label: 'Progetti', href: '#projects' },
    { label: 'Formazione', href: '#education' },
    { label: 'Contatti', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            background: scrolled 
              ? 'rgba(15, 15, 15, 0.7)' 
              : 'rgba(15, 15, 15, 0.3)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)', // Safari support
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            border: scrolled 
              ? '1px solid rgba(255, 255, 255, 0.1)' 
              : '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: { xs: 0, sm: scrolled ? '25px' : '0' },
            mx: { xs: 0, sm: scrolled ? 2 : 0 },
            mt: { xs: 0, sm: scrolled ? 1 : 0 },
            maxWidth: { xs: '100%', sm: scrolled ? 'calc(100% - 32px)' : '100%' },
            boxShadow: scrolled 
              ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
              : '0 4px 16px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection('#home')}
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '1.2rem',
                  textTransform: 'none',
                  background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.1), rgba(0, 188, 212, 0.05))',
                  borderRadius: '25px',
                  px: 3,
                  py: 1,
                  border: '1px solid rgba(0, 188, 212, 0.2)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.2), rgba(0, 188, 212, 0.1))',
                    borderColor: 'rgba(0, 188, 212, 0.4)',
                  },
                }}
              >
                Nicola
              </Button>
            </motion.div>

            {isMobile ? (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconButton
                  color="inherit"
                  onClick={() => setMobileOpen(true)}
                  sx={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '25px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.15)',
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </motion.div>
            ) : (
              <Box 
                sx={{ 
                  display: 'flex', 
                  gap: 1,
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '25px',
                  p: 1,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    whileHover={{ y: -2 }}
                  >
                    <Button
                      onClick={() => scrollToSection(item.href)}
                      sx={{
                        color: 'text.secondary',
                        textTransform: 'none',
                        fontWeight: 400,
                        borderRadius: '25px',
                        px: 3,
                        py: 1,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          color: 'primary.main',
                          background: 'rgba(0, 188, 212, 0.1)',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </motion.div>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            background: 'rgba(15, 15, 15, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            width: 280,
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton 
            onClick={() => setMobileOpen(false)}
            sx={{
              background: 'rgba(255, 255, 255, 0.1)',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 10 }}
            >
              <ListItem disablePadding>
                <ListItemButton 
                  onClick={() => scrollToSection(item.href)}
                  sx={{
                    borderRadius: '25px',
                    mx: 2,
                    '&:hover': {
                      background: 'rgba(0, 188, 212, 0.1)',
                    },
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            </motion.div>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;