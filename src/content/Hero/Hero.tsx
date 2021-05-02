import Section from '@components/Section';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { socials } from '@misc/socials';
import React, { FunctionComponent } from 'react';

import { Header, Socials } from './Hero.styles';

const Hero: FunctionComponent = () => {
  return (
    <Section id="top-banner" isFullScreen={true}>
      <Header as="h1">Piotr Rutkowski</Header>
      <Socials>
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <IconButton
              style={{
                color: `${social.color}`,
                animationDelay: `${index * 150 + 150}ms`,
              }}
              href={social.path}
              target="_blank"
              rel="noopener"
              className="wow fadeIn"
              key={social.name}
            >
              <Icon />
            </IconButton>
          );
        })}
      </Socials>
      <a href="#about-me">
        <IconButton aria-label="about" className="bounce">
          <KeyboardArrowDownIcon fontSize="large" style={{ color: 'white' }} />
        </IconButton>
      </a>
    </Section>
  );
};

export default Hero;
