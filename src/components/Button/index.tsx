import Link, { type LinkProps } from 'next/link';
import { ButtonStyled, type ButtonStyledProps } from './styles';

import { Slot } from '@radix-ui/react-slot';

interface ButtonProps extends LinkProps, ButtonStyledProps {
  asChild?: boolean;
}

export const Button: BTypes.FC<ButtonProps> = ({
  variant = 'filled',
  children,
  asChild,
  ...props
}) => {
  const Comp = asChild ? Slot : Link;

  return (
    <ButtonStyled variant={variant}>
      <Comp {...props}>{children}</Comp>
    </ButtonStyled>
  );
};
