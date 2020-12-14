import Head from 'next/head';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

const SEO = ({ title }) => {
  const description =
    'Software developer based in London, UK. Currently working at Equals.';

  useEffect(() => {
    ReactGA.initialize('UA-154333467-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Head>
      <link rel="shortcut icon" href="/favicon-32.png" />
      <title>{`${title} | Piotr Rutkowski`}</title>
      <meta name="description" content={description} />

      <meta property="og:image" content="https://prutkowski.tech/social.webp" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={`${title} | Piotr Rutkowski`} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Piotr Rutkowski" />
      <meta property="og:url" content="https://prutkowski.tech/" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content="@PiotrRut99" />
      <meta property="twitter:title" content={`${title} | Piotr Rutkowski`} />
      <meta name="twitter:site" content="@PiotrRut99" />
      <meta property="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://prutkowski.tech/social.webp"
      />
    </Head>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
};
