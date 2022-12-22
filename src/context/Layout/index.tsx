import { createContext } from 'react';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

import { LayoutStyled } from './styles';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME, SHARED_THEME } from 'styles/global/themes';
import { Styles } from 'styles/global';

export const LayoutContext = createContext({});

export const LayoutProvider: BTypes.FC = ({ children }) => {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <Styles.Colors />
      <Styles.Fonts />
      <Styles.Root />

      <LayoutContext.Provider value={{}}>
        <LayoutStyled className={SHARED_THEME.fonts.fontPrimary.variable}>
          <Header.Root />
          <main className="content">{children}</main>
          <Footer.Root />
        </LayoutStyled>
      </LayoutContext.Provider>
    </ThemeProvider>
  );
};
