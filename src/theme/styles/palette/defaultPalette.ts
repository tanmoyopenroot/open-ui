import * as colors from '../colors';
import {
  IActionPalette,
  ITextPalette,
  IPaletteOptions,
  themeType,
} from './props';

const actionPalette: IActionPalette = {
  action: {
    active: {
      light: 'rgba(0, 0, 0, 0.54)',
      dark: colors.White.default,
    },
    hover: {
      light: 'rgba(0, 0, 0, 0.08)',
      dark: 'rgba(255, 255, 255, 0.1)',
    },
    selected: {
      light: 'rgba(0, 0, 0, 0.14)',
      dark:  'rgba(255, 255, 255, 0.2)',
    },
    disabled: {
      light: 'rgba(0, 0, 0, 0.26)',
      dark: 'rgba(255, 255, 255, 0.3)',
    },
    disabledBackground: {
      light: 'rgba(0, 0, 0, 0.12)',
      dark: 'rgba(255, 255, 255, 0.12)',
    },
  },
};

const textPalette: ITextPalette = {
  text: {
    primary: {
      light: 'rgba(0, 0, 0, 0.87)',
      dark: colors.White.default,
    },
    secondary: {
      light: 'rgba(0, 0, 0, 0.54)',
      dark: 'rgba(255, 255, 255, 0.7)',
    },
    disabled: {
      light: 'rgba(0, 0, 0, 0.38)',
      dark: 'rgba(255, 255, 255, 0.5)',
    },
    hint: {
      light: 'rgba(0, 0, 0, 0.38)',
      dark: 'rgba(255, 255, 255, 0.5)',
    },
    icon: {
      light: 'rgba(0, 0, 0, 0.38)',
      dark: 'rgba(255, 255, 255, 0.5)',
    },
  },
};

const defaultPalette: IPaletteOptions = {
  primary: {
    light: colors.Indigo[300],
    dark: colors.Indigo[700],
  },
  secondary: {
    light: colors.Pink.A200,
    dark: colors.Pink.A700,
  },
  error: {
    light: colors.Red[300],
    dark: colors.Red[700],
  },
  success: {
    light: 'rgba(0, 0, 0, 0.38)',
    dark: 'rgba(255, 255, 255, 0.5)',
  },
  default: {
    light: 'rgba(0, 0, 0, 0.38)',
    dark: 'rgba(255, 255, 255, 0.5)',
  },
  divider: {
    light: 'rgba(0, 0, 0, 0.12)',
    dark: 'rgba(255, 255, 255, 0.12)',
  },
  background: {
    light: colors.White.default,
    dark: colors.Grey[800],
  },
  disabled: {
    light: 'rgba(0, 0, 0, 0.38)',
    dark: 'rgba(255, 255, 255, 0.5)',
  },
  hint: {
    light: 'rgba(0, 0, 0, 0.38)',
    dark: 'rgba(255, 255, 255, 0.5)',
  },
  icon: {
    light: 'rgba(0, 0, 0, 0.38)',
    dark: 'rgba(255, 255, 255, 0.5)',
  },
  action: actionPalette.action,
  text: textPalette.text,
  type: themeType.light,
};

export default defaultPalette;
