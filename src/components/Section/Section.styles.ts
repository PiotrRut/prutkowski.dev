import { sizes } from '@theme/tokens';
import styled from 'styled-components';

/**
 * @param isFullScreen toggle 100vh height
 */
export const SectionWrapper = styled.section<{ isFullScreen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: ${sizes['80']};

  height: ${(p) => (p.isFullScreen ? '100vh' : 'auto')};
`;

export const SectionHeading = styled.header`
  font-size: ${sizes['34']};
  color: #fff;
  text-align: center;
  padding-bottom: ${sizes['50']};
`;
