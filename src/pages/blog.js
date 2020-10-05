import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SEO from '../components/seo';
import Button from '@material-ui/core/Button';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Layout from '../components/layout';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Styles override
const useStyles = makeStyles({
  root: {
    color: 'white',
  },
});

// The blog page, with a list of all my blog posts
function Blog() {
  const classes = useStyles();
  const pageQuery = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt(pruneLength: 60)
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
    <Layout>
      <SEO
        keywords={[`piotr`, `rutkowski`, `prutkowski`, `london`, `blog`]}
        title="Blog"
      />
      <div className="container grid-cols-1 row-gap-16">
        <br />
        <Grid
          direction="column"
          justify="center"
          alignItems="center"
          container
          spacing={3}
        >
          <Grid Grid item lg={12} xs={12} xl={12}>
            <br />
            <Typography variant="h4" component="h1" className={classes.root}>
              📝 My blog
            </Typography>
          </Grid>
          <Grid item md={12} lg={12} xl={12}>
            <p className="text-gray-400 text-center wow fadeIn">
              Here you can find my recent blog posts about topics I&#39;m
              interested in, or just my thoughts in general! Enjoy!
            </p>
          </Grid>
          <Grid container item justify="center" alignItems="center" spacing={3}>
            {pageQuery.allMarkdownRemark.edges.map(({ node }, index) => (
              <Grid
                item
                className="wow fadeIn"
                key={node.frontmatter.title}
                style={{
                  animationDelay: `${index * 100 + 100}ms`,
                }}
              >
                <Link to={node.frontmatter.path} className="font-normal">
                  <Paper
                    elevation={3}
                    style={{
                      width: '300px',
                      maxHeight: '22vh',
                      padding: '15px',
                      background: '#212121',
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
                        <br />
                        <h6 className="text-gray-700">{node.excerpt}</h6>
                      </Grid>
                    </Grid>
                  </Paper>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <br />
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item lg={12} xs={12} xl={12}>
            <br />
            <Link className="no-underline text-black" to="/">
              <Button
                variant="contained"
                color="inherit"
                startIcon={<KeyboardBackspaceIcon />}
              >
                Return home
              </Button>
            </Link>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
      </div>
    </Layout>
  );
}

export default Blog;
