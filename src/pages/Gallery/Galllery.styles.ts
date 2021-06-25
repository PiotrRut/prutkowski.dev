import { centredFlex } from '@theme/shortcuts';
import { sizes } from '@theme/tokens';
import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  margin: ${sizes['30']} 0;
  ${centredFlex}
  flex-wrap: wrap;

  @media (min-width: 1024px) {
    width: 80vw;
  }
`;
