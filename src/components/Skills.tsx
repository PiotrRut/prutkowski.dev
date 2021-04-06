import Grid from '@material-ui/core/Grid';
import { skills } from '@misc/skills';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { FunctionComponent } from 'react';

// Styles override
const useStyles = makeStyles({
  root: {
    color: 'white',
  },
});

const SkillItem = styled.div`
  color: white;
  display: inline-flex;
  padding: 0 12px;
  border-radius: 16px;
  border: 1px solid #009ab6;
  height: 32px;
  align-items: center;
  transition: 350ms;

  &:hover {
    transform: translateX(-3px) translateY(-2px);
  }
`;

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
