import { sizes } from '@theme/tokens';
import styled from 'styled-components';

export const RepoCardRoot = styled.div`
  border-radius: ${sizes['10']};
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  padding: ${sizes['15']};
  width: ${sizes['350']};

  @media (max-width: 850px) {
    width: 80vw;
  }
`;

export const Name = styled.a`
  font-size: ${sizes['20']};
  cursor: pointer;
  color: #fff;
  padding-bottom: ${sizes['10']};

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
  padding-right: ${sizes['10']};
  display: flex;
  align-items: center;
`;
