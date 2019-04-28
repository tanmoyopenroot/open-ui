import darkPalette from './darkPalette';
import lightPalette from './lightPalette';
import defaultPalette from './defaultPalette';
import {
  ThemeType,
  IPaletteOptions,
} from './props';

export const createPalette = (options: IPaletteOptions = defaultPalette, defaultTheme: ThemeType) =>
  defaultTheme === ThemeType.LIGHT
    ? lightPalette(options)
    : darkPalette(options);
