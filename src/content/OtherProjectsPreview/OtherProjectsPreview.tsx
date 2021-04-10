import ProjectCard from '@components/ProjectCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { projects } from '@misc/projects';
import { FunctionComponent } from 'react';

// Styles override
const useStyles = makeStyles(() => ({
  text: {
    color: 'white',
  },
}));

// Projects I am involved in with at work
const OtherProjectsPreview: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <section id="other-proj-preview">
      <Grid
        direction="column"
        justify="center"
        alignItems="center"
        container
        spacing={3}
      >
        <Grid item lg={12} xs={12} xl={12}>
          <b>
            <Typography variant="h4" className={`wow fadeIn ${classes.text}`}>
              Other Projects
            </Typography>
          </b>
        </Grid>
        <Grid container item justify="center" alignItems="center" spacing={4}>
          {projects.slice(0, 2).map((p, i) => (
            <Grid
              item
              className="wow fadeIn"
              key={p.title}
              style={{
                animationDelay: `${i * 100 + 100}ms`,
              }}
            >
              <ProjectCard
                picturePath={p.picture}
                title={p.title}
                description={p.description}
                path={p.path && p.path}
                team={p.team && p.team}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <br />
      <br />
    </section>
  );
};

export default OtherProjectsPreview;
