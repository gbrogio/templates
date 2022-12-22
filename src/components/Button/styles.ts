import { Slot } from '@radix-ui/react-slot';
import styled, { css } from 'styled-components';

export interface ButtonStyledProps {
  variant?: 'filled' | 'outline';
}

export const ButtonStyled = styled(Slot)<ButtonStyledProps>`
  --pd-x: 1.5rem;
  --pd-y: 0.4rem;

  width: fit-content;
  padding: var(--pd-x) var(--pd-y);
  transition: var(--transition);
  font-weight: 600;
  border-radius: 9999px;

  ${({ variant }) =>
    variant === 'filled' &&
    css`
      /* color: rgba(var(--color-text-light));
      background-color: rgba(var(--color-primary-500));

      &:hover {
        background-color: rgba(var(--color-primary-400));
      } */
    `}

  ${({ variant }) =>
    variant === 'outline' &&
    css`
      /* color: rgba(var(--color-primary-500));
      box-shadow: inset 0 0 0 2px rgba(var(--color-primary-500), 50%);

      &:hover {
        background-color: rgba(var(--color-primary-500));
      } */
    `}
`;
