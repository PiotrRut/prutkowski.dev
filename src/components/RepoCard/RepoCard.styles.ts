import styled from 'styled-components';

export const RepoCardRoot = styled.div`
  border-radius: 10px;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 350px;

  @media (max-width: 850px) {
    width: 80vw;
  }
`;

export const Name = styled.a`
  font-size: 20px;
  cursor: pointer;
  color: #fff;
  padding-bottom: 10px;

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
  padding-right: 10px;
  display: flex;
  align-items: center;
`;
