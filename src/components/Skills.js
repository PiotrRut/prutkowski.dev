import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { skills } from '@misc/skills';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';

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
        <Grid container item justify="center" alignItems="center" spacing={3}>
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
                        <Image
                          src={s.icon}
                          width="18"
                          height="18"
                          alt={s.name}
                        />
                        &nbsp;{s.name}
                      </h6>
                      <h6 className="text-gray-600">{s.category}</h6>
                    </Grid>
                  </Grid>
                </Paper>
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
