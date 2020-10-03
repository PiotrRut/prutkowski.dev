import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Style override for site-wide font family
const theme = createMuiTheme({
  typography: {
    fontFamily: `"Ubuntu", "Roboto", "Arial", sans-serif`,
  },
});

const Layout = ({ children }) => {
  if (typeof window !== 'undefined') {
    useEffect(() => {
      const WOW = require('wow.js');
      window.wow = new WOW().init();
    }, []);
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <div className="mx-8 lg:mx-16 xl:mx-0">{children}</div>
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
