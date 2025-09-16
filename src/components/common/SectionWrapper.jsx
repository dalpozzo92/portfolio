import React from 'react';
import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';

const SectionWrapper = ({ 
  children, 
  id, 
  backgroundColor = 'transparent',
  py = { xs: 8, md: 12 }
}) => {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        py,
        backgroundColor,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {children}
        </motion.div>
      </Container>
    </Box>
  );
};

export default SectionWrapper;