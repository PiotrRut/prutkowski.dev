import styled from 'styled-components';

export const Header = styled.header`
  color: transparent;
  background-image: linear-gradient(to right, #005e7f, #61b6cd);
  background-clip: text;
  -webkit-background-clip: text;
  padding-bottom: 2rem;
`;

export const Nav = styled.div`
  color: #fff;
  padding-bottom: 2rem;
`;

export const NavItem = styled.a`
  cursor: pointer;
  font-size: 15px;
  color: #fff;
  &:not(:last-child):after {
    content: ' | ';
  }
`;
