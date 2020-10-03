import React from "react";
import TopBanner from '../components/TopBanner'
import About from '../components/About'
import Grid from '@material-ui/core/Grid'
import Skills from '../components/Skills'
import GitProjectsPreview from '../components/GitProjectsPreview'
import BlogPostsPreview from '../components/BlogPostsPreview'
import PhotosPreview from '../components/PhotosPreview'
import SEO from '../components/seo'
import Contact from '../components/Contact'
import Layout from "../components/layout";
import OtherProjectsPreview from '../components/OtherProjectsPreview'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
   "fontFamily": `"Ubuntu", "Roboto", "Arial", sans-serif`,
   "fontSize": 14,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  }
});

function IndexPage() {
  return (
    <MuiThemeProvider theme={theme}>
      <Layout>
        <SEO keywords={[`piotr`, `rutkowski`, `prutkowski`, `london`]} title="Home" />
        <div className="container grid-cols-1 row-gap-16">
          <Grid direction="column" justify="center" alignItems="center" container spacing={5}>
            <Grid item xl={9} lg={5} xs={12}>
              <TopBanner />
            </Grid>
            <Grid item xl={12} lg={12} xs={12}>
              <About />
            </Grid>
            <Grid item xl={9} lg={9} xs={12}>
              <Skills />
            </Grid>
            <Grid item xl={9} lg={9} xs={12}>
              <GitProjectsPreview />
            </Grid>
            <Grid item xl={9} lg={9} xs={12}>
              <OtherProjectsPreview />
            </Grid>
            <Grid item xl={9} lg={9} xs={12}>
              <BlogPostsPreview />
            </Grid>
            <Grid item xl={9} lg={9} xs={12}>
              <PhotosPreview />
            </Grid>
            <Grid item xl={12} lg={12} xs={12}>
              <Contact />
            </Grid>
          </Grid>
        </div>
      </Layout>
    </MuiThemeProvider>
  );
}

export default IndexPage;