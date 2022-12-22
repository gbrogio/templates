import { HeaderStyled } from './styled';

const HeaderRoot: BTypes.FC<{}, HTMLElement> = ({ ...props }) => {
  return <HeaderStyled {...props} />;
};

export const Header = {
  Root: HeaderRoot,
};
