import { createGlobalStyle } from 'styled-components';

const Colors = createGlobalStyle`
  :root {
    --color-primary: ${({ theme: { colors } }) => colors.primary};
    --color-gray100: ${({ theme: { colors } }) => colors.gray['100']};
    --color-gray500: ${({ theme: { colors } }) => colors.gray['500']};
    --color-gray600: ${({ theme: { colors } }) => colors.gray['600']};
    --color-gray800: ${({ theme: { colors } }) => colors.gray['800']};
    --color-gray900: ${({ theme: { colors } }) => colors.gray['900']};
  }
`;
const Fonts = createGlobalStyle`
  :root {
    --font-size-xs: ${({ theme: { fonts } }) => fonts.sizes.xs};
    --font-size-sm: ${({ theme: { fonts } }) => fonts.sizes.sm};
    --font-size-md: ${({ theme: { fonts } }) => fonts.sizes.md};
    --font-size-lg: ${({ theme: { fonts } }) => fonts.sizes.lg};
    --font-size-xl: ${({ theme: { fonts } }) => fonts.sizes.xl};
    --font-size-2xl: ${({ theme: { fonts } }) => fonts.sizes['2xl']};
  }
`;
const Root = createGlobalStyle`
  :root {}
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, p, a {
    font-family: var(--font-primary);
  }
`;

export const Styles = {
  Colors,
  Fonts,
  Root,
};
