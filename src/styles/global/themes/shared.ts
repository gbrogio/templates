import { Inter } from '@next/font/google';

const inter = Inter({
  variable: '--font-primary',
});

export const SHARED_THEME = {
  fonts: {
    fontPrimary: inter,
    sizes: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '24px',
      '2xl': '32px',
    },
  },
};
