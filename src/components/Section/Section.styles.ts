import { centredFlex } from '@theme/shortcuts';
import { palette, sizes } from '@theme/tokens';
import styled from 'styled-components';

/**
 * @param isFullScreen toggle 100vh height
 */
export const SectionWrapper = styled.section<{ isFullScreen: boolean }>`
  ${centredFlex}
  flex-direction: column;
  padding-bottom: ${sizes['80']};

  height: ${(p) => (p.isFullScreen ? '100vh' : 'auto')};
`;

export const SectionHeading = styled.header`
  font-size: ${sizes['34']};
  color: ${palette.white};
  text-align: center;
  padding-bottom: ${sizes['50']};
`;
