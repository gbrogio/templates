import type { Theme } from 'types/Theme';
import { SHARED_THEME } from './shared';

export const DEFAULT_THEME: Theme = {
  ...SHARED_THEME,

  colors: {
    primary: '231, 138, 000', // #E78A00
    gray: {
      100: '255, 255, 255', // #FFFFFF
      500: '048, 048, 048', // #303030
      600: '042, 042, 042', // #2A2A2A
      800: '043, 043, 043', // #2B2B2B
      900: '034, 034, 034', // #222222
    },
  },
};
