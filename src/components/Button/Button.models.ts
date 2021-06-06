import { LinkProps } from 'next/link';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Name for the input
   */
  name: HTMLButtonElement['name'];
  /**
   * Optional label (if no children are passed)
   */
  label?: string;
  /**
   * Where does this redirect to?s
   */
  href: LinkProps['href'];
  /**
   * An icon to display on the right
   */
  iconRight?: React.ReactNode | React.ComponentClass;
  /**
   * An icon to display on the left
   */
  iconLeft?: React.ReactNode | React.ComponentClass;
}
