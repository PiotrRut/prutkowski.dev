import Hero from '@components/Hero';
import About from '@components/About';
import Grid from '@material-ui/core/Grid';
import Skills from '@components/Skills';
import GitProjectsPreview from '@components/GitProjectsPreview';
import PhotosPreview from '@components/PhotosPreview';
import Contact from '@components/Contact';
import OtherProjectsPreview from '@components/OtherProjectsPreview';
import Layout from '@components/layout';
import SEO from '@components/SEO';
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="container grid-cols-1 gap-y-16">
        <Grid
          direction="column"
          justify="center"
          alignItems="center"
          container
          spacing={5}
        >
          <Grid item xs={12}>
            <Hero />
          </Grid>
          <Grid item xl={9} lg={10} xs={12}>
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
