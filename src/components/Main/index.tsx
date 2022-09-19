import { MainS } from './styles';

interface MainProps {
  children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return <MainS>{children}</MainS>;
};
