import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Typist from 'react-typist'
import Grid from '@material-ui/core/Grid'
import Image from 'gatsby-image'
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import scrollTo from 'gatsby-plugin-smoothscroll';

function TopBanner() {

const [showArrow, setShowArrow] = useState(false);
const data = useStaticQuery(graphql`
    {
      photo: file(relativePath: { eq: "ProfileImg.png" }) {
        childImageSharp {
          fixed(width: 350, height: 350) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

return (
<section id="top-banner" className="min-h-screen flex items-center container">
  <Grid direction="column" justify="center" align-content="center" alignItems="center" container spacing={2}>
    <Grid item lg={7} xl={5} xs={12} >
      <Image {...data.photo.childImageSharp} />
    </Grid>
    <Grid item className="List" lg={7} xl={5} xs={12}>
    <br/>
      <h1 className="text-gray-200 text-center wow fadeIn">Piotr Rutkowski</h1>
      <Typist cursor={{ show: false }} onTypingDone={() => setShowArrow(true)} className="my-2 flex">
        <code>
          <span className="text-gray-400 text-center">console</span>
          <span className="text-blue-600 text-center">.log</span>
          <span className="text-gray-400 text-center">(</span>
          <span className="text-green-600 text-center">&#39;Welcome to my website&#39;</span>
          <span className="text-gray-400 text-center">)</span>
        </code>
      </Typist>
    </Grid>
    <Grid item className="h-6" lg={6} xl={5} sm={9}>
        <IconButton edge="end" aria-label="comments"
          onClick={() => scrollTo('#about-me')}
        >
          <KeyboardArrowDownIcon className="wow fadeIn" fontSize="large" style={{color: 'white'}}/> 
        </IconButton>  
    </Grid>
  </Grid>
</section>
  );
}

 export default TopBanner;   