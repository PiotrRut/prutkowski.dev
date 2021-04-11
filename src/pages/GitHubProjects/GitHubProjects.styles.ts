import { sizes } from '@theme/tokens';
import styled from 'styled-components';

export const GitHubProjectsWrapper = styled.div`
  margin: ${sizes['50']} 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 1024px) {
    width: 90vw;
    flex-direction: row;
  }
`;