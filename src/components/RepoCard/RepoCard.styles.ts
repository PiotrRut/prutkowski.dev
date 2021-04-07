import styled from 'styled-components';

export const RepoCardRoot = styled.div`
  border-radius: 0.625rem;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  padding: 0.938rem;
  width: 21.875rem;

  @media (max-width: 850px) {
    width: 80vw;
  }
`;

export const Name = styled.a`
  font-size: 1.25rem;
  cursor: pointer;
  color: #fff;
  padding-bottom: 0.625rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const Description = styled.p`
  color: white;
`;

export const RepoDetails = styled.div`
  display: flex;
  direction: row;
  color: white;
  align-items: center;
`;

export const SectionWrapper = styled.div`
  padding-right: 0.625rem;
  display: flex;
  align-items: center;
`;
