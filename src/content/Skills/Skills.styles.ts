import { sizes } from '@theme/tokens';
import styled from 'styled-components';

export const SkillItem = styled.div`
  color: white;
  display: inline-flex;
  padding: 0 ${sizes['12']};
  border-radius: ${sizes['base']};
  border: ${sizes['1']} solid #009ab6;
  height: ${sizes['32']};
  align-items: center;
  transition: 350ms;
  margin: ${sizes['5']};

  &:hover {
    transform: translateX(-${sizes['3']}) translateY(-${sizes['2']});
  }
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;

  @media (min-width: 1024px) {
    width: 60%;
  }
`;
