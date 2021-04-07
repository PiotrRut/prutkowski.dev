import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import React, { FunctionComponent } from 'react';

import { Header, Nav } from './Hero.styles';

// The top banner with profile pic, name, and some animated text
const Hero: FunctionComponent = () => {
  return (
    <section
      id="top-banner"
      className="flex flex-col items-center justify-center container min-h-screen"
    >
      <Header as="h1">Piotr Rutkowski</Header>
      <Nav>
        <h6 className="wow fadeIn text-gray-500">
          <a href="#skills">
            <span className="cursor-pointer nav text-gray-500"> Skills </span>
          </a>
          |
          <a href="#proj-preview">
            <span className="cursor-pointer nav text-gray-500"> GitHub </span>
          </a>
          |
          <a href="#other-proj-preview">
            <span className="cursor-pointer nav text-gray-500"> Projects </span>
          </a>
          |
          <a href="#photos-prev">
            <span className="cursor-pointer nav text-gray-500"> Gallery </span>
          </a>
          |
          <a href="#contact">
            <span className="cursor-pointer nav text-gray-500"> Contact </span>
          </a>
        </h6>
      </Nav>
      <a href="#about-me">
        <IconButton aria-label="about" className="bounce">
          <KeyboardArrowDownIcon fontSize="large" style={{ color: 'white' }} />
        </IconButton>
      </a>
    </section>
  );
};

export default Hero;
