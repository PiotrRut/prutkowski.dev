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

  &:hover {
    transform: translateX(-${sizes['3']}) translateY(-${sizes['2']});
  }
`;
