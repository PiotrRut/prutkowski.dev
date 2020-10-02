import React from 'react';
import Grid from '@material-ui/core/Grid'
import projects from '../misc/projects.json'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Tooltip from '@material-ui/core/Tooltip'

// Styles override
const useStyles = makeStyles({
  root: {
    width: 370,
    background: '#212121',
  },
  media: {
    height: 140,
  },
  text: {
    color: 'white'
  },
  teamText: {
    color: 'gray'
  },
  action: {
    marginTop: '-20px'
  },
  info: {
    marginLeft: 'auto',
    color: 'white'
  }
});

// Projects I am involved in with at work
function OtherProjectsPreview() {
  const classes = useStyles();
  const img = require.context('../images', true);

  return (
    <section id="other-proj-preview">
      <Grid direction="column" justify="center" alignItems="center" container spacing={3}>
        <Grid item lg={12} xs={12} xl={12}>
          <b><Typography variant="h4" className={classes.text}>Other Projects</Typography></b>
        </Grid>
        <Grid item md={12} lg={12} xl={12} xs={12}>
        </Grid>
        <Grid container item justify="center" alignItems="center" spacing={4}>
          {
            projects.map((p, i) => (
              <Grid item md={6} lg={6}
                className="wow fadeIn"
                key={p.title}
                style={{
                  animationDelay: `${i * 70 + 70}ms`,
                }}
              >
                <Card className={classes.root}>
                  <CardMedia title={p.title} className={classes.media} image={img(`./${p.picture}`)} />
                  <CardContent>
                    <Typography gutterBottom className={classes.text} variant="h6" component="h2">
                      {p.title}
                    </Typography>
                    <Typography variant="body2" className={classes.text} component="p">
                      {p.description}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing className={classes.action}>
                    <Button color="primary" size="small" href={p.path}>
                      See more
                    </Button>
                    <Tooltip title={"Team: " + p.team} aria-label="team" placement="left">
                      <IconButton className={classes.info}>
                        <InfoOutlinedIcon/>
                      </IconButton>
                    </Tooltip>
                  </CardActions>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Grid>
      <br />
      <br />
    </section>
  );
}

export default OtherProjectsPreview;   