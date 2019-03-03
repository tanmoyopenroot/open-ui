import * as colors from '../colors';
import {
  ITextPalette,
  IIntentPalette,
  IBackgroundPalette,
  IPaletteOptions,
  themeType,
} from './props';

const textPalette: ITextPalette = {
  mutated: {
    light: '#8898aa',
    dark: colors.White.default,
  },
  default: {
    light: '#525f7f',
    dark: 'rgba(255, 255, 255, 0.7)',
  },
};

const intentPalette: IIntentPalette = {
  primary: {
    light: '#5e72e4',
    dark: colors.Indigo[700],
  },
  info: {
    light: '#11cdef',
    dark: colors.Pink.A700,
  },
  success: {
    light: '#2dce89',
    dark: 'rgba(255, 255, 255, 0.5)',
  },
  warning: {
    light: '#fb6340',
    dark: colors.Red[700],
  },
  error: {
    light: '#f5365c',
    dark: colors.Red[700],
  },
  default: {
    light: '#212529',
    dark: 'rgba(255, 255, 255, 0.5)',
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
  type: themeType.light,
};

export default defaultPalette;
