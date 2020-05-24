import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';

// Sections with my skills displayed
function Skills() {
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
      <Grid direction="row" justify="center" alignItems="center" container spacing={3}>
        <Grid item lg={12} xs={12} xl={12}>
          <b><h3 className="text-gray-400 text-center wow fadeIn">Here are some things I know...</h3></b>
        </Grid>
        {data.allSkillsJson.edges.map(({ node }, index) => (
          <Grid item
            className="wow fadeIn"
            key={node.id}
            style={{
              animationDelay: `${index * 70 + 70}ms`,
            }}
          >
            <Paper elevation={3} style={{ width: '300px', maxHeight: '20vh', padding: '15px', background: '#212121', }}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <h6 className="text-gray-400">
                    <Img style={{ marginBottom: '-3px' }} {...node.icon.childImageSharp} /> &nbsp;{node.name}
                  </h6>
                  <h6 className="text-gray-600">{node.category}</h6>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <br />
      <br />
    </section>
  );
}

export default Skills;