import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Home from '@/pages/Home';
import Navbar from '@/components/Navbar';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: `
              a {
                color: inherit;
                text-decoration: none;
              }            
            `,
          },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer />
      <Navbar />
      <Container spacing={2} maxWidth="md" sx={{ pb: 3 }}>
        <Home />
      </Container>
    </ThemeProvider>
  );
};

export default App;
