import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00BCD4',
      light: '#4DD0E1',
      dark: '#00838F',
    },
    background: {
      default: '#0F0F0F',
      paper: 'rgba(22, 22, 22, 0.8)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    divider: 'rgba(0, 188, 212, 0.1)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 300,
      letterSpacing: '-0.02em',
      color: '#FFFFFF',
    },
    h2: {
      fontSize: '2.2rem',
      fontWeight: 300,
      letterSpacing: '-0.01em',
      marginBottom: '3rem',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          fontWeight: 400,
        },
      },
    },
  },
});

export default theme;