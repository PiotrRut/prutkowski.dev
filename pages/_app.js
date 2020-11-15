import Layout from '../src/components/layout';
import React, { useEffect, useState } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

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
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      {isMounted && (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </MuiThemeProvider>
  );
};

export default MyApp;
