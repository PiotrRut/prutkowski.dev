import SEO from '@components/SEO';
import About from '@content/About';
import Contact from '@content/Contact';
import GitProjectsPreview from '@content/GitProjectsPreview';
import Hero from '@content/Hero';
import OtherProjectsPreview from '@content/OtherProjectsPreview';
import PhotosPreview from '@content/PhotosPreview';
import Skills from '@content/Skills';
import { MotionConfig } from 'framer-motion';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const IndexPage: NextPage = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    import('@misc/motionConfig').then((res) => {
      setFeatures(res.default);
    });
  }, []);

  return (
    <>
      <SEO title="Home" />
      <div>
        <MotionConfig features={features}>
          <Hero />
          <About />
          <Skills />
          <GitProjectsPreview />
          <OtherProjectsPreview />
          <PhotosPreview />
          <Contact />
        </MotionConfig>
      </div>
    </>
  );
};

export default IndexPage;
