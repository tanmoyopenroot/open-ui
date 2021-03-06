import * as colors from '../colors';
import {
  ITextPalette,
  IIntentPalette,
  IBackgroundPalette,
  IPaletteOptions,
} from './props';

const textPalette: ITextPalette = {
  mutated: {
    light: '#fff',
    dark: colors.White.default,
  },
  default: {
    light: '#212529',
    dark: 'rgba(255, 255, 255, 0.7)',
  },
};

const intentPalette: IIntentPalette = {
  primary: {
    light: '#5e72e4',
    dark: '#5e72e4',
  },
  info: {
    light: '#11cdef',
    dark: '#11cdef',
  },
  success: {
    light: '#2dce89',
    dark: '#2dce89',
  },
  warning: {
    light: '#fb6340',
    dark: '#fb6340',
  },
  error: {
    light: '#f5365c',
    dark: '#f5365c',
  },
  default: {
    light: '#212529',
    dark: '#212529',
  },
};

const backgroundPalette: IBackgroundPalette = {
  paper: {
    light: '#fff',
    dark: colors.Grey[800],
  },
  default: {
    light: '#f4f5f7',
    dark: '#303030',
  },
};

const defaultPalette: IPaletteOptions = {
  background: backgroundPalette,
  intent: intentPalette,
  text: textPalette,
  line: {
    light: '#cad1d7',
    dark: 'rgba(255, 255, 255, 0.12)',
  },
  disabled: {
    light: '#e9ecef',
    dark: 'rgba(255, 255, 255, 0.5)',
  },
  icon: {
    light: '#adb5bd',
    dark: 'rgba(255, 255, 255, 0.5)',
  },
};

export default defaultPalette;
