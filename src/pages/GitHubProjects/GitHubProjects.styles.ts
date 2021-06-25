import { centredFlex } from '@theme/shortcuts';
import { sizes } from '@theme/tokens';
import styled from 'styled-components';

export const GitHubProjectsWrapper = styled.div`
  margin: ${sizes['20']} 0;
  ${centredFlex}
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
