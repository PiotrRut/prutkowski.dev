import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useEffect } from 'react';

// Style override for site-wide font family
// MUI Typography needs this, otherwise it will default to Roboto

const theme = createMuiTheme({
  typography: {
    fontFamily: `"Ubuntu", "Roboto", "Arial", sans-serif`,
  },
});

const Layout = ({ children }) => {
  // Doing this will prevent "windown is undefined" errors
  // caused by Gatsby not having access to the window at build,
  // as it is built ahead of time and does not have access
  // to browser globals.

  if (typeof window !== 'undefined') {
    useEffect(() => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const WOW = require('wow.js');
      window.wow = new WOW().init();
    }, []);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="mx-8 lg:mx-16 xl:mx-0">{children}</div>
    </ThemeProvider>
  );
};

export default Layout;
