import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React, { useEffect } from 'react';

import { AppWrapper } from './Layout.styles';

// Style override for site-wide font family
// MUI Typography needs this, otherwise it will default to Roboto

const theme = createMuiTheme({
  typography: {
    fontFamily: `"Ubuntu", "Roboto", "Arial", sans-serif`,
  },
});

const Layout = ({ children }) => {
  if (typeof window !== 'undefined') {
    useEffect(() => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const WOW = require('wow.js');
      window.wow = new WOW().init();
    }, []);
  }

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>{children}</AppWrapper>
    </ThemeProvider>
  );
};

export default Layout;
