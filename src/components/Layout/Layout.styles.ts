import styled from 'styled-components';

export const AppWrapper = styled.div`
  margin: 0 2rem 1.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    margin: 0 4rem 1.875rem;
  }

  @media (min-width: 1280px) {
    margin: 0 0 1.875rem;
  }
`;
