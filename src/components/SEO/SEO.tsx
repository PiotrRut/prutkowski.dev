import Head from 'next/head';
import { FunctionComponent, useEffect } from 'react';
import ReactGA from 'react-ga';

import { SEOProps } from './SEO.models';

const SEO: FunctionComponent<SEOProps> = ({ title }) => {
  const description =
    'Software developer based in London, UK. Currently working at Equals.';

  const isProd = process.env.NODE_ENV === 'production';

  useEffect(() => {
    if (isProd) {
      ReactGA.initialize('UA-154333467-2');
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, [isProd]);

  return (
    <Head>
      <link rel="icon" href="/favicon-32.png" sizes="32x32" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <title>{`${title} | Piotr Rutkowski`}</title>
      <meta name="description" content={description} />

      <meta property="og:image" content="https://prutkowski.dev/social.webp" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} | Piotr Rutkowski`} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Piotr Rutkowski" />
      <meta property="og:url" content="https://prutkowski.dev/" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content="@PiotrRut99" />
      <meta property="twitter:title" content={`${title} | Piotr Rutkowski`} />
      <meta name="twitter:site" content="@PiotrRut99" />
      <meta property="twitter:description" content={description} />
      <meta name="twitter:image" content="https://prutkowski.dev/social.webp" />

      <link rel="canonical" href="https://prutkowski.dev" />
    </Head>
  );
};

export default SEO;
