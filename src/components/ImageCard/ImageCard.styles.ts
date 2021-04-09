import { sizes } from '@theme/tokens';
import styled from 'styled-components';

export const ImageCardRoot = styled.div`
  border-radius: ${sizes['10']};
  position: relative;
  background-color: #1a1a1a;
  height: ${sizes['250']};
  width: ${sizes['200']};
  padding: ${sizes['5']};

  @media (max-width: 850px) {
    height: ${sizes['180']};
    width: ${sizes['130']};
  }
`;

export const ImageWrapper = styled.div`
  border-radius: ${sizes['10']};
  overflow: hidden;
  background-color: black;
  height: 100%;
  position: relative;
`;
