import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#8B1A2F',
      dark: '#5E1020',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#C09A3E',
      light: '#E8D5A3',
      contrastText: '#1C1A17',
    },
    background: {
      default: '#F9F6F0',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1C1A17',
      secondary: '#4A4640',
    },
    divider: '#DDD8CF',
  },
  typography: {
    fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
    h1: {
      fontFamily: 'adobe-caslon-pro, "Caslon", georgia, serif',
      fontWeight: 400,
    },
    h2: {
      fontFamily: 'adobe-caslon-pro, "Caslon", georgia, serif',
      fontWeight: 400,
    },
    h3: {
      fontFamily: 'adobe-caslon-pro, "Caslon", georgia, serif',
      fontWeight: 400,
    },
    h4: {
      fontFamily: 'adobe-caslon-pro, "Caslon", georgia, serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
      fontSize: '1rem',
      lineHeight: 1.65,
      color: '#4A4640',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1440,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          backgroundColor: '#F9F6F0',
          color: '#1C1A17',
          overflowX: 'hidden',
          maxWidth: '100%',
        },
        html: {
          overflowX: 'hidden',
          maxWidth: '100%',
          scrollBehavior: 'smooth',
        },
      },
    },
  },
});

export default theme;
