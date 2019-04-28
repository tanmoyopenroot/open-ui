import * as colors from '../colors';

export enum ThemeType {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface IPalette {
  colors: typeof colors;
  line: string;
  disabled: string;
  icon: string;
  background: {
    paper: string;
    default: string;
  };
  intent: {
    primary: string;
    info: string;
    success: string;
    warning: string;
    error: string;
    default: string;
  };
  text: {
    mutated: string;
    default: string;
  };
}

export interface ITextPalette {
  mutated: {
    light: string;
    dark: string;
  };
  default: {
    light: string;
    dark: string;
  };
}

export interface IIntentPalette {
  primary: {
    light: string;
    dark: string;
  };
  info: {
    light: string;
    dark: string;
  };
  success: {
    light: string;
    dark: string;
  };
  warning: {
    light: string;
    dark: string;
  };
  error: {
    light: string;
    dark: string;
  };
  default: {
    light: string;
    dark: string;
  };
}

export interface IBackgroundPalette {
  paper: {
    light: string;
    dark: string;
  };
  default: {
    light: string;
    dark: string;
  };
}

export interface IPaletteOptions {
  background: IBackgroundPalette;
  intent: IIntentPalette;
  text: ITextPalette;
  line: {
    light: string;
    dark: string;
  };
  disabled: {
    light: string;
    dark: string;
  };
  icon: {
    light: string;
    dark: string;
  };
}
