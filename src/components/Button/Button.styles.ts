import { palette, sizes } from '@theme/tokens';
import styled from 'styled-components';

import { ButtonProps } from './Button.models';

export const StyledButton = styled.button<ButtonProps>`
  // Button overrides
  background-color: ${palette.darkGray};
  padding: ${sizes[10]};
  border: 0;
  box-shadow: none;

  &:hover {
    cursor: pointer;
  }

  // Styles
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: ${sizes[150]};
  max-width: ${sizes[200]};
  border-radius: ${sizes[5]};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 ${sizes[1]} orange;
  }
`;

export const IconWrapper = styled.div<{
  leftIcon?: boolean;
}>`
  margin-right: ${(p) => (p.leftIcon ? sizes[10] : 0)};
`;
