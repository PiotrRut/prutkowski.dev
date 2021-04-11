import { sizes } from '@theme/tokens';
import styled from 'styled-components';

export const PicButton = styled.button`
  background: none;
  padding: 0;
  border: 0;
  box-shadow: none;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

export const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: ${sizes['20']};
`;
