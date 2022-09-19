import { ButtonS } from './styles';

interface ButtonProps extends React.FC {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  variant?: 'big' | 'small' | 'default';
}

export const Button = ({ variant, children, onClick }: ButtonProps) => {
  return (
    <ButtonS onClick={onClick}>
      {children || (
        <span>
          I&apos;m a {variant === 'default' ? 'good' : variant || 'good'} button
        </span>
      )}
    </ButtonS>
  );
};
