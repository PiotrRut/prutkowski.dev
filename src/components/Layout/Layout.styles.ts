import styled from 'styled-components';

export const AppWrapper = styled.div`
  margin: 1rem 1rem 1.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    margin: 1.5rem 4rem 1.875rem;
  }

  @media (min-width: 1280px) {
    margin: 1.5rem 0 1.875rem;
  }
`;
