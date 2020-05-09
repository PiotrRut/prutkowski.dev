import React from "react";
import TopBanner from '../components/TopBanner'
import About from '../components/About'
import Grid from '@material-ui/core/Grid'

import Layout from "../components/layout";

function IndexPage() {
  return (
    <Layout>
      <div className="container grid grid-cols-1">
      <Grid direction="column" justify="flex-start" alignItems="flex-start" container>
        <TopBanner/>
        <About/>
        </Grid>
      </div>
    </Layout>
  );
}

export default IndexPage;
