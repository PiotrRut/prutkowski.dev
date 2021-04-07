import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { skills } from '@misc/skills';
import React, { FunctionComponent } from 'react';

import { SkillItem } from './Skills.styles';

// Styles override
const useStyles = makeStyles({
  root: {
    color: 'white',
  },
});

// Sections with my skills displayed
const Skills: FunctionComponent = () => {
  const classes = useStyles();

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
          <Typography variant="h4" className={`wow fadeIn ${classes.root}`}>
            Some things I know...
          </Typography>
        </Grid>
        <Grid
          container
          item
          justify="center"
          alignItems="center"
          spacing={3}
          lg={9}
        >
          {skills.map((s, i) => {
            return (
              <Grid
                item
                className="wow fadeIn"
                key={i}
                style={{
                  animationDelay: `${i * 70 + 70}ms`,
                }}
              >
                <SkillItem key={s.name}>{s.name}</SkillItem>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <br />
    </section>
  );
};

export default Skills;
