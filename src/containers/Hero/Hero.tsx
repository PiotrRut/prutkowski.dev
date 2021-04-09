import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import React, { FunctionComponent } from 'react';

import { Header, Nav, NavItem } from './Hero.styles';

const navItems = [
  { link: '#skills', name: 'Skills' },
  { link: '#proj-preview', name: 'GitHub' },
  { link: '#other-proj-preview', name: 'Projects' },
  { link: '#photos-prev', name: 'Gallery' },
  { link: '#contact', name: 'Contact' },
];

// The top banner with profile pic, name, and some animated text
const Hero: FunctionComponent = () => {
  return (
    <section
      id="top-banner"
      className="flex flex-col items-center justify-center container min-h-screen"
    >
      <Header as="h1">Piotr Rutkowski</Header>
      <Nav>
        <h6 className="wow fadeIn">
          {navItems.map((item) => (
            <NavItem href={item.link}>{item.name}</NavItem>
          ))}
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
