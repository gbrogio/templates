import { SHARED_THEME, DEFAULT_THEME } from 'styles/global/themes';

export type SharedTheme = typeof SHARED_THEME;

export type Theme = SharedTheme & Omit<typeof DEFAULT_THEME, keyof SharedTheme>;
