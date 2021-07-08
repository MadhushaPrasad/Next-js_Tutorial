import '../src/styles.module.css';
import { ThemeProvider } from 'theme-ui';
import Nav from '../src/components/nav';

import theme from '../theme';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
