import PropTypes from "prop-types";
import React, { useEffect } from "react";
import SEO from './seo'


const Layout = ({ children }) => {

  if (typeof window !== 'undefined') {
    useEffect(() => {
      const WOW = require("wowjs");
      window.wow = new WOW.WOW({ live: false, mobile: false }).init();
    }, []);
  } 

  return (
    <div>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <div className="mx-8 lg:mx-16 xl:mx-0">
        {children}
      </div>

    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
