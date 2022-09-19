import { createContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@globalStyles';
import { DEFAULT as DEFAULT_THEME } from '@globalStyles/themes/default';

import type { iLayoutContext } from './iLayoutContext';

export const LayoutContext = createContext<iLayoutContext>(
  {} as iLayoutContext,
);

interface LayoutProviderProps {
  children: React.ReactNode;
}

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [currWidth, setCurrWidth] = useState(0);

  useEffect(() => {
    setCurrWidth(window.innerWidth);
    window.addEventListener('resize', () => setCurrWidth(window.innerWidth));
    return () => window.removeEventListener('resize', () => setCurrWidth(0));
  }, []);

  const contextValue = useMemo(
    () => ({ currTheme: DEFAULT_THEME, currWidth }),
    [currWidth],
  );

  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <GlobalStyles.ColorsS />
      <GlobalStyles.FontsS />
      <GlobalStyles.RootS />

      <LayoutContext.Provider value={contextValue}>
        {children}
      </LayoutContext.Provider>
    </ThemeProvider>
  );
};
