import React from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const SkillCard = ({ title, skills, color, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        transition: { type: "spring", stiffness: 300 }
      }}
    >
      <Card
        sx={{
          height: '100%',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: `1px solid ${color}30`,
          borderRadius: '16px',
          transition: 'all 0.3s ease',
          '&:hover': {
            border: `1px solid ${color}60`,
            boxShadow: `0 8px 32px ${color}20`,
          },
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Typography sx={{ fontSize: '2rem', mr: 2 }}>
              {icon}
            </Typography>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 600,
                color: color,
              }}
            >
              {title}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: delay + index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <Chip
                  label={skill}
                  size="small"
                  sx={{
                    backgroundColor: `${color}15`,
                    color: color,
                    border: `1px solid ${color}30`,
                    fontSize: '0.75rem',
                    '&:hover': {
                      backgroundColor: `${color}25`,
                      transform: 'translateY(-1px)',
                    },
                  }}
                />
              </motion.div>
            ))}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkillCard;