const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');
const path = require(`path`);
const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Piotr Rutkowski`,
    description: `Piotr Rutkowski`,
    author: `Piotr Rutkowski`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: `UA-154333467-2`,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // IP Anonymisation in analytics
        anonymize: true,
      },
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.teal['400'],
        display: `minimal-ui`,
        icon: './src/static/favicon-32.png'
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/blogposts`,
        name: 'blogposts',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `misc`,
        path: path.join(__dirname, `src`, `misc`),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 400,
              showCaptions: true,
              markdownCaptions: true,
              backgroundColor: 'none',
              disableBgImage: true,
            },
          },
        ],
      },
    },

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-smoothscroll`,
  ],
};
