import SEO from '@components/SEO';
import About from '@containers/About';
import Contact from '@containers/Contact';
import GitProjectsPreview from '@containers/GitProjectsPreview';
import Hero from '@containers/Hero';
import OtherProjectsPreview from '@containers/OtherProjectsPreview';
import PhotosPreview from '@containers/PhotosPreview';
import Skills from '@containers/Skills';
import Grid from '@material-ui/core/Grid';
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
  return (
    <>
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
    </>
  );
};

export default IndexPage;
