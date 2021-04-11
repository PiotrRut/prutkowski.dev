import { sizes } from '@theme/tokens';
import styled from 'styled-components';

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: ${sizes['20']};

  @media (min-width: 780px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
