import { palette, sizes } from '@theme/tokens';
import styled from 'styled-components';

export const Header = styled.header`
  color: transparent;
  background-image: linear-gradient(to right, #005e7f, #61b6cd);
  background-clip: text;
  -webkit-background-clip: text;
  padding-bottom: ${sizes['32']};
`;

export const Nav = styled.div`
  color: ${palette.white};
  padding-bottom: ${sizes['32']};
`;

export const NavItem = styled.a`
  display: none;

  @media (min-width: 1024px) {
    display: inline;
    cursor: pointer;
    font-size: ${sizes['15']};
    color: ${palette.white};

    &:not(:last-child):after {
      content: ' | ';
    }
  }
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${sizes['25']};
`;
