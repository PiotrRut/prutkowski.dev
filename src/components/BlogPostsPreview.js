import React from 'react';
import Grid from '@material-ui/core/Grid';
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
      <Typography
        variant="h4"
        className={`wow fadeIn ${classes.root}`}
        align="center"
      >
        Blog coming back soon - stay tuned! 🎉
      </Typography>
      <br />
      <br />
    </section>
  );
}

export default BlogPostsPreview;
