import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Styles override
const useStyles = makeStyles({
  root: {
    color: 'white',
  },
});

// Sections with my skills displayed
function Skills() {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    {
      allSkillsJson {
        edges {
          node {
            id
            name
            category
            icon {
              childImageSharp {
                fixed(width: 20, height: 20) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <section id="skills">
      <Grid
        direction="column"
        justify="center"
        alignItems="center"
        container
        spacing={3}
      >
        <Grid item lg={12} xs={12} xl={12}>
          <Typography variant="h4" classes={classes}>
            I know these...
          </Typography>
        </Grid>
        <Grid container item justify="center" alignItems="center" spacing={3}>
          {data.allSkillsJson.edges.map(({ node }, index) => (
            <Grid
              item
              className="wow fadeIn"
              key={node.id}
              style={{
                animationDelay: `${index * 70 + 70}ms`,
              }}
            >
              <Paper
                elevation={3}
                style={{
                  width: '300px',
                  maxHeight: '20vh',
                  padding: '15px',
                  background: '#212121',
                }}
              >
                <Grid container direction="row" spacing={2}>
                  <Grid item>
                    <h6 className="text-gray-400">
                      <Img
                        style={{ marginBottom: '-3px' }}
                        {...node.icon.childImageSharp}
                      />{' '}
                      &nbsp;{node.name}
                    </h6>
                    <h6 className="text-gray-600">{node.category}</h6>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <br />
      <br />
    </section>
  );
}

export default Skills;
