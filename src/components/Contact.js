import React from "react";
import Grid from '@material-ui/core/Grid'
import moment from 'moment'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

// Styles override
const useStyles = makeStyles({
  root: {
    color: 'white'
  }
});

// About me section
function Contact() {
  const classes = useStyles();

  return (
    <section id="contact">
      <Grid direction="column" justify="center" alignItems="center" container spacing={3}>
        <Grid item lg={12} xs={12} xl={12}>
          <Typography variant="h4" classes={classes}>Get in touch!</Typography>
        </Grid>
        <Grid item md={12} xs={12} lg={12} xl={12}>
          <h5 className="text-gray-400 text-center wow fadeIn">
            Get in touch with me by e-mailing me at:
            <h5><a href="mailto:piotr.rut99@gmail.com">piotr.rut99@gmail.com</a></h5>
          </h5>
        </Grid>
      </Grid>
      <br />
      <br />
    </section>
  );
}

export default Contact;