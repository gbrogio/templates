import type { NextFontWithVariable } from '@next/font/dist/types';

export type SharedTheme = {
  fonts: {
    fontPrimary: NextFontWithVariable;
    sizes: {
      xs: '12px';
      sm: '14px';
      md: '16px';
      lg: '18px';
      xl: '24px';
      '2xl': '32px';
    };
  };
};

export type Theme = SharedTheme & {
  colors: {
    primary: string;

    gray: {
      100: string;
      500: string;
      600: string;
      800: string;
      900: string;
    };
  };
};
