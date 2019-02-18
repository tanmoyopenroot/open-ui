import * as React from 'react';
import { IThemeOptions } from './createTheme';
import createTheme, { ITheme } from 'theme/createTheme';

declare global {
  interface Window {
    __theme__: ITheme;
  }
}

export const createThemeStore = (options?: IThemeOptions) => {
  const theme = createTheme(options);
  window.__theme__ = theme;
};
