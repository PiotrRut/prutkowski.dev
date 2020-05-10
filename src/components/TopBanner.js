import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Typist from 'react-typist'
import Grid from '@material-ui/core/Grid'
import Image from 'gatsby-image'
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Typography from '@material-ui/core/Typography'

// The top banner with profile pic, name, and some animated text
function TopBanner() {

const [showArrow, setShowArrow] = useState(false);
const data = useStaticQuery(graphql`
    {
      photo: file(relativePath: { eq: "ProfileImg.png" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

return (
<section id="top-banner" className="min-h-screen flex items-center container">
  <Grid direction="column" justify="center" alignItems="center" container spacing={3}>
    <Grid item lg={12} xl={12} xs={12} >
      <Image {...data.photo.childImageSharp} />
    </Grid>
      <h1 className="text-gray-200 text-center wow fadeIn">Piotr Rutkowski</h1> 
    <Grid item lg={12} xl={12} xs={12}>
      <Typist cursor={{ show: false }} className="text-center items-center">
          <code>
            <span className="text-gray-400">console</span>
            <span className="text-blue-600">.log</span>
            <span className="text-gray-400">(</span>
            <span className="text-green-600">&#39;Welcome to my website&#39;</span>
            <span className="text-gray-400">)</span>
          </code>
      </Typist> 
    </Grid>
    <Grid item>
    <IconButton aria-label="comments" className="scrollArrow bounce"
          onClick={() => scrollTo('#about-me')}
        >
          <KeyboardArrowDownIcon fontSize="large" style={{color: 'white'}}/> 
      </IconButton>
    </Grid>
  </Grid>
</section>
  );
}

export default TopBanner;   