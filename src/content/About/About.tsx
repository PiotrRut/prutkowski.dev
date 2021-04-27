import Section from '@components/Section';
import Timeline from '@components/Timeline/';
import { TimelineEvent } from '@components/Timeline/Timeline.models';
import React, { FunctionComponent } from 'react';

const events: TimelineEvent[] = [
  {
    date: 'July 2020',
    title: 'Joined Equals 🏦',
    content:
      'I joined Equals in my first ever software developer position, and have since been enjoying building web and mobile platforms for more than 1 million customers!',
  },
  {
    date: 'Sept 2018',
    title: 'Moved to London 🇬🇧',
    content:
      'Shortly after graduating high school I left Norway and moved to the UK to start a computer science degree at City, University of London!',
  },
  {
    date: 'June 2018',
    title: 'Graduated High School 🎓',
    content:
      'I graduated with a diploma in electrical engineering and general studies, ready and motivated to start a degree in computer science at university!',
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
