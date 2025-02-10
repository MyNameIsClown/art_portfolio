import { createTheme } from '@mui/material/styles';
import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffb84d',
    },
    secondary: {
      main: '#331a00',
    },
  },
};

export const theme = createTheme({
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
  }
});