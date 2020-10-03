import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Styles override
const useStyles = makeStyles({
  root: {
    color: 'white'
  }
});

// Blog posts preview on the main page, with the three latest blog posts
function BlogPostsPreview() {
  const classes = useStyles();
  const pageQuery = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            frontmatter {
              date(formatString: "D MMMM YYYY")
              title
              path
            }
          }
        }
      }
    }
  `);

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
          <Typography variant="h4" classes={classes}>
            What&#39;s on my mind?
          </Typography>
        </Grid>
        <Grid item md={12} lg={12} xl={12} xs={12}>
          <Typography variant="subtitle1" classes={classes}>
            Below you can see some of my latest blog posts.
          </Typography>
        </Grid>
        <Grid item md={12} lg={12} xl={12} xs={12}>
          <Typography variant="subtitle1">
            <Link to="/blog">Press here to see all of them!</Link>
          </Typography>
        </Grid>
        <Grid container item justify="center" alignItems="center" spacing={3}>
          {pageQuery.allMarkdownRemark.edges
            .slice(0, 3)
            .map(({ node }, index) => (
              <Grid
                item
                className="wow fadeIn"
                key={node.frontmatter.title}
                style={{
                  animationDelay: `${index * 100 + 100}ms`
                }}
              >
                <Link to={node.frontmatter.path} className="font-normal">
                  <Paper
                    elevation={3}
                    style={{
                      width: '300px',
                      maxHeight: '13vh',
                      padding: '15px',
                      background: '#212121'
                    }}
                  >
                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <h6 className="text-gray-400 font-semibold">
                          <i>{node.frontmatter.title}</i>
                        </h6>
                        <h6 className="text-gray-500">
                          {node.frontmatter.date}
                        </h6>
                      </Grid>
                    </Grid>
                  </Paper>
                </Link>
              </Grid>
            ))}
        </Grid>
      </Grid>
      <br />
      <br />
    </section>
  );
}

export default BlogPostsPreview;
