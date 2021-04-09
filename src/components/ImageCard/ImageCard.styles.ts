import { sizes } from '@theme/tokens';
import styled from 'styled-components';

// 250x200

export const ImageCardRoot = styled.div`
  border-radius: ${sizes['10']};
  position: relative;
  background-color: #1a1a1a;
  height: ${sizes['250']};
  width: ${sizes['200']};
  padding: ${sizes['5']};
`;

export const ImageWrapper = styled.div`
  border-radius: ${sizes['10']};
  overflow: hidden;
  background-color: black;
  height: 100%;
  position: relative;
`;
