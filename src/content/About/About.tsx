import Section from '@components/Section';
import Timeline from '@components/Timeline/';
import { TimelineEvent } from '@components/Timeline/Timeline.models';
import React, { FunctionComponent } from 'react';

const events: TimelineEvent[] = [
  {
    date: 'July 2020',
    title: 'New Job at Equals 🏦',
    content:
      'I got an amazing opportunity to become a part of the engineering team at Equals in London, building multicurrency services for over a million customers!',
  },
  {
    date: 'Sept 2018',
    title: 'Moved to London 🇬🇧',
    content:
      'Shortly after graduating I moved to the UK to start a computer science degree at City, University of London!',
  },
  {
    date: 'June 2018',
    title: 'Graduated High School 🎓',
    content:
      'I graduated with a diploma in electrical engineering and general studies, ready to start university!',
  },
];

// About me section
const About: FunctionComponent = () => {
  return (
    <Section heading="What's going on?" id="about-me">
      <Timeline events={events} />
    </Section>
  );
};

export default About;
