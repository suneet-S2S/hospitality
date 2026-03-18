import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fca311',
      dark: '#d98700',
      contrastText: '#101828',
    },
    secondary: {
      main: '#14213d',
    },
    text: {
      primary: '#14213d',
      secondary: '#385379',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: 'Outfit, Segoe UI, sans-serif',
    h1: {
      fontFamily: 'Libre Baskerville, Georgia, serif',
      fontWeight: 700,
      lineHeight: 1.12,
    },
    h2: {
      fontFamily: 'Libre Baskerville, Georgia, serif',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 20,
          paddingBlock: 10,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 18,
        },
      },
    },
  },
});

export default theme;
