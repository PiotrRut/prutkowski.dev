import Link from 'next/link';
import React, { FunctionComponent } from 'react';

import { ButtonProps } from './Button.models';
import { IconWrapper, StyledButton } from './Button.styles';

/**
 * Button component - acts as a wrapper around `next/link`
 *
 * Can be styled with an `iconLeft` or `iconRight`
 *
 * _Prefer using `react-icons` rather than `material-ui/icons` for layout reasons_
 */
const Button: FunctionComponent<ButtonProps> = (props) => {
  const { name, children, label, href, iconRight, iconLeft, ...rest } = props;
  return (
    <Link href={href} passHref>
      <StyledButton name={name} {...rest}>
        {iconLeft && <IconWrapper leftIcon>{iconLeft}</IconWrapper>}
        {children?.toString().toUpperCase() ?? label?.toUpperCase()}
        {iconRight && <IconWrapper>{iconRight}</IconWrapper>}
      </StyledButton>
    </Link>
  );
};

export default Button;
