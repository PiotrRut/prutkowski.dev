import React from 'react';
import Typist from 'react-typist';
import Image from 'next/image';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

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
          <Image src="/ProfileImg.png" width={350} height={350} />
        </Grid>
        <Typography variant="h3" component="h1" classes={classes}>
          Piotr Rutkowski
        </Typography>
        <Grid item lg={12} xl={12} xs={12}>
          <Typist cursor={{ show: false }} className="text-center items-center">
            <code>
              <span className="text-gray-400">console</span>
              <span className="text-gray-400">.</span>
              <span className="text-blue-600">log</span>
              <span className="text-gray-400">(</span>
              <span className="text-green-600">
                &#39;Welcome to my website&#39;
              </span>
              <span className="text-gray-400">)</span>
            </code>
          </Typist>
        </Grid>
        <h6 className="text-gray-500 wow fadeIn">
          <Link href="/#skills">
            <span className="cursor-pointer nav"> Skills </span>
          </Link>
          |
          <Link href="/#proj-preview">
            <span className="cursor-pointer nav"> GitHub </span>
          </Link>
          |
          <Link href="/#other-proj-preview">
            <span className="cursor-pointer nav"> Projects </span>
          </Link>
          |
          <Link href="/#blog-prev">
            <span className="cursor-pointer nav"> Blog </span>
          </Link>
          |
          <Link href="/#photos-prev">
            <span className="cursor-pointer nav"> Gallery </span>
          </Link>
          |
          <Link href="/#contact">
            <span className="cursor-pointer nav"> Contact </span>
          </Link>
        </h6>
        <Grid item>
          <Link href="/#about-me">
            <IconButton aria-label="about" className="scrollArrow bounce">
              <KeyboardArrowDownIcon
                fontSize="large"
                style={{ color: 'white' }}
              />
            </IconButton>
          </Link>
        </Grid>
      </Grid>
    </section>
  );
}

export default TopBanner;
