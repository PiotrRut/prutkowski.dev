import { palette, sizes } from '@theme/tokens';
import styled from 'styled-components';

export const ImageCardRoot = styled.div`
  border-radius: ${sizes['10']};
  position: relative;
  background-color: ${palette.darkGray};
  height: ${sizes['250']};
  width: ${sizes['200']};
  padding: ${sizes['5']};
  margin: 0 ${sizes['15']} ${sizes['15']};

  @media (max-width: 990px) {
    margin: 0 ${sizes['5']} ${sizes['10']};
  }

  @media (max-width: 480px) {
    height: ${sizes['200']};
    width: ${sizes['150']};
    margin: 0 ${sizes['5']} ${sizes['10']};
  }

  @media (max-width: 375px) {
    height: ${sizes['180']};
    width: ${sizes['130']};
    margin: 0 ${sizes['5']} ${sizes['10']};
  }
`;

export const ImageWrapper = styled.div`
  border-radius: ${sizes['10']};
  overflow: hidden;
  background-color: black;
  height: 100%;
  position: relative;
`;
