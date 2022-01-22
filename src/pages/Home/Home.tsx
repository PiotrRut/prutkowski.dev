import SEO from '@components/SEO';
import About from '@content/About';
import Contact from '@content/Contact';
import GitProjectsPreview from '@content/GitProjectsPreview';
import Hero from '@content/Hero';
import OtherProjectsPreview from '@content/OtherProjectsPreview';
import PhotosPreview from '@content/PhotosPreview';
import Skills from '@content/Skills';
import { domAnimation, LazyMotion } from 'framer-motion';
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
  return (
    <div>
      <SEO title="Home" />
      <LazyMotion features={domAnimation}>
        <Hero />
        <About />
        <Skills />
        <OtherProjectsPreview />
        <GitProjectsPreview />
        {/* <PhotosPreview /> */}
        <Contact />
      </LazyMotion>
    </div>
  );
};

export default IndexPage;
