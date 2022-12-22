import { FooterStyled } from './styles';

const FooterRoot: BTypes.FC<{}, HTMLElement> = ({ ...props }) => {
  return <FooterStyled {...props} />;
};

export const Footer = {
  Root: FooterRoot,
};
