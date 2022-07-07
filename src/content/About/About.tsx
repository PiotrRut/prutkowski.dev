import Section from '@components/Section';
import Timeline from '@components/Timeline/';
import { TimelineEvent } from '@components/Timeline/Timeline.models';
import React, { FunctionComponent } from 'react';

const events: TimelineEvent[] = [
  {
    date: 'June 2022',
    title: 'Graduated University 🎓',
    content: 'Graduated from City, University of London with 1st class honours, BSc in Computer Science.',
  },
  {
    date: 'July 2020',
    title: 'Joined Equals 🏦',
    content:
      'As a software developer and feature team lead for a small team of very talented people, I develop banking- and money-management solutions for over one million personal and business customers!',
  },
  {
    date: 'Sept 2018',
    title: 'Moved to London 🇬🇧',
    content:
      'I am undertaking a four year long BSc Computer Science course at City, University of London, and am on track to graduate with 1st class honours.',
  },
  {
    date: 'June 2018',
    title: 'Graduated High School 🎓',
    content:
      'I graduated with a diploma in electrical engineering and general studies, ready and motivated to start a degree in computer science at university!',
  },
];

const About: FunctionComponent = () => {
  return (
    <Section heading="What I'm up to" id="about-me">
      <Timeline events={events} />
    </Section>
  );
};

export default About;
