import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import UIProvider from '../context/ui/UIProvider';
import '../styles/globals.css';
import { darkTheme, lightTheme } from '../themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  );
}

export default MyApp;
