import { sizes } from '@theme/tokens';
import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  margin: ${sizes['50']} 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    width: 80vw;
  }
`;
