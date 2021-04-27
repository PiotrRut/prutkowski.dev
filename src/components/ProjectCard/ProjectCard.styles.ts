import { palette, sizes } from '@theme/tokens';
import styled from 'styled-components';

export const ProjectCardRoot = styled.div`
  border-radius: ${sizes['10']};
  position: relative;
  background-color: #171717;
  display: flex;
  flex-direction: column;
  height: ${sizes['350']};
  width: ${sizes['450']};
  overflow: hidden;
  margin: 0 ${sizes['15']} ${sizes['15']};

  @media (max-width: 1024px) {
    width: 80vw;
    margin: ${sizes['10']} 0;
  }
`;

export const ImageWrapper = styled.div`
  background-color: gray;
  height: 50%;
  position: relative;
`;

export const Title = styled.p`
  font-size: ${sizes['20']};
  color: ${palette.white};
  padding-bottom: ${sizes['10']};
`;

export const TitleAsLink = styled.a`
  font-size: ${sizes['20']};
  cursor: pointer;
  color: ${palette.lightBlue};
  padding-bottom: ${sizes['10']};

  &:hover {
    text-decoration: underline;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${sizes['15']};
  color: #b8b8b8;
`;

export const Description = styled.p`
  font-size: ${sizes['base']};
  padding-bottom: ${sizes['10']};
`;

export const TeamInfo = styled.p`
  font-size: ${sizes['12']};
`;
