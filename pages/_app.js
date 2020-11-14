import Layout from '../src/components/layout';
import React, { useEffect, useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import '../src/css/style.css';
import '../src/css/animate.css';
import '../src/css/languages.css';
import '../src/css/prism-okaidia.css';

// Style override for site-wide font family
// MUI Typography needs this, otherwise it will default to Roboto
const theme = createMuiTheme({
  typography: {
    fontFamily: `"Ubuntu", "Roboto", "Arial", sans-serif`,
  },
});

const MyApp = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {isMounted && (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ThemeProvider>
  );
};

export default MyApp;
