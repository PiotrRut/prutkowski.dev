import Link from 'next/link';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Styles override
const useStyles = makeStyles({
  root: {
    color: 'white',
  },
});

// Blog posts preview on the main page, with the three latest blog posts
function BlogPostsPreview() {
  const classes = useStyles();

  return (
    <section id="blog-prev">
      <Grid
        direction="column"
        justify="center"
        alignItems="center"
        container
        spacing={3}
      >
        <Grid item lg={12} xs={12} xl={12}>
          <Typography variant="h4" className={`wow fadeIn ${classes.root}`}>
            What&#39;s on my mind?
          </Typography>
        </Grid>
        <Grid item md={12} lg={12} xl={12} xs={12}>
          <Typography
            variant="subtitle1"
            className={`wow fadeIn ${classes.root}`}
          >
            Below you can see some of my latest blog posts.
          </Typography>
        </Grid>
        <Grid item md={12} lg={12} xl={12} xs={12}>
          <Link href="/blog" passHref>
            <a>
              <Typography variant="subtitle1" className="wow fadeIn">
                Want to read more? Click here
              </Typography>
            </a>
          </Link>
        </Grid>
        <Grid
          container
          item
          justify="center"
          alignItems="center"
          spacing={3}
        ></Grid>
      </Grid>
      <br />
      <br />
    </section>
  );
}

export default BlogPostsPreview;
