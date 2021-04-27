/* eslint-disable indent */
import { palette, sizes } from '@theme/tokens';
import styled, { css, keyframes } from 'styled-components';

const lineGrowHorizontal = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 90%;
  }
`;

const lineGrowVertical = keyframes`
  0% {
    max-height: 0px;
  }
  100% {
    max-height: ${sizes['180']};
  }
`;

export const TimelineRoot = styled.div`
  padding: 0 0 ${sizes['30']};
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    overflow: scroll;
  }
`;

export const TimelineItem = styled.div<{ inView: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;

  &:before {
    width: ${sizes['1']};
    background-color: grey;
    content: '';
    margin: 0 ${sizes['10']} ${sizes['20']} 0;
    ${({ inView }) =>
      inView &&
      css`
        margin-top: ${sizes['20']};
        animation: ${lineGrowVertical} 1s ease;
        max-height: ${sizes['180']};
      `};
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    &:before {
      height: ${sizes['1']};
      margin: 0 ${sizes['5']} ${sizes['10']} 0;
      ${({ inView }) =>
        inView &&
        css`
          animation: ${lineGrowHorizontal} 1s ease;
          width: 90%;
        `};
    }
  }
`;

export const TimelineCard = styled.div`
  border-radius: ${sizes['10']};
  margin: 0 0 ${sizes['10']};
  padding: ${sizes['15']};
  max-height: ${sizes['300']};
  color: ${palette.white};
  background-color: #171717;
  display: flex;
  flex-direction: column;
  flex: 1 1 0px;
  width: 75vw;

  @media (min-width: 1024px) {
    width: ${sizes['300']};
    margin: ${sizes['5']} ${sizes['5']} ${sizes['5']} 0;
    min-height: ${sizes['200']};
  }
`;

export const Title = styled.p`
  font-size: ${sizes['18']};
`;

export const Details = styled.p`
  font-size: ${sizes['14']};
  color: grey;
`;

export const DateMark = styled.span`
  color: grey;
  width: ${sizes['40']};

  &:before {
    content: '•';
    color: ${palette.cyanBlue};
    position: absolute;
    left: -${sizes['2']};
    border-radius: 50%;
  }

  @media (min-width: 1024px) {
    width: ${sizes['100']};
    &:before {
      content: '';
    }
  }
`;
