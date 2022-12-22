import { createGlobalStyle } from 'styled-components';

const Colors = createGlobalStyle`
  :root {}
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
`;

export const Styles = {
  Colors,
  Fonts,
  Root,
};
