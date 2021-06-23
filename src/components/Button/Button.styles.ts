import { buttonReset, centredFlex } from '@theme/shortcuts';
import { palette, sizes } from '@theme/tokens';
import styled from 'styled-components';

import { ButtonProps } from './Button.models';

export const StyledButton = styled.button<Omit<ButtonProps, 'href'>>`
  ${buttonReset}
  background-color: ${palette.gray};
  padding: ${sizes[10]};

  // Styles
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: ${sizes[100]};
  max-width: ${sizes[150]};
  border-radius: ${sizes[5]};
  transition: 300ms;
  color: ${palette.white};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 ${sizes[1]} ${palette.cyanBlue};
  }

  &:hover {
    transform: translateX(-${sizes['3']}) translateY(-${sizes['2']});
  }

  @media (min-width: 780px) {
    min-width: ${sizes[150]};
    max-width: ${sizes[200]};
    height: ${sizes[40]};
  }
`;

export const IconWrapper = styled.div<{
  leftIcon?: boolean;
}>`
  ${centredFlex}
  margin-right: ${(p) => (p.leftIcon ? sizes[10] : 0)};
`;
