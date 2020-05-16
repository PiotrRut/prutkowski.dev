import React from "react";
import Grid from '@material-ui/core/Grid'
import moment from 'moment'
import { Link } from 'gatsby'


// About me section
function Contact() {

    return (
        <section id="photos-prev">
          <Grid direction="row" justify="center" alignItems="center" container spacing={3}>
          <Grid item lg={12} xs={12} xl={12}>
            <b><h3 className="text-gray-400 text-center wow fadeIn">Come say hello!</h3></b>
            </Grid>
            <Grid item md={12} xs={12} lg={12} xl={12}>
              <h5 className="text-gray-400 text-center wow fadeIn">
                Get in touch with me by e-mailing me at:
                <h5><a href="mailto:piotr.rut99@gmail.com">piotr.rut99@gmail.com</a></h5>
              </h5>
            </Grid>
          </Grid>
          <br/>
          <br/>
        </section>
      );
}

export default Contact;