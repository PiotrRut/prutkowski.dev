import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

//TODO: Check if the h6 still breaks with e-mail on deploy preview

// Styles override
const useStyles = makeStyles({
  root: {
    color: 'white',
  },
});

// About me section
function Contact() {
  const classes = useStyles();

  return (
    <section id="contact">
      <Grid
        direction="column"
        justify="center"
        alignItems="center"
        container
        spacing={2}
      >
        <Grid item lg={12} xs={12} xl={12}>
          <Typography variant="h4" classes={classes}>
            Contact
          </Typography>
        </Grid>
        <Grid item md={12} lg={12} xl={12} xs={12}>
          <Typography variant="subtitle1" classes={classes}>
            You can get in touch at:
          </Typography>
        </Grid>
        <Grid item md={12} lg={12} xl={12} xs={12}>
          <Typography variant="subtitle1">
            <Link href="mailto:piotr.rut99@gmail.com">
              piotr.rut99@gmail.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
      <br />
      <br />
    </section>
  );
}

export default Contact;
