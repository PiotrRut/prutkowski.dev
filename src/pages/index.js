import React from "react";
import TopBanner from '../components/TopBanner'
import About from '../components/About'
import Grid from '@material-ui/core/Grid'

import Layout from "../components/layout";

function IndexPage() {
  return (
    <Layout>
      <div >
        <Grid direction="column" justify="space-between" alignItems="center" container spacing={6}>
            <TopBanner/>
          <Grid item lg={12} xs={12}>
            <About/>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}

export default IndexPage;
