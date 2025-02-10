import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    // mode: 'dark',
    background: {
      default: '#f2f2f2',
    },
    primary: {
      main: '#ffb84d',
    },
    secondary: {
      main: '#331a00',
    },
  },
  typography: {
    fontFamily: [
        'CosasBoscosas',
        'Roboto',
        'sans-serif'
    ].join(','),
    body1: {
      fontFamily: 'Roboto',
      fontSize: '1.1rem' // 17.6px
    },
    h1: {
      fontFamily: 'CosasBoscosas',
      fontSize: '2.5rem' // 56px
    },
  },
});