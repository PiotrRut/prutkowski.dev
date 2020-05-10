import React from "react";
import TopBanner from '../components/TopBanner'
import About from '../components/About'
import Grid from '@material-ui/core/Grid'
import Skills from '../components/Skills'
import ProjectsPreview from '../components/ProjectsPreview'
import SEO from '../components/seo'

import Layout from "../components/layout";

function IndexPage() {
  return (
    <Layout>
    <SEO keywords={[`piotr`, `rutkowski`, `prutkowski`, `london`]} title="Home"/>
      <div className="container grid grid-cols-1 row-gap-16">
        <Grid direction="column" justify="center" alignItems="center" container spacing={5}>
          <Grid item xl={9} lg={5} xs={12}>
            <TopBanner/>
          </Grid>
          <Grid item xl={12} lg={12} xs={12}>
            <About/>
          </Grid>
          <Grid item xl={9} lg={9} xs={12}>
            <Skills/>
          </Grid>
          <Grid item xl={9} lg={9} xs={12}>
            <ProjectsPreview/>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}

export default IndexPage;