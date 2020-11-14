import React from 'react';
import TopBanner from '../src/components/TopBanner';
import About from '../src/components/About';
import Grid from '@material-ui/core/Grid';
import Skills from '../src/components/Skills';
import GitProjectsPreview from '../src/components/GitProjectsPreview';
import BlogPostsPreview from '../src/components/BlogPostsPreview';
import PhotosPreview from '../src/components/PhotosPreview';
import Contact from '../src/components/Contact';
import OtherProjectsPreview from '../src/components/OtherProjectsPreview';
import Layout from '../src/components/layout';

const IndexPage = () => {
  return (
    <Layout>
      <div className="container grid-cols-1 row-gap-16">
        <Grid
          direction="column"
          justify="center"
          alignItems="center"
          container
          spacing={5}
        >
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
          <Grid item xl={9} lg={9} xs={12}>
            <Contact />
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default IndexPage;
