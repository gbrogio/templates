import { createGlobalStyle } from 'styled-components';

const ColorsS = createGlobalStyle`
  :root {}
`;
const FontsS = createGlobalStyle`
  :root {}
`;
const RootS = createGlobalStyle`
  :root {}

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

export const GlobalStyles = {
  ColorsS,
  FontsS,
  RootS,
};
