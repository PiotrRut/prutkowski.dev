import { palette, sizes } from '@theme/tokens';
import styled from 'styled-components';

export const RepoCardRoot = styled.div`
  border-radius: ${sizes['10']};
  background-color: #171717;
  display: flex;
  flex-direction: column;
  padding: ${sizes['15']};
  margin: 0 ${sizes['15']} ${sizes['15']};
  width: ${sizes['350']};

  @media (max-width: 1024px) {
    width: 80vw;
    margin: ${sizes['10']} 0;
  }
`;

export const Name = styled.a`
  font-size: ${sizes['20']};
  cursor: pointer;
  color: ${palette.white};
  padding-bottom: ${sizes['10']};

  &:hover {
    text-decoration: underline;
  }
`;

export const Description = styled.p`
  color: ${palette.white};
`;

export const RepoDetails = styled.div`
  display: flex;
  direction: row;
  color: ${palette.white};
  align-items: center;
`;

export const SectionWrapper = styled.div`
  padding-right: ${sizes['10']};
  display: flex;
  align-items: center;
`;
