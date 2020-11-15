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
        spacing={3}
      >
        <Grid item lg={12} xl={12} xs={12}>
          <Image src="/ProfileImg.png" width={300} height={300} />
        </Grid>
        <Typography variant="h3" component="h1" classes={classes}>
          Piotr Rutkowski
        </Typography>
        <Grid item lg={12} xl={12} xs={12}>
          <Typist cursor={{ show: false }} className="text-center items-center">
            {/* purgecss start ignore */}
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
            {/* purgecss end ignore */}
          </Typist>
        </Grid>
        <h6 className="text-gray-500 wow fadeIn">
          <span
            className="cursor-pointer nav"
            onClick={() => scrollTo('#skills')}
          >
            Skills
          </span>{' '}
          |
          <span
            className="cursor-pointer nav"
            onClick={() => scrollTo('#proj-preview')}
          >
            {' '}
            GitHub
          </span>{' '}
          |
          <span
            className="cursor-pointer nav"
            onClick={() => scrollTo('#other-proj-preview')}
          >
            {' '}
            Projects
          </span>{' '}
          |
          <span
            className="cursor-pointer nav"
            onClick={() => scrollTo('#blog-prev')}
          >
            {' '}
            Blog
          </span>{' '}
          |
          <span
            className="cursor-pointer nav"
            onClick={() => scrollTo('#photos-prev')}
          >
            {' '}
            Gallery
          </span>{' '}
          |
          <span
            className="cursor-pointer nav"
            onClick={() => scrollTo('#contact')}
          >
            {' '}
            Contact
          </span>
        </h6>
        <Grid item>
          <IconButton
            aria-label="comments"
            className="scrollArrow bounce"
            onClick={() => scrollTo('#about-me')}
          >
            <KeyboardArrowDownIcon
              fontSize="large"
              style={{ color: 'white' }}
            />
          </IconButton>
        </Grid>
      </Grid>
    </section>
  );
}

export default TopBanner;
