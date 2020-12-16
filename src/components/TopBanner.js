import React from 'react';
import Typist from 'react-typist';
import Image from 'next/image';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Styles override
const useStyles = makeStyles({
  root: {
    color: 'white',
  },
});

// The top banner with profile pic, name, and some animated text
function TopBanner() {
  const classes = useStyles();

  return (
    <section
      id="top-banner"
      className="min-h-screen flex items-center container"
    >
      <Grid
        direction="column"
        justify="center"
        alignItems="center"
        container
        spacing={7}
      >
        <Grid item lg={12} xl={12} xs={12} sm={12}>
          <Image src="/ProfileImg.webp" width={350} height={350} />
        </Grid>
        <Typography variant="h3" component="h1" classes={classes}>
          Piotr Rutkowski
        </Typography>
        <Grid item lg={12} xl={12} xs={12}>
          <Typist
            cursor={{ show: false }}
            className="text-center items-center text-sm"
          >
            <code>
              <span className="text-gray-200">console</span>
              <span className="text-gray-200">.</span>
              <span className="text-blue-400">log</span>
              <span className="text-gray-200">(</span>
              <span className="text-green-400">
                &#39;Welcome to my website&#39;
              </span>
              <span className="text-gray-200">)</span>
            </code>
          </Typist>
        </Grid>
        <h6 className="wow fadeIn text-gray-500">
          <a href="#skills">
            <span className="cursor-pointer nav text-gray-500"> Skills </span>
          </a>
          |
          <a href="#proj-preview">
            <span className="cursor-pointer nav text-gray-500"> GitHub </span>
          </a>
          |
          <a href="#other-proj-preview">
            <span className="cursor-pointer nav text-gray-500"> Projects </span>
          </a>
          |
          <a href="#blog-prev">
            <span className="cursor-pointer nav text-gray-500"> Blog </span>
          </a>
          |
          <a href="#photos-prev">
            <span className="cursor-pointer nav text-gray-500"> Gallery </span>
          </a>
          |
          <a href="#contact">
            <span className="cursor-pointer nav text-gray-500"> Contact </span>
          </a>
        </h6>
        <Grid item>
          <a href="#about-me">
            <IconButton aria-label="about" className="scrollArrow bounce">
              <KeyboardArrowDownIcon
                fontSize="large"
                style={{ color: 'white' }}
              />
            </IconButton>
          </a>
        </Grid>
      </Grid>
    </section>
  );
}

export default TopBanner;
