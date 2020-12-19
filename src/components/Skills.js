import React from 'react';
import Grid from '@material-ui/core/Grid';
import { skills } from '@misc/skills';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

// Styles override
const useStyles = makeStyles({
  root: {
    color: 'white',
  },
});

// Sections with my skills displayed
function Skills() {
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
                key={s.id}
                style={{
                  animationDelay: `${i * 70 + 70}ms`,
                }}
              >
                <Chip
                  label={s.name}
                  variant="outlined"
                  style={{ background: '#A7FFEB' }}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <br />
      <br />
    </section>
  );
}

export default Skills;
