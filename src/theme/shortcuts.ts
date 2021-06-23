import { css } from 'styled-components';

/**
 * Shortcut to quickly centre flex elements. It adds the following rules to the CSS:
 *
 * `display: flex;
 * align-items: center;
 * justify-content: center;`
 */
export const centredFlex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**
 * Resets the button styles
 */
export const buttonReset = css`
  background: none;
  padding: 0;
  border: 0;
  box-shadow: none;
  &:hover {
    cursor: pointer;
  }
`;
