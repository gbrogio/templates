import { createGlobalStyle } from 'styled-components';

const ColorsS = createGlobalStyle``;
const FontS = createGlobalStyle``;
const RootS = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

export const GlobalStyles = {
  ColorsS,
  FontS,
  RootS,
};
