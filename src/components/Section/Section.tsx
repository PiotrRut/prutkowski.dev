import React, { FunctionComponent } from 'react';

import { SectionProps } from './Section.models';
import { SectionHeading, SectionWrapper } from './Section.styles';

/**
 * Section wrapper
 * @param heading Section heading/title
 * @param id Section ID
 * @param isFullScreen When `true` section will have a height of 100vh
 */
const Section: FunctionComponent<SectionProps> = (props) => {
  const { heading, id, children, isFullScreen = false } = props;
  return (
    <SectionWrapper isFullScreen={isFullScreen} id={id}>
      <SectionHeading as="h2">{heading}</SectionHeading>
      {children}
    </SectionWrapper>
  );
};

export default Section;
