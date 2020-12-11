import React, { useEffect, useState } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import SEO from '@components/SEO';

import '@css/style.css';
import '@css/animate.css';
import '@css/languages.css';
import '@css/prism-okaidia.css';

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
      <SEO title="Home" />
      {isMounted && <Component {...pageProps} />}
    </MuiThemeProvider>
  );
};

export default MyApp;
