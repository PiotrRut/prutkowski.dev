import PropTypes from "prop-types";
import React, { useEffect } from "react";


const Layout = ({ children }) => {

  if (typeof window !== 'undefined') {
    useEffect(() => {
      const WOW = require('wow.js');
      window.wow = new WOW().init();
    }, []);
  } 

  return (
    <div>


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
