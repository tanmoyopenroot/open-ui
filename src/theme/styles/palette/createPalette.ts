import darkPalette from './darkPalette';
import lightPalette from './lightPalette';
import defaultPalette from './defaultPalette';
import {
  themeType,
  IPaletteOptions,
} from './props';

export const createPalette = (options: IPaletteOptions = defaultPalette) => {
  const { type } = options;

  return type === themeType.light ?
    lightPalette(options) :
    darkPalette(options);
};
