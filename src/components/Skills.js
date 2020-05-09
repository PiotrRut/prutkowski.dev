import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';

const Skills = () => {
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
          <h2 className="text-gray-400 text-center wow fadeIn">Skills</h2>
        </Grid>
        {data.allSkillsJson.edges.map(({ node }, index) => (
          <Grid item
            className="wow fadeIn"
            key={node.id}
            style={{
              animationDelay: `${index * 100 + 100}ms`,
            }}
          >
            <Paper elevation={3} style={{width: '300px', maxHeight: '8vh', padding: '15px', background: '#212121',}}>
              <Grid container spacing={2}>
                <Grid item><GatsbyImage {...node.icon.childImageSharp}/></Grid>
                <Grid item><p className="text-gray-400">{node.name}</p></Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Skills;