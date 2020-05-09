import React from "react";
import TopBanner from '../components/TopBanner'
import About from '../components/About'
import Grid from '@material-ui/core/Grid'

import Layout from "../components/layout";

function IndexPage() {
  return (
    <Layout>
      <div className="container grid grid-cols-1">
        <Grid direction="column" justify="space-between" alignItems="center" container spacing={4}>
            <TopBanner/>
          <Grid item xl={12} lg={12} xs={12}>
            <About/>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}

export default IndexPage;
