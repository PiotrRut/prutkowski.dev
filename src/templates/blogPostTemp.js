import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Grid from '@material-ui/core/Grid'
import SEO from '../components/seo'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import Layout from "../components/layout";

// Blog post template
export default function Template({
  data,
}) {
  const { markdownRemark } = data // data.markdownRemark holds the post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO keywords={[`piotr`, `rutkowski`, `prutkowski`, `london`]} title="Blog"/>
      <div>
        <br/>
        <Grid direction="column" justify="center" alignItems="center" container spacing={8}>
          <Grid Grid item lg={12} xs={12} xl={12}>
            <b><h2 className="text-gray-400 text-center">{frontmatter.title}</h2></b>
            <i><h6 className="text-gray-400 text-center"> Published at: {frontmatter.date}</h6></i>
          </Grid>
          <Grid Grid item lg={9} xs={12} xl={12}>
            <h5 className="text-gray-400 text-left wow fadeIn" dangerouslySetInnerHTML={{ __html: html }}/>
          </Grid>
          <Grid item lg={12} xs={12} xl={12}>
            <Link className="no-underline text-black" to="/blog">
            <Button variant="contained" color="inherit" startIcon={<KeyboardBackspaceIcon/>}>
              Return to blog posts
            </Button>
            </Link>
          </Grid>
        </Grid>
        <br/><br/><br/>
      </div>
    </Layout>
  );
}

Template.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`